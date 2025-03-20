import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../assets/styles/globals.css";
import { APP_DESCRIPTION, APP_TITLE } from "@/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  antialiased`}>{children}</body>
    </html>
  );
}
