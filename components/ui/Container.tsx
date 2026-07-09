import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ContainerWidth = "default" | "narrow" | "wide";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** default=1200 page · narrow=720 prose · wide=1440 full-bleed sections. */
  width?: ContainerWidth;
  as?: "div" | "section" | "main" | "header" | "footer";
}

const widthClasses: Record<ContainerWidth, string> = {
  default: "max-w-(--container-max)",
  narrow: "max-w-(--container-narrow)",
  wide: "max-w-(--container-wide)",
};

export function Container({
  width = "default",
  as: Component = "div",
  className,
  ...rest
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-6 md:px-10", widthClasses[width], className)}
      {...rest}
    />
  );
}
