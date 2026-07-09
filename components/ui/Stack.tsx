import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Spacing-scale steps (4px base) the rhythm primitives accept. */
export type Gap =
  | "1"
  | "2"
  | "3"
  | "4"
  | "6"
  | "8"
  | "12"
  | "16"
  | "24"
  | "32"
  | "48";

/* Static strings so the utility scanner sees every class. Shared with Inline. */
export const gapClasses: Record<Gap, string> = {
  "1": "gap-1",
  "2": "gap-2",
  "3": "gap-3",
  "4": "gap-4",
  "6": "gap-6",
  "8": "gap-8",
  "12": "gap-12",
  "16": "gap-16",
  "24": "gap-24",
  "32": "gap-32",
  "48": "gap-48",
};

export interface StackProps extends HTMLAttributes<HTMLElement> {
  gap?: Gap;
  as?: "div" | "section" | "ul" | "ol" | "nav";
}

/** Vertical rhythm — sections never hand-roll margins (DESIGN_SYSTEM §7). */
export function Stack({
  gap = "4",
  as: Component = "div",
  className,
  ...rest
}: StackProps) {
  return (
    <Component
      className={cn("flex flex-col", gapClasses[gap], className)}
      {...rest}
    />
  );
}
