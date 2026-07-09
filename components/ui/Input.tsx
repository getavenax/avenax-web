import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { ControlSize } from "@/types/ui";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: ControlSize;
  /** Sets aria-invalid; the error message itself belongs to Field (Layer B). */
  invalid?: boolean;
}

const sizeClasses: Record<ControlSize, string> = {
  sm: "h-(--input-height-sm) text-sm",
  md: "h-(--input-height-md) text-base",
};

export function Input({
  size = "md",
  invalid = false,
  className,
  ...rest
}: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        // Invalid = maximum-contrast hairline, monochrome-first (ADR-019):
        // the error is said in text by Field, never by color alone.
        "w-full rounded-sm border border-edge-strong bg-transparent px-4 text-primary transition-colors duration-(--duration-fast) ease-out placeholder:text-tertiary aria-invalid:border-(--text-primary) disabled:pointer-events-none disabled:border-edge disabled:text-tertiary",
        sizeClasses[size],
        className,
      )}
      {...rest}
    />
  );
}
