'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { sessions } from '@/lib/data';

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <div className="relative">
      {/* Center line — desktop only */}
      <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2 z-0" />

      <div className="flex flex-col gap-6">
        {sessions.map((s, i) => {
          const isLeft = i % 2 === 0;
          const isOpen = expanded === s.number;

          return (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.04 }}
              className="relative md:grid md:grid-cols-[1fr_48px_1fr] items-start gap-0"
            >
              {/* Left slot */}
              <div className={`hidden md:block ${isLeft ? 'pr-8' : ''}`}>
                {isLeft && <SessionCard s={s} isOpen={isOpen} onToggle={() => setExpanded(isOpen ? null : s.number)} />}
              </div>

              {/* Center node */}
              <div className="hidden md:flex flex-col items-center z-10 pt-5">
                <div className="w-8 h-8 rounded-full bg-gold border-2 border-background flex items-center justify-center shadow-sm">
                  <span className="text-white font-sans font-semibold text-[10px]">{String(s.number).padStart(2,'0')}</span>
                </div>
              </div>

              {/* Right slot */}
              <div className={`hidden md:block ${!isLeft ? 'pl-8' : ''}`}>
                {!isLeft && <SessionCard s={s} isOpen={isOpen} onToggle={() => setExpanded(isOpen ? null : s.number)} />}
              </div>

              {/* Mobile */}
              <div className="md:hidden">
                <SessionCard s={s} isOpen={isOpen} onToggle={() => setExpanded(isOpen ? null : s.number)} mobile />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SessionCard({
  s, isOpen, onToggle, mobile = false,
}: {
  s: (typeof sessions)[0];
  isOpen: boolean;
  onToggle: () => void;
  mobile?: boolean;
}) {
  return (
    <div className="border border-border bg-surface hover:bg-surface-subtle transition-colors duration-200">
      <button onClick={onToggle} className="w-full text-left p-5 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {mobile && (
            <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white font-sans font-semibold text-[9px]">{String(s.number).padStart(2,'0')}</span>
            </span>
          )}
          <div>
            <p className="label-gold mb-1">{s.date}</p>
            <p className="font-sans font-semibold text-sm text-ink tracking-tight">{s.title}</p>
          </div>
        </div>
        <ChevronDown size={15} className={`text-ink-muted flex-shrink-0 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-border pt-4">
              <p className="label-caps mb-2.5">Key Topics</p>
              <ul className="space-y-1.5 mb-4">
                {s.topics.map(t => (
                  <li key={t} className="flex items-start gap-2 text-xs font-sans text-ink-secondary">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-sans text-ink-muted leading-relaxed mb-4 border-l-2 border-l-gold pl-3">
                {s.context}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={s.pdf}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-sans text-gold font-medium hover:text-gold-dark transition-colors uppercase tracking-widest"
                >
                  <Download size={11} /> Download Notes
                </a>
                {s.note && (
                  <span className="text-[10px] font-sans text-ink-muted uppercase tracking-widest border border-border px-2 py-0.5">{s.note}</span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
