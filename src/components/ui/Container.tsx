import type { HTMLAttributes } from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "ui-container--sm",
  md: "ui-container--md",
  lg: "ui-container--lg",
  xl: "ui-container--xl",
  full: "ui-container--full",
};

export function Container({
  size = "xl",
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`ui-container ${sizeClasses[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}