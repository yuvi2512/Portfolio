import { profile } from "@/lib/data";
import Link from "next/link";
import { Mark } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-paper/60 sm:px-8">
      <div className="mx-auto flex max-w-[76rem] flex-col gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/#top" className="inline-flex items-center gap-2 font-serif text-lg font-semibold text-paper">
          <Mark />
          Yatish Joshi
        </Link>
        <p className="text-sm">
          {profile.title} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
