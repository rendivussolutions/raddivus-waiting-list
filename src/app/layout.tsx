import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Raddivus",
    default: "Raddivus",
  },
  description:
    "Professional Ad Creatives. No Designer Required. Join the waitlist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <div className="min-h-screen bg-background">
          <Image
            src="/images/landing/light.png"
            alt=""
            width={800}
            height={800}
            className="fixed top-0 left-0 w-[400px] md:w-[600px] lg:w-[800px] pointer-events-none z-60 opacity-80"
            priority
          />
          <Navbar />
          <ScrollToTop />
          <main className="pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
