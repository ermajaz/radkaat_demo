import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Red_Hat_Display } from "@next/font/google";
import Header from "@/components/common/Header";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700","800","900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Radkaat",
  description: "Radkaat Ventures Private Limited",
  icons: {
    icon: "/images/website-logo.png", // Path inside /public
    shortcut: "/images/website-logo.png",
    apple: "/images/website-logo.png",
  },
};

import { LoaderProvider } from "@/components/common/LoaderProvider";
import Footer from "@/components/common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased container`}>
        <LoaderProvider>
          <SmoothScroll />
          <Header />
          {children}
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}
