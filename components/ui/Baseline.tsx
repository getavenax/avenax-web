import { cn } from "@/lib/cn";

export type BaselineDelay = "none" | "sm" | "md" | "lg";

export interface BaselineProps {
  /** Stagger the draw when several standards appear in sequence. */
  delay?: BaselineDelay;
  className?: string;
}

const delayClasses: Record<BaselineDelay, string> = {
  none: "",
  sm: "delay-(--duration-fast)",
  md: "delay-(--duration-base)",
  lg: "delay-(--duration-slow)",
};

/**
 * The Baseline — the AVENAX signature (BRAND_DNA §1.5): a 1px hairline that
 * draws itself once, the visual form of "a standard." Decorative; the one
 * place motion boldness is spent. Reduced motion collapses it centrally.
 */
export function Baseline({ delay = "none", className }: BaselineProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block h-(--baseline-thickness) w-full origin-left animate-baseline-draw bg-primary",
        delayClasses[delay],
        className,
      )}
    />
  );
}
