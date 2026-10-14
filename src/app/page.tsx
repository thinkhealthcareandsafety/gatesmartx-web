import {
  ArrowRight, Building2, CalendarCheck2, Check, Factory, Fingerprint, Hospital, Hotel, Mail, MessageCircle, Package,
  Printer, ScanLine, ScrollText, ShieldCheck, Siren, Truck, UserRound, Home as HomeIcon, Plus, KeyRound,
} from 'lucide-react';
import KeyCabinet from '@/components/KeyCabinet';

const WHATSAPP = 'https://wa.me/918010477969?text=' + encodeURIComponent('Hi, I would like a demo of GateSmartX for our property.');
const EMAIL = 'thinkhealthcareandsafety@gmail.com';
const MAIL = `mailto:${EMAIL}?subject=${encodeURIComponent('GateSmartX demo')}`;

// Every module is a row on the board, in the colour its tags carry everywhere on this page.
const MODULES = [
  {
    kind: 'visitor', no: 'V14', icon: UserRound, name: 'Visitors',
    line: 'Mobile verified by OTP, a live photo and the ID card at the gate. The host lets them in from WhatsApp, Telegram, SMS or email, with one tap and no app.',
    facts: ['Aadhaar, PAN, licence, passport or voter ID', 'Name and gender checked against the card', 'Returning visitors filled in', 'Blocked list warns the guard'],
  },
  {
    kind: 'guest', no: 'E07', icon: CalendarCheck2, name: 'Events and groups',
    line: 'Weddings, banquets, conferences. Upload the guest list once and every guest gets a QR pass that any gate can scan. No host request at the gate.',
    facts: ['Excel or CSV guest lists', 'Guests add themselves through one capped link', 'Badges printed for the whole list', 'Signed out when the event ends'],
  },
  {
    kind: 'material', no: 'M22', icon: Package, name: 'Material gate passes',
    line: 'Returnable and non-returnable passes. Nothing leaves until the head of department approves it on WhatsApp, and every return is counted.',
    facts: ['Approve or reject on WhatsApp', 'Partial returns tracked', 'Overdue items flagged', 'Deliveries in, handed over'],
  },
  {
    kind: 'courier', no: 'C31', icon: Truck, name: 'Couriers',
    line: 'Every parcel logged on arrival. The recipient gets a pickup code, and the handover is recorded against it.',
    facts: ['AWB number scan', 'Reminders at 24 and 72 hours', 'Outgoing dispatch register', 'Overrides need a reason'],
  },
];

const FAQ = [
  ['Do hosts need to install an app?', 'No. The request reaches them on WhatsApp, Telegram, SMS or email with the visitor’s details. One tap lets the visitor in or declines.'],
  ['What happens to Aadhaar data?', 'The first 8 digits are blacked out on the guard’s tablet before the image is uploaded. A full copy is kept only if you switch it on, encrypted, and only your Super Admin can open it. Images are deleted automatically after the period you set.'],
  ['We have more than one gate. Does that work?', 'Yes. Every gate uses the same record. Each entry and exit stores the gate, the guard and the time, so a visitor can come in at one gate and leave by another.'],
  ['What do the guards need?', 'A tablet or phone with a camera at each gate, and any printer the gate computer can print to for passes. Label printers are supported.'],
  ['How do events with hundreds of guests work?', 'Upload the guest list from Excel or CSV, or share one link where guests add themselves up to a limit. Each guest gets a QR pass; guards scan it at any gate or find the guest by name.'],
  ['Is our data kept apart from other clients?', 'Yes. Every property runs its own private copy of GateSmartX at its own address, with its own logos and its own data.'],
];

