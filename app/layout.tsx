import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { NavbarComponent } from "@/sections/navbar";
import Footer from "@/sections/footer";
import localFont from "next/font/local";

const fontClash = localFont({
  src: "../public/fonts/clash.woff2",
  variable: "--font-clash",
  display: "swap",
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/LOGO-TPCEXPRESS.ico",
    apple: "/LOGO-TPCEXPRESS.ico",
    shortcut: "/LOGO-TPCEXPRESS.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="dark" lang="es">
      <head />
      <body
        className={clsx(
          `min-h-screen bg-background antialiased ${fontClash.variable}`
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <NavbarComponent />
            <main className="container mx-auto max-w-5xl pt-10 px-6 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
