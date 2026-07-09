import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type IconSize = "sm" | "md" | "lg";

export interface IconProps {
  /** Closed set (DESIGN_SYSTEM §7): sm=16, md=20, lg=24. */
  size?: IconSize;
  /** Accessible name. Without it the icon is decorative (aria-hidden). */
  label?: string;
  children: ReactNode;
  className?: string;
}

const sizeClasses: Record<IconSize, string> = {
  sm: "size-(--icon-sm)",
  md: "size-(--icon-md)",
  lg: "size-(--icon-lg)",
};

/** Wrapper that enforces the icon size set and 1.5 stroke on any SVG child. */
export function Icon({ size = "md", label, children, className }: IconProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "inline-flex shrink-0 items-center justify-center [&_svg]:size-full [&_svg]:[stroke-width:var(--icon-stroke)]",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
