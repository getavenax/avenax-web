import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { gapClasses, type Gap } from "@/components/ui/Stack";

export type InlineAlign = "start" | "center" | "end" | "baseline";

export interface InlineProps extends HTMLAttributes<HTMLElement> {
  gap?: Gap;
  align?: InlineAlign;
  wrap?: boolean;
  as?: "div" | "span" | "ul" | "ol" | "nav";
}

const alignClasses: Record<InlineAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
};

/** Horizontal counterpart of Stack — token-stepped gaps, logical-flow safe. */
export function Inline({
  gap = "4",
  align = "center",
  wrap = false,
  as: Component = "div",
  className,
  ...rest
}: InlineProps) {
  return (
    <Component
      className={cn(
        "flex",
        alignClasses[align],
        gapClasses[gap],
        wrap && "flex-wrap",
        className,
      )}
      {...rest}
    />
  );
}
