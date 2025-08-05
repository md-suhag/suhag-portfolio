import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Abdus Salam Suhag | Web developer",
  description: "portfolio of md abdus salam suhag - full stck web developer",
  openGraph: {
    title: "Md Abdus Salam Suhag | Web developer",
    description:
      "portfolio of md abdus salam suhag - full stck web developer. tech stack: typescript, react.js, next.js , node.js, express.js, mongodb , postgreSql ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body
        className={`${comfortaa.variable} antialiased relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
