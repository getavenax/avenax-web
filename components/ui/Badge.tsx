import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { ControlSize } from "@/types/ui";

export type BadgeVariant = "neutral" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: ControlSize;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-surface-overlay text-secondary",
  outline: "border border-edge-strong text-secondary",
};

const sizeClasses: Record<ControlSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
};

export function Badge({
  variant = "neutral",
  size = "sm",
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    />
  );
}
