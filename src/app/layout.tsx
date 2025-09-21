import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Red_Hat_Display } from "@next/font/google";
import Header from "@/components/common/Header";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased`}>
        <LoaderProvider>
          <SmoothScroll />
          <Header />
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}
