/*
 * ============================================================
 *  Vinod Achar — personal portfolio (single page)
 *  Copy & numbers: src/data.js  ·  Links: src/constants.js
 *  Motion: src/lib/motion.js (GSAP + ScrollTrigger + Lenis)
 *  Portrait: drop a black & white photo at
 *            public/images/vinod-portrait.jpg
 * ============================================================
 */
import { useEffect, useState } from "react";
import { useSiteMotion } from "./lib/motion.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Work from "./components/Work.jsx";
import Business from "./components/Business.jsx";
import Expertise from "./components/Expertise.jsx";
import Impact from "./components/Impact.jsx";
import Content from "./components/Content.jsx";
import MLOps from "./components/MLOps.jsx";
import { Community, Journey } from "./components/Community.jsx";
import Contact from "./components/Contact.jsx";
import { Motion } from "./components/Icons.jsx";

export default function App() {
  const [motion, setMotion] = useState(() => document.documentElement.dataset.motion !== "off");

  useEffect(() => {
    document.documentElement.dataset.motion = motion ? "on" : "off";
  }, [motion]);

  useSiteMotion(motion);

  const toggle = () => {
    setMotion((m) => {
      try { localStorage.setItem("motion", m ? "off" : "on"); } catch (e) { /* storage blocked */ }
      return !m;
    });
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero motion={motion} />
        <About motion={motion} />
        <Work />
        <Expertise />
        <MLOps />
        <Impact />
        <Content />
        <Community />
        <Business />
        <Journey />
        <Contact />
      </main>
      <button
        className="motion-toggle"
        aria-pressed={motion}
        aria-label={motion ? "Motion on — turn animations off" : "Motion off — turn animations on"}
        onClick={toggle}
      >
        <Motion /> <span>MOTION {motion ? "ON" : "OFF"}</span>
      </button>
    </>
  );
}
