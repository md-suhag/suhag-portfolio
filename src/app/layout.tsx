import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ScrollTop from "@/components/ScrollTop";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

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
        <Analytics />
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <header>
          <Navbar />
        </header>
        <main>{children}</main>

        <Footer />
        <Toaster />
        <ScrollTop />
      </body>
    </html>
  );
}
