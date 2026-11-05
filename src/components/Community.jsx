import { COMMUNITY, TOPICS, JOURNEY, STAGE_IMAGE } from "../data.js";
import { WHATSAPP, INSTAGRAM } from "../constants.js";
import { scrollToTarget } from "../lib/motion.js";
import SignalText from "./SignalText.jsx";
import { ArrowUpRight, Mic } from "./Icons.jsx";
import { useState } from "react";

export function Community() {
  const [hasImg, setHasImg] = useState(Boolean(STAGE_IMAGE));
  return (
    <section id="community" className="voice chapter">
      <div className="section-label">
        <span><SignalText>06 / FROM IDEAS TO PEOPLE</SignalText></span>
        <span>FROM THE FEED TO THE ROOM</span>
      </div>

      <div className="stage-image" data-reveal>
        <div className="stage-bg">
          {hasImg && <img src={STAGE_IMAGE} alt="Vinod running an AI workshop" loading="lazy" onError={() => setHasImg(false)} />}
          {!hasImg && (
            <div className="stage-rows" aria-hidden="true">
              {Array.from({ length: 7 }, (_, i) => <i key={i} style={{ "--r": i }} />)}
            </div>
          )}
        </div>
        <div className="stage-shade" />
        <div className="stage-copy">
          <span className="eyebrow">A DIFFERENT KIND OF REACH</span>
          <h2>Make it clear.<br />Make it <em>useful.</em></h2>
          <a className="pill-link" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <SignalText>Invite me to speak</SignalText> <ArrowUpRight />
          </a>
        </div>
        <span className="stage-footnote">REAL PEOPLE. REAL QUESTIONS.</span>
      </div>

      <div className="voice-grid">
        <div data-reveal>
          <h3>Sharing what I learn.<br />Opening what comes next.</h3>
          <p>
            Webinars and hands-on workshops for business communities, corporate teams, colleges and schools —
            plus a Kannada AI community that asks me questions every single day. Practical, not theoretical:
            people leave with something working.
          </p>
          <div className="speaking-topics">
            {TOPICS.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
        <div className="content-list" data-stagger>
          {COMMUNITY.map((c) => (
            <a
              key={c.title}
              href={c.href}
              {...(c.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { onClick: (e) => { e.preventDefault(); scrollToTarget(c.href); } })}
            >
              <Mic />
              <span><small>{c.small}</small>{c.title}</span>
              <ArrowUpRight />
            </a>
          ))}
          <a className="text-link" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ marginTop: 28 }}>
            Join the community on Instagram <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="journey chapter">
      <div className="section-label">
        <span>INTERLUDE / STILL LEARNING</span>
        <span>A JOURNEY IN MOTION</span>
      </div>
      <div className="journey-grid">
        <h2 data-reveal>Started with machines.<br /><em>Kept asking why.</em></h2>
        <div className="timeline" data-stagger>
          {JOURNEY.map((j) => (
            <article key={j.year}>
              <span>{j.year}</span>
              <h3>{j.title}</h3>
              <p>{j.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
