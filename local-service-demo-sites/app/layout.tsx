import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Local Service Demo Sites",
  description:
    "Three polished local service business website demos for HVAC, plumbing, and electrical contractors.",
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
