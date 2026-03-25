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
  metadataBase: new URL("https://australiaindonesiavisa.online"),
  title: "Indonesian Visas for Australians | Fast e-VOA & Digital Nomad Support",
  description: "Official Indonesia visa agency for Aussie travelers. 24/7 support for Bali e-VOA, B1 extensions, and E33G Remote Worker visas. Fast, 100% online processing.",
  keywords: ["Bali visa for Australians", "Indonesia e-VOA Australia", "E33G visa Bali", "Australia Indonesia visa extension", "Bali digital nomad visa"],
  alternates: {
    canonical: "https://australiaindonesiavisa.online",
  },
  openGraph: {
    title: "Indonesian Visas for Australians | Fast e-VOA & Digital Nomad Support",
    description: "Expert visa services for Aussies visiting Indonesia. Apply for e-VOA, extensions, and Digital Nomad visas online.",
    url: "https://australiaindonesiavisa.online",
    siteName: "Indonesian Visas",
    locale: "en_AU",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indonesian Visas for Australians",
    description: "Fast e-VOA & Digital Nomad Support for Aussie travelers.",
    creator: "@IndonesianVisas",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "AU",
    "geo.placename": "Australia",
    "geo.position": "-25.274398;133.775136",
    "ICBM": "-25.274398, 133.775136",
  },
  robots: {
    index: true,
    follow: true,
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
