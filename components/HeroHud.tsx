import Image from "next/image";
import Link from "next/link";
import ChuGiaiMa from "./effects/ChuGiaiMa";
import { lopHero } from "@/data/lopHero";

// position inside the 1440x888 Intro frame, in %, so the whole HUD scales as one picture
const o = (x: number, y: number, w?: number, h?: number): React.CSSProperties => ({
  left: `${(x / 1440) * 100}%`,
  top: `${(y / 888) * 100}%`,
  width: w ? `${(w / 1440) * 100}%` : undefined,
  height: h ? `${(h / 888) * 100}%` : undefined,
});
// font size in design px -> cqw of the hero box
const co = (px: number) => `${(px / 1440) * 100}cqw`;

const NHAN = [
  { chu: "Research & Project", den: "/research", x: 921, y: 268 },
  { chu: "Activities & Impact", den: "/activities", x: 999, y: 382 },
  { chu: "Creative & Passion", den: "/creative", x: 903, y: 577 },
];

const GIOI_THIEU =
  "I’m Lam, a 17-year-old physics-track student at Hanoi–Amsterdam High School for the Gifted. My story started with paper folds, chessboards, and science books full of mysteries. Today, that same dreamer is just as curious about astronomy and materials science. Come explore this collection of moments that have made me who I am today.";

// spinning/fading pieces move as whole images (GPU), bar charts and pixel dust animate inside their own small svg
const CHUYEN_DONG = {
  quay: "motion-safe:animate-[xoay-lop_var(--giay)_linear_infinite]",
  tho: "motion-safe:animate-[tho-lop_4s_ease-in-out_infinite]",
  song: "",
  tinh: "",
};

// the "Intro" frame: still vector HUD + small moving layers + the live text on top
export default function HeroHud() {
  return (
    <>
      <div className="relative aspect-[1440/888] w-full overflow-hidden bg-dem [container-type:inline-size]">
        <Image src="/hinh/cau-chuyen/hero/nen.svg" alt="" fill preload className="pointer-events-none" draggable={false} />

        {lopHero.map((lop) => (
          <span
            key={lop.src}
            aria-hidden
            className={`pointer-events-none absolute will-change-transform ${CHUYEN_DONG[lop.kieu]}`}
            style={{
              ...o(lop.x, lop.y, lop.w, lop.h),
              mixBlendMode: lop.pha as React.CSSProperties["mixBlendMode"],
              animationDirection: lop.nguoc ? "reverse" : undefined,
              "--giay": `${lop.giay}s`,
            } as React.CSSProperties}
          >
            <Image src={lop.src} alt="" fill draggable={false} />
          </span>
        ))}

        {/* scanline sweeping down every few seconds */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[9%] bg-gradient-to-b from-transparent via-cyan/10 to-transparent will-change-transform motion-safe:animate-[quet_7s_linear_infinite]" />

        {/* hologram portrait in the dotted box */}
        <div className="absolute overflow-hidden motion-safe:animate-[nhap-nhay_.18s_steps(2)_3]" style={o(130, 401, 122, 206)}>
          <Image src="/hinh/cau-chuyen/hero/chan-dung.png" alt="Le Tung Lam" fill preload sizes="20vw" className="object-cover" draggable={false} />
        </div>

        <h1 className="td absolute whitespace-nowrap text-sang" style={{ ...o(46, 310), fontSize: co(57.21) }}>
          <ChuGiaiMa chu="Le Tung Lam" tre={300} />
        </h1>

        {NHAN.map((nhan, i) => (
          <Link
            key={nhan.den}
            href={nhan.den}
            className="td absolute whitespace-nowrap text-sang transition-[color,text-shadow] duration-300 hover:text-white hover:[text-shadow:0_0_12px_#46d3ff,0_0_28px_#0575ff]"
            style={{ ...o(nhan.x, nhan.y), fontSize: co(32) }}
          >
            <ChuGiaiMa chu={nhan.chu} tre={700 + i * 250} tocDo={30} />
          </Link>
        ))}

        {/* x axis of the little growth chart, bottom right */}
        {[
          ["0", 1094],
          ["6", 1168],
          ["12", 1242],
          ["18", 1390],
        ].map(([so, x]) => (
          <span key={so} aria-hidden className="td absolute text-[#43d7ff]" style={{ ...o(Number(x), 753), fontSize: co(15) }}>
            {so}
          </span>
        ))}

        {/* HELLO panel: the cyan folder itself is drawn in the svg, only the words live here */}
        <p className="td absolute text-xanh" style={{ ...o(46 + 11.25, 635 + 45), fontSize: co(33.76) }}>
          <ChuGiaiMa chu="Hello" tre={1400} />
        </p>
        {/* on phones it would be 4px tall, and About me right below says the same thing anyway */}
        <p
          className="absolute font-inter font-medium leading-none tracking-[-0.035em] text-[#5fffff] max-lg:hidden"
          style={{ ...o(46 + 13.36, 635 + 78.76, 414.91), fontSize: co(15) }}
        >
          {GIOI_THIEU}
        </p>
      </div>
    </>
  );
}
