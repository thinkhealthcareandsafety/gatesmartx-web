import { ArrowRight, Check, ChevronRight, Fingerprint, Mail, MessageCircle, Plus, ScrollText, ShieldCheck, Trash2 } from 'lucide-react';
import HeroDevices from '@/components/HeroDevices';

const WHATSAPP = 'https://wa.me/918010477969?text=' + encodeURIComponent('Hi, I would like a demo of GateSmartX for our property.');
const EMAIL = 'thinkhealthcareandsafety@gmail.com';
const MAIL = `mailto:${EMAIL}?subject=${encodeURIComponent('GateSmartX demo')}`;

const FAQ = [
  ['Do hosts need to install an app?', 'No. The request reaches them on WhatsApp, Telegram, SMS or email with the visitor’s details. One tap lets the visitor in or declines.'],
  ['What happens to Aadhaar data?', 'The first 8 digits are blacked out on the guard’s tablet before the image is uploaded. A full copy is kept only if you switch it on, encrypted, and only your Super Admin can open it. Images are deleted automatically after the period you set.'],
  ['We have more than one gate. Does that work?', 'Yes. Every gate uses the same record. Each entry and exit stores the gate, the guard and the time, so a visitor can come in at one gate and leave by another.'],
  ['What do the guards need?', 'A tablet or phone with a camera at each gate, and any printer the gate computer can print to for passes. Label printers are supported.'],
  ['How do events with hundreds of guests work?', 'Upload the guest list from Excel or CSV, or share one link where guests add themselves up to a limit. Each guest gets a QR pass that any gate can scan.'],
  ['Is our data kept apart from other clients?', 'Yes. Every property runs its own private copy of GateSmartX at its own address, with its own logos and its own data.'],
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="wordmark" aria-label="GateSmartX home"><Mark />GateSmartX</a>
          <nav aria-label="Main" className="nav-links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#privacy">Privacy</a>
            <a href="#faq">Questions</a>
          </nav>
          <a className="pill pill-sm" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Book a demo</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-copy">
            <h1>Every gate.<br />One calm system.</h1>
            <p className="lead">Visitors, events, material and couriers. Approved on WhatsApp in one tap, and visible live at every gate.</p>
            <div className="actions">
              <a className="pill" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Book a demo</a>
              <a className="more" href="#how">See how it works<ChevronRight size={18} /></a>
            </div>
          </div>
          <div className="wrap wide"><HeroDevices /></div>
        </section>

        <section className="statement" id="how" aria-labelledby="how-h">
          <div className="wrap">
            <h2 id="how-h">The guard checks them in.<br /><span>The host taps once.</span><br /><span>The pass prints.</span></h2>
            <ol className="steps">
              <li><h3>At the gate</h3><p>Mobile verified by OTP, a live photo and the ID card. Aadhaar is masked on the tablet before anything is saved.</p></li>
              <li><h3>On the host’s phone</h3><p>A WhatsApp message with the visitor’s photo and two buttons. No app and no login, from any phone.</p></li>
              <li><h3>Back at the gate</h3><p>A chime, a printed pass with photo and validity, and the visitor appears on the live list until they leave.</p></li>
            </ol>
          </div>
        </section>

        <section className="features" id="features" aria-labelledby="features-h">
          <div className="wrap">
            <h2 id="features-h" className="center">Everything that crosses your gate.</h2>
            <div className="bento">
              <article className="tile t-wide">
                <div className="tile-copy">
                  <h3>Visitors, approved in one tap.</h3>
                  <p>WhatsApp, Telegram, SMS or email. Returning visitors fill in by themselves, and the blocked list warns the guard.</p>
                </div>
                <div className="vis vis-approve" aria-hidden="true">
                  <span className="va-btn">Let them in</span>
                  <span className="va-btn ghost">Decline</span>
                </div>
              </article>
              <article className="tile">
                <div className="tile-copy">
                  <h3>Aadhaar, masked on the device.</h3>
                  <p>Name and gender checked against the card.</p>
                </div>
                <div className="vis vis-id" aria-hidden="true"><b className="mask" /><b className="mask" /><span>4821</span></div>
              </article>
              <article className="tile">
                <div className="tile-copy">
                  <h3>Events, with a pass for every guest.</h3>
                  <p>Upload the list once. Any gate scans the QR.</p>
                </div>
                <div className="vis vis-qr" aria-hidden="true"><Qr /></div>
              </article>
              <article className="tile t-wide t-dark">
                <div className="tile-copy">
                  <h3>Material leaves only when the head approves.</h3>
                  <p>Returnable and non-returnable gate passes, approved on WhatsApp. Partial returns are counted and overdue items flagged.</p>
                </div>
                <div className="vis vis-pass" aria-hidden="true">
                  <span className="vp-no">OUT-000231</span>
                  <span className="vp-item">2 × Projector, Banquets</span>
                  <span className="vp-ok"><Check size={14} strokeWidth={3} />Approved by Head, Banquets</span>
                </div>
              </article>
              <article className="tile">
                <div className="tile-copy">
                  <h3>Couriers, collected with a code.</h3>
                  <p>Reminders at 24 and 72 hours.</p>
                </div>
                <div className="vis vis-code" aria-hidden="true">4 8 2 1</div>
              </article>
              <article className="tile">
                <div className="tile-copy">
                  <h3>Evacuation list, in one click.</h3>
                  <p>Everyone inside, on paper, from any gate.</p>
                </div>
                <div className="vis vis-list" aria-hidden="true"><i /><i /><i /><i /></div>
              </article>
            </div>
            <p className="note center">Visuals show sample data.</p>
          </div>
        </section>

        <section className="dark" aria-labelledby="gates-h">
          <div className="wrap">
            <h2 id="gates-h" className="center">Three gates.<br /><span>One record.</span></h2>
            <p className="lead center">In at one gate, out at another. Every movement keeps the gate, the guard and the time. Passes from 2 hours to 30 days, with re-entry on multi-day passes.</p>
            <ol className="log" aria-label="Sample movements">
              <li><time>09:12</time><span>Main gate</span><b>Anita Rao in</b><em>Guard R. Singh</em></li>
              <li><time>10:42</time><span>Staff entrance</span><b>Ravi Kumar in</b><em>Guard M. Das</em></li>
              <li><time>12:05</time><span>Service gate</span><b>Blue Dart parcel logged</b><em>Guard R. Singh</em></li>
              <li><time>13:30</time><span>Main gate</span><b>Anita Rao out</b><em>Guard P. Yadav</em></li>
            </ol>
            <p className="note center on-dark">Sample data</p>
          </div>
        </section>

        <section className="privacy" id="privacy" aria-labelledby="privacy-h">
          <div className="wrap">
            <h2 id="privacy-h" className="center">Privacy, built in.</h2>
            <p className="lead center">ID data is the most sensitive thing your gate touches. GateSmartX treats it that way.</p>
            <ul className="principles">
              <li><Fingerprint /><h3>Masked on the tablet</h3><p>The first 8 Aadhaar digits are blacked out before anything is uploaded.</p></li>
              <li><ShieldCheck /><h3>Encrypted when kept</h3><p>A full copy, only if your policy needs it, opened only by your Super Admin.</p></li>
              <li><ScrollText /><h3>Every view on record</h3><p>Approvals, overrides, ID views and downloads, logged with the person and time.</p></li>
              <li><Trash2 /><h3>Deleted on schedule</h3><p>ID images are removed automatically after the period you set. DPDP-aware.</p></li>
            </ul>
          </div>
        </section>

        <section className="proof" aria-labelledby="proof-h">
          <div className="wrap">
            <h2 id="proof-h" className="center">Live at a five-star hotel complex in New Delhi.</h2>
            <p className="lead center">Made in India by Think Health Care and Safety, the team behind AED SmartX. Every property runs its own private copy, at its own address.</p>
            <p className="address center"><ShieldCheck size={16} />yourproperty<b>.gatesmartx.com</b></p>
            <p className="for center">Hotels and resorts · Corporate parks · Hospitals · Factories and warehouses · Residential societies</p>
          </div>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-h">
          <div className="wrap narrow">
            <h2 id="faq-h" className="center">Questions.</h2>
            <div className="faq-list">
              {FAQ.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}<Plus size={20} aria-hidden="true" /></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="close" id="contact" aria-labelledby="close-h">
          <div className="wrap">
            <h2 id="close-h" className="center">See it at your gate.</h2>
            <p className="lead center">A 20-minute demo on your phone. We check a visitor in, you approve it on WhatsApp.</p>
            <div className="actions center-row">
              <a className="pill" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Book on WhatsApp</a>
              <a className="more" href={MAIL}><Mail size={17} />{EMAIL}<ArrowRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-inner">
          <span className="wordmark small"><Mark />GateSmartX</span>
          <span>A product of Think Health Care and Safety · Also from us: <a href="https://aedsmartx.com" target="_blank" rel="noopener noreferrer">AED SmartX</a></span>
          <span>© {new Date().getFullYear()} GateSmartX</span>
        </div>
      </footer>
    </>
  );
}

// The mark: a gate arch with the approval tick inside it.
function Mark() {
  return (
    <svg className="mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path d="M9 25V15a7 7 0 0 1 14 0v10" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="m12.4 19.4 2.7 2.7 4.8-5.2" fill="none" stroke="#34c759" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// An illustrative pass QR, drawn from a fixed pattern (not a scannable code).
function Qr() {
  const n = 21;
  const cells: [number, number][] = [];
  const finder = (x: number, y: number) => (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7);
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      if (finder(x, y)) continue;
      if (((x * 7 + y * 13 + x * y) % 5) < 2) cells.push([x, y]);
    }
  }
  const eye = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" rx="1.6" fill="currentColor" />
      <rect x={x + 1} y={y + 1} width="5" height="5" rx="1.1" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" rx=".7" fill="currentColor" />
    </g>
  );
  return (
    <svg viewBox="0 0 21 21" width="100%" height="100%">
      {cells.map(([x, y]) => <rect key={`${x}.${y}`} x={x + .08} y={y + .08} width=".84" height=".84" rx=".2" fill="currentColor" />)}
      {eye(0, 0)}{eye(n - 7, 0)}{eye(0, n - 7)}
    </svg>
  );
}
