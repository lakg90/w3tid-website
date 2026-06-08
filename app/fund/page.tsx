import { FileText, Download } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import PortfolioChart from '@/components/PortfolioChart';
import AllocationChart from '@/components/AllocationChart';
import EmailCapture from '@/components/EmailCapture';
import { holdings, fundReports } from '@/lib/data';

const philosophy = [
  {
    number: '01',
    title: 'Macro-Regime Driven Allocation',
    body: 'We begin every allocation decision by determining the prevailing macro regime. In bear markets, we concentrate in BTC and Gold — the highest-quality, most liquid assets — and hold significant cash. We do not chase altcoin performance when macro conditions are unfavourable. When quantitative easing restarts and interest rates fall below the neutral rate (approximately the 2Y US Treasury yield), we rotate toward higher-beta altcoin exposure. The regime determines the portfolio, not the other way round.',
  },
  {
    number: '02',
    title: 'Market Cycle Theory',
    body: 'We believe the Bitcoin 4-year halving cycle remains structurally intact, though muted in magnitude due to institutional adoption. BTC historically peaks in Q4 of the post-halving year, drops through Q1/Q2, consolidates in a summer lull, and trends upward exiting Q4 of the following year. We track the MVRV-Z Score, BTC Dominance, Puell Multiple, and the 50-day and 200-week moving averages to identify cycle position. Our current base case: a consolidation phase through 2026 with an uptrend resuming in Q4.',
  },
  {
    number: '03',
    title: 'Disciplined, Level-Based Deployment',
    body: 'We do not deploy capital in lump sums. We identify structural support levels derived from on-chain realised value, prior ATHs, and macro comparisons — and pre-set limit orders at those levels. This removes emotional decision-making from the process. Our current deployment targets for BTC sit in the $63,000–$54,000 range, with approximately 30% of total capital reserved for the anticipated summer lull. We hold ~50% cash at all times until these levels are reached.',
  },
  {
    number: '04',
    title: 'Fundamental + Technical Analysis Combined',
    body: 'Every position is evaluated on both fundamental and technical merit. Fundamentally, we assess tokenomics (supply schedule, circulating vs total supply, inflation model, staking mechanics), use case quality, team credibility, and on-chain adoption metrics. Technically, we use Moving Averages (50D, 200W), RSI, Open Interest, CME Futures positioning, and Funding Rates to time entries. We never hold a position we cannot fundamentally justify — and we never enter one we cannot technically time.',
  },
];

