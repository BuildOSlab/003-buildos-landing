import type { Metadata } from "next";
import "./../styles/globals/index.css";

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