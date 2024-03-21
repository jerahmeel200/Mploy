"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
