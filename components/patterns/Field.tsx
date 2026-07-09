import { cloneElement, isValidElement, useId, type ReactElement } from "react";
import { cn } from "@/lib/cn";
import { Stack } from "@/components/ui/Stack";

interface FieldControlProps {
  id?: string;
  required?: boolean;
  invalid?: boolean;
  "aria-describedby"?: string;
}

export interface FieldProps {
  label: string;
  hint?: string;
  /** Error text. Presence marks the control invalid (monochrome-first, ADR-019). */
  error?: string;
  required?: boolean;
  /** Exactly one form control (Input, Textarea, Select). */
  children: ReactElement<FieldControlProps>;
  className?: string;
}

/**
 * Label + control + hint/error with the ARIA wiring done once, correctly:
 * label→control via htmlFor; hint and error joined into aria-describedby;
 * error presence drives the control's invalid state. Error is real text —
 * never color alone (which monochrome enforces by construction).
 */
export function Field({
  label,
  hint,
  error,
  required = false,
  children,
  className,
}: FieldProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy =
    [hintId, errorId].filter(Boolean).join(" ") || undefined;

  if (!isValidElement(children)) {
    throw new Error("Field expects exactly one form-control child.");
  }

  return (
    <Stack gap="2" className={className}>
      <label htmlFor={id} className="text-sm font-medium text-primary">
        {label}
        {required && (
          <span aria-hidden="true" className="text-tertiary">
            {" "}
            *
          </span>
        )}
      </label>
      {cloneElement(children, {
        id,
        required,
        invalid: Boolean(error),
        "aria-describedby": describedBy,
      })}
      {/* polite live region: errors that appear after submit are announced */}
      <span aria-live="polite">
        {error ? (
          <span id={errorId} className={cn("block text-sm text-primary")}>
            — {error}
          </span>
        ) : hint ? (
          <span id={hintId} className="block text-sm text-tertiary">
            {hint}
          </span>
        ) : null}
      </span>
    </Stack>
  );
}
