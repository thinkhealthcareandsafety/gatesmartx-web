'use client';

import { useEffect, useRef, ReactNode } from 'react';

// Tiny IntersectionObserver wrapper. Adds `data-visible` to the element when it
// enters the viewport. CSS does all the actual animation via the .reveal class.
// If JS is disabled or motion is reduced, elements are shown without animation.
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour reduced motion: show immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.setAttribute('data-visible', 'true');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.setAttribute('data-visible', 'true'), delay);
          } else {
            el.setAttribute('data-visible', 'true');
          }
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
