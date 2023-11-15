import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import { siteConfig } from "@/config/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const { name, description } = siteConfig;

export const metadata: Metadata = {
  description,
  title: {
    default: name,
    template: `%s | ${name}`,
  },
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
