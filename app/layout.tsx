import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-ink font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
