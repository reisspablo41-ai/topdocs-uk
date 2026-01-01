import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Top Docz UK - UK Document Guidance & Support",
    template: "%s | Top Docz UK",
  },
  description: "Clear, practical help for UK passports, driving licences, photo ID cards, and residence permits. Professional guidance with straightforward steps and reliable timelines since 1995.",
  keywords: [
    "UK passports",
    "UK driving licences",
    "UK photo ID",
    "residence permits UK",
    "BRP",
    "UK document guidance",
    "passport application UK",
    "driving licence renewal UK",
    "UK identity documents",
    "document support UK",
  ],
  authors: [{ name: "Top Docz UK" }],
  creator: "Top Docz UK",
  publisher: "Top Docz UK",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://topdocz.uk",
    title: "Top Docz UK - UK Document Guidance & Support",
    description: "Clear, practical help for UK passports, driving licences, photo ID cards, and residence permits. Professional guidance with straightforward steps and reliable timelines.",
    siteName: "Top Docz UK",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Top Docz UK Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Docz UK - UK Document Guidance & Support",
    description: "Clear, practical help for UK passports, driving licences, photo ID cards, and residence permits.",
    images: ["/images/logo.png"],
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
    // Add your verification codes here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
