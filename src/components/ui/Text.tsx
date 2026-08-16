import type { ElementType, HTMLAttributes } from "react";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

type TextTone =
  | "default"
  | "muted"
  | "subtle"
  | "accent"
  | "danger";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  size?: TextSize;
  tone?: TextTone;
  align?: "left" | "center" | "right";
  weight?: "normal" | "medium" | "semibold" | "bold";
  leading?: "tight" | "normal" | "relaxed";
}

export function Text({
  as: Tag = "p",
  size = "md",
  tone = "default",
  align = "left",
  weight = "normal",
  leading = "normal",
  className = "",
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={[
        "ui-text",
        `ui-text--${size}`,
        `ui-text--${tone}`,
        `ui-text--${align}`,
        `ui-text--${weight}`,
        `ui-text--${leading}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}