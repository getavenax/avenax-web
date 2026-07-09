import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { ControlSize } from "@/types/ui";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: ControlSize;
  /** Sets aria-invalid; the error message itself belongs to Field (Layer B). */
  invalid?: boolean;
}

const sizeClasses: Record<ControlSize, string> = {
  sm: "h-(--input-height-sm) text-sm",
  md: "h-(--input-height-md) text-base",
};

/**
 * Styles the NATIVE select — custom listboxes are an accessibility tax the
 * primitive layer refuses (semantic HTML first, ENGINEERING_RULES §5).
 */
export function Select({
  size = "md",
  invalid = false,
  className,
  children,
  ...rest
}: SelectProps) {
  return (
    <span className={cn("relative inline-flex w-full", className)}>
      <select
        aria-invalid={invalid || undefined}
        className={cn(
          // Invalid = maximum-contrast hairline, monochrome-first (ADR-019).
          "w-full appearance-none rounded-sm border border-edge-strong bg-transparent ps-4 pe-10 text-primary transition-colors duration-(--duration-fast) ease-out aria-invalid:border-(--text-primary) disabled:pointer-events-none disabled:border-edge disabled:text-tertiary",
          sizeClasses[size],
        )}
        {...rest}
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        className="pointer-events-none absolute end-4 top-1/2 size-(--icon-sm) -translate-y-1/2 text-secondary"
      >
        <path
          d="M4 6l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
