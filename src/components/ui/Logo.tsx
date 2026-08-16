import Link from "next/link";
import type { SVGProps } from "react";

export interface LogoProps {
  href?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function BuildOSMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="10"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M12 13H28M12 20H24M12 27H28"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  href = "/",
  showWordmark = true,
  size = "md",
  className = "",
}: LogoProps) {
  return (
    <Link
      href={href}
      className={[
        "ui-logo",
        `ui-logo--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="BuildOS home"
    >
      <BuildOSMark className="ui-logo__mark" />

      {showWordmark && (
        <span className="ui-logo__wordmark">
          BuildOS
        </span>
      )}
    </Link>
  );
}