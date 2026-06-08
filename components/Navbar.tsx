'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home',       href: '/' },
  { label: 'Fund',       href: '/fund' },
  { label: 'Education',  href: '/education' },
  { label: 'Think Tank', href: '/thinktank' },
  { label: 'Events',     href: '/events' },
  { label: 'Team',       href: '/team' },
  { label: 'Resources',  href: '/resources' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
      } border-b border-border`}>
        <div className="wrap h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 select-none">
            <Image src="/w3tid-logo.png" alt="W3TID" width={32} height={32} className="rounded-full" />
            <span className="font-sans font-semibold text-sm tracking-tight text-ink">W3 Society</span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`relative px-3 py-2 text-sm font-sans transition-colors duration-200 ${
                isActive(l.href) ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'
              }`}>
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-gold" />
                )}
              </Link>
            ))}
            <a href="/#join" className="ml-4 btn-gold text-xs py-2 px-4">
              Join
            </a>
          </nav>

          <button className="md:hidden p-2 text-ink-muted hover:text-ink" onClick={() => setOpen(v => !v)} aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-background pt-14 overflow-y-auto">
          <div className="wrap py-8 flex flex-col">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={`py-3 text-sm font-sans border-b border-border transition-colors ${
                isActive(l.href) ? 'text-ink font-medium' : 'text-ink-secondary'
              }`}>{l.label}</Link>
            ))}
            <a href="/#join" className="mt-6 btn-gold justify-center">Join the Society</a>
          </div>
        </div>
      )}
    </>
  );
}
