import {
  ArrowRight, BadgeCheck, Building2, Check, ChevronDown, Factory,
  Fingerprint, Hospital, Hotel, KeyRound, Mail, MessageCircle,
  Package, PartyPopper, Printer, ScanLine, ScrollText,
  ShieldCheck, Siren, Truck, UsersRound,
} from 'lucide-react';
import GateDemo from '@/components/GateDemo';
import ScrollReveal from '@/components/ScrollReveal';

const WHATSAPP =
  'https://wa.me/918010477969?text=' +
  encodeURIComponent('Hi, I would like a demo of GateSmartX for our property.');
const EMAIL = 'thinkhealthcareandsafety@gmail.com';
const MAIL = `mailto:${EMAIL}?subject=${encodeURIComponent('GateSmartX demo')}`;

/* -----------------------------------------------------------------------
   Data: every item is a real, shipped product capability.
   No fake metrics, no client names.
----------------------------------------------------------------------- */
const MODULES = [
  {
    icon: UsersRound,
    name: 'Visitors',
    line: 'Photo, ID and mobile captured at the gate. The host approves on WhatsApp or SMS with one tap, from any phone — no app, no login required.',
    facts: ['OTP-verified mobile', 'Returning visitors auto-filled', 'Blocked-list alert for the guard'],
  },
  {
    icon: PartyPopper,
    name: 'Events and groups',
    line: 'Weddings, banquets, conferences. Upload the guest list once; every guest gets a QR pass any gate can scan.',
    facts: ['Excel or CSV import', 'QR scanned by scanner gun or phone', 'Guests signed out when event ends'],
  },
  {
    icon: Package,
    name: 'Material gate passes',
    line: 'Returnable and non-returnable passes, approved by the head of department before anything leaves the premises.',
    facts: ['Approval on WhatsApp', 'Partial returns tracked', 'Overdue items flagged automatically'],
  },
  {
    icon: Truck,
    name: 'Couriers',
    line: 'Every parcel logged on arrival. The recipient gets a pickup code; the handover is recorded against it.',
    facts: ['AWB scan on arrival', 'Reminders at 24 and 72 hours', 'Outgoing dispatch register'],
  },
  {
    icon: KeyRound,
    name: 'Multiple gates, one record',
    line: 'In at one gate, out at another — the dashboard shows which gate, which guard and what time. Passes run from 2 hours to 30 days, with re-entry on multi-day passes.',
    facts: ['Passes 2 hours to 30 days', 'Re-entry on multi-day passes', 'Printed pass with photo'],
  },
  {
    icon: Siren,
    name: 'Evacuation list',
    line: 'Everyone on the premises right now, on paper in one click, for fire drills and emergencies.',
    facts: ['Visitors and event guests', 'Grouped for roll call', 'From any gate or the office'],
  },
];

const TRUST = [
  {
    icon: Fingerprint,
    title: 'Aadhaar masked on the device',
    text: "The first 8 digits are blacked out on the guard\u2019s screen before anything is uploaded. A full encrypted copy, if your policy needs one, is visible only to your Super Admin.",
  },
  {
    icon: ScrollText,
    title: 'Full audit trail',
    text: 'Every approval, override, ID view and export is logged with the person and the timestamp. Nothing is deleted; mistakes are voided with a reason.',
  },
  {
    icon: ShieldCheck,
    title: 'DPDP-aware by design',
    text: "ID images are deleted automatically after the retention period you set. Your data is visible only to your organisation\u2019s authorised people.",
  },
  {
    icon: MessageCircle,
    title: 'Indian messaging, done right',
    text: 'WhatsApp Business and DLT-registered SMS, so approvals reach every host on every phone — even a basic handset with no data.',
  },
];

const FOR = [
  { icon: Hotel,      name: 'Hotels and resorts' },
  { icon: Building2,  name: 'Corporate parks and offices' },
  { icon: Hospital,   name: 'Hospitals' },
  { icon: Factory,    name: 'Factories and warehouses' },
  { icon: UsersRound, name: 'Residential societies' },
];