const FOR = [
  { icon: Hotel, name: 'Hotels and resorts' },
  { icon: Building2, name: 'Corporate parks and offices' },
  { icon: Hospital, name: 'Hospitals' },
  { icon: Factory, name: 'Factories and warehouses' },
  { icon: HomeIcon, name: 'Residential societies' },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="rail">
        <div className="wrap rail-inner">
          <a href="#top" className="wordmark" aria-label="GateSmartX home"><Mark /><span>Gate<b>SmartX</b></span></a>
          <nav aria-label="Main" className="rail-nav">
            <a className="strip-link" href="#how">How it works</a>
            <a className="strip-link" href="#board">The board</a>
            <a className="strip-link" href="#trust">Security</a>
            <a className="strip-link" href="#faq">Questions</a>
          </nav>
          <a className="btn btn-tag btn-sm" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Book a demo</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap">
            <div className="hero-head">
              <h1>Everything that crosses your gate. <span>One live board.</span></h1>
              <div className="hero-side">
                <p>GateSmartX replaces the gate register. Guards check people and goods in, hosts approve on WhatsApp in one tap, and every gate shows who is on your premises right now.</p>
                <div className="cta-row">
                  <a className="btn btn-tag" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Book a demo on WhatsApp</a>
                  <a className="btn btn-line" href="#how">See how it works<ArrowRight size={18} /></a>
                </div>
              </div>
            </div>
            <KeyCabinet />
          </div>
        </section>

        <section className="how" id="how" aria-labelledby="how-h">
          <div className="wrap">
            <div className="how-head">
              <h2 id="how-h">One tap at the host’s end. Everything moves at the gate.</h2>
              <p>The guard checks the visitor in, the host taps once on WhatsApp, and that single tap hangs the tag, prints the pass and puts the name on the evacuation roll.</p>
            </div>
            <div className="flow" aria-label="Sample: one visitor from check-in to the board">
              <div className="flow-step">
                <span className="strip">1 · At the gate</span>
                <div className="mini-form">
                  <span><i>Mobile</i>98••• ••210 <Check size={13} /></span>
                  <span><i>Name</i>Ravi Kumar</span>
                  <span><i>Company</i>Tata Projects</span>
                  <span><i>Aadhaar</i><b className="redact" />4821</span>
                </div>
                <h3><ScanLine size={20} />The guard checks them in</h3>
                <p>Mobile with OTP, a live photo and the ID card, masked on the tablet. Returning visitors fill in by themselves.</p>
              </div>
              <span className="wire" aria-hidden="true" />
              <div className="flow-step">
                <span className="strip">2 · On the host’s phone</span>
                <div className="wa">
                  <p><b>Ravi Kumar</b> from Tata Projects is at the gate to meet you.</p>
                  <span className="wa-btn wa-yes"><Check size={14} />Let them in</span>
                  <span className="wa-btn">Decline</span>
                </div>
                <h3><MessageCircle size={20} />The host taps once</h3>
                <p>WhatsApp, Telegram, SMS or email. No app, no login, from any phone.</p>
              </div>
              <span className="wire wire-fan" aria-hidden="true" />
              <div className="flow-step flow-out">
                <span className="strip">3 · The same second</span>
                <ul className="outcomes">
                  <li>
                    <span className="out-hook" aria-hidden="true"><span className="peg" /><span className="tag tag-lg k-visitor"><span className="ring" /><span className="insert">V14</span></span></span>
                    <span><b>Tag on the board</b>Visitors row, hook 14</span>
                  </li>
                  <li>
                    <span className="pass" aria-hidden="true"><b>14</b>Ravi Kumar<small>valid till 2:42 pm</small><em>R. Singh</em></span>
                    <span><b>Pass printed</b>Photo, host and validity</span>
                  </li>
                  <li>
                    <span className="roll-line" aria-hidden="true"><i />Ravi Kumar<small>Front Office</small></span>
                    <span><b>On the evacuation roll</b>Until he checks out</span>
                  </li>
                </ul>
                <h3><Printer size={20} />Tag, pass and roll, together</h3>
                <p>The guard hears a chime. Nothing to copy into a register.</p>
              </div>
            </div>
            <p className="sample-note">Sample data</p>
          </div>
        </section>

        <section className="board" id="board" aria-labelledby="board-h">
          <div className="wrap">
            <div className="board-head">
              <h2 id="board-h">One board for every gate.</h2>
              <p>People, events, material and parcels each hang in their own colour, on the same screen your guards already use, across every gate.</p>
            </div>
            <ul className="modules">
              {MODULES.map(({ kind, no, icon: Icon, name, line, facts }) => (
                <li key={name} className={`module k-${kind}`}>
                  <div className="module-tag" aria-hidden="true">
                    <span className="peg" />
                    <span className="tag tag-xl"><span className="ring" /><span className="insert">{no}</span></span>
                  </div>
                  <div className="module-body">
                    <h3><Icon size={22} />{name}</h3>
                    <p>{line}</p>
                    <ul className="facts">{facts.map((f) => <li key={f}><Check size={15} />{f}</li>)}</ul>
                  </div>
                </li>
              ))}
            </ul>
            <div className="gates-row">
              <div>
                <h3><KeyRound size={22} />Several gates, one record</h3>
                <p>In at one gate, out at another. Every movement stores the gate, the guard and the time. Passes run from 2 hours to 30 days, with re-entry on multi-day passes.</p>
              </div>
              <div className="gate-plates" aria-hidden="true">
                <span>Main gate</span><span>Staff entrance</span><span>Service gate</span>
              </div>
            </div>
          </div>
        </section>

        <section className="drill" aria-labelledby="drill-h">
          <div className="wrap drill-grid">
            <div>
              <Siren size={30} className="drill-icon" />
              <h2 id="drill-h">Fire alarm? Everyone on the board, on paper, in one click.</h2>
              <p>The evacuation list prints from any gate or the office: visitors, event guests and contractors still inside, grouped for roll call.</p>
            </div>
            <div className="sheet" aria-label="Sample evacuation list">
              <div className="sheet-head"><b>Evacuation list</b><span>Sample · 10:42 am</span></div>
              <ol>
                <li className="k-visitor"><i />Ravi Kumar<span>Visitor · Front Office</span></li>
                <li className="k-visitor"><i />Anita Rao<span>Visitor · Engineering</span></li>
                <li className="k-guest"><i />Sharma wedding<span>38 guests inside</span></li>
                <li className="k-visitor"><i />Imran Shaikh<span>Contractor · Facilities</span></li>
                <li className="k-courier"><i />Blue Dart agent<span>Courier · Main gate</span></li>
              </ol>
            </div>
          </div>
        </section>

        <section className="trust" id="trust" aria-labelledby="trust-h">
          <div className="wrap trust-grid">
            <div className="trust-head">
              <h2 id="trust-h">Security your auditors will sign off.</h2>
              <div className="idcard" aria-label="Sample: an Aadhaar card with the first 8 digits blacked out">
                <span className="id-photo" aria-hidden="true" />
                <span className="id-lines" aria-hidden="true"><i /><i /><i /></span>
                <span className="id-no"><b className="redact" /><b className="redact" />4821</span>
                <span className="id-note">Masked on the tablet · Sample</span>
              </div>
            </div>
            <div className="trust-body">
              <div className="ledger" aria-label="Sample audit log">
                <div className="ledger-head"><ScrollText size={18} /><b>Audit log</b><span>Sample</span></div>
                <ol>
                  <li><time>10:41</time><span><b>Guard, Main gate</b> checked in V14 · Aadhaar masked on the tablet</span></li>
                  <li><time>10:42</time><span><b>Priya Shah</b> let V14 in on WhatsApp</span></li>
                  <li><time>10:58</time><span><b>Admin</b> viewed the masked ID of V14</span></li>
                  <li><time>11:05</time><span><b>Super Admin</b> opened the full ID · reason recorded</span></li>
                  <li><time>23:59</time><span><b>System</b> deleted ID images past the retention period</span></li>
                </ol>
              </div>
              <dl className="guarantees">
                <div><dt><Fingerprint size={18} />Aadhaar masked on the device</dt><dd>The first 8 digits are blacked out on the guard’s tablet before anything is uploaded. A full copy, if your policy needs one, is encrypted and opened only by your Super Admin.</dd></div>
                <div><dt><ScrollText size={18} />Everything on record</dt><dd>Every approval, override, view of an ID and download is logged with the person and the time. Mistakes are voided with a reason, never deleted.</dd></div>
                <div><dt><ShieldCheck size={18} />DPDP-aware</dt><dd>ID images are deleted automatically after the period you set, and only your authorised people see your data.</dd></div>
                <div><dt><MessageCircle size={18} />Indian messaging, done properly</dt><dd>WhatsApp Business and DLT-registered SMS, so approvals reach every host on every phone.</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="plaque-band" aria-labelledby="live-h">
          <div className="wrap plaque-grid">
            <div className="plaque">
              <span className="strip strip-ink">In service</span>
              <h2 id="live-h">Live at a five-star hotel complex in New Delhi.</h2>
              <p>Made in India by Think Health Care and Safety, the team behind AED SmartX.</p>
            </div>
            <div className="address">
              <h3>Your property gets its own address.</h3>
              <p>Every client runs a private copy at its own address, with its own logos and its own data. One property’s records never sit next to another’s.</p>
              <span className="url"><ShieldCheck size={16} />yourproperty<b>.gatesmartx.com</b></span>
            </div>
          </div>
        </section>

        <section className="for" aria-labelledby="for-h">
          <div className="wrap">
            <h2 id="for-h">Made for properties where the gate matters.</h2>
            <ul className="for-list">
              {FOR.map(({ icon: Icon, name }) => <li key={name}><span className="peg" aria-hidden="true" /><span className="for-tag"><Icon size={18} />{name}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="faq" id="faq" aria-labelledby="faq-h">
          <div className="wrap faq-grid">
            <h2 id="faq-h">Questions facility managers ask first.</h2>
            <div className="faq-list">
              {FAQ.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}<Plus size={18} aria-hidden="true" /></summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="close" id="contact" aria-labelledby="close-h">
          <div className="wrap close-inner">
            <span className="tag tag-xl k-guest close-tag" aria-hidden="true"><span className="ring" /><span className="insert">You</span></span>
            <h2 id="close-h">See your gate on one board.</h2>
            <p>A 20-minute demo on your phone: we check a visitor in, you approve it on WhatsApp.</p>
            <div className="cta-row">
              <a className="btn btn-tag btn-lg" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp +91 80104 77969</a>
              <a className="btn btn-line btn-lg" href={MAIL}><Mail size={18} />{EMAIL}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-inner">
          <span className="wordmark small"><Mark /><span>Gate<b>SmartX</b></span></span>
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
      <path d="M9 25V15a7 7 0 0 1 14 0v10" fill="none" stroke="var(--mark-ink)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="m12.4 19.4 2.7 2.7 4.8-5.2" fill="none" stroke="var(--tag-green)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
