
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Red_Hat_Display } from "next/font/google";
import { LoaderProvider } from "@/components/common/LoaderProvider";
import { LayoutProvider } from "@/components/common/LayoutProvider";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-body",
});


export const metadata = {
  title: "Radkaat",
  description: "Radkaat — Cycling experiences & bikes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased container min-h-screen bg-(--color-superblack) text-white`}>
        <LoaderProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
