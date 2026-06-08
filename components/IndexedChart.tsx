'use client';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ReferenceLine, ResponsiveContainer,
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
      <p style={{ color: '#8A847C', marginBottom: 8, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</p>
      {payload.map(p => (
        <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, display: 'inline-block' }} />
            <span style={{ color: '#FAFAF8', opacity: 0.7 }}>{p.name === 'fund' ? 'W3TID Fund' : 'Bitcoin'}</span>
          </div>
          <span style={{ fontWeight: 600, color: p.value >= 100 ? '#D4A017' : p.name === 'btc' ? '#8A847C' : '#ef4444' }}>
            {p.value.toFixed(1)}
          </span>
        </div>
      ))}
      {alpha !== null && (
        <div style={{ borderTop: '1px solid #4A4540', marginTop: 8, paddingTop: 8, display: 'flex', justifyContent: 'space-between', gap: 16 }}>
          <span style={{ color: '#8A847C', fontSize: 10 }}>Fund Alpha vs BTC</span>
          <span style={{ fontWeight: 600, color: '#D4A017' }}>+{alpha} pts</span>
        </div>
      )}
    </div>
  );
}

export default function IndexedChart({ height = 300 }: { height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={indexedData} margin={{ top: 10, right: 16, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" vertical={false} />
        <XAxis dataKey="period" tick={{ fill: '#8A847C', fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis
          tick={{ fill: '#8A847C', fontSize: 10 }} axisLine={false} tickLine={false}
          domain={[54, 108]} tickFormatter={v => `${v}`} width={35}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E8E4DC', strokeWidth: 1, strokeDasharray: '4 4' }} />
        <Legend wrapperStyle={{ fontSize: 11, paddingTop: 14, color: '#4A4540' }} formatter={v => v === 'fund' ? 'W3TID Fund' : 'Bitcoin'} />
        <ReferenceLine y={100} stroke="#C8C0B0" strokeDasharray="4 4" label={{ value: 'Inception = 100', position: 'right', fill: '#8A847C', fontSize: 9 }} />
        <Line type="monotone" dataKey="fund" stroke="#D4A017" strokeWidth={2.5} dot={{ r: 4, fill: '#D4A017', stroke: '#FAFAF8', strokeWidth: 1.5 }} activeDot={{ r: 6, fill: '#D4A017', stroke: '#fff', strokeWidth: 2 }} name="fund" />
        <Line type="monotone" dataKey="btc"  stroke="#8A847C" strokeWidth={1.5} strokeDasharray="5 3" dot={{ r: 3, fill: '#8A847C' }} activeDot={{ r: 5, fill: '#8A847C', stroke: '#fff', strokeWidth: 2 }} name="btc" />
      </LineChart>
    </ResponsiveContainer>
  );
}
