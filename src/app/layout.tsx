import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-phone-input-2/lib/style.css';
import { LoaderProvider } from "@/components/common/LoaderProvider";

import { Red_Hat_Display } from "@next/font/google";
import { LayoutProvider } from "@/components/common/LayoutProvider";

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased container`}>
        <LoaderProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
