import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Sets aria-busy, blocks interaction, and shows the spinner. */
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-action text-inverse hover:bg-action-hover active:bg-action-active disabled:bg-surface-overlay disabled:text-tertiary",
  secondary:
    "border border-edge-strong text-primary hover:bg-surface-raised active:bg-surface-overlay disabled:border-edge disabled:text-tertiary",
  ghost:
    "text-primary hover:bg-surface-raised active:bg-surface-overlay disabled:text-tertiary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-(--button-height-sm) px-4 text-sm",
  md: "h-(--button-height-md) px-6 text-base",
  lg: "h-(--button-height-lg) px-8 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium select-none transition-colors duration-(--duration-fast) ease-out disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {loading && (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          className="size-(--icon-sm) animate-spin"
        >
          <circle
            cx="8"
            cy="8"
            r="6.5"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <path
            d="M8 1.5A6.5 6.5 0 0 1 14.5 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
