import { IMPACT } from "../data.js";
import { INSTAGRAM } from "../constants.js";
import SignalText from "./SignalText.jsx";
import { ArrowUpRight } from "./Icons.jsx";

export default function Impact() {
  const { lead, pair, milestones } = IMPACT;
  return (
    <section id="impact" className="impact chapter">
      <div className="section-label">
        <span><SignalText>04 / THE WORK, MULTIPLIED</SignalText></span>
        <span>PEOPLE. LANGUAGE. POSSIBILITY.</span>
      </div>
      <div className="split-heading" data-editorial-reveal>
        <h2>Reach is a number.<br /><em>Impact is personal.</em></h2>
        <p>Every reel, class and workshop<br />is a chance to move someone forward —<br />in the language they dream in.</p>
      </div>

      <div className="impact-lead">
        <div className="impact-value">
          <span data-count={lead.value}>{lead.value}</span><em>{lead.suffix}</em>
        </div>
        <div className="impact-context" data-reveal>
          <h3>{lead.title[0]}<br />{lead.title[1]}</h3>
          <p>{lead.body}</p>
          <a className="text-link" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22 }}>
            The page behind the number <ArrowUpRight />
          </a>
        </div>
      </div>

      <div className="impact-pair">
        {pair.map((p) => (
          <div key={p.title} data-editorial-reveal>
            <strong><span data-count={p.value} data-decimals={p.decimals || 0}>{p.value}</span><em>{p.suffix}</em></strong>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
        <div className="impact-principle" data-editorial-reveal>
          <span className="eyebrow">THE COMMON THREAD</span>
          <p>Learn it deeply.<br />Explain it simply.<br /><em>Put it to work.</em></p>
        </div>
      </div>

      <div className="brand-story" data-editorial-reveal>
        <div className="brand-story-heading">
          <span className="eyebrow">FROM PIPELINES / TO PEOPLE</span>
          <h3>From the server room.<br /><em>To a community people trust.</em></h3>
          <p>
            Four years in enterprise cloud taught me how real systems are built and kept alive. In 2026 I started
            sharing what I was learning about AI — in Kannada, every day — and a community formed around it. That
            community is now <strong className="copy-highlight">a verified page, a studio and a classroom</strong>.
          </p>
        </div>
        <div className="milestones">
          {milestones.map((m) => (
            <div key={m.year}>
              <span>{m.year}</span>
              <p><b>{m.bold}</b> {m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
