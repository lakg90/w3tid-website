import Link from 'next/link';
import { ExternalLink, ArrowRight, CheckCircle, XCircle, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/AnimatedSection';

export default function ThinkTankPage() {
  return (
    <main className="pt-16">

      {/* Hero */}
      <div className="border-b border-border bg-surface-subtle grain-overlay">
        <div className="wrap relative z-10 py-20">
          <p className="label-gold mb-4">Web3 Think Tank</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ink mb-5 max-w-3xl leading-tight">
            Identifying where blockchain actually creates value — and building it.
          </h1>
          <p className="text-ink-secondary font-sans text-lg max-w-2xl leading-relaxed">
            The Think Tank is W3TID&apos;s venture arm. We don&apos;t debate blockchain in the abstract. We pick specific problems, stress-test whether blockchain is the right tool, and build working prototypes.
          </p>
        </div>
      </div>

      {/* How We Work */}
      <section className="border-b border-border bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Our Process</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-12">
              How we work.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Identify',
                body: "We start with a real-world problem, not a solution. The question is always: does decentralisation, immutability, or cryptographic verification genuinely improve this process — or is a conventional database cheaper and better?",
              },
              {
                step: '02',
                title: 'Stress Test',
                body: "We pressure-test every idea against the blockchain trilemma, regulatory constraints, and adoption barriers. Most ideas don't survive this stage. That's the point.",
              },
              {
                step: '03',
                title: 'Build',
                body: "If an idea passes scrutiny, we build a working prototype. Members with technical skills build; members with domain expertise guide. Everyone ships.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.08}>
                <div className="card p-8 border-t-4 border-t-gold hover:shadow-md transition-shadow duration-200">
                  <p className="label-gold mb-3">{item.step}</p>
                  <h3 className="font-display font-bold text-2xl text-ink mb-4">{item.title}</h3>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="border-b border-border bg-surface-subtle section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-gold mb-2">Active Projects</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-12">
              What we&apos;re building.
            </h2>
          </ScrollReveal>

          {/* Flagship: VHP */}
          <ScrollReveal>
            <div className="card p-8 md:p-10 border-t-4 border-t-gold mb-8 hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-200 rounded-sm text-xs font-sans font-medium text-green-700">
                      <CheckCircle size={11} /> Beta · Live
                    </span>
                    <span className="label-gold">Flagship Project</span>
                  </div>
                  <h3 className="font-display font-bold text-3xl text-ink">
                    Vessel Health Passport
                  </h3>
                </div>
                <a
                  href="https://vhp-puce.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold whitespace-nowrap"
                >
                  View Beta <ExternalLink size={14} />
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="label-caps mb-2">The Problem</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed mb-6">
                    The maritime industry relies on paper-based vessel inspection and maintenance records that are easily falsified, siloed across operators, and inaccessible in emergencies. VHP is an on-chain passport system for maritime vessels — a tamper-proof, permissioned record of a vessel&apos;s maintenance history, safety certifications, and inspection reports, anchored on-chain with IPFS document storage.
                  </p>
                </div>
                <div>
                  <p className="label-caps mb-2">Why Blockchain?</p>
                  <div className="space-y-2.5">
                    {[
                      'Immutability prevents record falsification',
                      'Permissioned access lets port authorities and insurers verify records without central intermediaries',
                      'Cryptographic signatures provide audit trails',
                    ].map((r) => (
                      <div key={r} className="flex items-start gap-2.5 text-sm font-sans text-ink-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Project 2 */}
          <ScrollReveal delay={0.08}>
            <div className="card p-8 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-sm text-xs font-sans font-medium text-amber-700">
                  <Clock size={11} /> In Development
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-ink mb-4">
                Medical Record Data on Blockchain
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="label-caps mb-2">The Problem</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">
                    Patient medical records are fragmented across NHS trusts, private providers, and international systems. A patient who moves or is treated abroad has no reliable way to share their complete history. We are exploring a consent-driven, patient-owned medical record system where the patient holds the private key and explicitly grants access to providers.
                  </p>
                </div>
                <div>
                  <p className="label-caps mb-2">Why Blockchain?</p>
                  <p className="text-sm font-sans text-ink-secondary leading-relaxed">
                    Self-sovereign identity and cryptographic consent mechanisms solve the access control problem without requiring a central data custodian — which is both a privacy risk and a regulatory liability.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ideas Rejected */}
      <section className="border-b border-border bg-surface section-py">
        <div className="wrap">
          <ScrollReveal>
            <p className="label-caps mb-2">Intellectual Rigour</p>
            <h2 className="font-display font-bold text-4xl text-ink mb-3">
              Ideas we&apos;ve rejected.
            </h2>
            <p className="text-ink-secondary font-sans text-base max-w-xl mb-10">
              We don&apos;t just build for building&apos;s sake. Most ideas fail scrutiny. Here&apos;s what didn&apos;t make the cut, and why.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                idea: 'Supply Chain Tracking',
                reason: "The problem is oracle trust, not the chain. If the data entering the system is wrong, the blockchain doesn't help.",
              },
              {
                idea: 'Voting Systems',
                reason: 'Technically sound, but the adversarial environment and accessibility requirements make conventional systems preferable for now.',
              },
              {
                idea: 'NFT Ticketing',
                reason: 'Solved the wrong problem. The fraud issue in ticketing is at point-of-sale, not transfer.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.idea} delay={i * 0.06}>
                <div className="card p-6 border-l-4 border-l-red-200 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle size={14} className="text-red-400 flex-shrink-0" />
                    <p className="font-sans font-semibold text-sm text-ink">{item.idea}</p>
                  </div>
                  <p className="text-sm font-sans text-ink-muted leading-relaxed">{item.reason}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-surface-subtle section-py">
        <div className="wrap text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl text-ink mb-4">
              Bring us a problem worth solving.
            </h2>
            <p className="text-ink-secondary font-sans text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              If you have a problem worth solving and want to stress-test it with us, bring it to a session. The Think Tank runs in parallel with fund operations every semester.
            </p>
            <Link href="/#join" className="btn-gold inline-flex items-center gap-2">
              Get Involved <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
