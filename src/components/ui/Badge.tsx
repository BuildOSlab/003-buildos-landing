import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info";

type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  icon?: ReactNode;
}

export function Badge({
  variant = "default",
  size = "md",
  dot = false,
  icon,
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "ui-badge",
        `ui-badge--${variant}`,
        `ui-badge--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {dot && <span className="ui-badge__dot" aria-hidden="true" />}

      {icon && <span className="ui-badge__icon">{icon}</span>}

      <span>{children}</span>
    </span>
  );
}