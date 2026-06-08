import { Download, FileText, TrendingDown } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import PortfolioChart from '@/components/PortfolioChart';
import AllocationChart from '@/components/AllocationChart';
import MonthlyReturnsChart from '@/components/MonthlyReturnsChart';
import EmailCapture from '@/components/EmailCapture';
import { holdings, fundReports } from '@/lib/data';

const philosophy = [
  { number: '01', title: 'Macro-Regime Driven Allocation', body: 'We begin every allocation decision by determining the prevailing macro regime. In bear markets, we concentrate in BTC and Gold — the highest-quality, most liquid assets — and hold significant cash. We do not chase altcoin performance when macro conditions are unfavourable. When quantitative easing restarts and interest rates fall below the neutral rate, we rotate toward higher-beta altcoin exposure. The regime determines the portfolio, not the other way round.' },
  { number: '02', title: 'Market Cycle Theory', body: 'We believe the Bitcoin 4-year halving cycle remains structurally intact, though muted in magnitude due to institutional adoption. BTC historically peaks in Q4 of the post-halving year, drops through Q1/Q2, consolidates in a summer lull, and trends upward exiting Q4 of the following year. We track the MVRV-Z Score, BTC Dominance, Puell Multiple, and the 50-day and 200-week moving averages to identify cycle position.' },
  { number: '03', title: 'Disciplined, Level-Based Deployment', body: 'We do not deploy capital in lump sums. We identify structural support levels derived from on-chain realised value, prior ATHs, and macro comparisons — and pre-set limit orders at those levels. This removes emotional decision-making from the process. Our current deployment targets for BTC sit in the $63,000–$54,000 range, with approximately 30% of total capital reserved for the anticipated summer lull.' },
  { number: '04', title: 'Fundamental + Technical Analysis Combined', body: 'Every position is evaluated on both fundamental and technical merit. Fundamentally, we assess tokenomics, use case quality, team credibility, and on-chain adoption metrics. Technically, we use Moving Averages (50D, 200W), RSI, Open Interest, CME Futures positioning, and Funding Rates to time entries. We never hold a position we cannot fundamentally justify.' },
];

