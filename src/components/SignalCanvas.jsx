import { useEffect, useRef } from "react";

/**
 * Lightweight 2D "signal" field. Particles morph between three shapes:
 *  - ripples:       concentric breathing circles  (reach)
 *  - structure:     nested rotating squares        (teaching / structure)
 *  - constellation: crossing orbits with links     (systems)
 * Pauses offscreen; renders a single static frame when motion is off.
 */
const RINGS = 5;

function targetFor(shape, ring, k, per, t) {
  const r = 0.28 + (ring / (RINGS - 1)) * 0.72;
  const a = (k / per) * Math.PI * 2;
  if (shape === "ripples") {
    const breathe = 1 + Math.sin(t * 1.6 - ring * 0.9) * 0.05;
    const rot = t * 0.08 * (ring % 2 ? 1 : -1);
    return [Math.cos(a + rot) * r * breathe, Math.sin(a + rot) * r * breathe];
  }
  if (shape === "structure") {
    // point on a square perimeter, with a slow Y-axis rotation
    const s = r * 0.9;
    const p = (k / per) * 4;
    const side = Math.floor(p);
    const f = p - side;
    let x, y;
    if (side === 0) [x, y] = [-s + 2 * s * f, -s];
    else if (side === 1) [x, y] = [s, -s + 2 * s * f];
    else if (side === 2) [x, y] = [s - 2 * s * f, s];
    else [x, y] = [-s, s - 2 * s * f];
    const yaw = Math.sin(t * 0.35 + ring * 0.25) * 0.5;
    return [x * Math.cos(yaw), y + x * Math.sin(yaw) * 0.12];
  }
  // constellation — tilted ellipses, particles travel along orbit
  const tilt = (ring % 3 - 1) * 0.75;
  const ang = a + t * (0.12 + ring * 0.03);
  const ex = Math.cos(ang) * r;
  const ey = Math.sin(ang) * r * 0.42;
  return [ex * Math.cos(tilt) - ey * Math.sin(tilt), ex * Math.sin(tilt) + ey * Math.cos(tilt)];
}

export default function SignalCanvas({ shape = "ripples", animate = true }) {
  const ref = useRef(null);
  const shapeRef = useRef(shape);
  shapeRef.current = shape;

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const small = window.matchMedia("(max-width: 700px)").matches;
    const per = small ? 30 : 46;
    const pts = [];
    for (let ring = 0; ring < RINGS; ring++)
      for (let k = 0; k < per; k++) pts.push({ ring, k, x: 0, y: 0, init: false });

    let w = 0, h = 0, scale = 0, raf = 0, visible = true, last = performance.now(), time = 0;
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scale = Math.min(w, h) * 0.42;
    };

    const draw = (dt) => {
      time += dt;
      const s = shapeRef.current;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      for (const p of pts) {
        const [tx, ty] = targetFor(s, p.ring, p.k, per, time);
        let gx = cx + tx * scale, gy = cy + ty * scale;
        // pointer repel
        const dx = gx - pointer.x, dy = gy - pointer.y, d = Math.hypot(dx, dy);
        if (d < 90) { const f = (1 - d / 90) * 26; gx += (dx / (d || 1)) * f; gy += (dy / (d || 1)) * f; }
        if (!p.init) { p.x = gx; p.y = gy; p.init = true; }
        const ease = animate ? 1 - Math.pow(0.0025, dt) : 1;
        p.x += (gx - p.x) * ease;
        p.y += (gy - p.y) * ease;
      }
      // ring strokes
      for (let ring = 0; ring < RINGS; ring++) {
        ctx.beginPath();
        for (let k = 0; k <= per; k++) {
          const p = pts[ring * per + (k % per)];
          k === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(227,184,141,${0.08 + ring * 0.035})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      // constellation links between rings
      if (s === "constellation") {
        ctx.lineWidth = 0.6;
        for (let i = 0; i < pts.length; i += 3) {
          for (let j = i + per; j < pts.length; j += per) {
            const a = pts[i], b = pts[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 46) {
              ctx.strokeStyle = `rgba(255,140,89,${0.22 * (1 - d / 46)})`;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }
          }
        }
      }
      // dots
      for (const p of pts) {
        const glow = (p.k + p.ring * 7) % 11 === 0;
        ctx.fillStyle = glow ? "rgba(255,160,110,0.95)" : "rgba(236,214,190,0.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, glow ? 1.9 : 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (visible) draw(dt);
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (animate) raf = requestAnimationFrame(loop);
    else draw(0);

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    const onResize = () => { resize(); if (!animate) draw(0); };
    window.addEventListener("resize", onResize);
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => { pointer.x = pointer.y = -9999; };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [animate]);

  // static mode: redraw when shape changes
  useEffect(() => {
    if (!animate) window.dispatchEvent(new Event("resize"));
  }, [shape, animate]);

  return <canvas ref={ref} aria-hidden="true" />;
}