const FAQ = [
  {
    q: 'Does the host need to install an app?',
    a: "No. The host receives a WhatsApp or SMS message with the visitor\u2019s photo and two buttons \u2014 \u201cLet them in\u201d or \u201cDecline\u201d. They tap once. No app, no login, no training needed.",
  },
  {
    q: 'How is Aadhaar handled? Is it compliant with DPDP?',
    a: "The first 8 digits are masked on the guard\u2019s tablet before upload. If your policy requires a full copy, it is stored encrypted and visible only to your designated Super Admin. ID images are purged automatically after a retention period you configure \u2014 making the system ready for India\u2019s Digital Personal Data Protection Act.",
  },
  {
    q: 'Can it handle large events with hundreds of guests?',
    a: 'Yes. Upload your guest list as an Excel or CSV file. GateSmartX generates a QR pass for every guest and sends it to them automatically. Any gate, any scanner or phone camera can verify the QR at entry. Guests are signed out automatically when the event ends.',
  },
  {
    q: 'What if we have multiple gates at different entry points?',
    a: 'All gates share one live record. A visitor checked in at Gate 1 can exit at Gate 3 — the dashboard shows the full trail: gate, guard, time. The evacuation list always reflects whoever is currently on the premises.',
  },
  {
    q: 'Does each property get its own private system?',
    a: 'Yes. Every client runs on a private copy of GateSmartX at its own address — for example, yourhotel.gatesmartx.com — with its own data, branding and access controls. No data from one property ever appears in another.',
  },
  {
    q: 'How long does it take to go live?',
    a: 'Most properties are live within a day of account creation. There is nothing to install on existing network infrastructure — guards use tablets or phones, and the admin console runs in any browser.',
  },
];

