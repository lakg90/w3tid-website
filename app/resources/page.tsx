import { Download, FileText, BookOpen } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import { fundReports, sessions } from '@/lib/data';

export const metadata = {
  title: 'Resources | W3TID',
  description: 'Fund reports and course notes from the University of Edinburgh Web3 Trading & Investment Division.',
};

export default function ResourcesPage() {
  return (
    <main className="pt-14">

      {/* Hero */}
      <div className="border-b border-border bg-surface-subtle">
        <div className="wrap py-20">
          <p className="label-gold mb-4">Resources</p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink mb-4 tracking-tight max-w-2xl leading-tight">
            Fund reports and course notes.
          </h1>
          <p className="text-ink-secondary font-sans text-base max-w-xl leading-relaxed">
            All W3TID publications in one place — monthly fund reports to stakeholders and the full blockchain education curriculum, available to download.
          </p>
        </div>
      </div>

      {/* Fund Reports */}
      <section className="border-b border-border bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 border border-border flex items-center justify-center">
                <FileText size={15} className="text-gold" />
              </div>
              <div>
                <p className="label-gold">Fund Reports</p>
                <p className="font-sans font-semibold text-2xl text-ink tracking-tight">Monthly stakeholder reports</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {fundReports.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 0.05}>
                <div className="card hover:bg-surface-subtle transition-colors duration-200">
                  {/* Header row */}
                  <div className="p-6 border-b border-border flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-sans font-semibold text-base text-ink">{r.title}</p>
                        <span className="label-caps text-ink-muted">{r.date}</span>
                      </div>
                      <p className="text-sm font-sans text-ink-secondary leading-relaxed">{r.headline}</p>
                    </div>
                    <a
                      href={r.pdf}
                      download
                      className="btn-gold flex-shrink-0 text-xs py-2 px-4"
                    >
                      <Download size={13} /> Download PDF
                    </a>
                  </div>
                  {/* Key stats */}
                  <div className="grid grid-cols-3 gap-px bg-border">
                    {r.stats.map(s => (
                      <div key={s.label} className="bg-surface px-5 py-4">
                        <p className="label-caps mb-1.5">{s.label}</p>
                        <p className="font-sans font-semibold text-sm text-ink">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Course Notes */}
      <section className="bg-surface-subtle">
        <div className="wrap section-py">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 border border-border flex items-center justify-center">
                <BookOpen size={15} className="text-gold" />
              </div>
              <div>
                <p className="label-gold">Course Notes</p>
                <p className="font-sans font-semibold text-2xl text-ink tracking-tight">Blockchain education curriculum</p>
              </div>
            </div>
            <p className="text-ink-secondary font-sans text-sm max-w-xl leading-relaxed mb-10 -mt-4">
              Written entirely in-house by W3TID members. LaTeX-formatted PDFs covering all eight sessions — from cryptographic fundamentals to live trade execution. Authored by Leon Godtfredsen, Sahand Sarbaz, Josh Davidson, and Jose Garrido Boix.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {sessions.map((s, i) => (
              <ScrollReveal key={s.number} delay={(i % 2) * 0.06}>
                <div className="bg-surface p-6 h-full hover:bg-surface-subtle transition-colors duration-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="label-gold">{s.date}</span>
                        {s.note && (
                          <span className="text-[9px] font-sans uppercase tracking-widest border border-border px-1.5 py-0.5 text-ink-muted">{s.note}</span>
                        )}
                      </div>
                      <p className="font-sans font-semibold text-sm text-ink mb-3 tracking-tight">{s.title}</p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {s.topics.slice(0, 3).map(t => (
                          <span key={t} className="text-[10px] font-sans text-ink-muted">· {t.split('—')[0].trim()}</span>
                        ))}
                        {s.topics.length > 3 && (
                          <span className="text-[10px] font-sans text-ink-muted">+ {s.topics.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    <a
                      href={s.pdf}
                      download
                      className="flex items-center gap-1.5 text-xs font-sans text-gold font-medium hover:text-gold-dark transition-colors whitespace-nowrap flex-shrink-0 mt-1"
                    >
                      <Download size={12} /> PDF
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
