import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noona Kasir - Digital Cashier for Indonesian MSME",
  description:
    "An innovative and efficient point-of-sale (POS) application specifically designed for the Indonesian MSME market. Monitor outlet revenue receipts in real-time.",
  keywords: [
    "POS",
    "kasir",
    "MSME",
    "Indonesia",
    "point of sale",
    "digital cashier",
  ],
  authors: [{ name: "Noona Kasir" }],
  openGraph: {
    title: "Noona Kasir - Digital Cashier",
    description:
      "Monitor Outlet Revenue Receipts with our innovative POS application",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
