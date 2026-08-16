import type { HTMLAttributes } from "react";

type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  as?: "section" | "div" | "article" | "aside";
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: "ui-section--none",
  sm: "ui-section--sm",
  md: "ui-section--md",
  lg: "ui-section--lg",
  xl: "ui-section--xl",
};

export function Section({
  spacing = "lg",
  as: Tag = "section",
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={`ui-section ${spacingClasses[spacing]} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}