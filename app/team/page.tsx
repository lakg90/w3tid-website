import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import { team } from '@/lib/data';

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-16 h-16 rounded-full bg-gold/15 border-2 border-gold/30 flex items-center justify-center mb-5">
      <span className="font-display font-bold text-xl text-gold-dark">{initials}</span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="pt-16">

      {/* Hero */}
      <div className="border-b border-border bg-surface-subtle grain-overlay">
        <div className="wrap relative z-10 py-20">
          <p className="label-gold mb-4">The Team</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ink mb-5 max-w-3xl leading-tight">
            Built by students from Maths, Engineering, Economics, and Computer Science.
          </h1>
          <p className="text-ink-secondary font-sans text-lg max-w-xl leading-relaxed">
            W3TID is run entirely by students. Every person on the committee manages real capital, teaches real sessions, or builds real products.
          </p>
        </div>
      </div>

      {/* Leadership */}
      <section className="border-b border-border bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Committee</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-12">
              2025/26 Leadership Team
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.07}>
                <div className="card p-8 h-full hover:shadow-md transition-shadow duration-200 hover:border-gold/30">
                  <Avatar initials={person.initials} />
                  <p className="font-display font-bold text-xl text-ink mb-1">{person.name}</p>
                  <p className="text-xs font-sans text-gold-dark font-medium uppercase tracking-wide mb-1">{person.role}</p>
                  <p className="label-caps text-ink-muted mb-4">{person.degree}</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{person.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="border-b border-border bg-surface-subtle section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Structure</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-10">
              How we&apos;re organised.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                division: 'Trading & Investment',
                lead: 'Leon Godtfredsen',
                description: 'Manages the $13,000 fund — allocation decisions, trade execution, fund reports, and stakeholder communications.',
                members: ['Leon Godtfredsen', 'Sahand Sarbaz', 'Josh Davidson'],
              },
              {
                division: 'Education',
                lead: 'Sahand Sarbaz',
                description: 'Designs and delivers the 8-session blockchain curriculum. Manages course note authorship and session logistics.',
                members: ['Sahand Sarbaz', 'Leon Godtfredsen'],
              },
              {
                division: 'Think Tank & Development',
                lead: 'Cameron Matheson',
                description: 'Runs the venture research process — identifying projects, stress-testing ideas, and building working prototypes.',
                members: ['Cameron Matheson', 'Wojtek Zurek'],
              },
            ].map((d, i) => (
              <ScrollReveal key={d.division} delay={i * 0.08}>
                <div className="card p-7 border-t-4 border-t-gold h-full">
                  <p className="label-gold mb-2">{d.division}</p>
                  <p className="text-xs font-sans text-ink-muted mb-4">Lead: {d.lead}</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-5">{d.description}</p>
                  <div className="space-y-1.5">
                    {d.members.map((m) => (
                      <div key={m} className="flex items-center gap-2 text-xs font-sans text-ink-muted">
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="label-gold mb-3">Join the Team</p>
              <h2 className="font-display font-bold text-3xl text-ink mb-4">
                We recruit every academic year.
              </h2>
              <p className="text-ink-secondary font-sans text-lg leading-relaxed mb-8">
                We recruit new members and committee positions at the start of each academic year at the University of Edinburgh Society Fair. If you&apos;re passionate about blockchain, markets, or building in Web3 — we want to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#join" className="btn-gold inline-flex items-center gap-2">
                  Apply at Society Fair <ArrowRight size={16} />
                </Link>
                <a href="mailto:lgodtfredsen@w3tid.uk" className="btn-outline inline-flex items-center gap-2">
                  <Mail size={16} /> Get in Touch
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
