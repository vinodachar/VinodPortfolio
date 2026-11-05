import { useEffect, useState } from "react";
import { NAV } from "../data.js";
import { scrollToTarget } from "../lib/motion.js";
import SignalText from "./SignalText.jsx";
import { ArrowUpRight, Plus } from "./Icons.jsx";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(href);
  };

  return (
    <header className="nav" data-hidden="false">
      <a className="wordmark" href="#top" onClick={(e) => go(e, "#top")} aria-label="Vinod Achar — back to top">
        <span>Vinod Achar</span>
        <small>AI · COMMUNITY · CLOUD</small>
      </a>
      <nav id="main-nav" className={`nav-links${open ? " is-open" : ""}`} aria-label="Main navigation">
        {NAV.map((n) => (
          <a
            key={n.href}
            className="nav-destination"
            href={n.href}
            aria-current={active === n.href.slice(1) ? "true" : undefined}
            onClick={(e) => go(e, n.href)}
          >
            <SignalText>{n.label}</SignalText>
            <span className="nav-mobile-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={(e) => go(e, "#contact")}>
          <SignalText>Let’s talk</SignalText>
          <ArrowUpRight />
        </a>
      </nav>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <Plus size={16} />
      </button>
    </header>
  );
}
