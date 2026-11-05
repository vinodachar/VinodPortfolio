import { WORK, WORK_MORE } from "../data.js";
import { scrollToTarget } from "../lib/motion.js";
import SignalText from "./SignalText.jsx";
import { ArrowUpRight } from "./Icons.jsx";

function Art() {
  return (
    <div className="art art-business">
      <span className="biz-title">AI for <em>business.</em></span>
      <ol>
        <li><b>01</b>WEBINARS FOR COMMUNITIES</li>
        <li><b>02</b>HANDS-ON WORKSHOPS</li>
        <li><b>03</b>COURSES — IN THE MAKING</li>
      </ol>
    </div>
  );
}

const isExternal = (href) => href.startsWith("http");
const linkProps = (href) =>
  isExternal(href)
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href, onClick: (e) => { e.preventDefault(); scrollToTarget(href); } };

export default function Work() {
  return (
    <>
      <section id="work" className="selected-work chapter">
        <div className="section-label">
          <span><SignalText>02 / SELECTED WORK</SignalText></span>
          <span>BUILT. TAUGHT. PUT INTO THE WORLD.</span>
        </div>
        <div className="split-heading" data-editorial-reveal>
          <h2>Ideas are a start.<br /><em>This is the work.</em></h2>
          <p>Workshops, webinars and software —<br />practical AI for the people<br />who run businesses.</p>
        </div>

        <div className="work-gallery">
          {WORK.map((w, i) => (
            <article key={w.id} className={`work-piece${i === 0 ? " featured" : ""}`} data-editorial-reveal>
              <a className="work-artwork" aria-label={`Explore ${w.title}`} {...linkProps(w.href)}>
                <div className="project-visual">
                  {w.bar && (
                    <div className="work-browser-bar"><span><i /><i /><i /></span><span>{w.bar}</span><span>↗</span></div>
                  )}
                  <Art />
                  {w.label && (
                    <div className="work-artifact-label"><span>{w.label[0]}</span><span>{w.label[1]}</span></div>
                  )}
                </div>
                <span className="work-artwork-arrow"><ArrowUpRight size={18} /></span>
              </a>
              <div className="work-caption">
                <span className="work-number">0{i + 1}</span>
                <div>
                  <span className="eyebrow">{w.eyebrow}</span>
                  <h3><a {...linkProps(w.href)}>{w.title}</a></h3>
                  <p>{w.body}</p>
                </div>
                <a className="text-link" {...linkProps(w.href)}>{w.linkText} <ArrowUpRight /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="work-more" data-editorial-reveal>
          <span className="eyebrow">MORE WAYS I BUILD FOR BUSINESSES</span>
          {WORK_MORE.map((m) => (
            <a key={m.title} {...linkProps(m.href)}>
              <span><small>{m.small}</small>{m.title}{m.tag && <span className="tag">{m.tag}</span>}</span>
              <ArrowUpRight size={22} />
            </a>
          ))}
        </div>
      </section>

      <div className="chapter-index">
        {[
          ["#expertise", "How I work & MLOps"],
          ["#content", "Content & films"],
          ["#community", "Speaking & community"],
          ["#business", "AI for business"],
        ].map(([href, label]) => (
          <a key={href} href={href} onClick={(e) => { e.preventDefault(); scrollToTarget(href); }}>{label} ↗</a>
        ))}
      </div>
    </>
  );
}
