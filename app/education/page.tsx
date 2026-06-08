import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import Timeline from '@/components/Timeline';

export default function EducationPage() {
  return (
    <main className="pt-14">
      <div className="border-b border-border bg-surface-subtle">
        <div className="wrap py-20">
          <p className="label-gold mb-4">Blockchain Education</p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink mb-4 tracking-tight max-w-3xl leading-tight">
            Eight sessions. From the history of money to live trading execution.
          </h1>
          <p className="text-ink-secondary font-sans text-base max-w-xl leading-relaxed">
            Our blockchain course was written entirely in-house by W3TID members and delivered to every cohort since founding. It covers technical fundamentals, DeFi, tokenomics, macro-economic analysis, and trading.
          </p>
        </div>
      </div>

      <section className="border-b border-border bg-surface">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { label: 'Sessions', value: '8' },
              { label: 'Topics Covered', value: '40+' },
              { label: 'Cohorts Delivered', value: '2' },
              { label: 'Written In-House', value: '100%' },
            ].map(s => (
              <div key={s.label} className="bg-surface p-6 text-center">
                <p className="font-sans font-semibold text-3xl text-gold mb-1">{s.value}</p>
                <p className="label-caps">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface-subtle section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">The Curriculum</p>
            <h2 className="font-sans font-semibold text-3xl text-ink mb-12 tracking-tight">Eight sessions, built from first principles.</h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_260px] gap-10 items-start">
            <Timeline />
            <div className="hidden lg:flex flex-col gap-4 sticky top-20">
              <Image
                src="/Team/session-classroom.jpeg"
                alt="W3TID classroom session"
                width={520} height={390}
                className="w-full object-cover border border-border"
              />
              <Image
                src="/Team/session-circle.png"
                alt="W3TID session circle"
                width={520} height={390}
                className="w-full object-cover border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Outcomes</p>
            <h2 className="font-sans font-semibold text-2xl text-ink mb-8 tracking-tight">By the end of the course, you will be able to:</h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">
            <div className="grid md:grid-cols-2 gap-3">
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
                <ScrollReveal key={i} delay={i * 0.03}>
                  <div className="flex items-start gap-3 p-4 border border-border bg-surface-subtle">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-2" />
                    <p className="text-sm font-sans text-ink-secondary leading-relaxed">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="hidden lg:block">
              <Image
                src="/Team/social.jpeg"
                alt="W3TID members"
                width={560} height={740}
                className="w-full object-cover border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-subtle section-py">
        <div className="wrap">
          <ScrollReveal>
            <div className="border-t-2 border-t-gold pt-8 max-w-xl">
              <h2 className="font-sans font-semibold text-2xl text-ink mb-3 tracking-tight">Course notes available to all active members.</h2>
              <p className="text-ink-secondary font-sans text-sm leading-relaxed mb-6">
                Provided in LaTeX-formatted PDF. Authored by Leon Godtfredsen, Sahand Sarbaz, Josh Davidson, and Jose Garrido Boix.
              </p>
              <Link href="/#join" className="btn-gold inline-flex items-center gap-2">
                Become a Member <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
