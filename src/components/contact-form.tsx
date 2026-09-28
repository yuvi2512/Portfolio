"use client";

import { sendNote, type ContactState } from "@/app/actions/contact";
import { useActionState } from "react";
import { ArrowIcon } from "./icons";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendNote, initial);

  if (state.status === "ready") {
    return (
      <div className="rounded-[1.6rem] bg-paper p-7 text-ink">
        <p className="eyebrow text-muted">Ready</p>
        <p className="mt-3 font-serif text-3xl font-semibold leading-tight">{state.message}</p>
        {state.mailto ? (
          <a
            href={state.mailto}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-paper"
          >
            Open in mail
            <ArrowIcon />
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form action={action} className="rounded-[1.6rem] bg-paper p-7 text-ink" noValidate>
      <p className="eyebrow text-muted">Message</p>
      <div className="mt-6 space-y-5">
        <Field label="Name" name="name" autoComplete="name" error={state.fieldErrors?.name} />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          error={state.fieldErrors?.email}
        />
        <label className="block">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-2 w-full resize-y border-b border-ink/20 bg-transparent py-2 outline-none transition-colors focus:border-ink"
          />
          {state.fieldErrors?.message ? (
            <span className="mt-1 block text-sm text-danger">{state.fieldErrors.message}</span>
          ) : null}
        </label>
        <label className="sr-only">
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {state.status === "error" && state.message ? (
        <p className="mt-4 text-sm text-danger" role="alert">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-ink disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
        <ArrowIcon />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 outline-none transition-colors focus:border-ink"
      />
      {error ? <span className="mt-1 block text-sm text-danger">{error}</span> : null}
    </label>
  );
}
