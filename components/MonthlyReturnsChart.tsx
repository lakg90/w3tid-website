'use client';

import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ReferenceLine, ResponsiveContainer, Cell,
} from 'recharts';
import { monthlyReturnsBar } from '@/lib/data';

function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ name: string; value: number }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: '#1A1714', border: '1px solid #4A4540', padding: '10px 14px', fontSize: 11, minWidth: 160 }}>
      <p style={{ color: '#8A847C', marginBottom: 8, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</p>
      {payload.map(p => {
        const isPos = Number(p.value) >= 0;
        const isFund = p.name === 'fund';
        return (
          <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 4 }}>
            <span style={{ color: 'rgba(250,250,248,0.65)' }}>{isFund ? 'Fund' : 'BTC'}</span>
            <span style={{ fontWeight: 700, color: isPos ? '#D4A017' : '#ef4444' }}>
              {isPos ? '+' : ''}{Number(p.value).toFixed(2)}%
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function MonthlyReturnsChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <ComposedChart data={monthlyReturnsBar} margin={{ top: 10, right: 10, left: -15, bottom: 0 }} barCategoryGap="30%">
        <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" vertical={false} />
        <XAxis dataKey="period" tick={{ fill: '#8A847C', fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#8A847C', fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(212,160,23,0.04)' }} />
        <Legend
          wrapperStyle={{ fontSize: 11, paddingTop: 12, color: '#4A4540' }}
          formatter={v => v === 'fund' ? 'Fund (bars)' : 'Bitcoin (line)'}
        />
        <ReferenceLine y={0} stroke="#C8C0B0" strokeWidth={1} />
        <Bar dataKey="fund" name="fund" maxBarSize={36}>
          {monthlyReturnsBar.map((entry, i) => (
            <Cell key={i} fill={entry.fund >= 0 ? '#D4A017' : '#C8C0B0'} />
          ))}
        </Bar>
        <Line
          type="monotone" dataKey="btc" name="btc"
          stroke="#F7931A" strokeWidth={1.5} dot={{ r: 3, fill: '#F7931A', stroke: 'none' }}
          activeDot={{ r: 5, fill: '#F7931A', stroke: '#fff', strokeWidth: 1.5 }}
          strokeDasharray="4 3"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
