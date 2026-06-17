'use client';

import { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, ReferenceLine, Cell as BarCell,
} from 'recharts';
import type { PortfolioData } from '@/app/api/portfolio/route';

// ── helpers ───────────────────────────────────────────────────────────────────
const usd = (n: number | null, dp = 0) =>
  n == null ? '—' : `$${n.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp })}`;
const pct = (n: number | null, dp = 2) => (n == null ? '—' : `${n >= 0 ? '+' : ''}${n.toFixed(dp)}%`);

function usePortfolio() {
  const [data, setData] = useState<PortfolioData | null>(null);
  useEffect(() => {
    let active = true;
    const load = () => fetch('/api/portfolio').then(r => (r.ok ? r.json() : null)).then(d => active && setData(d)).catch(() => {});
    load();
    const t = setInterval(load, 60_000);
    return () => { active = false; clearInterval(t); };
  }, []);
  return data;
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
      <span className="text-[10px] font-sans uppercase tracking-widest text-ink-muted">Live · auto-updates</span>
    </span>
  );
}

// ── Live stat band ─────────────────────────────────────────────────────────────
export function LiveStatBand() {
  const d = usePortfolio();
  const neg = (n: number | null | undefined) => (n ?? 0) < 0;
  const stats = [
    { label: 'Live Fund Value', value: usd(d?.total_value ?? null), sub: `Cost basis ${usd(d?.total_cost ?? null)}`, tone: 'ink' as const },
    { label: 'Total Return',    value: pct(d?.total_return_pct ?? null), sub: 'incl. cash buffer', tone: neg(d?.total_return_pct) ? 'red' : 'gold' as const },
    { label: 'Invested Return', value: pct(d?.invested_return_pct ?? null), sub: 'deployed capital', tone: neg(d?.invested_return_pct) ? 'red' : 'gold' as const },
    { label: 'Cash Reserve',    value: d?.cash_weight != null ? `${d.cash_weight.toFixed(1)}%` : '—', sub: 'USDT', tone: 'ink' as const },
    { label: 'BTC / USD',       value: usd(d?.btc_price ?? null), sub: 'CoinGecko', tone: 'ink' as const },
  ];
  const tone = (t: string) => t === 'red' ? 'text-red-500' : t === 'gold' ? 'text-gold' : 'text-ink';
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="label-caps">Live Portfolio</p>
        <LiveBadge />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
        {stats.map(s => (
          <div key={s.label} className="bg-surface p-5">
            <p className="label-caps mb-2">{s.label}</p>
            <p className={`font-sans font-semibold text-xl md:text-2xl mb-0.5 tabular-nums ${tone(s.tone)}`}>{s.value}</p>
            <p className="text-[10px] text-ink-muted font-sans uppercase tracking-widest">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Live Fund / BTC / Alpha (indexed to 100) ────────────────────────────────
export function LiveIndexedStats() {
  const d = usePortfolio();
  const fund = d?.fund_index ?? null;
  const btc = d?.btc_index ?? null;
  const alpha = fund != null && btc != null ? fund - btc : null;
  return (
    <div className="flex gap-5 mb-5">
      <div>
        <p className="label-caps mb-1">Fund</p>
        <p className={`font-sans font-semibold text-sm tabular-nums ${(fund ?? 100) >= 100 ? 'text-gold' : 'text-red-500'}`}>{fund != null ? fund.toFixed(2) : '—'}</p>
      </div>
      <div>
        <p className="label-caps mb-1">BTC</p>
        <p className="font-sans font-semibold text-sm tabular-nums text-ink-muted">{btc != null ? btc.toFixed(2) : '—'}</p>
      </div>
      <div className="border-l border-border pl-5">
        <p className="label-caps mb-1">Alpha</p>
        <p className="font-sans font-semibold text-sm tabular-nums text-gold">{alpha != null ? `${alpha >= 0 ? '+' : ''}${alpha.toFixed(1)} pts` : '—'}</p>
      </div>
    </div>
  );
}

// ── Live holdings table ──────────────────────────────────────────────────────
export function LiveHoldings() {
  const d = usePortfolio();
  const assets = d?.assets ?? [];
  return (
    <div className="overflow-x-auto border border-border bg-surface">
      <table className="w-full min-w-[720px] text-sm">
        <thead>
          <tr className="border-b border-border text-[10px] uppercase tracking-widest text-ink-muted">
            <th className="text-left  font-medium px-4 py-3">Asset</th>
            <th className="text-right font-medium px-4 py-3">Units</th>
            <th className="text-right font-medium px-4 py-3">Avg Buy</th>
            <th className="text-right font-medium px-4 py-3">Live Price</th>
            <th className="text-right font-medium px-4 py-3">24h</th>
            <th className="text-right font-medium px-4 py-3">Value</th>
            <th className="text-right font-medium px-4 py-3">P&amp;L</th>
            <th className="text-right font-medium px-4 py-3">Return</th>
            <th className="text-right font-medium px-4 py-3">Weight</th>
          </tr>
        </thead>
        <tbody className="tabular-nums">
          {assets.map(a => (
            <tr key={a.symbol} className="border-b border-border last:border-0">
              <td className="px-4 py-3">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2" style={{ background: a.color }} />
                  <span className="font-sans font-medium text-ink">{a.symbol}</span>
                  <span className="text-[10px] text-ink-muted">{a.category}</span>
                </span>
              </td>
              <td className="text-right px-4 py-3 text-ink-secondary">{a.symbol === 'CASH' ? '—' : a.units.toLocaleString('en-US', { maximumFractionDigits: 6 })}</td>
              <td className="text-right px-4 py-3 text-ink-secondary">{a.symbol === 'CASH' ? '—' : usd(a.avgBuy, 2)}</td>
              <td className="text-right px-4 py-3 text-ink">{a.symbol === 'CASH' ? '$1.00' : usd(a.price, 2)}</td>
              <td className="text-right px-4 py-3" style={{ color: (a.change24h ?? 0) >= 0 ? '#15803d' : '#dc2626' }}>{a.symbol === 'CASH' ? '—' : pct(a.change24h)}</td>
              <td className="text-right px-4 py-3 font-medium text-ink">{usd(a.value, 0)}</td>
              <td className="text-right px-4 py-3" style={{ color: a.symbol === 'CASH' ? '#8A847C' : (a.gainLoss ?? 0) >= 0 ? '#15803d' : '#dc2626' }}>{a.symbol === 'CASH' ? '—' : usd(a.gainLoss, 0)}</td>
              <td className="text-right px-4 py-3" style={{ color: a.symbol === 'CASH' ? '#8A847C' : (a.returnPct ?? 0) >= 0 ? '#15803d' : '#dc2626' }}>{a.symbol === 'CASH' ? '—' : pct(a.returnPct, 1)}</td>
              <td className="text-right px-4 py-3 text-ink-secondary">{a.weight != null ? `${a.weight.toFixed(1)}%` : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Live allocation donut ────────────────────────────────────────────────────
export function LiveAllocation() {
  const d = usePortfolio();
  const assets = (d?.assets ?? []).filter(a => (a.weight ?? 0) > 0.05);
  return (
    <div>
      <div style={{ height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={assets} cx="50%" cy="50%" innerRadius={52} outerRadius={86} paddingAngle={2} dataKey="weight" startAngle={90} endAngle={-270}>
              {assets.map((a, i) => <Cell key={i} fill={a.color} stroke="none" />)}
            </Pie>
            <Tooltip
              formatter={(value: unknown, _name: unknown, item: unknown) => {
                const w = Number(value);
                const p = ((item as { payload?: { value?: number; symbol?: string } })?.payload) ?? {};
                return [`${w.toFixed(1)}%  ·  ${usd(p.value ?? null)}`, p.symbol ?? ''];
              }}
              contentStyle={{ background: '#1A1714', border: '1px solid #4A4540', fontSize: 11 }}
              itemStyle={{ color: '#FAFAF8' }} labelStyle={{ color: '#8A847C' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 space-y-1.5">
        {assets.map(a => (
          <div key={a.symbol} className="flex items-center justify-between text-xs font-sans">
            <span className="flex items-center gap-2"><span className="w-2 h-2" style={{ background: a.color }} /><span className="text-ink-secondary">{a.symbol}</span></span>
            <span className="text-ink font-medium tabular-nums">{a.weight?.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Per-asset return bars (live) ─────────────────────────────────────────────
export function LiveReturnBars() {
  const d = usePortfolio();
  const data = (d?.assets ?? []).filter(a => a.symbol !== 'CASH').map(a => ({ symbol: a.symbol, ret: a.returnPct ?? 0, color: a.color }));
  return (
    <div style={{ height: 220 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 8, right: 24, top: 4, bottom: 4 }}>
          <XAxis type="number" tick={{ fontSize: 10, fill: '#8A847C' }} tickFormatter={(v) => `${v}%`} axisLine={{ stroke: '#E8E4DC' }} tickLine={false} />
          <YAxis type="category" dataKey="symbol" tick={{ fontSize: 11, fill: '#1A1714' }} axisLine={false} tickLine={false} width={48} />
          <ReferenceLine x={0} stroke="#C8C0B0" />
          <Tooltip formatter={(value: unknown) => [`${Number(value).toFixed(1)}%`, 'Return']} contentStyle={{ background: '#1A1714', border: '1px solid #4A4540', fontSize: 11 }} itemStyle={{ color: '#FAFAF8' }} labelStyle={{ color: '#8A847C' }} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
          <Bar dataKey="ret" radius={2}>
            {data.map((e, i) => <BarCell key={i} fill={e.ret >= 0 ? '#15803d' : '#dc2626'} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ── Cost basis vs market value (live) ────────────────────────────────────────
export function LiveCostVsValue() {
  const d = usePortfolio();
  const data = (d?.assets ?? []).filter(a => a.symbol !== 'CASH').map(a => ({ symbol: a.symbol, Cost: Math.round(a.costBasis), Value: Math.round(a.value ?? 0) }));
  return (
    <div style={{ height: 220 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: 0, right: 8, top: 4, bottom: 4 }}>
          <XAxis dataKey="symbol" tick={{ fontSize: 11, fill: '#1A1714' }} axisLine={{ stroke: '#E8E4DC' }} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: '#8A847C' }} tickFormatter={(v) => `$${v}`} axisLine={false} tickLine={false} width={48} />
          <Tooltip formatter={(value: unknown, name: unknown) => [usd(Number(value)), String(name)]} contentStyle={{ background: '#1A1714', border: '1px solid #4A4540', fontSize: 11 }} itemStyle={{ color: '#FAFAF8' }} labelStyle={{ color: '#8A847C' }} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
          <Bar dataKey="Cost"  fill="#C8C0B0" radius={2} />
          <Bar dataKey="Value" fill="#D4A017" radius={2} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
