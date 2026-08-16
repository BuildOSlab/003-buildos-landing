import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "default" | "elevated" | "outlined" | "interactive";

type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  header?: ReactNode;
  footer?: ReactNode;
}

export function Card({
  variant = "default",
  padding = "lg",
  header,
  footer,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <article
      className={[
        "ui-card",
        `ui-card--${variant}`,
        `ui-card--padding-${padding}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {header && <div className="ui-card__header">{header}</div>}

      <div className="ui-card__body">{children}</div>

      {footer && <div className="ui-card__footer">{footer}</div>}
    </article>
  );
}