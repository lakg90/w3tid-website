'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { allocationData } from '@/lib/data';

const TOTAL_AUM = 12500; // approximate invested AUM for dollar values

function CustomTooltip({ active, payload }: {
  active?: boolean;
  payload?: Array<{ payload: { name: string; value: number; color: string } }>;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  const dollars = Math.round((d.value / 100) * TOTAL_AUM);
  return (
    <div style={{ background: '#1A1714', border: '1px solid #4A4540', padding: '8px 12px', fontSize: 11 }}>
      <p style={{ color: d.color, fontWeight: 600, marginBottom: 4 }}>{d.name}</p>
      <p style={{ color: '#FAFAF8', opacity: 0.8 }}>{d.value}% of portfolio</p>
      <p style={{ color: '#8A847C' }}>≈ ${dollars.toLocaleString()}</p>
    </div>
  );
}

export default function AllocationChart() {
  return (
    <div>
      <div style={{ height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={allocationData}
              cx="50%"
              cy="50%"
              innerRadius={48}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {allocationData.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.color}
                  stroke="none"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 space-y-1.5">
        {allocationData.map((d) => (
          <div key={d.name} className="flex items-center justify-between text-xs font-sans">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: d.color }} />
              <span className="text-ink-secondary">{d.name}</span>
            </div>
            <span className="text-ink font-medium tabular-nums">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
