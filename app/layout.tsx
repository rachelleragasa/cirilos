import type { Metadata } from "next";
import { semplicitaPro } from "./ui/fonts";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Filipino Restaurant | London | Cable Street | Cirilo Filipino Kainan",
  description: "A family kitchen. Filipino food, done Cirilo&apos;s way.",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === "production";
  return (
    <html lang="en" className={semplicitaPro.variable}>
      <head>
        {isProd && (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