export default function FundPage() {
  return (
    <main className="pt-16">

      {/* Hero */}
      <div className="border-b border-border bg-surface-subtle grain-overlay">
        <div className="wrap relative z-10 py-20">
          <p className="label-gold mb-4">Trading &amp; Investment Division</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ink mb-5 max-w-3xl leading-tight">
            An actively managed crypto fund, run by students, built on rigorous analysis.
          </h1>
          <p className="text-ink-secondary font-sans text-lg max-w-2xl leading-relaxed">
            We manage $13,000 across digital assets and commodities, deploying capital according to a macro-driven, regime-based investment framework. Monthly fund reports published to all stakeholders.
          </p>
        </div>
      </div>

      {/* Performance header stats */}
      <section className="border-b border-border bg-surface">
        <div className="wrap py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {[
              { label: 'Total Portfolio', value: '$13,000' },
              { label: 'Abs. Return (Total)', value: '−7.74%', neg: true },
              { label: 'Abs. Return (Invested)', value: '−15.54%', neg: true },
              { label: 'Benchmark (BGCI)', value: '−13.10%', neg: true },
            ].map((s) => (
              <div key={s.label} className="bg-surface p-6">
                <p className="label-caps mb-2">{s.label}</p>
                <p className={`font-display font-bold text-2xl ${s.neg ? 'text-red-500' : 'text-ink'}`}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs font-sans text-ink-muted italic">
            Total return includes ~50% cash position which dampens drawdowns significantly relative to invested capital.
          </p>
        </div>
      </section>

      {/* Performance chart */}
      <section className="border-b border-border bg-surface-subtle section-py-sm">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-caps mb-2">Performance Chart</p>
            <h2 className="font-display font-bold text-3xl text-ink mb-8">
              Portfolio Returns Since Inception
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <PortfolioChart height={340} />
            <p className="text-xs font-sans text-ink-muted mt-3 leading-relaxed italic">
              Total portfolio return reflects full $13,000 including cash reserves (~50%).
              Invested return reflects deployed capital only. All figures USD.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Holdings */}
      <section className="border-b border-border bg-surface section-py-sm">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Current Portfolio</p>
            <h2 className="font-display font-bold text-3xl text-ink mb-8">
              Holdings as of January 2026
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Table */}
            <div className="md:col-span-2 overflow-x-auto">
              <table className="w-full font-sans text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left label-caps pb-3 pr-4">Asset</th>
                    <th className="text-left label-caps pb-3 pr-4">Category</th>
                    <th className="text-right label-caps pb-3 pr-4">Invested</th>
                    <th className="text-right label-caps pb-3 pr-4">Avg Buy</th>
                    <th className="text-right label-caps pb-3 pr-4">NAV</th>
                    <th className="text-right label-caps pb-3">Return</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((h) => (
                    <tr
                      key={h.asset}
                      className={`border-b border-border/50 ${h.asset === 'BTC' ? 'border-l-2 border-l-gold' : ''}`}
                    >
                      <td className="py-3 pr-4 font-medium text-ink">{h.asset}</td>
                      <td className="py-3 pr-4 text-ink-muted">{h.category}</td>
                      <td className="py-3 pr-4 text-right tabular-nums text-ink">${h.invested.toLocaleString()}</td>
                      <td className="py-3 pr-4 text-right tabular-nums text-ink-muted">{h.avgBuy}</td>
                      <td className="py-3 pr-4 text-right tabular-nums text-ink">${h.nav.toLocaleString()}</td>
                      <td className={`py-3 text-right tabular-nums font-medium ${
                        h.retPos === false ? 'text-red-500' :
                        h.retPos === true  ? 'text-green-600' : 'text-ink-muted'
                      }`}>
                        {h.ret === 0 ? '0%' : `${h.ret}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Donut chart */}
            <div>
              <p className="label-caps mb-4">Portfolio Allocation</p>
              <AllocationChart />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="border-b border-border bg-surface-subtle section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Investment Philosophy</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-12">
              How we think about markets.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 0.08}>
                <div className="card p-8 h-full hover:shadow-md transition-shadow duration-200">
                  <p className="label-gold mb-3">{p.number}</p>
                  <h3 className="font-display font-bold text-xl text-ink mb-4">{p.title}</h3>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Reports */}
      <section className="border-b border-border bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Fund Reports</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-12">
              Monthly reports to stakeholders.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {fundReports.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 0.06}>
                <div className="card p-7 flex items-start gap-5 hover:shadow-md transition-shadow duration-200 group">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <FileText size={18} className="text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <p className="font-display font-bold text-lg text-ink">{r.title}</p>
                      <span className="label-caps text-ink-muted whitespace-nowrap">{r.date}</span>
                    </div>
                    <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-4">{r.headline}</p>
                    <a
                      href={r.href}
                      className="inline-flex items-center gap-1.5 text-xs font-sans text-gold-dark font-medium hover:gap-2.5 transition-all"
                    >
                      <Download size={13} /> Download Report
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="bg-surface-subtle section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Stakeholders</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-6">
              25 active stakeholders.
            </h2>
            <p className="text-ink-secondary font-sans text-lg leading-relaxed max-w-2xl mb-10">
              The W3TID fund has 25 active stakeholders drawn from Edinburgh&apos;s student body and the broader Web3 and blockchain industry. Stakeholders receive monthly fund reports, market overviews, and direct access to the team. Stakeholder slots for the 2025/26 cohort are currently full — register interest for 2026/27 below.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <EmailCapture />
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
