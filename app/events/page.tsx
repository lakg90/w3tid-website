import { Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import { upcomingEvents, pastEvents } from '@/lib/data';

function InitialsAvatar({ name, large = false }: { name: string; large?: boolean }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className={`rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 ${large ? 'w-14 h-14' : 'w-11 h-11'}`}>
      <span className={`font-display font-bold text-gold-dark ${large ? 'text-base' : 'text-sm'}`}>{initials}</span>
    </div>
  );
}

export default function EventsPage() {
  return (
    <main className="pt-16">

      {/* Hero */}
      <div className="border-b border-border bg-surface-subtle grain-overlay">
        <div className="wrap relative z-10 py-20">
          <p className="label-gold mb-4">Speaker Events &amp; Workshops</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ink mb-5 max-w-3xl leading-tight">
            Industry practitioners, founders, and investors — speaking directly to our members.
          </h1>
          <p className="text-ink-secondary font-sans text-lg max-w-2xl leading-relaxed">
            W3TID runs regular speaker sessions throughout the academic year, bringing in professionals from across the Web3 and traditional finance landscape. All sessions are open to members.
          </p>
        </div>
      </div>

      {/* Upcoming */}
      <section className="border-b border-border bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Upcoming — 2025/26</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-12">
              Confirmed speakers for the coming year.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((ev, i) => (
              <ScrollReveal key={ev.name} delay={(i % 2) * 0.08}>
                <div className="card p-7 h-full hover:shadow-md transition-shadow duration-200 hover:border-gold/30">
                  <div className="flex items-start gap-4 mb-4">
                    <InitialsAvatar name={ev.name} large />
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-xl text-ink leading-tight">{ev.name}</p>
                      <p className="text-sm font-sans text-gold-dark font-medium mt-0.5">{ev.role}</p>
                      <p className="text-xs font-sans text-ink-muted">{ev.org}</p>
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 bg-surface-subtle border border-border rounded-sm text-ink-muted whitespace-nowrap flex-shrink-0">
                      {ev.date}
                    </span>
                  </div>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{ev.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="border-b border-border bg-surface-subtle section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-caps mb-2">Past Events — 2024/25</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-12">
              Previous speakers.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((ev, i) => (
              <ScrollReveal key={ev.name} delay={i * 0.08}>
                <div className="card p-7 h-full opacity-90 hover:opacity-100 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start gap-3 mb-4">
                    <InitialsAvatar name={ev.name} />
                    <div>
                      <p className="font-display font-bold text-lg text-ink leading-tight">{ev.name}</p>
                      <p className="text-xs font-sans text-ink-muted">{ev.role} · {ev.org}</p>
                    </div>
                  </div>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{ev.summary}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="label-gold mb-3">Speak at W3TID</p>
              <h2 className="font-display font-bold text-3xl text-ink mb-4">
                Host a session with us.
              </h2>
              <p className="text-ink-secondary font-sans text-lg leading-relaxed mb-8">
                We&apos;re always looking for practitioners, founders, and investors to speak to our members. Sessions run during the academic year, typically 45 minutes with Q&amp;A.
              </p>
              <a
                href="mailto:lgodtfredsen@w3tid.uk"
                className="btn-gold inline-flex items-center gap-2"
              >
                <Mail size={16} /> Get in Touch
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
