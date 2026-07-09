import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  orientation = "horizontal",
  className,
  ...rest
}: DividerProps) {
  if (orientation === "vertical") {
    // hr is horizontal-only semantics; vertical separators are ARIA-declared.
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={cn("w-px self-stretch bg-edge", className)}
        {...rest}
      />
    );
  }
  return (
    <hr
      className={cn("w-full border-0 border-t border-edge", className)}
      {...rest}
    />
  );
}
