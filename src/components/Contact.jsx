import { WHATSAPP, EMAIL, INSTAGRAM, VVLABS_INSTAGRAM, YOUTUBE, LINKEDIN, GITHUB } from "../constants.js";
import { scrollToTarget } from "../lib/motion.js";
import { ArrowUp, ArrowUpRight } from "./Icons.jsx";

const SOCIALS = [
  ["Instagram", INSTAGRAM],
  ["VV Labs", VVLABS_INSTAGRAM],
  ["YouTube", YOUTUBE],
  ["LinkedIn", LINKEDIN],
  ["GitHub", GITHUB],
];

export default function Contact() {
  const top = (e) => { e.preventDefault(); scrollToTarget("#top"); };
  return (
    <section id="contact" className="contact chapter">
      <div className="section-label">
        <span>07 / THE NEXT CHAPTER</span>
        <span>LET’S MAKE IT USEFUL</span>
      </div>
      <div className="contact-inner" data-reveal>
        <span className="availability"><i /> OPEN TO WORKSHOPS, COLLABS &amp; GOOD CONVERSATIONS</span>
        <h2>Something useful<br />starts with <em>a hello.</em></h2>
        <div className="contact-ctas">
          <a className="contact-cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Message on WhatsApp <ArrowUpRight size={20} />
          </a>
          <a className="contact-cta secondary" href={EMAIL}>
            Send an email <ArrowUpRight size={20} />
          </a>
        </div>
        <p>
          Workshops and webinars for your community, VV Labs ads, brand collaborations.
          <br />If our worlds overlap, I’d love to hear from you.
        </p>
      </div>

      <footer>
        <a className="footer-name" href="#top" onClick={top}>Vinod Achar<span>.</span></a>
        <div className="socials">
          {SOCIALS.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={11} /></a>
          ))}
        </div>
        <a href="#top" className="back-top" aria-label="Back to top" onClick={top}><ArrowUp /></a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VINOD ACHAR</span>
          <span>BUILT WITH INTENT. ALWAYS LEARNING.</span>
          <span>BENGALURU, INDIA ↗ THE WORLD</span>
        </div>
      </footer>
    </section>
  );
}