export default function FundPage() {
  return (
    <main className="pt-14">

      {/* Hero */}
      <div className="border-b border-border bg-surface-subtle">
        <div className="wrap py-20">
          <p className="label-gold mb-4">Trading &amp; Investment Division</p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink mb-4 tracking-tight max-w-3xl leading-tight">
            An actively managed crypto fund, run by students, built on rigorous analysis.
          </h1>
          <p className="text-ink-secondary font-sans text-base max-w-2xl leading-relaxed">
            We manage $13,000 across digital assets and commodities, deploying capital according to a macro-driven, regime-based investment framework. Monthly fund reports published to all stakeholders.
          </p>
        </div>
      </div>

      {/* Key stats bar */}
      <section className="border-b border-border bg-surface">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { label: 'Total Portfolio', value: '$13,000', sub: 'AUM' },
              { label: 'Total Return', value: '−7.74%', sub: 'incl. cash', neg: true },
              { label: 'Invested Return', value: '−15.54%', sub: 'deployed capital', neg: true },
              { label: 'Benchmark BGCI', value: '−13.10%', sub: 'same period', neg: true },
            ].map(s => (
              <div key={s.label} className="bg-surface p-6">
                <p className="label-caps mb-2">{s.label}</p>
                <p className={`font-sans font-semibold text-2xl mb-0.5 ${s.neg ? 'text-red-500' : 'text-ink'}`}>{s.value}</p>
                <p className="text-xs text-ink-muted font-sans">{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="py-3 text-xs font-sans text-ink-muted italic border-t border-border px-1">
            Total return includes ~50% cash position. Cash acts as a buffer, significantly dampening drawdowns relative to invested capital.
          </p>
        </div>
      </section>

      {/* Charts: cumulative + monthly returns */}
      <section className="border-b border-border bg-surface-subtle">
        <div className="wrap section-py">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal>
              <p className="label-caps mb-2">Cumulative Performance</p>
              <p className="font-sans font-semibold text-lg text-ink mb-6 tracking-tight">Portfolio Returns Since Inception</p>
              <PortfolioChart height={280} />
              <p className="text-xs font-sans text-ink-muted mt-3 italic">
                Gold = total portfolio (w/ cash) · Grey dashed = invested capital only
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p className="label-caps mb-2">Monthly Breakdown</p>
              <p className="font-sans font-semibold text-lg text-ink mb-6 tracking-tight">Fund vs Bitcoin — Month by Month</p>
              <MonthlyReturnsChart />
              <p className="text-xs font-sans text-ink-muted mt-3 italic">
                Gold bars = fund return · Outlined bars = Bitcoin return
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Risk metrics */}
      <section className="border-b border-border bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-2">Risk Metrics</p>
            <p className="font-sans font-semibold text-lg text-ink mb-8 tracking-tight">Cash-buffered portfolio vs full BTC exposure</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {[
              { label: 'Max Drawdown (Total)', value: '−7.74%', note: 'vs −30%+ BTC' },
              { label: 'Max Drawdown (Invested)', value: '−15.54%', note: 'deployed capital' },
              { label: 'Cash Buffer', value: '50.4%', note: 'USDT reserve' },
              { label: 'BTC Allocation', value: '34.9%', note: 'of total portfolio' },
            ].map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.06}>
                <div className="bg-surface p-6">
                  <p className="label-caps mb-2">{m.label}</p>
                  <p className="font-sans font-semibold text-xl text-ink mb-1">{m.value}</p>
                  <p className="text-xs font-sans text-ink-muted">{m.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Holdings */}
      <section className="border-b border-border bg-surface-subtle">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-2">Current Portfolio</p>
            <p className="font-sans font-semibold text-lg text-ink mb-8 tracking-tight">Holdings as of January 2026</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10 items-start">
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
                  {holdings.map(h => (
                    <tr key={h.asset} className={`border-b border-border/50 hover:bg-surface-subtle/50 transition-colors ${h.asset === 'BTC' ? 'border-l-2 border-l-gold' : ''}`}>
                      <td className="py-3 pr-4 font-medium text-ink text-sm">{h.asset}</td>
                      <td className="py-3 pr-4 text-xs text-ink-muted">{h.category}</td>
                      <td className="py-3 pr-4 text-right tabular-nums text-sm text-ink">${h.invested.toLocaleString()}</td>
                      <td className="py-3 pr-4 text-right tabular-nums text-xs text-ink-muted">{h.avgBuy}</td>
                      <td className="py-3 pr-4 text-right tabular-nums text-sm text-ink">${h.nav.toLocaleString()}</td>
                      <td className={`py-3 text-right tabular-nums text-sm font-medium ${h.retPos === false ? 'text-red-500' : h.retPos === true ? 'text-green-600' : 'text-ink-muted'}`}>
                        {h.ret === 0 ? '0%' : `${h.ret}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="label-caps mb-4">Allocation</p>
              <AllocationChart />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="border-b border-border bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-2">Investment Philosophy</p>
            <p className="font-sans font-semibold text-3xl text-ink mb-12 tracking-tight">How we think about markets.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {philosophy.map((p, i) => (
              <ScrollReveal key={p.number} delay={i * 0.07}>
                <div className="bg-surface p-8 h-full hover:bg-surface-subtle transition-colors duration-200">
                  <p className="label-gold mb-3">{p.number}</p>
                  <p className="font-sans font-semibold text-base text-ink mb-4 tracking-tight">{p.title}</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Reports with previews */}
      <section className="border-b border-border bg-surface-subtle">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-2">Fund Reports</p>
            <p className="font-sans font-semibold text-3xl text-ink mb-12 tracking-tight">Monthly reports to stakeholders.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {fundReports.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 0.06}>
                <div className="card hover:bg-surface-subtle transition-colors duration-200 group">
                  {/* Report header */}
                  <div className="p-6 border-b border-border">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 border border-border flex items-center justify-center flex-shrink-0">
                          <FileText size={14} className="text-gold" />
                        </div>
                        <div>
                          <p className="font-sans font-semibold text-sm text-ink">{r.title}</p>
                          <p className="label-caps text-ink-muted">{r.date}</p>
                        </div>
                      </div>
                      <a
                        href={r.pdf}
                        download
                        className="flex items-center gap-1.5 text-xs font-sans text-gold font-medium hover:text-gold-dark transition-colors whitespace-nowrap"
                      >
                        <Download size={12} /> Download
                      </a>
                    </div>
                    <p className="text-sm font-sans text-ink-secondary leading-relaxed">{r.headline}</p>
                  </div>
                  {/* Key stats preview */}
                  <div className="grid grid-cols-3 gap-px bg-border">
                    {r.stats.map(s => (
                      <div key={s.label} className="bg-surface p-4">
                        <p className="label-caps mb-1.5">{s.label}</p>
                        <p className="font-sans font-semibold text-sm text-ink">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <div className="flex items-start gap-4 mb-6">
              <TrendingDown size={20} className="text-gold mt-1 flex-shrink-0" />
              <div>
                <p className="label-gold mb-2">Stakeholders</p>
                <p className="font-sans font-semibold text-3xl text-ink mb-4 tracking-tight">25 active stakeholders.</p>
              </div>
            </div>
            <p className="text-ink-secondary font-sans text-base leading-relaxed max-w-2xl mb-8">
              The W3TID fund has 25 active stakeholders drawn from Edinburgh&apos;s student body and the broader Web3 and blockchain industry. Stakeholders receive monthly fund reports, market overviews, and direct access to the team. Slots for the 2025/26 cohort are full — register interest for 2026/27 below.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <EmailCapture />
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
