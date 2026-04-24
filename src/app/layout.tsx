import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Untamed Apex | Personal Training",
  description:
    "UK-based personal training focused on strength, movement quality, control, and long-term progression.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}