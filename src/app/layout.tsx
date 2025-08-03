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
    <html lang="en">
      <body className={`${comfortaa.variable} antialiased`}>{children}</body>
    </html>
  );
}
