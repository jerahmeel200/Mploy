import Footer from "@/component/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/component/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mploy",
  description: "MPLOY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
