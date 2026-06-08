'use client';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ReferenceLine, ResponsiveContainer,
} from 'recharts';
import { portfolioData } from '@/lib/data';

function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: '#1A1714',
      border: '1px solid #4A4540',
      padding: '10px 14px',
      fontSize: 11,
      fontFamily: 'var(--font-inter)',
      minWidth: 180,
    }}>
      <p style={{ color: '#8A847C', marginBottom: 8, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </p>
      {payload.map((p) => (
        <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: p.color, display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: '#FAFAF8', opacity: 0.7 }}>
              {p.name === 'total' ? 'Total (w/ cash)' : 'Invested capital'}
            </span>
          </div>
          <span style={{
            fontWeight: 600,
            color: p.value >= 0 ? '#D4A017' : '#ef4444',
          }}>
            {p.value >= 0 ? '+' : ''}{Number(p.value).toFixed(2)}%
          </span>
        </div>
      ))}
    </div>
  );
}

interface Props { height?: number; }

export default function PortfolioChart({ height = 280 }: Props) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={portfolioData} margin={{ top: 10, right: 16, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fill: '#8A847C', fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          interval={3}
        />
        <YAxis
          tick={{ fill: '#8A847C', fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `${v}%`}
          width={45}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E8E4DC', strokeWidth: 1, strokeDasharray: '4 4' }} />
        <Legend
          wrapperStyle={{ fontSize: 11, paddingTop: 14, color: '#4A4540' }}
          formatter={(v) => v === 'total' ? 'Total Portfolio (w/ Cash)' : 'Invested Portfolio'}
        />
        <ReferenceLine y={0} stroke="#C8C0B0" strokeDasharray="4 4" />
        <Line type="monotone" dataKey="total" stroke="#D4A017" strokeWidth={2} dot={false} activeDot={{ r: 5, fill: '#D4A017', stroke: '#fff', strokeWidth: 2 }} name="total" />
        <Line type="monotone" dataKey="invested" stroke="#8A847C" strokeWidth={1.5} strokeDasharray="5 3" dot={false} activeDot={{ r: 5, fill: '#8A847C', stroke: '#fff', strokeWidth: 2 }} name="invested" />
      </LineChart>
    </ResponsiveContainer>
  );
}
