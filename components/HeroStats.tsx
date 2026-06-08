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
    <div className="flex flex-col gap-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-surface border border-border rounded-lg p-6 shadow-sm border-l-4 border-l-gold hover:shadow-md transition-shadow duration-200"
        >
          <p className="font-display font-bold text-3xl text-ink mb-1">{s.value}</p>
          <p className="text-sm font-sans text-ink-muted">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
