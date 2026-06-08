import Image from 'next/image';
import { Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';
import { upcomingEvents, pastEvents } from '@/lib/data';

export default function EventsPage() {
  return (
    <main className="pt-14">

      {/* Hero */}
      <div className="border-b border-border bg-surface-subtle">
        <div className="wrap py-20">
          <p className="label-gold mb-4">Speaker Events &amp; Workshops</p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-ink mb-4 tracking-tight max-w-3xl leading-tight">
            Industry practitioners, founders, and investors — speaking directly to our members.
          </h1>
          <p className="text-ink-secondary font-sans text-base max-w-xl leading-relaxed">
            W3TID runs regular speaker sessions throughout the academic year, bringing in professionals from across the Web3 and traditional finance landscape.
          </p>
        </div>
      </div>

      {/* Upcoming */}
      <section className="border-b border-border bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-gold mb-2">Upcoming — 2025/26</p>
            <h2 className="font-sans font-semibold text-3xl text-ink mb-12 tracking-tight">Confirmed speakers.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {upcomingEvents.map((ev, i) => (
              <ScrollReveal key={ev.name} delay={(i % 2) * 0.06}>
                <div className="bg-surface p-7 h-full hover:bg-surface-subtle transition-colors duration-200">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo or initials */}
                    <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0 overflow-hidden bg-surface">
                      {ev.logo ? (
                        <Image src={ev.logo} alt={ev.org} width={48} height={48} className="object-contain w-full h-full" />
                      ) : (
                        <span className="text-xs font-sans font-medium text-gold-dark">
                          {ev.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sans font-semibold text-base text-ink tracking-tight">{ev.name}</p>
                      <p className="text-xs font-sans text-gold font-medium">{ev.role}</p>
                      <p className="text-xs font-sans text-ink-muted">{ev.org}</p>
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-widest px-2 py-1 border border-border text-ink-muted whitespace-nowrap flex-shrink-0">
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
      <section className="border-b border-border bg-surface-subtle">
        <div className="wrap section-py">
          <ScrollReveal>
            <p className="label-caps mb-2">Past Events — 2024/25</p>
            <h2 className="font-sans font-semibold text-3xl text-ink mb-12 tracking-tight">Previous sessions.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((ev, i) => (
              <ScrollReveal key={ev.name} delay={i * 0.07}>
                <div className="card overflow-hidden hover:shadow-md transition-shadow duration-200 group">
                  <div className="relative overflow-hidden bg-surface-subtle">
                    <Image
                      src={ev.image}
                      alt={ev.name}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-sans font-semibold text-sm text-ink mb-0.5 tracking-tight">{ev.name}</p>
                    <p className="text-xs font-sans text-gold mb-3">{ev.role} · {ev.org}</p>
                    <p className="text-xs font-sans text-ink-secondary leading-relaxed">{ev.summary}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="bg-surface">
        <div className="wrap section-py">
          <ScrollReveal>
            <div className="border-t-2 border-t-gold pt-8 max-w-xl">
              <p className="label-gold mb-3">Speak at W3TID</p>
              <h2 className="font-sans font-semibold text-2xl text-ink mb-4 tracking-tight">Host a session with us.</h2>
              <p className="text-ink-secondary font-sans text-sm leading-relaxed mb-6">
                We&apos;re always looking for practitioners, founders, and investors to speak to our members. Sessions run during the academic year, typically 45 minutes with Q&amp;A.
              </p>
              <a href="mailto:lgodtfredsen@w3tid.uk" className="btn-gold inline-flex items-center gap-2">
                <Mail size={14} /> Get in Touch
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
