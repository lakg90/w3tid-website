'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { allocationData } from '@/lib/data';

const tooltipStyle = {
  backgroundColor: '#1A1714',
  border: '1px solid #4A4540',
  borderRadius: 4,
  color: '#FAFAF8',
  fontSize: 11,
  padding: '8px 12px',
};

export default function AllocationChart() {
  return (
    <div className="flex flex-col items-center gap-6">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={allocationData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
          >
            {allocationData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(v) => [`${v}%`, 'Allocation']}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
        {allocationData.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5 text-xs font-sans text-ink-secondary">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
            {d.name} — {d.value}%
          </div>
        ))}
      </div>
    </div>
  );
}
