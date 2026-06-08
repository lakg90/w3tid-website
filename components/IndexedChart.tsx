'use client';

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ReferenceLine, ResponsiveContainer,
} from 'recharts';
import { indexedData } from '@/lib/data';

function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  const fund = payload.find(p => p.name === 'fund');
  const btc  = payload.find(p => p.name === 'btc');
  const alpha = fund && btc ? (fund.value - btc.value).toFixed(1) : null;
  return (
    <div style={{ background: '#1A1714', border: '1px solid #4A4540', padding: '10px 14px', fontSize: 11, minWidth: 190 }}>
      <p style={{ color: '#8A847C', marginBottom: 8, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</p>
      {[fund, btc].filter(Boolean).map(p => p && (
        <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 8, height: 8, background: p.color, display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: 'rgba(250,250,248,0.7)' }}>{p.name === 'fund' ? 'W3TID Fund' : 'Bitcoin'}</span>
          </div>
          <span style={{ fontWeight: 700, color: p.value >= 100 ? '#D4A017' : '#ef4444' }}>
            {p.value.toFixed(1)}
          </span>
        </div>
      ))}
      {alpha && (
        <div style={{ borderTop: '1px solid #333', marginTop: 8, paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#8A847C', fontSize: 10 }}>Fund Alpha</span>
          <span style={{ fontWeight: 700, color: '#D4A017' }}>+{alpha} pts</span>
        </div>
      )}
    </div>
  );
}

export default function IndexedChart({ height = 300 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={indexedData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
        <defs>
          <linearGradient id="fundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#D4A017" stopOpacity={0.18} />
            <stop offset="100%" stopColor="#D4A017" stopOpacity={0.02} />
          </linearGradient>
          <linearGradient id="btcGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#8A847C" stopOpacity={0.12} />
            <stop offset="100%" stopColor="#8A847C" stopOpacity={0.01} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" vertical={false} />
        <XAxis dataKey="period" tick={{ fill: '#8A847C', fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis
          tick={{ fill: '#8A847C', fontSize: 10 }} axisLine={false} tickLine={false}
          domain={[54, 108]} width={32}
          tickFormatter={v => `${v}`}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#C8C0B0', strokeWidth: 1, strokeDasharray: '4 4' }} />
        <Legend
          wrapperStyle={{ fontSize: 11, paddingTop: 12, color: '#4A4540' }}
          formatter={v => v === 'fund' ? 'W3TID Fund' : 'Bitcoin'}
        />
        <ReferenceLine y={100} stroke="#E8E4DC" strokeDasharray="4 4" />
        {/* BTC drawn first so fund sits on top */}
        <Area
          type="monotone" dataKey="btc" name="btc"
          stroke="#8A847C" strokeWidth={1.5} fill="url(#btcGrad)"
          dot={{ r: 3, fill: '#8A847C', stroke: 'none' }}
          activeDot={{ r: 5, fill: '#8A847C', stroke: '#fff', strokeWidth: 2 }}
        />
        <Area
          type="monotone" dataKey="fund" name="fund"
          stroke="#D4A017" strokeWidth={2.5} fill="url(#fundGrad)"
          dot={{ r: 4, fill: '#D4A017', stroke: '#FAFAF8', strokeWidth: 1.5 }}
          activeDot={{ r: 6, fill: '#D4A017', stroke: '#fff', strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
