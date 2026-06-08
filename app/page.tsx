import Link from 'next/link';
import { TrendingUp, BookOpen, Lightbulb, GraduationCap, Zap, ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/AnimatedSection';
import { ScrollReveal } from '@/components/AnimatedSection';
import HeroStats from '@/components/HeroStats';
import PortfolioChart from '@/components/PortfolioChart';
import { upcomingEvents } from '@/lib/data';

export default function HomePage() {
  const featuredEvents = upcomingEvents.slice(0, 3);

  return (
    <main className="pt-16">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="grain-overlay bg-surface-subtle border-b border-border">
        <div className="wrap relative z-10 py-24 md:py-36">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            {/* Left 60% */}
            <div className="md:col-span-3">
              <FadeUp delay={0}>
                <p className="label-gold mb-5">
                  University of Edinburgh &nbsp;·&nbsp; Est. 2024
                </p>
              </FadeUp>
              <FadeUp delay={0.08}>
                <h1 className="font-display font-bold text-5xl md:text-6xl text-ink leading-[1.1] mb-6">
                  University of Edinburgh&apos;s Web3 Society — trading, researching, and building at the frontier of blockchain.
                </h1>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p className="text-ink-secondary font-sans text-xl leading-relaxed mb-10 max-w-xl">
                  A student-run organisation operating a real $13,000 investment fund, a structured blockchain education programme, and a blockchain venture think tank. No simulations. No hand-holding.
                </p>
              </FadeUp>
              <FadeUp delay={0.22}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/fund" className="btn-gold">
                    Explore the Fund <ArrowRight size={16} />
                  </Link>
                  <Link href="/education" className="btn-outline">
                    View Education
                  </Link>
                </div>
              </FadeUp>
            </div>
            {/* Right 40% */}
            <div className="md:col-span-2">
              <HeroStats />
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Divisions ──────────────────────────────────────────────── */}
      <section className="bg-surface-subtle border-b border-border section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-3">Three Divisions</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-14">
              Everything we do falls into one of three pillars.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp size={22} className="text-gold" />,
                title: 'Trading & Investment',
                body: 'We actively manage a $13,000 fund across BTC, ETH, Gold and select altcoins. Allocations are driven by macro regime analysis, market cycle theory, and on-chain data. Members participate in trade discussions, fund reports, and deployment decisions.',
                link: { label: 'View the Fund', href: '/fund' },
              },
              {
                icon: <BookOpen size={22} className="text-gold" />,
                title: 'Blockchain Education',
                body: 'Eight structured sessions covering everything from the history of money and cryptographic primitives, through to DeFi, tokenomics, macro-economic analysis, and technical trading. Course notes written entirely in-house.',
                link: { label: 'View the Curriculum', href: '/education' },
              },
              {
                icon: <Lightbulb size={22} className="text-gold" />,
                title: 'Web3 Think Tank',
                body: 'We identify real-world problems where blockchain provides a genuine solution — and then we build. Our first project, a Vessel Health Passport on-chain, is already live in beta.',
                link: { label: 'Explore Projects', href: '/thinktank' },
              },
            ].map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.08}>
                <div className="card p-8 h-full flex flex-col border-t-4 border-t-gold hover:shadow-md transition-shadow duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                    {d.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink mb-3">{d.title}</h3>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed flex-1 mb-5">{d.body}</p>
                  <Link href={d.link.href} className="inline-flex items-center gap-1.5 text-sm font-sans text-gold-dark font-medium hover:gap-3 transition-all duration-200">
                    {d.link.label} <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join ─────────────────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border section-py">
        <div className="wrap">
          <ScrollReveal>
            <h2 className="font-display font-bold text-4xl text-ink mb-14 text-center">
              Why Join W3TID?
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={20} className="text-gold" />,
                title: 'Real Capital',
                body: 'Manage a share of our actively traded fund from day one. Real positions, real P&L, real decisions. No simulations.',
              },
              {
                icon: <GraduationCap size={20} className="text-gold" />,
                title: 'Real Knowledge',
                body: 'Eight structured sessions covering blockchain fundamentals, DeFi, tokenomics, macro analysis, and trading psychology — written and delivered by our own members.',
              },
              {
                icon: <Zap size={20} className="text-gold" />,
                title: 'Real Impact',
                body: 'Our Think Tank is already shipping a live product. Come build the next one — whether that\'s on-chain infrastructure, a new financial instrument, or something nobody has thought of yet.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink mb-2">{item.title}</h3>
                    <p className="text-sm font-sans text-ink-secondary leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fund Snapshot ─────────────────────────────────────────────────── */}
      <section className="bg-surface-subtle border-b border-border section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-3">Fund Performance</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-12">
              The W3TID Portfolio — live since November 2025.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-5 gap-10 items-start">
            {/* Stats */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
                {[
                  { label: 'Total Fund Size', value: '$13,000' },
                  { label: 'Active Since', value: 'Nov 2025' },
                  { label: 'Stakeholders', value: '25' },
                  { label: 'Cash Reserve', value: '50.4%' },
                ].map((s) => (
                  <div key={s.label} className="bg-surface p-6">
                    <p className="label-caps mb-2">{s.label}</p>
                    <p className="font-display font-bold text-2xl text-ink">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Chart */}
            <div className="md:col-span-3">
              <PortfolioChart height={260} />
              <p className="text-xs font-sans text-ink-muted mt-3 leading-relaxed italic">
                Total portfolio return reflects full $13,000 including cash reserves (~50%).
                Invested return reflects deployed capital only. All figures USD.
              </p>
              <div className="mt-6">
                <Link href="/fund" className="inline-flex items-center gap-2 text-sm font-sans text-gold-dark font-medium hover:gap-3 transition-all">
                  View Full Fund Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Events Teaser ─────────────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border section-py">
        <div className="wrap">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="label-gold mb-2">Upcoming Speakers</p>
                <h2 className="font-display font-bold text-4xl text-ink">Industry practitioners, coming to Edinburgh.</h2>
              </div>
              <Link href="/events" className="hidden md:inline-flex items-center gap-2 text-sm font-sans text-gold-dark font-medium hover:gap-3 transition-all">
                All Events <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredEvents.map((ev, i) => (
              <ScrollReveal key={ev.name} delay={i * 0.08}>
                <div className="card p-7 h-full hover:shadow-md transition-shadow duration-200">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-sm text-gold-dark">
                      {ev.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <p className="font-display font-bold text-lg text-ink mb-0.5">{ev.name}</p>
                  <p className="text-xs font-sans text-ink-muted mb-3">{ev.role} · {ev.org}</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-4 line-clamp-3">{ev.bio}</p>
                  <span className="inline-block text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 bg-surface-subtle border border-border rounded-sm text-ink-muted">
                    {ev.date}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link href="/events" className="btn-outline w-full justify-center">
              All Events <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Join Section ─────────────────────────────────────────────────── */}
      <section id="join" className="bg-gold section-py">
        <div className="wrap text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
              Come find us at the Society Summer Fair.
            </h2>
            <p className="text-white/80 font-sans text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Applications for the 2025/26 academic year open at the University of Edinburgh Society Fair. In the meantime, follow us on LinkedIn for weekly market updates and session insights.
            </p>
            <a
              href="https://www.linkedin.com/company/uoe-web3-trading-investment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white-ol inline-flex items-center gap-2"
            >
              Follow on LinkedIn
            </a>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
