import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 font-sans">
      <div className="wrap py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-display font-bold text-white text-lg mb-3">W3TID</p>
          <p className="text-sm leading-relaxed text-white/50">
            University of Edinburgh Web3 &amp; Blockchain Society. Trading, researching, and building at the frontier of blockchain.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <p className="label-caps text-white/40 mb-4">Navigate</p>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Home', href: '/' },
              { label: 'Fund', href: '/fund' },
              { label: 'Education', href: '/education' },
              { label: 'Think Tank', href: '/thinktank' },
              { label: 'Events', href: '/events' },
              { label: 'Team', href: '/team' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="label-caps text-white/40 mb-4">Contact</p>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:lgodtfredsen@w3tid.uk"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={14} />
              lgodtfredsen@w3tid.uk
            </a>
            <a
              href="https://www.linkedin.com/company/uoe-web3-trading-investment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
                LinkedIn
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div>
          <p className="label-caps text-white/40 mb-4">Disclaimer</p>
          <p className="text-xs leading-relaxed text-white/40">
            W3TID is a student society. Nothing on this website constitutes financial advice.
            Fund reports are for educational and informational purposes only. Past performance
            does not guarantee future results.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>© 2025 Web3 Trading &amp; Investment Division, University of Edinburgh</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
