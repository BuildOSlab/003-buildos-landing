import type { Metadata } from "next";

import "./../styles/globals/reset.css";

import "./../styles/tokens/colors.css";
import "./../styles/tokens/layout.css";
import "./../styles/tokens/motion.css";
import "./../styles/tokens/radius.css";
import "./../styles/tokens/shadows.css";
import "./../styles/tokens/spacing.css";
import "./../styles/tokens/typography.css";

import "./../styles/globals/base.css";

import "./../styles/globals/components/layout.css";
import "./../styles/globals/components/header.css";
import "./../styles/globals/components/logo.css";
import "./../styles/globals/components/hero.css";
import "./../styles/globals/components/sections.css";
import "./../styles/globals/components/marketplace.css";
import "./../styles/globals/components/how-it-works.css";
import "./../styles/how-it-works/index.css";
import "./../styles/globals/components/workforce.css";
import "./../styles/globals/components/delivery.css";
import "./../styles/globals/components/verification.css";
import "./../styles/globals/components/projects.css";
import "./../styles/globals/components/trust.css";
import "./../styles/globals/components/diaspora.css";
import "./../styles/globals/components/benefits.css";
import "./../styles/globals/components/split-sections.css";
import "./../styles/globals/components/cta.css";
import "./../styles/globals/components/footer.css";
import "./../styles/globals/components/theme-toggle.css";
import "./../styles/globals/components/about.css";
import "./../styles/globals/components/responsive.css";

import "./../styles/utilities/utilities.css";
import "./../styles/animations/animations.css";
import "./../styles/responsive/breakpoints.css";
import "./../styles/privacy/legal.css";

export const metadata: Metadata = {
  title: "BuildOS — The Operating Platform for Construction",
  description:
    "BuildOS connects construction materials, delivery, workforce, projects, and property services in one platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}