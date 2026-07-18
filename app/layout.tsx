import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Local Service Demo Sites",
  description:
    "Three polished local service business website demos for HVAC, plumbing, and electrical contractors.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Local Service Demo Sites",
    description:
      "Fictional demo websites showcasing lead-generation design for local service businesses.",
    type: "website",
  },
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
