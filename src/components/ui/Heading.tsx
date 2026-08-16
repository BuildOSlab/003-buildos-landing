import type { ElementType, HTMLAttributes } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingLevel | "display";
  align?: "left" | "center" | "right";
  balance?: boolean;
}

export function Heading({
  as = "h2",
  size,
  align = "left",
  balance = true,
  className = "",
  children,
  ...props
}: HeadingProps) {
  const Tag = as as ElementType;
  const resolvedSize = size ?? as;

  return (
    <Tag
      className={[
        "ui-heading",
        `ui-heading--${resolvedSize}`,
        `ui-heading--${align}`,
        balance ? "ui-heading--balance" : "",
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