/* -----------------------------------------------------------------------
   Page
----------------------------------------------------------------------- */
export default function Home() {
  return (
    <>
      {/* ---- NAV ---- */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="wordmark" aria-label="GateSmartX home">
            <Mark />
            <span className="wm">Gate<span>SmartX</span></span>
          </a>
          <nav aria-label="Main">
            <a href="#how">How it works</a>
            <a href="#product">Product</a>
            <a href="#trust">Security</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-dark" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Book a demo
          </a>
        </div>
      </header>

      <main id="top">

        {/* ---- HERO ---- */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Every gate.<br />
                Every visitor.<br />
                <em>Approved in one tap.</em>
              </h1>
              <p className="lead">
                GateSmartX replaces the paper register at your gate. The guard checks a visitor
                in, the host approves on WhatsApp, the pass prints — and you know exactly who is
                on your premises, live.
              </p>
              <div className="cta-row">
                <a
                  className="btn btn-green btn-lg"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Book a demo on WhatsApp
                </a>
                <a className="btn btn-line btn-lg" href="#how">
                  See how it works
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>

              {/* Trust badges */}
              <div className="trust-badges" aria-label="Key reassurances">
                <span>
                  <Check size={13} aria-hidden="true" />
                  WhatsApp approval
                </span>
                <span className="tb-sep" aria-hidden="true" />
                <span>
                  <Check size={13} aria-hidden="true" />
                  No app for hosts
                </span>
                <span className="tb-sep" aria-hidden="true" />
                <span>
                  <Check size={13} aria-hidden="true" />
                  Aadhaar masked on device
                </span>
                <span className="tb-sep" aria-hidden="true" />
                <span>
                  <Check size={13} aria-hidden="true" />
                  DPDP-aware
                </span>
              </div>
            </div>

            <div className="hero-demo">
              <GateDemo />
            </div>
          </div>
        </section>

        {/* ---- PROBLEM / SOLUTION strip ---- */}
        <section className="vs" aria-label="Paper register versus GateSmartX">
          <div className="wrap vs-grid">
            <ScrollReveal className="vs-col old">
              <p className="vs-label">Before: the paper register</p>
              <p className="vs-title">Illegible entries.<br />No accountability.</p>
              <ul className="vs-list">
                {[
                  'Guard writes names by hand — spelling varies',
                  'No way to know who is on the premises right now',
                  'Host has no idea a visitor is waiting at the gate',
                  'ID photos not captured; nothing to review later',
                  'Material leaving unchecked — no gate pass trail',
                ].map((t) => (
                  <li key={t}>
                    <span className="vs-dot" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <div className="vs-arrow" aria-hidden="true">
              <ArrowRight size={20} />
            </div>

            <ScrollReveal className="vs-col new" delay={80}>
              <p className="vs-label">With GateSmartX</p>
              <p className="vs-title">Every entry verified.<br />Every approval on record.</p>
              <ul className="vs-list">
                {[
                  'Mobile OTP, live photo and ID captured at the gate',
                  'Live list of everyone inside, updated in real time',
                  'Host approves on WhatsApp with one tap — no app',
                  'Aadhaar masked on device; audit log of every view',
                  'Material gate passes approved before anything leaves',
                ].map((t) => (
                  <li key={t}>
                    <span className="vs-dot" aria-hidden="true">
                      <Check size={10} aria-hidden="true" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* ---- HOW IT WORKS ---- */}
        <section className="how" id="how">
          <div className="wrap">
            <ScrollReveal>
              <h2>From the gate to the pass<br />in under a minute.</h2>
            </ScrollReveal>
            <ol className="steps">
              <li>
                <ScanLine aria-hidden="true" />
                <h3>Guard checks them in</h3>
                <p>
                  Mobile OTP, live photo and the visitor&rsquo;s ID — masked on the tablet.
                  Returning visitors are filled in automatically.
                </p>
              </li>
              <li>
                <MessageCircle aria-hidden="true" />
                <h3>Host approves</h3>
                <p>
                  A WhatsApp or SMS arrives with the visitor&rsquo;s photo and two buttons:
                  &ldquo;Let them in&rdquo; or &ldquo;Decline&rdquo;. No app, no login.
                </p>
              </li>
              <li>
                <Printer aria-hidden="true" />
                <h3>Pass prints</h3>
                <p>
                  The guard gets a chime, the pass prints with photo and validity, and
                  the visitor appears on the live list until they leave.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* ---- PRODUCT modules ---- */}
        <section className="product" id="product">
          <div className="wrap product-grid">
            <div className="product-head">
              <ScrollReveal>
                <h2>One system for everything that crosses your gate.</h2>
                <p>
                  People, events, material and parcels — each with its own register,
                  all on the same screen your guards already use.
                </p>
              </ScrollReveal>
            </div>
            <ul className="modules" aria-label="Product modules">
              {MODULES.map(({ icon: Icon, name, line, facts }) => (
                <li key={name}>
                  <span className="m-icon" aria-hidden="true"><Icon /></span>
                  <div>
                    <h3>{name}</h3>
                    <p>{line}</p>
                    <ul className="facts" aria-label={`${name} highlights`}>
                      {facts.map((f) => (
                        <li key={f}>
                          <BadgeCheck size={14} aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- TRUST / SECURITY ---- */}
        <section className="trust" id="trust">
          <div className="wrap">
            <ScrollReveal>
              <h2>Security your auditors will sign off.</h2>
            </ScrollReveal>
            <div className="trust-grid">
              {TRUST.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- YOUR OWN ADDRESS ---- */}
        <section className="own">
          <div className="wrap own-grid">
            <ScrollReveal>
              <div>
                <h2>Your property gets its own address.</h2>
                <p>
                  Every client runs on a private copy of GateSmartX at its own
                  sub-domain — with its own data, its own logos and its own access
                  controls. One property&rsquo;s records never sit next to another&rsquo;s.
                </p>
              </div>
            </ScrollReveal>
            <div className="addr" aria-label="Sample client address (illustrative)">
              <div className="addr-bar">
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <span>
                  <ShieldCheck size={13} aria-hidden="true" />
                  yourhotel.gatesmartx.com
                </span>
              </div>
              <div className="addr-body">
                <span className="addr-logo">Your logo</span>
                <span className="addr-line" aria-hidden="true" />
                <span className="addr-line short" aria-hidden="true" />
                <span className="addr-btn">Sign in</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---- INDUSTRIES ---- */}
        <section className="for">
          <div className="wrap">
            <ScrollReveal>
              <h2>Made for properties where the gate matters.</h2>
            </ScrollReveal>
            <ul className="for-list" aria-label="Industries">
              {FOR.map(({ icon: Icon, name }) => (
                <li key={name}>
                  <Icon aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section className="faq">
          <div className="wrap">
            <ScrollReveal>
              <h2>Common questions.</h2>
            </ScrollReveal>
            <div className="faq-list" role="list">
              {FAQ.map(({ q, a }) => (
                <details key={q} className="faq-item" role="listitem">
                  <summary>
                    {q}
                    <span className="faq-chevron" aria-hidden="true">
                      <ChevronDown size={13} strokeWidth={2.5} />
                    </span>
                  </summary>
                  <p className="faq-body">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---- CLOSING CTA ---- */}
        <section className="cta" id="contact">
          <div className="wrap cta-inner">
            <ScrollReveal>
              <h2>See it at your gate.</h2>
              <p>
                A 20-minute demo on your phone: we check a visitor in live,
                you approve it on WhatsApp — from your own handset.
              </p>
              <div className="cta-row">
                <a
                  className="btn btn-green btn-lg"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp +91&nbsp;80104&nbsp;77969
                </a>
                <a className="btn btn-line btn-lg" href={MAIL}>
                  <Mail size={18} aria-hidden="true" />
                  {EMAIL}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      {/* ---- FOOTER ---- */}
      <footer className="foot">
        <div className="wrap foot-inner">
          <span className="wordmark small">
            <Mark />
            <span className="wm">Gate<span>SmartX</span></span>
          </span>
          <span>
            A product of Think Health Care and Safety · Also from us:{' '}
            <a href="https://aedsmartx.com" target="_blank" rel="noopener noreferrer">
              AED SmartX
            </a>
          </span>
          <span>© {new Date().getFullYear()} GateSmartX</span>
        </div>
      </footer>
    </>
  );
}

/* -----------------------------------------------------------------------
   Mark: a gate arch with the approval tick inside it.
   Kept exactly as shipped.
----------------------------------------------------------------------- */
function Mark() {
  return (
    <svg className="mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M9 25V15a7 7 0 0 1 14 0v10"
        fill="none"
        stroke="var(--mark-ink, #fff)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="m12.4 19.4 2.7 2.7 4.8-5.2"
        fill="none"
        stroke="var(--green)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
