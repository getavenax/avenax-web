import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type CardVariant = "flat" | "raised" | "interactive";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  as?: "div" | "article" | "section";
}

/**
 * Elevation is light, not shadow (Design Law 5): surfaces lighten as they
 * approach the user; edges are hairlines. No shadow exists on any variant.
 */
const variantClasses: Record<CardVariant, string> = {
  flat: "bg-surface border border-edge",
  raised: "bg-surface-raised border border-edge",
  interactive:
    "bg-surface-raised border border-edge transition-colors duration-(--duration-fast) ease-out hover:bg-surface-overlay hover:border-edge-strong focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-(--border-focus)",
};

export function Card({
  variant = "raised",
  as: Component = "div",
  className,
  ...rest
}: CardProps) {
  return (
    <Component
      className={cn("rounded-md p-(--card-padding)", variantClasses[variant], className)}
      {...rest}
    />
  );
}
