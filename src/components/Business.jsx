import { BUSINESS_FORMATS } from "../data.js";
import { WHATSAPP } from "../constants.js";
import SignalText from "./SignalText.jsx";
import { ArrowUpRight } from "./Icons.jsx";

export default function Business() {
  return (
    <section id="business" className="business chapter">
      <div className="section-label">
        <span><SignalText>06 · BUSINESS / AI FOR BUSINESS</SignalText></span>
        <span>WEBINARS. WORKSHOPS. COURSES SOON.</span>
      </div>
      <div className="split-heading" data-editorial-reveal>
        <h2>Founders don’t need hype.<br /><em>They need a system.</em></h2>
        <div>
          <p>I work with business communities to make AI<br />useful on Monday morning — leads, follow-ups,<br />content and sales, in the language they think in.</p>
        </div>
      </div>

      <div className="business-formats" data-stagger>
        {BUSINESS_FORMATS.map((f) => (
          <article className="format" key={f.n}>
            <span className="num">{f.n}</span>
            <span className="eyebrow">{f.eyebrow}</span>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
            <p className="strengths">{f.strengths}</p>
          </article>
        ))}
      </div>

      <div className="business-cta" data-editorial-reveal>
        <p>Run a founder group, MSME network or business association?<br /><em>Let’s bring AI to your next meetup.</em></p>
        <a className="text-link" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Book a webinar or workshop <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
