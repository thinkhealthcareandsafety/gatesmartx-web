import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Schibsted_Grotesk } from 'next/font/google';
import './globals.css';

const display = Schibsted_Grotesk({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-display' });
const sans = Geist({ subsets: ['latin'], variable: '--font-sans' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://gatesmartx.com'),
  title: 'GateSmartX · Visitor and gate management for hotels and campuses',
  description:
    'Check visitors in at the gate, get the host’s approval on WhatsApp or SMS in one tap, and print the pass. Events, material gate passes and couriers in the same system. Aadhaar masked on the device.',
  openGraph: {
    title: 'GateSmartX',
    description: 'Every gate. Every visitor. Approved in one tap.',
    url: 'https://gatesmartx.com',
    siteName: 'GateSmartX',
    locale: 'en_IN',
    type: 'website',
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
