import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | السلامة والصحة المهنية",
    default: "السلامة والصحة المهنية",
  },
  description: "موقع السلامة والصحة المهنية لمستشفة حميات شنتنا الحجر.",
  keywords: ["السلامة", "الصحة", "شنتنا الحجر", "تعليمات", "بطاقات تعليمية"],
  applicationName: "السلامة والصحة المهنية",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    countryName: "مصر",
    locale: "ar",
    images: [
      {
        url: "/og.webp",
        alt: "السلامة والصحة المهنية",
        height: 243,
        width: 426,
      },
    ],
  },
  twitter: {
    creator: "@moehabsas",
  },
  authors: [
    {
      name: "Mohamed El-Gedawy",
      url: "https://github.com/moehabsas",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${tajawal.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
