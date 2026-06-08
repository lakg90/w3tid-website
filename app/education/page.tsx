import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import Timeline from '@/components/Timeline';

export default function EducationPage() {
  return (
    <main className="pt-16">

      {/* Hero */}
      <div className="border-b border-border bg-surface-subtle grain-overlay">
        <div className="wrap relative z-10 py-20">
          <p className="label-gold mb-4">Blockchain Education</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ink mb-5 max-w-3xl leading-tight">
            Eight sessions. From the history of money to live trading execution.
          </h1>
          <p className="text-ink-secondary font-sans text-lg max-w-2xl leading-relaxed">
            Our blockchain course was written entirely in-house by W3TID members and has been delivered to every cohort since founding. It covers technical fundamentals, DeFi, tokenomics, macro-economic analysis, and trading — everything a serious Web3 practitioner needs.
          </p>
        </div>
      </div>

      {/* Overview stats */}
      <section className="border-b border-border bg-surface">
        <div className="wrap py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {[
              { label: 'Sessions', value: '8' },
              { label: 'Topics Covered', value: '40+' },
              { label: 'Cohorts Delivered', value: '2' },
              { label: 'Written In-House', value: '100%' },
            ].map((s) => (
              <div key={s.label} className="bg-surface p-6 text-center">
                <p className="font-display font-bold text-3xl text-gold mb-1">{s.value}</p>
                <p className="label-caps">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-border bg-surface-subtle section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">The Curriculum</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-14">
              Eight sessions, built from first principles.
            </h2>
          </ScrollReveal>
          <Timeline />
        </div>
      </section>

      {/* What you'll learn */}
      <section className="border-b border-border bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Outcomes</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-10">
              By the end of the course, you will be able to:
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {[
              'Explain how Bitcoin works at the cryptographic level',
              'Evaluate any token using a rigorous tokenomics framework',
              'Determine the current macro regime and its implications for crypto',
              'Position a portfolio according to Bitcoin market cycle theory',
              'Apply Modern Portfolio Theory to a digital asset allocation',
              'Read a chart, size a position, and execute with a defined framework',
              'Identify where blockchain genuinely creates value versus hype',
              'Contribute meaningfully to fund discussions and deployment decisions',
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-surface-subtle">
                  <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                  </span>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Course notes CTA */}
      <section className="bg-surface-subtle section-py">
        <div className="wrap text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl text-ink mb-4">
              Course notes available to all active members.
            </h2>
            <p className="text-ink-secondary font-sans text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Course notes are provided to all active W3TID members in LaTeX-formatted PDF. Authored by Leon Godtfredsen, Sahand Sarbaz, Josh Davidson, and Jose Garrido Boix.
            </p>
            <Link href="/#join" className="btn-gold inline-flex items-center gap-2">
              Become a Member <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
