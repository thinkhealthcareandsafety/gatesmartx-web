'use client';

import { useEffect, useState } from 'react';
import { Check, CheckCheck } from 'lucide-react';

// The product doing its job, in four beats: the guard sends the request, the host's phone gets it on WhatsApp,
// the host taps "Let them in", the gate shows the pass. Sample data. With reduced motion it rests on the last beat.
const BEATS = [2200, 1900, 1500, 2800];

export default function GateDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setStep(3); return undefined; }
    const t = setTimeout(() => setStep((s) => (s + 1) % BEATS.length), BEATS[step]);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="demo" data-step={step} aria-label="Sample: a visitor is checked in, the host approves on WhatsApp, the gate prints the pass" role="img">
      <div className="tablet">
        <div className="tablet-bar">
          <span className="tb-gate">Main gate</span>
          <span className="tb-live"><i />Live · 12 inside</span>
        </div>
        <div className="tablet-body">
          <div className="t-request">
            <div className="t-who">
              <span className="avatar">RK</span>
              <div>
                <strong>Ravi Kumar</strong>
                <span>Blue Dart · for Priya Shah, Front Office</span>
              </div>
            </div>
            <div className="t-rows">
              <span><b>Mobile</b>98••• ••210 · verified</span>
              <span><b>Aadhaar</b>XXXX XXXX 4821 · masked</span>
              <span><b>Pass for</b>4 hours</span>
            </div>
            <div className="t-state">
              <span className="t-wait"><i />Waiting for Priya</span>
              <span className="t-sent">Sent on WhatsApp</span>
            </div>
          </div>
          <div className="t-pass">
            <span className="tp-label">Visitor pass</span>
            <span className="tp-no">14</span>
            <span className="tp-name">Ravi Kumar</span>
            <span className="tp-meta">Let in 10:42 by Priya Shah · valid till 2:42 pm</span>
          </div>
        </div>
      </div>

      <div className="phone">
        <div className="phone-notch" />
        <div className="wa-head"><span className="wa-dp">GS</span><div><strong>Main Gate</strong><span>GateSmartX</span></div></div>
        <div className="wa-body">
          <div className="wa-old">Yesterday · Your Blue Dart parcel was collected with code 4821.</div>
          <div className="wa-msg">
            <div className="wa-photo"><span>RK</span></div>
            <p><strong>Ravi Kumar</strong> from Blue Dart is at the gate to meet you.</p>
            <p className="wa-small">Pass asked for: 4 hours</p>
            <div className="wa-btns">
              <span className="wa-yes"><Check size={15} strokeWidth={2.6} />Let them in</span>
              <span className="wa-no">Decline</span>
            </div>
          </div>
          <div className="wa-reply"><CheckCheck size={15} />You let Ravi Kumar in. Security has been told.</div>
        </div>
      </div>
      <span className="demo-note">Sample data</span>
    </div>
  );
}
