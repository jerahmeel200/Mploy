"use client";

import Footer from "@/component/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/component/navbar/Navbar";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
