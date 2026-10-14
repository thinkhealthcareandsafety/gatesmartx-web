'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';

// The cabinet behind every gate, live. Four hook rows, one per thing that crosses the gate; a tag hangs on a hook
// while its holder is on the premises. Every few seconds the host approves someone on WhatsApp and their tag swings
// onto a free hook, or someone leaves and their hook empties. Sample data. With reduced motion the board rests full.

type Kind = 'visitor' | 'guest' | 'material' | 'courier';
type Tag = { no: string; who: string };
type Slot = Tag | null;

export const ROWS: { kind: Kind; label: string; prefix: string }[] = [
  { kind: 'visitor', label: 'Visitors', prefix: 'V' },
  { kind: 'guest', label: 'Event guests', prefix: 'E' },
  { kind: 'material', label: 'Material', prefix: 'M' },
  { kind: 'courier', label: 'Couriers', prefix: 'C' },
];
const HOOKS = 10;

const PEOPLE: Record<Kind, string[]> = {
  visitor: ['Ravi Kumar', 'Anita Rao', 'Imran Shaikh', 'Neha Gupta', 'Karan Mehta', 'Farah Khan', 'Suresh Iyer', 'Pooja Nair', 'Arjun Das', 'Meera Joshi', 'Vikram Rana', 'Sana Mirza'],
  guest: ['Sharma wedding', 'Mehra wedding', 'Tech summit', 'Board meeting', 'Birthday dinner', 'Sangeet night'],
  material: ['Laptop, IT', 'Tools, Facilities', 'Linen, Housekeeping', 'Projector, Banquets', 'Chairs, Events', 'Server, IT'],
  courier: ['Blue Dart', 'Delhivery', 'DTDC', 'Ekart', 'India Post', 'Amazon'],
};
const HOSTS = ['Priya Shah', 'Rahul Verma', 'Dr. Kapoor', 'Front Office', 'Head, IT', 'Ms. Bhatia'];

// A fixed starting board, so the server and the browser draw the same thing.
const START: Slot[][] = ROWS.map((r, ri) => Array.from({ length: HOOKS }, (_, i) => {
  const filled = [[0, 1, 2, 4, 5, 7, 8], [0, 1, 2, 3, 5, 6], [1, 3, 6], [0, 2, 4, 7]][ri].includes(i);
  return filled ? { no: `${r.prefix}${String(i + 11 + ri * 7).padStart(2, '0')}`, who: PEOPLE[r.kind][(i + ri) % PEOPLE[r.kind].length] } : null;
}));

type Toast = { id: number; kind: Kind; text: string; leaving: boolean };

export default function KeyCabinet() {
  const [board, setBoard] = useState<Slot[][]>(START);
  const [fresh, setFresh] = useState<string | null>(null); // "row-hook" that just changed
  const [toast, setToast] = useState<Toast | null>(null);
  const n = useRef(0);
  const back = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState<{ x: number; y: number } | null>(null); // the 'now' light: where the last change happened

  // The light travels to whichever hook just changed, so the board always shows what happened last.
  useLayoutEffect(() => {
    if (!fresh || !back.current) return;
    const hook = back.current.querySelector<HTMLElement>(`[data-hook="${fresh}"]`);
    if (!hook || hook.offsetParent === null) { setNow(null); return; }
    const b = back.current.getBoundingClientRect();
    const h = hook.getBoundingClientRect();
    setNow({ x: h.left - b.left + h.width / 2, y: h.top - b.top + 25 });
  }, [fresh]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const tick = () => {
      n.current += 1;
      setBoard((prev) => {
        const next = prev.map((row) => row.slice());
        const ri = [0, 1, 0, 3, 2, 0, 1, 3][n.current % 8];
        const row = next[ri];
        const empties = row.map((s, i) => (s ? -1 : i)).filter((i) => i >= 0);
        const full = row.map((s, i) => (s ? i : -1)).filter((i) => i >= 0);
        const arrive = empties.length > 0 && (full.length < 6 || n.current % 3 !== 0);
        const kind = ROWS[ri].kind;
        if (arrive) {
          const hi = empties[(n.current * 7) % empties.length];
          const who = PEOPLE[kind][(n.current * 5) % PEOPLE[kind].length];
          const no = `${ROWS[ri].prefix}${String(20 + ((n.current * 13) % 79)).padStart(2, '0')}`;
          row[hi] = { no, who };
          const host = HOSTS[n.current % HOSTS.length];
          const text = kind === 'visitor' ? `${host} let ${who} in` : kind === 'guest' ? `${who}: guest let in by pass` : kind === 'material' ? `${host} approved gate pass: ${who}` : `${who} parcel logged, pickup code sent`;
          setToast({ id: n.current, kind, text, leaving: false });
          setFresh(`${ri}-${hi}`);
        } else if (full.length) {
          const hi = full[(n.current * 3) % full.length];
          row[hi] = null;
          setFresh(`${ri}-${hi}`);
        }
        return next;
      });
    };
    const t = setInterval(tick, 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!toast || toast.leaving) return undefined;
    const t = setTimeout(() => setToast((x) => (x && x.id === toast.id ? { ...x, leaving: true } : x)), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  const inside = board.flat().filter(Boolean).length;

  return (
    <figure className="cabinet" aria-label="Sample: a live board of everyone and everything on the premises, by type">
      <div className="cab-head">
        <span className="cab-plate">Main gate · Staff entrance · Service gate</span>
        <span className="cab-count"><i aria-hidden="true" />{inside} on premises now</span>
      </div>
      <span className="hinge h1" aria-hidden="true" /><span className="hinge h2" aria-hidden="true" />
      <span className="lock" aria-hidden="true"><i /></span>
      <div className="cab-back" ref={back}>
        {now && <span className="now-light" style={{ transform: `translate(${now.x}px, ${now.y}px)` }} aria-hidden="true" />}
        {ROWS.map((r, ri) => (
          <div className={`cab-row k-${r.kind}`} key={r.kind}>
            <span className="row-label"><i aria-hidden="true" />{r.label}</span>
            <ol className="hooks" aria-label={`${r.label} on premises`}>
              {board[ri].map((slot, hi) => (
                <li key={hi} data-hook={`${ri}-${hi}`} className={`hook${fresh === `${ri}-${hi}` ? ' fresh' : ''}`}>
                  <span className="hook-no" aria-hidden="true">{String(hi + 1).padStart(2, '0')}</span>
                  <span className="peg" aria-hidden="true" />
                  {slot && (
                    <span className="tag" key={slot.no} title={slot.who}>
                      <span className="ring" aria-hidden="true" />
                      <span className="insert">{slot.no}</span>
                      <span className="sr-only">{slot.who}</span>
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <figcaption className="cab-foot">
        <span className="feed" aria-hidden="true">
          {toast && (
            <span key={toast.id} className={`approval k-${toast.kind}${toast.leaving ? ' out' : ''}`}>
              <span className="ap-icon"><MessageCircle size={14} strokeWidth={2.4} /></span>
              <b>{toast.kind === 'courier' ? 'Logged at the gate' : toast.kind === 'guest' ? 'Pass scanned' : 'Approved on WhatsApp'}</b>
              <span className="ap-text">{toast.text}</span>
            </span>
          )}
        </span>
        <span className="cab-note">Sample data · live demo</span>
      </figcaption>
    </figure>
  );
}
