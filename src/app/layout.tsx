"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TechGridBackground from "../components/TechGridBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TechGridBackground />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
