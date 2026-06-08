'use client';

import Link from 'next/link';
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
];

function W3Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#D4A017"/>
      <circle cx="18" cy="18" r="16" fill="#A07810"/>
      <circle cx="18" cy="18" r="14" fill="#D4A017"/>
      {/* Arc text approximation — using small dots */}
      <text
        x="18" y="22"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="11"
        fill="#FAFAF8"
        letterSpacing="-0.5"
      >
        W3
      </text>
      {/* Small ring of dots to suggest arc text */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * 2 * Math.PI - Math.PI / 2;
        const r = 12.5;
        const x = 18 + r * Math.cos(angle);
        const y = 18 + r * Math.sin(angle);
        return <circle key={i} cx={x} cy={y} r="0.8" fill="#FAFAF8" opacity="0.6" />;
      })}
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-all duration-200 ${
          scrolled ? 'shadow-sm backdrop-blur-sm bg-background/95' : ''
        }`}
      >
        <div className="wrap h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 select-none">
            <W3Logo />
            <span className="font-display font-bold text-ink text-[1.1rem] leading-none">
              W3 Society
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3.5 py-2 text-sm font-sans transition-colors duration-200 ${
                  isActive(l.href)
                    ? 'text-ink font-medium'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="/#join"
              className="ml-4 btn-outline text-xs py-2 px-4"
            >
              Join the Society
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ink-secondary hover:text-ink transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-background pt-16">
          <div className="wrap py-8 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`py-3 text-base font-sans border-b border-border transition-colors ${
                  isActive(l.href) ? 'text-gold-dark font-medium' : 'text-ink-secondary'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a href="/#join" className="mt-6 btn-gold text-center justify-center">
              Join the Society
            </a>
          </div>
        </div>
      )}
    </>
  );
}
