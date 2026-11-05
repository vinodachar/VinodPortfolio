import { MLOPS_PIPELINE, MLOPS_TRACK } from "../data.js";
import SignalText from "./SignalText.jsx";

const STATUS = { done: "IN PRODUCTION", now: "LEARNING NOW", next: "UP NEXT" };
const GLYPH = ["∂", "∑", "◎", "□", "↗", "∿"];

export default function MLOps() {
  return (
    <section id="mlops" className="mlops chapter">
      <div className="section-label">
        <span><SignalText>03 · ENGINEERING / LEARNING IN PUBLIC</SignalText></span>
        <span>FROM DEVOPS TO MLOPS</span>
      </div>
      <div className="split-heading" data-editorial-reveal>
        <h2>From shipping code.<br /><em>To shipping models.</em></h2>
        <p>
          I’ve spent four years automating how software is built,<br />
          deployed and kept alive. Now I’m extending that same<br />
          discipline to machine learning — and sharing it as I go.
        </p>
      </div>

      <div className="pipeline" aria-label="The MLOps lifecycle" data-stagger>
        {MLOPS_PIPELINE.map((s, i) => (
          <div className="stage" key={s}>
            <span aria-hidden="true">{GLYPH[i]}</span>
            <small>0{i + 1} · {s}</small>
          </div>
        ))}
        <i className="pulse" aria-hidden="true" />
      </div>

      <div className="track" data-stagger>
        {MLOPS_TRACK.map((t) => (
          <article key={t.title} className={t.status}>
            <span className="status"><i />{STATUS[t.status]}</span>
            <div>
              <h3>{t.title}</h3>
              <p>{t.items}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mlops-note">
        The DevOps foundation is production experience from Infosys and Capgemini. The MLOps track is in progress —
        I’ll be updating this section as each stage moves from learning to shipped.
      </p>
    </section>
  );
}
