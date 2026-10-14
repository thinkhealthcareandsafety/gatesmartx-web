'use client';

import { useEffect, useState } from 'react';
import { Check, ChevronLeft, Clock, ShieldCheck } from 'lucide-react';

// The product doing its one job, the way the device itself would show it: the guard's tablet waits, the host's
// phone gets the request, one tap, and the tablet lets the visitor in. Sample data. Reduced motion rests on the result.
const BEATS = [2600, 1100, 3400];

export default function HeroDevices() {
  const [step, setStep] = useState(2);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    setStep(0);
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const run = () => { t = setTimeout(() => { i = (i + 1) % BEATS.length; setStep(i); run(); }, BEATS[i]); };
    run();
    return () => clearTimeout(t);
  }, []);

  const approved = step === 2;

  return (
    <figure className="stage" aria-label="Sample: a guard checks a visitor in on the tablet, the host approves on WhatsApp, the tablet lets the visitor in">
      <div className="stage-inner" data-step={step}>
        <div className="tablet">
          <div className="screen">
            <div className="t-bar">
              <span className="t-gate">Main gate</span>
              <span className="t-live"><i />Live · 12 inside</span>
            </div>
            <div className="t-body">
              <div className="t-card">
                <div className="t-who">
                  <span className="t-photo">RK</span>
                  <div>
                    <strong>Ravi Kumar</strong>
                    <span>Tata Projects · to meet Priya Shah</span>
                  </div>
                </div>
                <dl className="t-rows">
                  <div><dt>Mobile</dt><dd>98••• ••210 <Check size={12} strokeWidth={3} /></dd></div>
                  <div><dt>Aadhaar</dt><dd><b className="mask" />4821</dd></div>
                  <div><dt>Pass for</dt><dd>4 hours</dd></div>
                </dl>
                <div className={`t-state${approved ? ' ok' : ''}`}>
                  {approved
                    ? <><Check size={14} strokeWidth={3} />Let in by Priya Shah · Pass 14</>
                    : <><Clock size={14} />Waiting for Priya Shah</>}
                </div>
              </div>
              <div className="t-list">
                <span className="t-h">On premises</span>
                {[['Anita Rao', 'Engineering', '11'], ['Imran Shaikh', 'Facilities', '12'], ['Neha Gupta', 'Front Office', '13']].map(([n, d, p]) => (
                  <div className="t-row" key={n}><span className="t-av">{n.split(' ').map((w) => w[0]).join('')}</span><span><b>{n}</b>{d}</span><em>{p}</em></div>
                ))}
                <div className={`t-row t-new${approved ? ' in' : ''}`}><span className="t-av">RK</span><span><b>Ravi Kumar</b>Front Office</span><em>14</em></div>
              </div>
            </div>
          </div>
        </div>

        <div className="phone">
          <div className="screen">
            <div className="p-head"><ChevronLeft size={16} /><span className="p-dp">G</span><div><strong>Main gate</strong><span>Security desk</span></div></div>
            <div className="p-chat">
              <div className="bubble">
                <span className="b-photo">RK</span>
                <p><b>Ravi Kumar</b> from Tata Projects is at the gate to meet you.</p>
                <small>Pass asked for: 4 hours</small>
              </div>
              <div className="b-actions">
                <span className={`b-btn yes${step >= 1 ? ' pressed' : ''}`}>Let them in</span>
                <span className="b-btn">Decline</span>
              </div>
              <div className={`reply${approved ? ' show' : ''}`}><ShieldCheck size={13} />You let Ravi Kumar in. Security has been told.</div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="stage-note">Sample data</figcaption>
    </figure>
  );
}
