import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Australia Indonesia Visa | Indonesian Visas | Fast & Reliable Visa Services",
  description: "Professional Australia Indonesia visa services through Indonesian Visas. 16+ years experience serving 97 countries. Fast, reliable visa processing for your Indonesian adventure.",
  keywords: ["Australia Indonesia Visa", "Indonesian Visas", "Indonesia Visa", "Australia Visa Extension", "Tourist Visa Indonesia", "Business Visa Indonesia", "VOA Indonesia"],
  authors: [{ name: "Indonesian Visas" }],
  metadataBase: new URL("https://indonesianvisas.com"),
  alternates: {
    canonical: "https://indonesianvisas.com",
  },
  openGraph: {
    title: "Australia Indonesia Visa - Professional Visa Services",
    description: "Fast, reliable, and professional visa services for your Indonesian adventure through Indonesian Visas.",
    url: "https://indonesianvisas.com",
    siteName: "Indonesian Visas",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia Indonesia Visa | Indonesian Visas",
    description: "Professional Indonesian visa services with 16+ years experience. Fast, reliable, and trusted by thousands worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased h-full w-full bg-slate-50`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
