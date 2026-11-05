import { useState } from "react";
import { EXPERTISE } from "../data.js";
import SignalText from "./SignalText.jsx";
import { Plus } from "./Icons.jsx";

export default function Expertise() {
  const [open, setOpen] = useState(0);
  const [lastOpen, setLastOpen] = useState(0);
  const cur = EXPERTISE[open >= 0 ? open : lastOpen];

  return (
    <section id="expertise" className="expertise chapter">
      <div className="section-label">
        <span>03 / HOW I THINK &amp; WORK</span>
        <span>DEPTH MEETS PERSPECTIVE</span>
      </div>
      <div className="expertise-grid">
        <div className="expertise-intro" data-reveal>
          <h2>How I work.<br /><em>From idea to impact.</em></h2>
          <p className="muted">Choose a discipline. Follow the thinking.</p>
          <div className="thinking-path" aria-live="polite">
            <span className="eyebrow"><SignalText>{cur.eyebrow.split(" / ")[1]}</SignalText></span>
            <ol key={open >= 0 ? open : lastOpen}>
              {cur.path.map((step, i) => (
                <li key={step} style={{ animationDelay: `${i * 70}ms` }}><span>0{i + 1}</span>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="expertise-list">
          {EXPERTISE.map((e, i) => (
            <article key={e.title} className={`expertise-item${open === i ? " expanded" : ""}`}>
              <h3>
                <button aria-expanded={open === i} aria-controls={`expertise-${i}`} onClick={() => { setLastOpen(i); setOpen(open === i ? -1 : i); }}>
                  <span>
                    <small className="eyebrow"><SignalText>{e.eyebrow}</SignalText></small>
                    <SignalText>{e.title}</SignalText>
                  </span>
                  <Plus />
                </button>
              </h3>
              <div id={`expertise-${i}`} className="expertise-body" role="region">
                <div>
                  <p>{e.body}</p>
                  <p className="strengths">{e.strengths}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
