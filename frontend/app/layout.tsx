import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SCHOQ",
  description: "UQA Soft Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
