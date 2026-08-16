import type { HTMLAttributes } from "react";

type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;
  label?: string;
}

export function Divider({
  orientation = "horizontal",
  label,
  className = "",
  ...props
}: DividerProps) {
  if (label && orientation === "horizontal") {
    return (
      <div
        className={`ui-divider-with-label ${className}`.trim()}
        role="separator"
      >
        <span className="ui-divider" aria-hidden="true" />
        <span className="ui-divider__label">{label}</span>
        <span className="ui-divider" aria-hidden="true" />
      </div>
    );
  }

  return (
    <hr
      className={[
        "ui-divider",
        `ui-divider--${orientation}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}