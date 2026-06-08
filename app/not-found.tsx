import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="pt-16 min-h-screen bg-surface-subtle flex items-center">
      <div className="wrap text-center py-32">
        <p className="label-gold mb-4">404</p>
        <h1 className="font-display font-bold text-5xl text-ink mb-5">Page not found.</h1>
        <p className="text-ink-secondary font-sans text-lg max-w-md mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-gold">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
