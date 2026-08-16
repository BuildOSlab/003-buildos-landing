import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonSize = "sm" | "md" | "lg";

type IconButtonVariant =
  | "default"
  | "primary"
  | "ghost"
  | "outline"
  | "danger";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}

export function IconButton({
  icon,
  label,
  size = "md",
  variant = "default",
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={[
        "ui-icon-button",
        `ui-icon-button--${size}`,
        `ui-icon-button--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
}