'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { sessions } from '@/lib/data';

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent -translate-x-1/2" />

      <div className="flex flex-col gap-0">
        {sessions.map((s, i) => {
          const isLeft = i % 2 === 0;
          const isOpen = expanded === s.number;

          return (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className={`relative md:grid md:grid-cols-2 gap-8 mb-8 ${isLeft ? '' : ''}`}
            >
              {/* Desktop: left or right placement */}
              <div className={`hidden md:block ${isLeft ? 'order-1' : 'order-2'}`}>
                {(isLeft) && (
                  <SessionCard s={s} isOpen={isOpen} onToggle={() => setExpanded(isOpen ? null : s.number)} align="right" />
                )}
              </div>

              {/* Center dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-gold border-4 border-background items-center justify-center z-10 shadow-sm">
                <span className="text-white font-display font-bold text-[10px]">{s.number}</span>
              </div>

              <div className={`hidden md:block ${isLeft ? 'order-2' : 'order-1'}`}>
                {(!isLeft) && (
                  <SessionCard s={s} isOpen={isOpen} onToggle={() => setExpanded(isOpen ? null : s.number)} align="left" />
                )}
              </div>

              {/* Mobile: always stacked */}
              <div className="md:hidden">
                <SessionCard s={s} isOpen={isOpen} onToggle={() => setExpanded(isOpen ? null : s.number)} align="left" mobile />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SessionCard({
  s,
  isOpen,
  onToggle,
  align,
  mobile = false,
}: {
  s: (typeof sessions)[0];
  isOpen: boolean;
  onToggle: () => void;
  align: 'left' | 'right';
  mobile?: boolean;
}) {
  return (
    <div
      className={`bg-surface border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${
        mobile ? '' : align === 'right' ? 'mr-6' : 'ml-6'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div className="flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5 text-white font-display font-bold text-xs md:hidden">
            {s.number}
          </span>
          <div>
            <p className="label-gold mb-1">Session {s.number} · {s.date}</p>
            <h3 className="font-display font-bold text-lg text-ink">{s.title}</h3>
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`text-ink-muted flex-shrink-0 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-4">
              <div className="mb-4">
                <p className="label-caps mb-2.5">Key Topics</p>
                <ul className="space-y-1.5">
                  {s.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm font-sans text-ink-secondary">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-subtle rounded-lg p-4 border-l-2 border-l-gold">
                <p className="text-sm font-sans text-ink-secondary leading-relaxed italic">&ldquo;{s.context}&rdquo;</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
