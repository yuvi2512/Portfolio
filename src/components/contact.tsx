import { profile } from "@/lib/data";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "LinkedIn", value: "yatish-joshi", href: profile.linkedin },
  { label: "GitHub", value: "yuvi2512", href: profile.github },
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-[76rem] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <Reveal>
          <p className="eyebrow text-accent">06 — Contact</p>
          <h2 className="mt-4 font-serif text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            Tell me what you’re building.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/70">
            A product, a frontend problem, or a role — send a note and I’ll reply.
          </p>
          <ul className="mt-10 space-y-5">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  className="group block"
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <span className="eyebrow text-paper/45">{channel.label}</span>
                  <span className="link-underline mt-1 block font-serif text-2xl font-semibold sm:text-3xl">
                    {channel.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
