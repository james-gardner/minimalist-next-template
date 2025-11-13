import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minimalist Next.js Template",
  description: "A production-ready, minimalist Next.js template with TypeScript and essential security features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
