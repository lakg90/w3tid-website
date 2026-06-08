import Link from 'next/link';
import { Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 font-sans">
      <div className="wrap py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <p className="font-sans font-semibold text-white text-sm mb-3">W3TID</p>
          <p className="text-xs leading-relaxed text-white/40">
            University of Edinburgh Web3 &amp; Blockchain Society — trading, researching, and building at the frontier of blockchain.
          </p>
        </div>

        <div>
          <p className="label-caps text-white/30 mb-4">Navigate</p>
          <ul className="space-y-2.5 text-xs">
            {['/', '/fund', '/education', '/thinktank', '/events', '/team', '/resources'].map((href, i) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {['Home', 'Fund', 'Education', 'Think Tank', 'Events', 'Team', 'Resources'][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-caps text-white/30 mb-4">Contact</p>
          <div className="space-y-2.5 text-xs">
            <a href="mailto:lgodtfredsen@w3tid.uk" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={12} /> lgodtfredsen@w3tid.uk
            </a>
            <a href="mailto:ssarbaz@w3tid.uk" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={12} /> ssarbaz@w3tid.uk
            </a>
            <a href="mailto:jdavidson@w3tid.uk" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={12} /> jdavidson@w3tid.uk
            </a>
            <a href="https://www.linkedin.com/company/uoe-web3-trading-investment" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <ExternalLink size={12} /> LinkedIn
            </a>
          </div>
        </div>

        <div>
          <p className="label-caps text-white/30 mb-4">Disclaimer</p>
          <p className="text-xs leading-relaxed text-white/30">
            W3TID is a student society. Nothing on this website constitutes financial advice.
            Fund reports are for educational purposes only. Past performance does not guarantee future results.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-white/25">
          <p>© 2025 Web3 Trading &amp; Investment Division, University of Edinburgh</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
