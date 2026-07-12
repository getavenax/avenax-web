"use client";

import { useState, type FormEvent } from "react";
import { Baseline } from "@/components/ui/Baseline";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Stack } from "@/components/ui/Stack";
import { Field } from "@/components/patterns/Field";
import { SITE, WAITLIST_ENDPOINT } from "@/constants/site";

type Status = "idle" | "submitting" | "success";

/* Stricter than the browser's own email check (which accepts "a@b"). */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface WaitlistFormProps {
  /** Attribution tag stored with the signup (never PII). */
  source?: string;
  className?: string;
}

/**
 * The one Client Component on the site — the boundary sits exactly here.
 * Without JS the form still posts form-encoded to the Worker (progressive
 * enhancement); with JS it fetches and renders inline states.
 */
export function WaitlistForm({ source = "site", className }: WaitlistFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | undefined>(undefined);
  const [formError, setFormError] = useState<string | undefined>(undefined);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "")
      .trim()
      .toLowerCase();
    const website = String(data.get("website") ?? "");

    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      setFieldError("Enter a valid email address.");
      return;
    }
    setFieldError(undefined);
    setFormError(undefined);
    setStatus("submitting");

    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website }),
      });
      if (res.status === 429) {
        setFormError("Too many attempts — try again in a minute.");
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setFormError("Something interrupted the request — try again.");
      setStatus("idle");
    }
  }

  return (
    <div aria-live="polite" className={className}>
      {status === "success" ? (
        <Stack gap="4">
          <p className="text-lg text-primary">
            You&rsquo;re on the list. We&rsquo;ll be in touch when{" "}
            {SITE.product.shortName}{" "}
            opens.
          </p>
          <Baseline />
        </Stack>
      ) : (
        <form
          action={WAITLIST_ENDPOINT}
          method="post"
          onSubmit={handleSubmit}
        >
          <Stack gap="4">
            <Field label="Email" error={fieldError} required>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
              />
            </Field>
            {/* Honeypot — hidden from humans and assistive tech alike. */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="waitlist-website">Website</label>
              <input
                id="waitlist-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <Button type="submit" loading={status === "submitting"}>
              Join the waitlist
            </Button>
            {formError && (
              <p className="text-sm text-primary">&mdash; {formError}</p>
            )}
            <p className="text-xs text-tertiary">
              Early access updates only. No spam. Delete on request.
            </p>
          </Stack>
        </form>
      )}
    </div>
  );
}
