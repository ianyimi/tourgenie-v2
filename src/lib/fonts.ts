import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const SpaceGrotesk = localFont({
  variable: "--SpaceGrotesk",
  src: [
    {
      path: "./assets/fonts/SpaceGrotesk-Regular.woff",
      style: "normal",
    },
    {
      path: "./assets/fonts/SpaceGrotesk-Bold.woff",
      style: "bold",
    },
  ],
});

export const Vercetti = localFont({
  variable: "--Vercetti",
  src: [
    {
      path: "./assets/fonts/Vercetti-Regular.woff",
      style: "normal",
    },
  ],
});
