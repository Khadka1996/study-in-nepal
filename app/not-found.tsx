import Link from 'next/link'

export default function NotFound(): JSX.Element {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-[2rem] border border-[var(--color-light)] bg-white p-8 text-center shadow-soft lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">We could not find that page.</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">Return to the main portal and continue exploring study options in Nepal.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
          Back home
        </Link>
      </section>
    </main>
  )
}
