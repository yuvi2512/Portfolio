import { Nav } from "@/components/nav";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col justify-end bg-ink px-6 pb-16 pt-32 text-paper">
        <p className="eyebrow text-accent">404</p>
        <h1 className="mt-3 font-serif text-6xl font-semibold tracking-tight sm:text-8xl">
          This page
          <span className="block text-accent">doesn’t exist.</span>
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex w-fit rounded-full bg-accent px-5 py-3 font-semibold text-ink"
        >
          Back home
        </Link>
      </main>
    </>
  );
}
