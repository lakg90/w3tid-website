import Link from 'next/link';
import { TrendingUp, BookOpen, Lightbulb, GraduationCap, Zap, ArrowRight } from 'lucide-react';
import { FadeUp, ScrollReveal } from '@/components/AnimatedSection';
import HeroStats from '@/components/HeroStats';
import LogoAnimation from '@/components/LogoAnimation';
import PortfolioChart from '@/components/PortfolioChart';
import { upcomingEvents } from '@/lib/data';
import Image from 'next/image';

export default function HomePage() {
  const featured = upcomingEvents.slice(0, 3);

  return (
    <main className="pt-14">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-surface-subtle">
        <div className="wrap py-20 md:py-28">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-3">
              <FadeUp delay={0}>
                <p className="label-gold mb-5">University of Edinburgh &nbsp;·&nbsp; Est. 2024</p>
              </FadeUp>
              <FadeUp delay={0.07}>
                <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink leading-[1.15] tracking-tight mb-5">
                  University of Edinburgh&apos;s Web3 Society — trading, researching, and building at the frontier of blockchain.
                </h1>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="text-ink-secondary font-sans text-base leading-relaxed mb-8 max-w-xl">
                  A student-run organisation operating a real $13,000 investment fund, a structured blockchain education programme, and a blockchain venture think tank.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  <Link href="/fund" className="btn-gold">Explore the Fund <ArrowRight size={14} /></Link>
                  <Link href="/education" className="btn-outline">View Education</Link>
                </div>
              </FadeUp>
            </div>
            <div className="md:col-span-2 flex flex-col gap-8">
              <LogoAnimation />
              <HeroStats />
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Divisions ──────────────────────────────────────────────── */}
      <section className="border-b border-border bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-3">Three Divisions</p>
            <h2 className="font-sans font-semibold text-3xl text-ink mb-12 tracking-tight">
              Everything we do falls into one of three pillars.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { icon: <TrendingUp size={18} />, title: 'Trading & Investment', body: 'We actively manage a $13,000 fund across BTC, ETH, Gold and select altcoins. Allocations are driven by macro regime analysis, market cycle theory, and on-chain data.', link: { label: 'View the Fund', href: '/fund' } },
              { icon: <BookOpen size={18} />, title: 'Blockchain Education', body: 'Eight structured sessions covering everything from the history of money and cryptographic primitives, through to DeFi, tokenomics, macro-economic analysis, and technical trading.', link: { label: 'View the Curriculum', href: '/education' } },
              { icon: <Lightbulb size={18} />, title: 'Web3 Think Tank', body: 'We identify real-world problems where blockchain provides a genuine solution — and build working prototypes. Our first project, a Vessel Health Passport on-chain, is already live in beta.', link: { label: 'Explore Projects', href: '/thinktank' } },
            ].map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.07}>
                <div className="bg-surface p-8 h-full flex flex-col hover:bg-surface-subtle transition-colors duration-200">
                  <div className="w-8 h-8 border border-border flex items-center justify-center mb-5 text-gold">
                    {d.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-base text-ink mb-3 tracking-tight">{d.title}</h3>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed flex-1 mb-5">{d.body}</p>
                  <Link href={d.link.href} className="inline-flex items-center gap-1.5 text-xs font-sans text-gold font-medium hover:gap-3 transition-all uppercase tracking-widest">
                    {d.link.label} <ArrowRight size={12} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join ─────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-surface-subtle">
        <div className="wrap section-py">
          <ScrollReveal>
            <h2 className="font-sans font-semibold text-3xl text-ink mb-12 tracking-tight">Why Join W3TID?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp size={16} />, title: 'Real Capital', body: 'Manage a share of our actively traded fund from day one. Real positions, real P&L, real decisions.' },
              { icon: <GraduationCap size={16} />, title: 'Real Knowledge', body: 'Eight structured sessions covering blockchain fundamentals, DeFi, tokenomics, macro analysis, and trading psychology — written and delivered by our own members.' },
              { icon: <Zap size={16} />, title: 'Real Impact', body: "Our Think Tank is already shipping a live product. Come build the next one — whether that's on-chain infrastructure, a new financial instrument, or something nobody has thought of yet." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <div className="border-t-2 border-t-gold pt-6">
                  <div className="text-gold mb-3">{item.icon}</div>
                  <h3 className="font-sans font-semibold text-base text-ink mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fund Snapshot ─────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-3">Fund Performance</p>
            <h2 className="font-sans font-semibold text-3xl text-ink mb-10 tracking-tight">
              The W3TID Portfolio — live since November 2025.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2 grid grid-cols-2 gap-px bg-border border border-border">
              {[
                { label: 'Fund Size', value: '$13,000' },
                { label: 'Active Since', value: 'Nov 2025' },
                { label: 'Stakeholders', value: '25' },
                { label: 'Cash Reserve', value: '50.4%' },
              ].map(s => (
                <div key={s.label} className="bg-surface p-5">
                  <p className="label-caps mb-1.5">{s.label}</p>
                  <p className="font-sans font-semibold text-xl text-ink">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="md:col-span-3">
              <PortfolioChart height={240} />
              <p className="text-xs font-sans text-ink-muted mt-3 leading-relaxed italic">
                Total portfolio return reflects full $13,000 including ~50% cash reserves. Invested return reflects deployed capital only.
              </p>
              <div className="mt-5">
                <Link href="/fund" className="inline-flex items-center gap-2 text-xs font-sans text-gold font-medium uppercase tracking-widest hover:gap-3 transition-all">
                  View Full Fund Details <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Events Teaser ─────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-surface-subtle">
        <div className="wrap section-py">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="label-gold mb-2">Upcoming Speakers</p>
                <h2 className="font-sans font-semibold text-3xl text-ink tracking-tight">Industry practitioners, coming to Edinburgh.</h2>
              </div>
              <Link href="/events" className="hidden md:inline-flex items-center gap-2 text-xs font-sans text-ink-muted hover:text-ink uppercase tracking-widest transition-colors">
                All Events <ArrowRight size={12} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {featured.map((ev, i) => (
              <ScrollReveal key={ev.name} delay={i * 0.07}>
                <div className="bg-surface p-6 h-full hover:bg-surface-subtle transition-colors duration-200">
                  {ev.logo ? (
                    <div className="w-10 h-10 border border-border flex items-center justify-center overflow-hidden mb-4">
                      <Image src={ev.logo} alt={ev.org} width={40} height={40} className="object-contain" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 border border-border flex items-center justify-center mb-4">
                      <span className="text-xs font-sans font-medium text-gold-dark">{ev.name.split(' ').map(n => n[0]).join('').slice(0,2)}</span>
                    </div>
                  )}
                  <p className="font-sans font-semibold text-base text-ink mb-0.5 tracking-tight">{ev.name}</p>
                  <p className="text-xs font-sans text-gold mb-3">{ev.role} · {ev.org}</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed line-clamp-3">{ev.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join ─────────────────────────────────────────────────────────── */}
      <section id="join" className="bg-gold">
        <div className="wrap section-py text-center">
          <ScrollReveal>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-white mb-4 tracking-tight">
              Come find us at the Society Summer Fair.
            </h2>
            <p className="text-white/80 font-sans text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Applications for the 2025/26 academic year open at the University of Edinburgh Society Fair. Follow us on LinkedIn for weekly market updates and session insights.
            </p>
            <a href="https://www.linkedin.com/company/uoe-web3-trading-investment" target="_blank" rel="noopener noreferrer" className="btn-white-ol inline-flex">
              Follow on LinkedIn
            </a>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
