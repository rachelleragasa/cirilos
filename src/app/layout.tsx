import type { Metadata } from "next";
import { semplicitaPro } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filipino Restaurant | London | Cable Street | Cirilo Filipino Kainan",
  description:
    "Experience the rich, bold flavors of the Philippines at Cirilos. Traditional Filipino dishes crafted from generations-old recipes in San Francisco.",
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
