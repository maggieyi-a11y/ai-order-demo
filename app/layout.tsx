import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Order Demo",
  description: "AI-assisted dental order creation",
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
