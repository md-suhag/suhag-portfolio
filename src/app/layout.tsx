import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ScrollTop from "@/components/ScrollTop";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Abdus Salam Suhag | Web developer",
  description:
    "Portfolio of Md Abdus Salam Suhag - full stack web developer. Javascript, Typescript, React js, Next js, Node js, Express js, Mongodb, postgreSql. suhag, md suhag, abdus salam ",
  openGraph: {
    title: "Md Abdus Salam Suhag | Web developer",
    description:
      "Portfolio of Md Abdus Salam Suhag - full stack web developer. Javascript, Typescript, React js, Next js, Node js, Express js, Mongodb, postgreSql.",
    type: "website",
    siteName: "Porfolio of Suhag",
    url: "https://mdsuhag.vercel.app",
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
        <Toaster />
        <ScrollTop />
      </body>
    </html>
  );
}
