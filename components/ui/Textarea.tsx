import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Sets aria-invalid; the error message itself belongs to Field (Layer B). */
  invalid?: boolean;
}

export function Textarea({ invalid = false, className, ...rest }: TextareaProps) {
  return (
    <textarea
      aria-invalid={invalid || undefined}
      className={cn(
        "w-full rounded-sm border border-edge-strong bg-transparent px-4 py-3 text-base text-primary transition-colors duration-(--duration-fast) ease-out placeholder:text-tertiary aria-invalid:border-negative disabled:pointer-events-none disabled:border-edge disabled:text-tertiary",
        className,
      )}
      {...rest}
    />
  );
}
