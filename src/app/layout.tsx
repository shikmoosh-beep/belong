import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belong",
  description: "Immigration status regularization in Israel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
