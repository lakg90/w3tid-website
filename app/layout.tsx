import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'W3TID — University of Edinburgh Web3 & Blockchain Society',
  description:
    'University of Edinburgh Web3 Trading & Investment Division — operating a real $13,000 crypto fund, a structured blockchain education programme, and a venture think tank.',
  openGraph: {
    title: 'W3TID — University of Edinburgh',
    description: 'Trading, researching, and building at the frontier of blockchain.',
    siteName: 'W3TID',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-background text-ink font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
