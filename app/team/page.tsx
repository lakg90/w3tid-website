import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import { team } from '@/lib/data';

export default function TeamPage() {
  return (
    <main className="pt-14">
      <div className="border-b border-border bg-surface-subtle">
        <div className="wrap py-20">
          <p className="label-gold mb-4">The Team</p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink mb-4 tracking-tight max-w-3xl leading-tight">
            Built by students from Maths, Engineering, Economics, and Computer Science.
          </h1>
          <p className="text-ink-secondary font-sans text-base max-w-xl leading-relaxed">
            W3TID is run entirely by students. Every person on the committee manages real capital, teaches real sessions, or builds real products.
          </p>
        </div>
      </div>

      <section className="border-b border-border bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Committee</p>
            <h2 className="font-sans font-semibold text-3xl text-ink mb-12 tracking-tight">2025/26 Leadership Team</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {team.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.06}>
                <div className="bg-surface p-8 h-full hover:bg-surface-subtle transition-colors duration-200">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                    <span className="font-sans font-semibold text-base text-gold-dark">{person.initials}</span>
                  </div>
                  <p className="font-sans font-semibold text-base text-ink mb-1 tracking-tight">{person.name}</p>
                  <p className="text-[10px] font-sans text-gold uppercase tracking-widest font-medium mb-1">{person.role}</p>
                  <p className="label-caps text-ink-muted mb-4">{person.degree}</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{person.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface-subtle section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Structure</p>
            <h2 className="font-sans font-semibold text-3xl text-ink mb-10 tracking-tight">How we&apos;re organised.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { division: 'Trading & Investment', lead: 'Leon Godtfredsen', description: 'Manages the $13,000 fund — allocation decisions, trade execution, fund reports, and stakeholder communications.', members: ['Leon Godtfredsen', 'Sahand Sarbaz', 'Josh Davidson'] },
              { division: 'Education', lead: 'Sahand Sarbaz', description: 'Designs and delivers the 8-session blockchain curriculum. Manages course note authorship and session logistics.', members: ['Sahand Sarbaz', 'Leon Godtfredsen'] },
              { division: 'Think Tank & Development', lead: 'Cameron Matheson', description: 'Runs the venture research process — identifying projects, stress-testing ideas, and building working prototypes.', members: ['Cameron Matheson', 'Wojtek Zurek'] },
            ].map((d, i) => (
              <ScrollReveal key={d.division} delay={i * 0.07}>
                <div className="bg-surface p-7 h-full border-t-2 border-t-gold">
                  <p className="label-gold mb-1">{d.division}</p>
                  <p className="text-xs font-sans text-ink-muted mb-4">Lead: {d.lead}</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-5">{d.description}</p>
                  <div className="space-y-1.5">
                    {d.members.map(m => (
                      <div key={m} className="flex items-center gap-2 text-xs font-sans text-ink-muted">
                        <span className="w-1 h-1 rounded-full bg-gold" />{m}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <div className="border-t-2 border-t-gold pt-8 max-w-xl">
              <p className="label-gold mb-3">Join the Team</p>
              <h2 className="font-sans font-semibold text-2xl text-ink mb-4 tracking-tight">We recruit every academic year.</h2>
              <p className="text-ink-secondary font-sans text-sm leading-relaxed mb-6">
                We recruit new members and committee positions at the start of each academic year at the University of Edinburgh Society Fair. If you&apos;re passionate about blockchain, markets, or building in Web3 — we want to hear from you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#join" className="btn-gold inline-flex items-center gap-2">Apply at Society Fair <ArrowRight size={14} /></Link>
                <a href="mailto:lgodtfredsen@w3tid.uk" className="btn-outline inline-flex items-center gap-2"><Mail size={14} /> Get in Touch</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
