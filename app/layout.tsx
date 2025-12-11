import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binance Square Top Posts",
  description: "Curated top 10 posts crafted by a veteran Binance Square creator."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
