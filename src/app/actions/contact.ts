"use server";

export type ContactState = {
  status: "idle" | "error" | "ready";
  message?: string;
  mailto?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

const initialReady: ContactState = { status: "idle" };

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

export async function sendNote(
  previous: ContactState = initialReady,
  formData: FormData,
): Promise<ContactState> {
  if (formData.get("reset") === "1") return { ...previous, status: "idle" };
  const company = clean(formData.get("company"), 200);
  if (company) {
    return { status: "ready", message: "Thanks. Your message is ready." };
  }

  const name = clean(formData.get("name"), 80);
  const email = clean(formData.get("email"), 120);
  const message = clean(formData.get("message"), 2000);
  const fieldErrors: ContactState["fieldErrors"] = {};

  if (name.length < 2) fieldErrors.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "That email doesn’t look right.";
  }
  if (message.length < 12) {
    fieldErrors.message = "A little more detail helps me answer well.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check the fields and try again.",
      fieldErrors,
    };
  }

  const body = `${message}\n\n— ${name}\n${email}`.slice(0, 1500);
  const mailto = `mailto:joshiyatish25@gmail.com?subject=${encodeURIComponent(
    `Note from ${name}`,
  )}&body=${encodeURIComponent(body)}`;

  return {
    status: "ready",
    message:
      "Your message is ready. Open it in your mail app and it will reach me directly.",
    mailto,
  };
}
