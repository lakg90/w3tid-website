'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 px-6 py-4 bg-gold/10 border border-gold/30 rounded-lg">
        <span className="text-gold-dark font-sans text-sm font-medium">
          ✓ Noted — we&apos;ll be in touch for the next cohort.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 px-4 py-3 border border-border rounded-sm font-sans text-sm text-ink bg-surface placeholder:text-ink-muted focus:outline-none focus:border-gold transition-colors"
      />
      <button type="submit" className="btn-gold whitespace-nowrap">
        Register Interest
      </button>
    </form>
  );
}
