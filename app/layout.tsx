import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Oswald, Roboto, Roboto_Condensed } from "next/font/google";
import ThanhDieuHuong from "@/components/ThanhDieuHuong";
import ChongSaoChep from "@/components/ChongSaoChep";
import TiaLua from "@/components/effects/TiaLua";
import "./globals.css";

// every heading in the design. the free cut has no Vietnamese, see Oswald below
const chuAvilock = localFont({
  src: "./fonts/Avilock-Bold.ttf",
  variable: "--chu-avilock",
  weight: "700",
});

// stand-in for the accented letters Avilock can't draw (TỪ THIỆN, LƯU...)
const chuOswald = Oswald({ subsets: ["vietnamese"], weight: "700", variable: "--chu-oswald" });

const chuRoboto = Roboto({ subsets: ["latin", "vietnamese"], weight: ["400", "500"], variable: "--chu-roboto" });

const chuRobotoHep = Roboto_Condensed({ subsets: ["latin", "vietnamese"], weight: "400", variable: "--chu-roboto-hep" });

const chuInter = Inter({ subsets: ["latin", "vietnamese"], weight: ["500", "600", "700"], variable: "--chu-inter" });

export const metadata: Metadata = {
  title: {
    default: "Tung Lam Folio",
    template: "%s · Tung Lam Folio",
  },
  description:
    "Le Tung Lam, 17, physics track at Hanoi–Amsterdam High School for the Gifted. Paper folds, chessboards, materials science and a lot of stargazing.",
};

export default function BoCucGoc({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${chuAvilock.variable} ${chuOswald.variable} ${chuRoboto.variable} ${chuRobotoHep.variable} ${chuInter.variable} h-full antialiased`}
    >
      <head>
        {/* no JS, no GSAP: show everything instead of a blank page */}
        <noscript>
          <style>{`[data-hien],[data-tach]{visibility:visible!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col overflow-x-clip bg-nen font-than text-white">
        <ThanhDieuHuong />
        {children}
        <ChongSaoChep />
        <TiaLua />
      </body>
    </html>
  );
}
