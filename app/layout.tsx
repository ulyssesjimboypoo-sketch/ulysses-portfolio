import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ulysses Jimboy A. Po Jr | Frontend & UI/UX",
  description: "A modern aesthetic portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion."
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
