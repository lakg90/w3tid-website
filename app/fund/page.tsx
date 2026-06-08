import { Download, FileText, ArrowDownRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import PortfolioChart from '@/components/PortfolioChart';
import IndexedChart from '@/components/IndexedChart';
import AllocationChart from '@/components/AllocationChart';
import EmailCapture from '@/components/EmailCapture';
import BTCTicker from '@/components/BTCTicker';
import { allocationData, fundReports, swingTrade, sessions } from '@/lib/data';

const philosophy = [
  { number: '01', title: 'Macro-Regime Driven Allocation', body: 'We begin every allocation decision by determining the prevailing macro regime. In bear markets, we concentrate in BTC and Gold — the highest-quality, most liquid assets — and hold significant cash. We do not chase altcoin performance when macro conditions are unfavourable. When quantitative easing restarts and interest rates fall below the neutral rate, we rotate toward higher-beta altcoin exposure. The regime determines the portfolio, not the other way round.' },
  { number: '02', title: 'Market Cycle Theory', body: 'We believe the Bitcoin 4-year halving cycle remains structurally intact, though muted in magnitude due to institutional adoption. BTC historically peaks in Q4 of the post-halving year, drops through Q1/Q2, consolidates in a summer lull, and trends upward exiting Q4 of the following year. We track the MVRV-Z Score, BTC Dominance, Puell Multiple, and the 50-day and 200-week moving averages to identify cycle position.' },
  { number: '03', title: 'Disciplined, Level-Based Deployment', body: 'We do not deploy capital in lump sums. We identify structural support levels derived from on-chain realised value, prior ATHs, and macro comparisons — and pre-set limit orders at those levels. This removes emotional decision-making from the process. Our current deployment targets for BTC sit in the $63,000–$54,000 range, with approximately 30% of total capital reserved for the anticipated summer lull.' },
  { number: '04', title: 'Fundamental + Technical Analysis Combined', body: 'Every position is evaluated on both fundamental and technical merit. Fundamentally, we assess tokenomics, use case quality, team credibility, and on-chain adoption metrics. Technically, we use Moving Averages (50D, 200W), RSI, Open Interest, CME Futures positioning, and Funding Rates to time entries. We never hold a position we cannot fundamentally justify.' },
];

const thesisSignals = [
  {
    n: '01',
    signal: 'Market Cycle — Seasonal Summer Lull',
    detail: 'In post-halving years, BTC has historically entered a 2–3 month drawdown through Q2/Q3 before resuming the bull trend into Q4. 2021 saw a 55% decline from the May peak; 2017 a 40% retrace in the same window. With BTC having peaked near $109K in Nov 2025 and bouncing through Q1 2026, entering a short in late May aligned precisely with the start of the historical lull window.',
  },
  {
    n: '02',
    signal: 'MVRV — Price Above Realised Value',
    detail: 'The MVRV ratio (Market Value ÷ Realised Value) measures whether the average coin holder is in profit. Markets find a durable bottom when MVRV dips below 1.0 — when the average holder is at or below break-even. At $77.5K, MVRV remained above 1.4, indicating no capitulation yet. The $60–65K range corresponded to approximate realised value, providing a data-driven exit target.',
  },
  {
    n: '03',
    signal: 'BTC Dominance Divergence',
    detail: 'BTC dominance was rising while price was declining — a divergence that historically precedes broader market risk-off. When dominance rises in a falling market, capital is defensively rotating out of alts into BTC, but the macro direction remains down. This confirmed the short-side bias rather than signalling a rotation opportunity into risk assets.',
  },
];

export default function FundPage() {
  return (
    <main className="pt-14">
      <BTCTicker />

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

      {/* Key stats */}
      <section className="border-b border-border bg-surface">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { label: 'Total Portfolio', value: '$13,000', sub: 'AUM' },
              { label: 'Total Return',    value: '−7.74%',  sub: 'incl. 50% cash', neg: true },
              { label: 'Invested Return', value: '−15.54%', sub: 'deployed capital', neg: true },
              { label: 'Benchmark BGCI', value: '−13.10%', sub: 'same period',      neg: true },
            ].map(s => (
              <div key={s.label} className="bg-surface p-6">
                <p className="label-caps mb-2">{s.label}</p>
                <p className={`font-sans font-semibold text-2xl mb-0.5 ${s.neg ? 'text-red-500' : 'text-ink'}`}>{s.value}</p>
                <p className="text-[10px] text-ink-muted font-sans uppercase tracking-widest">{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="py-3 px-1 text-xs font-sans text-ink-muted italic border-t border-border">
            The 50% cash position acts as a structural buffer — total portfolio drawdown is roughly half that of the invested portion.
          </p>
        </div>
      </section>

      {/* Charts — Cumulative + Indexed side by side */}
      <section className="border-b border-border bg-surface-subtle">
        <div className="wrap section-py">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal>
              <p className="label-caps mb-1">Cumulative Performance</p>
              <p className="font-sans font-semibold text-base text-ink mb-1 tracking-tight">Portfolio Returns Since Inception</p>
              <p className="text-xs font-sans text-ink-muted mb-5">Hover any point to see both return lines</p>
              <PortfolioChart height={280} />
              <p className="text-xs font-sans text-ink-muted mt-3 italic">
                Gold = total portfolio (w/ cash) · Grey dashed = invested capital only
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="label-caps mb-1">Fund vs Bitcoin — Indexed to 100</p>
              <p className="font-sans font-semibold text-base text-ink mb-1 tracking-tight">Same capital. Very different drawdowns.</p>
              <div className="flex gap-5 mb-5">
                <div><p className="label-caps mb-1">Fund</p><p className="font-sans font-semibold text-sm text-red-500">92.26</p></div>
                <div><p className="label-caps mb-1">BTC</p><p className="font-sans font-semibold text-sm text-ink-muted">57.49</p></div>
                <div className="border-l border-border pl-5"><p className="label-caps mb-1">Alpha</p><p className="font-sans font-semibold text-sm text-gold">+34.8 pts</p></div>
              </div>
              <IndexedChart height={280} />
              <p className="text-xs font-sans text-ink-muted mt-3 italic">
                Both indexed to 100 at inception (Nov 2025). Jun reflects performance to 8 Jun 2026.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Allocation horizontal banner */}
      <section className="border-b border-border bg-surface">
        <div className="wrap py-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Donut */}
              <div className="w-48 flex-shrink-0">
                <AllocationChart />
              </div>
              {/* Divider */}
              <div className="hidden md:block w-px self-stretch bg-border" />
              {/* Horizontal breakdown */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
                {allocationData.map(d => (
                  <div key={d.name} className="bg-surface px-5 py-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: d.color }} />
                      <p className="text-xs font-sans font-medium text-ink">{d.name}</p>
                    </div>
                    <p className="font-sans font-semibold text-xl text-ink">{d.value}%</p>
                    <p className="text-[10px] font-sans text-ink-muted mt-0.5">
                      ≈ ${Math.round(d.value / 100 * 13000).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Swing Trade */}
      <section className="border-b border-border bg-surface-subtle">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-2">Swing Trade Case Study</p>
            <h2 className="font-sans font-semibold text-3xl text-ink mb-3 tracking-tight">
              Summer Lull Short — +56.1% Return
            </h2>
            <p className="text-ink-secondary font-sans text-sm max-w-xl leading-relaxed mb-10">
              Alongside the core fund, the team executed a leveraged directional trade based on the summer lull hypothesis — a thesis formed from market cycle analysis and on-chain indicators.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-px bg-border mb-6">
            {[
              { label: 'Direction',        value: 'SHORT',                                      icon: <ArrowDownRight size={13} className="text-red-400" />, color: 'text-red-500' },
              { label: 'Asset',            value: 'BTC',                                        icon: null, color: 'text-ink' },
              { label: 'Leverage',         value: swingTrade.leverage,                          icon: null, color: 'text-gold' },
              { label: 'Capital',          value: `$${swingTrade.capital}`,                     icon: null, color: 'text-ink' },
              { label: 'Entry',            value: `$${swingTrade.entry.toLocaleString()}`,      icon: null, color: 'text-ink' },
              { label: 'Exit',             value: `$${swingTrade.exit.toLocaleString()}`,       icon: null, color: 'text-ink' },
            ].map(m => (
              <div key={m.label} className="bg-surface p-5">
                <p className="label-caps mb-2">{m.label}</p>
                <div className="flex items-center gap-1.5">
                  {m.icon}
                  <p className={`font-sans font-semibold text-xl ${m.color}`}>{m.value}</p>
                </div>
              </div>
            ))}
          </div>

          <ScrollReveal delay={0.06}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* P&L */}
              <div className="border border-border bg-surface p-7">
                <p className="label-gold mb-5">Trade Result</p>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-xs font-sans text-ink-muted mb-1.5">
                      <span>BTC Price Move</span>
                      <span className="text-red-400">−{Math.abs(swingTrade.priceMove)}%</span>
                    </div>
                    <div className="h-1.5 bg-border overflow-hidden">
                      <div className="h-full bg-red-400" style={{ width: `${Math.abs(swingTrade.priceMove)}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-sans text-ink-muted mb-1.5">
                      <span>Leveraged Return (3×)</span>
                      <span className="text-gold">+{swingTrade.leveragedReturn}%</span>
                    </div>
                    <div className="h-1.5 bg-border overflow-hidden">
                      <div className="h-full bg-gold" style={{ width: `${Math.min(swingTrade.leveragedReturn, 100)}%` }} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-border border border-border">
                  <div className="bg-surface p-4">
                    <p className="label-caps mb-1.5">Capital In</p>
                    <p className="font-sans font-semibold text-lg text-ink">${swingTrade.capital}</p>
                  </div>
                  <div className="bg-surface p-4">
                    <p className="label-caps mb-1.5">P&amp;L</p>
                    <div className="flex items-center gap-1.5">
                      <ArrowUpRight size={13} className="text-gold" />
                      <p className="font-sans font-semibold text-lg text-gold">+${swingTrade.pnl}</p>
                    </div>
                  </div>
                  <div className="bg-surface p-4">
                    <p className="label-caps mb-1.5">Entry Date</p>
                    <p className="font-sans font-semibold text-sm text-ink">{swingTrade.entryDate}</p>
                  </div>
                  <div className="bg-surface p-4">
                    <p className="label-caps mb-1.5">Exit</p>
                    <p className="font-sans font-semibold text-sm text-ink">{swingTrade.exitDate}</p>
                  </div>
                </div>
              </div>

              {/* Thesis */}
              <div className="border border-border bg-surface p-7">
                <p className="label-caps mb-5">Trade Thesis — 3 Converging Signals</p>
                <div className="space-y-0">
                  {thesisSignals.map((s, i) => (
                    <div key={s.n} className={`flex gap-4 py-5 ${i < thesisSignals.length - 1 ? 'border-b border-border' : ''}`}>
                      <span className="label-gold flex-shrink-0 mt-0.5 w-5">{s.n}</span>
                      <div>
                        <p className="text-xs font-sans font-semibold text-ink mb-2 tracking-tight">{s.signal}</p>
                        <p className="text-xs font-sans text-ink-muted leading-relaxed">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Risk metrics */}
      <section className="border-b border-border bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-2">Risk Profile</p>
            <p className="font-sans font-semibold text-2xl text-ink mb-8 tracking-tight">Cash buffer dramatically reduces drawdown vs raw crypto exposure.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {[
              { label: 'Max Drawdown (Total)',    value: '−7.74%',    note: 'vs BTC −42.5%' },
              { label: 'Max Drawdown (Invested)', value: '−15.54%',   note: 'deployed capital' },
              { label: 'Cash Buffer',             value: '50.4%',     note: 'USDT reserve' },
              { label: 'Alpha vs BTC Index',      value: '+34.8 pts', note: 'indexed to 100' },
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

      {/* Investment Philosophy */}
      <section className="border-b border-border bg-surface-subtle">
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

      {/* Resources — Reports + Course Notes */}
      <section className="border-b border-border bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-2">Resources</p>
            <p className="font-sans font-semibold text-3xl text-ink mb-12 tracking-tight">Fund reports &amp; course notes.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Fund Reports */}
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-6">
                <FileText size={15} className="text-gold" />
                <p className="font-sans font-semibold text-base text-ink tracking-tight">Fund Reports</p>
              </div>
              <div className="space-y-px bg-border border border-border">
                {fundReports.map(r => (
                  <div key={r.id} className="bg-surface px-5 py-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-sans font-medium text-sm text-ink">{r.title}</p>
                      <p className="label-caps text-ink-muted">{r.date} · {r.headline.split('.')[0]}</p>
                    </div>
                    <a
                      href={r.pdf}
                      download
                      className="flex items-center gap-1.5 text-xs font-sans text-gold font-medium hover:text-gold-dark transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      <Download size={12} /> PDF
                    </a>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Course Notes */}
            <ScrollReveal delay={0.08}>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={15} className="text-gold" />
                <p className="font-sans font-semibold text-base text-ink tracking-tight">Course Notes</p>
              </div>
              <div className="space-y-px bg-border border border-border">
                {sessions.map(s => (
                  <div key={s.number} className="bg-surface px-5 py-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-sans font-medium text-sm text-ink">{s.title}</p>
                      <div className="flex items-center gap-2">
                        <p className="label-caps text-ink-muted">{s.date}</p>
                        {s.note && (
                          <span className="text-[9px] font-sans uppercase tracking-widest border border-border px-1.5 py-0.5 text-ink-muted">{s.note}</span>
                        )}
                      </div>
                    </div>
                    <a
                      href={s.pdf}
                      download
                      className="flex items-center gap-1.5 text-xs font-sans text-gold font-medium hover:text-gold-dark transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      <Download size={12} /> PDF
                    </a>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="bg-surface-subtle">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-2">Stakeholders</p>
            <p className="font-sans font-semibold text-3xl text-ink mb-4 tracking-tight">25 active stakeholders.</p>
            <p className="text-ink-secondary font-sans text-base leading-relaxed max-w-2xl mb-8">
              The W3TID fund has 25 active stakeholders drawn from Edinburgh&apos;s student body and the broader Web3 and blockchain industry. Stakeholders receive monthly fund reports, market overviews, and direct access to the team. Slots for the 2025/26 cohort are full — register interest for 2026/27 below.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}><EmailCapture /></ScrollReveal>
        </div>
      </section>

    </main>
  );
}
