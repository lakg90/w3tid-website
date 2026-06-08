'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '$13,000', label: 'Fund Under Management' },
  { value: '25',      label: 'Active Stakeholders' },
  { value: '8',       label: 'Course Sessions' },
  { value: '3',       label: 'Active Divisions' },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.09 }}
          className="border border-border bg-surface p-5 border-l-2 border-l-gold hover:shadow-sm transition-all duration-200"
        >
          <p className="font-sans font-semibold text-2xl text-ink mb-1">{s.value}</p>
          <p className="text-[11px] font-sans text-ink-muted uppercase tracking-widest">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
