import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GSAPProvider } from "./GsapProvider";
import { Header } from "@/components/header";
import { navItems } from "@/lib/constants";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thypro - Your Complete Healthcare Companion",
  description:
    "Revolutionizing emergency response and wellness in developing regions with unified healthcare solutions, real-time emergency services, and AI-powered health support.",
  keywords: [
    "healthcare",
    "emergency",
    "health vault",
    "blood donation",
    "AI health assistant",
  ],
  authors: [{ name: "Thypro Team" }],
  openGraph: {
    title: "Thypro - Your Complete Healthcare Companion",
    description:
      "Revolutionizing emergency response and wellness in developing regions with unified healthcare solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header navItems={navItems} />
        <GSAPProvider>{children}</GSAPProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
