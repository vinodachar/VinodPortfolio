import { useEffect, useRef, useState } from "react";
import { PORTRAIT, PROOF } from "../data.js";
import { scrollToTarget } from "../lib/motion.js";
import SignalText from "./SignalText.jsx";
import { ArrowDown, ArrowUpRight } from "./Icons.jsx";

/** Drifting light dust over the portrait — sells the "signal" mood. */
function Dust({ animate }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!animate) return;
    const c = ref.current;
    const ctx = c.getContext("2d");
    let w, h, raf, visible = true;
    const motes = Array.from({ length: 46 }, () => ({
      x: Math.random(), y: Math.random(), r: Math.random() * 1.3 + 0.3,
      v: Math.random() * 0.012 + 0.004, p: Math.random() * Math.PI * 2,
    }));
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = c.offsetWidth; h = c.offsetHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (visible) {
        ctx.clearRect(0, 0, w, h);
        // slow scan band
        const band = ((now / 9000) % 1.3) * h - 0.15 * h;
        const g = ctx.createLinearGradient(0, band - 60, 0, band + 60);
        g.addColorStop(0, "rgba(255,170,120,0)");
        g.addColorStop(0.5, "rgba(255,170,120,0.06)");
        g.addColorStop(1, "rgba(255,170,120,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, band - 60, w, 120);
        for (const m of motes) {
          m.y -= m.v * dt * 6;
          m.p += dt;
          if (m.y < -0.02) { m.y = 1.02; m.x = Math.random(); }
          const a = 0.25 + Math.sin(m.p * 1.7) * 0.2;
          ctx.fillStyle = `rgba(241,228,210,${a})`;
          ctx.beginPath();
          ctx.arc(m.x * w + Math.sin(m.p) * 6, m.y * h, m.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    resize();
    raf = requestAnimationFrame(tick);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(c);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", resize); };
  }, [animate]);
  return <canvas ref={ref} aria-hidden="true" />;
}

export default function Hero({ motion }) {
  const [hasPhoto, setHasPhoto] = useState(true);
  const go = (e, href) => { e.preventDefault(); scrollToTarget(href); };

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-backdrop" aria-hidden="true">
          <div className="portrait">
            <div className="portrait-inner">
              {hasPhoto ? (
                <img
                  src={PORTRAIT}
                  alt=""
                  width="1000"
                  height="1250"
                  fetchpriority="high"
                  onError={() => setHasPhoto(false)}
                />
              ) : (
                <div className="artifact"><i /><i /><i /></div>
              )}
              <Dust animate={motion} />
            </div>
          </div>
        </div>
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-topline">
          <span><i className="live-dot" /> CREATOR. EDUCATOR. ENGINEER.</span>
          <span>BASED IN BENGALURU · SPEAKING KANNADA</span>
        </div>

        <div className="hero-side-note" aria-hidden="true">
          <span>01 / PRESENCE</span>
          <span>CONTENT<br />COMMUNITY<br />CLOUD &amp; MLOPS</span>
        </div>
        <div className="hero-side-note hero-side-right" aria-hidden="true">
          <span>@AI.WITH.VI_</span>
          <span>VERIFIED<br />45.7K FOLLOWERS<br />DAILY AI IN KANNADA</span>
        </div>

        <div className="hero-content">
          <span className="hero-kicker"><SignalText>AI, MADE SIMPLE — IN KANNADA</SignalText></span>
          <h1>
            <span className="line-mask"><span className="reveal-line">Vinod <em>Achar</em></span></span>
          </h1>
          <div className="hero-description">
            <p>
              I make AI simple for Kannada speakers,<br className="desktop-break" /> and put it to work for businesses.
            </p>
            <div className="hero-actions">
              <a className="pill-link" href="#work" onClick={(e) => go(e, "#work")}>
                <SignalText>Explore my work</SignalText> <ArrowDown />
              </a>
              <a className="text-link" href="#contact" onClick={(e) => go(e, "#contact")}>
                <SignalText>Start a conversation</SignalText> <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <a href="#about" onClick={(e) => go(e, "#about")}>
            <span className="scroll-line" /> SCROLL TO DISCOVER <ArrowDown size={12} />
          </a>
          <span>ENGINEERING SINCE 2022 · CREATING SINCE 2026</span>
          <span className="hero-edition">AN ONGOING EXPLORATION ↗</span>
        </div>
      </section>

      <section className="proof-strip" aria-label="Highlights">
        {PROOF.map((p) => (
          <div key={p.label}>
            <strong>
              <span style={{ color: "inherit" }} data-count={p.value} data-decimals={p.decimals}>
                {p.value.toFixed(p.decimals)}
              </span>
              <span>{p.suffix}</span>
            </strong>
            <p>{p.label}</p>
          </div>
        ))}
        <a href="#impact" onClick={(e) => go(e, "#impact")}>
          <span>THE CONTENT.<br />THE REAL-WORLD IMPACT.</span>
          <ArrowUpRight />
        </a>
      </section>
    </>
  );
}
