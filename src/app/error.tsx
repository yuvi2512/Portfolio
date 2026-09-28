"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col justify-end bg-ink px-6 pb-16 text-paper">
      <p className="eyebrow text-accent">Error</p>
      <h1 className="mt-3 font-serif text-5xl font-semibold sm:text-7xl">This view didn’t load.</h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex w-fit rounded-full bg-accent px-5 py-3 font-semibold text-ink"
      >
        Try again
      </button>
    </main>
  );
}
