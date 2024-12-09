import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

export const fontClash = localFont({
  src: '@/fonts/clash.woff2',
  variable: '--font-clash',
  display: 'swap',
  weight: '100 900',
  style: 'normal',
})