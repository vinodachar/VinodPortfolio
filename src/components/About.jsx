import { useState } from "react";
import { PERSPECTIVES } from "../data.js";
import { scrollToTarget } from "../lib/motion.js";
import SignalCanvas from "./SignalCanvas.jsx";
import SignalText from "./SignalText.jsx";
import { ArrowUpRight } from "./Icons.jsx";

export default function About({ motion }) {
  const [i, setI] = useState(0);
  const p = PERSPECTIVES[i];

  return (
    <section id="about" className="about chapter">
      <div className="section-label">
        <span>01 / THE PERSON BEHIND THE CONTENT</span>
        <span>ONE ENGINEER. THREE CONVERSATIONS.</span>
      </div>

      <div className="about-grid">
        <div className="signal-explorer">
          <div className="signal-topline">
            <span>THREE DISCIPLINES. ONE PERSPECTIVE.</span>
            <span aria-hidden="true">0{i + 1} / 03</span>
          </div>
          <div className="signal-visual">
            <SignalCanvas shape={p.shape} animate={motion} />
            <span className="signal-center-label"><SignalText>{p.word}</SignalText></span>
          </div>
          <div className="signal-options" role="group" aria-label="Explore my disciplines">
            {PERSPECTIVES.map((o, idx) => (
              <button key={o.key} aria-pressed={idx === i} onClick={() => setI(idx)}>
                {o.label}<span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <div className="signal-story" aria-live="polite" key={p.key}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <a className="text-link" href={p.link.href} onClick={(e) => { e.preventDefault(); scrollToTarget(p.link.href); }}>
              {p.link.text} <ArrowUpRight />
            </a>
          </div>
          <p className="signal-hint">Choose a perspective.</p>
        </div>

        <div className="about-copy" data-reveal>
          <h2>AI is the tool.<br /><em>People are the point.</em></h2>
          <p className="lead">I connect content, community and engineering.</p>
          <p>
            By day I build and run cloud infrastructure. The rest of the time I’m turning the newest AI into
            something a Kannada speaker can use tomorrow — on <strong className="copy-highlight">@ai.with.vi_</strong>,
            through <strong className="copy-highlight">VV Labs</strong>, and in workshops with the business
            communities I teach.
          </p>
          <a className="text-link" href="#journey" onClick={(e) => { e.preventDefault(); scrollToTarget("#journey"); }}>
            Read my story <ArrowUpRight />
          </a>
          <div className="identity-notes">
            <span>ENGINEER’S MIND.</span>
            <span>CREATOR’S VOICE.</span>
            <span>TEACHER’S PATIENCE.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
