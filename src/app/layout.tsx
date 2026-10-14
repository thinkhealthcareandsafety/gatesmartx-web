import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Inter with optical sizes: the closest openly licensed face to the Apple system type the site is modelled on.
const inter = Inter({ subsets: ['latin'], axes: ['opsz'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://gatesmartx.com'),
  title: 'GateSmartX · Every gate. One calm system.',
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

export const viewport: Viewport = { themeColor: '#ffffff' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
