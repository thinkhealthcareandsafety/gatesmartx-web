import {
  ArrowRight, BadgeCheck, Building2, Factory, Fingerprint, Hospital, Hotel, KeyRound, Mail, MessageCircle, Package, PartyPopper,
  Printer, ScanLine, ScrollText, ShieldCheck, Siren, Truck, UsersRound,
} from 'lucide-react';
import GateDemo from '@/components/GateDemo';

const WHATSAPP = 'https://wa.me/918010477969?text=' + encodeURIComponent('Hi, I would like a demo of GateSmartX for our property.');
const EMAIL = 'thinkhealthcareandsafety@gmail.com';
const MAIL = `mailto:${EMAIL}?subject=${encodeURIComponent('GateSmartX demo')}`;

// What the gate handles, in the order a property meets it. Every line is a shipped capability.
const MODULES = [
  { icon: UsersRound, name: 'Visitors', line: 'Photo, ID and mobile captured at the gate. The host approves on WhatsApp or SMS with one tap, from any phone, no app.', facts: ['Mobile verified by OTP', 'Returning visitors filled in', 'Blocked list warns the guard'] },
  { icon: PartyPopper, name: 'Events and groups', line: 'Weddings, banquets, conferences. Upload the guest list once; every guest gets a QR pass any gate can scan.', facts: ['Excel or CSV guest lists', 'Scanner guns and phone cameras', 'Guests sign out when the event ends'] },
  { icon: Package, name: 'Material gate passes', line: 'Returnable and non-returnable gate passes, approved by the head of department before anything leaves.', facts: ['Approve on WhatsApp', 'Partial returns tracked', 'Overdue items flagged'] },
  { icon: Truck, name: 'Couriers', line: 'Every parcel logged on arrival. The recipient gets a pickup code; the handover is recorded against it.', facts: ['AWB scan', 'Reminders at 24 and 72 hours', 'Outgoing dispatch register'] },
  { icon: KeyRound, name: 'Gates and passes', line: 'Several gates, one record. In at one gate, out at another: the dashboard shows which gate, which guard, what time.', facts: ['Passes from 2 hours to 30 days', 'Re-entry on multi-day passes', 'Printed pass with photo'] },
  { icon: Siren, name: 'Evacuation list', line: 'Everyone on the premises right now, on paper in one click, for fire drills and emergencies.', facts: ['Visitors and event guests', 'Grouped for roll call', 'From any gate or the office'] },
];

const TRUST = [
  { icon: Fingerprint, title: 'Aadhaar masked on the device', text: 'The first 8 digits are blacked out on the guard’s tablet before anything is uploaded. A full copy, if your policy needs one, is encrypted and opened only by your Super Admin.' },
  { icon: ScrollText, title: 'Everything on record', text: 'Every approval, override, view of an ID and export is logged with the person and the time. Nothing is deleted; mistakes are voided with a reason.' },
  { icon: ShieldCheck, title: 'Built for DPDP', text: 'ID images are deleted automatically after the period you set. Your data is visible only to your organisation’s authorised people.' },
  { icon: MessageCircle, title: 'Indian messaging, done properly', text: 'WhatsApp Business and DLT-registered SMS, so approvals reach every host, on every phone.' },
];

const FOR = [
  { icon: Hotel, name: 'Hotels and resorts' },
  { icon: Building2, name: 'Corporate parks and offices' },
  { icon: Hospital, name: 'Hospitals' },
  { icon: Factory, name: 'Factories and warehouses' },
  { icon: UsersRound, name: 'Residential societies' },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="wordmark" aria-label="GateSmartX home"><Mark /><span className="wm">Gate<span>SmartX</span></span></a>
          <nav aria-label="Main">
            <a href="#how">How it works</a>
            <a href="#product">Product</a>
            <a href="#trust">Security</a>
          </nav>
          <a className="btn btn-dark" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Book a demo</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>Every gate.<br />Every visitor.<br /><em>Approved in one tap.</em></h1>
              <p className="lead">GateSmartX replaces the visitor register at your gate. The guard checks a visitor in, the host approves on WhatsApp or SMS, the pass prints, and you know exactly who is on your premises, live.</p>
              <div className="cta-row">
                <a className="btn btn-green btn-lg" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Book a demo on WhatsApp</a>
                <a className="btn btn-line btn-lg" href="#how">See how it works<ArrowRight size={18} /></a>
              </div>
            </div>
            <GateDemo />
          </div>
        </section>

        <section className="how" id="how">
          <div className="wrap">
            <h2>From the gate to the pass in under a minute.</h2>
            <ol className="steps">
              <li>
                <ScanLine />
                <h3>The guard checks them in</h3>
                <p>Mobile number with OTP, a live photo and the ID card, masked on the tablet. Returning visitors are filled in automatically.</p>
              </li>
              <li>
                <MessageCircle />
                <h3>The host approves</h3>
                <p>A WhatsApp or SMS with the visitor’s photo and two buttons: Let them in, or Decline. No app, no login.</p>
              </li>
              <li>
                <Printer />
                <h3>The pass prints</h3>
                <p>The guard hears a chime, the pass prints with photo and validity, and the visitor is on the live list until they leave.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="product" id="product">
          <div className="wrap product-grid">
            <div className="product-head">
              <h2>One system for everything that crosses your gate.</h2>
              <p>People, events, material and parcels, each with its own register, all on the same screen your guards already use.</p>
            </div>
            <ul className="modules">
              {MODULES.map(({ icon: Icon, name, line, facts }) => (
                <li key={name}>
                  <span className="m-icon"><Icon /></span>
                  <div>
                    <h3>{name}</h3>
                    <p>{line}</p>
                    <ul className="facts">{facts.map((f) => <li key={f}><BadgeCheck size={15} />{f}</li>)}</ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="trust" id="trust">
          <div className="wrap">
            <h2>Security your auditors will sign off.</h2>
            <div className="trust-grid">
              {TRUST.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="own">
          <div className="wrap own-grid">
            <div>
              <h2>Your property gets its own address.</h2>
              <p>Every client runs on a private copy of GateSmartX at its own address, with its own data, its own logos and its own colours. One property’s records never sit next to another’s.</p>
            </div>
            <div className="addr" aria-label="Example client address">
              <div className="addr-bar"><i /><i /><i /><span><ShieldCheck size={14} />yourhotel.gatesmartx.com</span></div>
              <div className="addr-body">
                <span className="addr-logo">Your logo</span>
                <span className="addr-line" /><span className="addr-line short" />
                <span className="addr-btn">Sign in</span>
              </div>
            </div>
          </div>
        </section>

        <section className="for">
          <div className="wrap">
            <h2>Made for properties where the gate matters.</h2>
            <ul className="for-list">{FOR.map(({ icon: Icon, name }) => <li key={name}><Icon />{name}</li>)}</ul>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="wrap cta-inner">
            <h2>See it at your gate.</h2>
            <p>A 20-minute demo on your phone: we check a visitor in, you approve it on WhatsApp.</p>
            <div className="cta-row">
              <a className="btn btn-green btn-lg" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp +91 80104 77969</a>
              <a className="btn btn-line-light btn-lg" href={MAIL}><Mail size={18} />{EMAIL}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-inner">
          <span className="wordmark small"><Mark /><span className="wm">Gate<span>SmartX</span></span></span>
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
      <path d="M9 25V15a7 7 0 0 1 14 0v10" fill="none" stroke="var(--mark-ink, #fff)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="m12.4 19.4 2.7 2.7 4.8-5.2" fill="none" stroke="var(--green)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
