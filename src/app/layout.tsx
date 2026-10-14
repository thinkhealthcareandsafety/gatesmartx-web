import type { Metadata, Viewport } from 'next';
import { Schibsted_Grotesk, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

// Display face: Schibsted Grotesk — tight, confident headings
const display = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-display',
});

// Body text: Geist — clean, modern, premium B2B feel
const sans = Geist({ subsets: ['latin'], variable: '--font-sans' });

// Mono: Geist Mono — only for small labels
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://gatesmartx.com'),
  title: 'GateSmartX · Visitor and gate management for hotels and campuses',
  description:
    "Check visitors in at the gate, get the host\u2019s approval on WhatsApp or SMS in one tap, and print the pass. Events, material gate passes and couriers in the same system. Aadhaar masked on the device.",
  keywords: [
    'visitor management',
    'gate management',
    'hotel visitor management India',
    'WhatsApp visitor approval',
    'Aadhaar gate pass',
    'corporate visitor management',
    'hospital visitor system',
    'residential society gate management',
    'DPDP compliant visitor management',
  ],
  openGraph: {
    title: 'GateSmartX \u00b7 Visitor and gate management for hotels and campuses',
    description: 'Every gate. Every visitor. Approved in one tap.',
    url: 'https://gatesmartx.com',
    siteName: 'GateSmartX',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GateSmartX \u00b7 Visitor and gate management for hotels and campuses',
    description: 'Every gate. Every visitor. Approved in one tap.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = { themeColor: '#0b0d0c' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
