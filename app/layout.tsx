import type { Metadata } from "next";
import { semplicitaPro } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filipino Restaurant | London | Cable Street | Cirilo Filipino Kainan",
  description: "A family kitchen. Filipino food, done Cirilo&apos;s way.",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={semplicitaPro.variable}>
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
