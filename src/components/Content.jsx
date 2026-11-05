import { useState } from "react";
import { FILMS, FILM_FILTERS, SOCIAL } from "../data.js";
import { YOUTUBE } from "../constants.js";
import SignalText from "./SignalText.jsx";
import { ArrowUpRight, Close, Instagram, Play, Studio, YouTube } from "./Icons.jsx";

const PLATFORM_ICON = { instagram: Instagram, youtube: YouTube, studio: Studio };
const CAT_LABEL = { claude: "Claude", chatgpt: "ChatGPT", creative: "Creative AI" };

function Film({ f }) {
  const [playing, setPlaying] = useState(false);
  return (
    <article className="film-card">
      <div className="film-screen">
        {playing ? (
          <>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${f.id}?autoplay=1&rel=0`}
              title={f.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button className="film-close" aria-label="Close video" onClick={() => setPlaying(false)}><Close /></button>
          </>
        ) : (
          <button className="film-play" aria-label={`Play ${f.title}`} onClick={() => setPlaying(true)}>
            <img src={`https://i.ytimg.com/vi/${f.id}/hqdefault.jpg`} alt="" loading="lazy" width="480" height="360" />
            <span className="film-play-icon"><Play /></span>
            <span className="film-channel">{CAT_LABEL[f.cat]}</span>
          </button>
        )}
      </div>
      <div className="film-caption">
        <span className="eyebrow">Vinod Achar / Explained in Kannada</span>
        <h3>{f.title}</h3>
        <p>{f.sub}</p>
        <a href={`https://www.youtube.com/watch?v=${f.id}`} target="_blank" rel="noopener noreferrer">
          Watch on YouTube <ArrowUpRight size={12} />
        </a>
      </div>
    </article>
  );
}

export default function Content() {
  const [filter, setFilter] = useState("all");
  const shown = FILMS.filter((f) => filter === "all" || f.cat === filter);

  return (
    <section id="content" className="media-showcase chapter">
      <div className="section-label">
        <span><SignalText>05 / IDEAS THAT TRAVEL</SignalText></span>
        <span>ON CAMERA. IN KANNADA. EVERY DAY.</span>
      </div>
      <div className="split-heading" data-editorial-reveal>
        <h2>A voice.<br /><em>In your language.</em></h2>
        <div>
          <p>I make the newest AI make sense.<br />Tool breakdowns, practical workflows<br />and updates you can use the same day.</p>
          <a className="text-link" href={YOUTUBE} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22 }}>
            My YouTube channel <ArrowUpRight />
          </a>
        </div>
      </div>

      <div className="media-controls">
        <div className="media-filters" role="group" aria-label="Filter videos">
          {FILM_FILTERS.map((b) => (
            <button key={b.key} className="filter-btn" aria-pressed={filter === b.key} onClick={() => setFilter(b.key)}>
              {b.label}
            </button>
          ))}
        </div>
        <span className="eyebrow" aria-live="polite">{String(shown.length).padStart(2, "0")} SELECTED FILMS</span>
      </div>

      <div className="film-grid">
        {shown.map((f) => <Film key={f.id} f={f} />)}
      </div>

      <div className="social-editorial" data-editorial-reveal>
        {SOCIAL.map((s) => {
          const Icon = PLATFORM_ICON[s.platform];
          return (
            <a key={s.platform} className="social-feature" href={s.href} target="_blank" rel="noopener noreferrer">
              <Icon />
              <span className="eyebrow">{s.eyebrow}</span>
              <h4>{s.title[0]}<br /><em>{s.title[1]}</em></h4>
              <p>{s.body}</p>
              <span className="social-action">{s.action} <ArrowUpRight /></span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
