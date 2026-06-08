'use client';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ReferenceLine, ResponsiveContainer,
} from 'recharts';
import { portfolioData } from '@/lib/data';

const tooltipStyle = {
  backgroundColor: '#1A1714',
  border: '1px solid #4A4540',
  borderRadius: 4,
  color: '#FAFAF8',
  fontSize: 11,
  padding: '8px 12px',
};

interface Props { height?: number; }

export default function PortfolioChart({ height = 280 }: Props) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={portfolioData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fill: '#8A847C', fontSize: 10, fontFamily: 'var(--font-dm-sans)' }}
          axisLine={false}
          tickLine={false}
          interval={3}
        />
        <YAxis
          tick={{ fill: '#8A847C', fontSize: 10, fontFamily: 'var(--font-dm-sans)' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `${v}%`}
        />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v, name) => [
            `${Number(v).toFixed(2)}%`,
            name === 'total' ? 'Total Portfolio (w/ Cash)' : 'Invested Portfolio',
          ]}
          labelStyle={{ color: '#8A847C', marginBottom: 4 }}
        />
        <Legend
          wrapperStyle={{ fontSize: 11, paddingTop: 12, fontFamily: 'var(--font-dm-sans)', color: '#4A4540' }}
          formatter={(v) => v === 'total' ? 'Total Portfolio (w/ Cash)' : 'Invested Portfolio'}
        />
        <ReferenceLine y={0} stroke="#C8C0B0" strokeDasharray="4 4" />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#D4A017"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: '#D4A017' }}
          name="total"
        />
        <Line
          type="monotone"
          dataKey="invested"
          stroke="#C8C0B0"
          strokeWidth={1.5}
          strokeDasharray="5 3"
          dot={false}
          activeDot={{ r: 4, fill: '#C8C0B0' }}
          name="invested"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
