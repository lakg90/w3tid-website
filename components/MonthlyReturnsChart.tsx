'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer, Cell } from 'recharts';
import { monthlyReturnsBar } from '@/lib/data';

const tooltipStyle = {
  backgroundColor: '#1A1714',
  border: '1px solid #4A4540',
  borderRadius: 2,
  color: '#FAFAF8',
  fontSize: 11,
  padding: '8px 12px',
};

export default function MonthlyReturnsChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={monthlyReturnsBar} margin={{ top: 10, right: 10, left: -15, bottom: 0 }} barGap={3} barCategoryGap="35%">
        <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" vertical={false} />
        <XAxis dataKey="period" tick={{ fill: '#8A847C', fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: '#8A847C', fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
        <Tooltip
          contentStyle={tooltipStyle}
          formatter={(v, name) => [`${Number(v).toFixed(2)}%`, name === 'fund' ? 'Fund' : 'Bitcoin']}
        />
        <Legend wrapperStyle={{ fontSize: 10, paddingTop: 12 }} formatter={v => v === 'fund' ? 'Fund' : 'Bitcoin'} />
        <ReferenceLine y={0} stroke="#C8C0B0" />
        <Bar dataKey="fund" name="fund" radius={[2, 2, 0, 0]}>
          {monthlyReturnsBar.map((entry, i) => (
            <Cell key={i} fill={entry.fund >= 0 ? '#D4A017' : '#C8C0B0'} />
          ))}
        </Bar>
        <Bar dataKey="btc" name="btc" fill="#F4F2EE" stroke="#C8C0B0" strokeWidth={1} radius={[2, 2, 0, 0]}>
          {monthlyReturnsBar.map((entry, i) => (
            <Cell key={i} fill={entry.btc >= 0 ? '#F7931A22' : '#F4F2EE'} stroke={entry.btc >= 0 ? '#F7931A' : '#C8C0B0'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
