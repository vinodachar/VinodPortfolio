import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

/** Smooth-scroll to an in-page target, with Lenis when it's running. */
export function scrollToTarget(hash) {
  const el = hash === "#top" ? document.body : document.querySelector(hash);
  if (!el) return;
  if (lenis) lenis.scrollTo(hash === "#top" ? 0 : el, { offset: -20, duration: 1.4 });
  else el.scrollIntoView({ behavior: document.documentElement.dataset.motion === "off" ? "auto" : "smooth" });
}

/** Count a number up from 0 when it scrolls into view. */
function countUp(el) {
  const to = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const obj = { v: 0 };
  gsap.to(obj, {
    v: to,
    duration: 1.8,
    ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 92%", once: true },
    onUpdate: () => (el.textContent = obj.v.toFixed(decimals)),
  });
}

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * All page choreography lives here so components stay declarative.
 * When motion is off, nothing is hidden or transformed — content is
 * always readable without JS animation.
 */
export function useSiteMotion(enabled) {
  // Scroll progress + nav hide/show run regardless (cheap, no motion sickness).
  useEffect(() => {
    const bar = document.querySelector(".scroll-progress");
    const nav = document.querySelector(".nav");
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      if (nav) {
        const menuOpen = nav.querySelector(".nav-links.is-open");
        const hide = y > 220 && y > lastY + 4 && !menuOpen;
        if (hide) nav.dataset.hidden = "true";
        else if (y < lastY - 4 || y < 220) nav.dataset.hidden = "false";
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useIso(() => {
    if (!enabled) {
      // Make sure counters show their final values.
      document.querySelectorAll("[data-count]").forEach((el) => {
        el.textContent = parseFloat(el.dataset.count).toFixed(parseInt(el.dataset.decimals || "0", 10));
      });
      return;
    }

    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // Hero intro
      gsap.fromTo(
        ".hero .reveal-line",
        { yPercent: 105, filter: "blur(5px)" },
        { yPercent: 0, filter: "blur(0px)", duration: 1.25, stagger: 0.12, ease: "power4.out", delay: 0.15, clearProps: "transform,filter" }
      );
      gsap.fromTo(
        [".hero-kicker", ".hero-description > p", ".hero-actions"],
        { filter: "blur(4px)", y: 10, opacity: 0 },
        { filter: "blur(0px)", y: 0, opacity: 1, duration: 0.9, stagger: 0.1, delay: 0.45, ease: "power2.out", clearProps: "filter,transform,opacity" }
      );
      gsap.fromTo(
        [".hero-topline", ".hero-bottom", ".hero-side-note"],
        { opacity: 0 },
        { opacity: 1, duration: 1.2, delay: 0.9, ease: "power1.out", clearProps: "opacity" }
      );
      gsap.fromTo(".portrait", { opacity: 0, scale: 1.04 }, { opacity: 0.88, scale: 1, duration: 1.8, ease: "power2.out", clearProps: "scale" });

      // Hero content drifts up & fades as you leave
      gsap.to(".hero-content", {
        y: -65, opacity: 0.35, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "25% top", end: "bottom top", scrub: 1 },
      });
      gsap.to(".portrait-inner", {
        yPercent: 8, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
      });

      // Generic reveals
      gsap.utils.toArray("[data-reveal]").forEach((el) =>
        gsap.fromTo(el, { y: 35, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out", clearProps: "transform,opacity",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        })
      );
      gsap.utils.toArray("[data-editorial-reveal]").forEach((el) =>
        gsap.fromTo(el, { y: 32 }, {
          y: 0, duration: 0.85, ease: "power3.out", clearProps: "transform",
          scrollTrigger: { trigger: el, start: "top 94%", once: true },
        })
      );
      // Section headings: masked line rise
      gsap.utils.toArray(".chapter h2").forEach((el) =>
        gsap.fromTo(el, { yPercent: 18, opacity: 0, filter: "blur(4px)" }, {
          yPercent: 0, opacity: 1, filter: "blur(0px)", duration: 1.1, ease: "power4.out", clearProps: "transform,opacity,filter",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        })
      );
      // Work artwork opens from a clipped frame
      gsap.utils.toArray(".work-artwork").forEach((el) =>
        gsap.fromTo(el, { clipPath: "inset(6% 3% 6% 3%)" }, {
          clipPath: "inset(0% 0% 0% 0%)", ease: "none", clearProps: "clipPath",
          scrollTrigger: { trigger: el, start: "top 95%", end: "top 45%", scrub: 0.6 },
        })
      );
      // Big impact number slides in
      gsap.utils.toArray(".impact-value").forEach((el) =>
        gsap.fromTo(el, { xPercent: -6, opacity: 0.2 }, {
          xPercent: 0, opacity: 1, ease: "none",
          scrollTrigger: { trigger: el, start: "top 95%", end: "top 50%", scrub: 0.8 },
        })
      );
      // Staggered lists
      gsap.utils.toArray("[data-stagger]").forEach((wrap) =>
        gsap.fromTo(wrap.children, { y: 24, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out", clearProps: "transform,opacity",
          scrollTrigger: { trigger: wrap, start: "top 88%", once: true },
        })
      );
      document.querySelectorAll("[data-count]").forEach(countUp);
    });

    // Pointer parallax on the portrait (desktop only)
    mm.add("(hover: hover) and (min-width: 901px)", () => {
      const target = document.querySelector(".portrait-inner");
      if (!target) return;
      const xTo = gsap.quickTo(target, "x", { duration: 1.2, ease: "power3.out" });
      const rTo = gsap.quickTo(target, "rotateY", { duration: 1.2, ease: "power3.out" });
      const onMove = (e) => {
        const px = e.clientX / window.innerWidth - 0.5;
        xTo(px * 22);
        rTo(px * 4);
      };
      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    });

    // Fonts can shift layout — recalc trigger positions once loaded.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      mm.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenis = null;
    };
  }, [enabled]);
}
