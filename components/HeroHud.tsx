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

export type Nhan = "nghien-cuu" | "hoat-dong" | "sang-tao";

// label + the pointer line that runs to it from the globe (a "tinh" layer in lopHero)
const NHAN: Record<Nhan, { chu: string; den: string; x: number; y: number; lop: string }> = {
  "nghien-cuu": { chu: "Research & Project", den: "/research", x: 921, y: 268, lop: "27-4145" },
  "hoat-dong": { chu: "Activities & Impact", den: "/activities", x: 999, y: 382, lop: "27-4155" },
  "sang-tao": { chu: "Creative & Passion", den: "/creative", x: 903, y: 577, lop: "27-4150" },
};
const TAT_CA: Nhan[] = ["nghien-cuu", "hoat-dong", "sang-tao"];
const LOP_NHAN = new Set(Object.values(NHAN).map((n) => n.lop));

// spinning/fading pieces move as whole images (GPU), bar charts and pixel dust animate inside their own small svg
const CHUYEN_DONG = {
  quay: "motion-safe:animate-[xoay-lop_var(--giay)_linear_infinite]",
  tho: "motion-safe:animate-[tho-lop_4s_ease-in-out_infinite]",
  song: "",
  tinh: "",
};

const CHAN_DUNG = {
  // hologram in the dotted box
  hop: o(119, 359, 149, 250),
  // "Let me introduce myself": the big pop-up on the right
  lon: o(859, 110, 460, 776),
};

type ThuocTinh = {
  // which labels (and their pointer lines) are lit
  nhan?: Nhan[];
  // labels go to their page, except while the intro is still talking
  nhanBam?: boolean;
  chanDung?: keyof typeof CHAN_DUNG | false;
  // where the name sits: above the dotted box, inside it (intro step 1), or not at all
  ten?: "tren" | "trong" | false;
  // the 50% black veil of intro steps 3-5
  toi?: boolean;
  // dialog box, photos... drawn on top, in the same 1440x888 coords
  children?: React.ReactNode;
  className?: string;
};

// the "Intro" frame: still vector HUD + small moving layers + whatever the current scene puts on top
export default function HeroHud({ nhan = TAT_CA, nhanBam = true, chanDung = "hop", ten = "tren", toi = false, children, className = "" }: ThuocTinh) {
  const sang = new Set(nhan.map((n) => NHAN[n].lop));

  return (
    <div className={`relative aspect-[1440/888] w-full overflow-hidden bg-dem [container-type:inline-size] ${className}`}>
      <Image src="/hinh/cau-chuyen/hero/nen.svg" alt="" fill preload className="pointer-events-none" draggable={false} />

      {lopHero.map((lop) => {
        const ma = lop.src.split("/").pop()!.replace(".svg", "");
        // pointer lines only show with their label
        if (LOP_NHAN.has(ma) && !sang.has(ma)) return null;
        return (
          <span
            key={lop.src}
            aria-hidden
            className={`pointer-events-none absolute will-change-transform ${CHUYEN_DONG[lop.kieu]} ${LOP_NHAN.has(ma) ? "motion-safe:animate-[ve-duong_.7s_ease-out_both]" : ""}`}
            style={{
              ...o(lop.x, lop.y, lop.w, lop.h),
              mixBlendMode: lop.pha as React.CSSProperties["mixBlendMode"],
              animationDirection: lop.nguoc ? "reverse" : undefined,
              "--giay": `${lop.giay}s`,
            } as React.CSSProperties}
          >
            <Image src={lop.src} alt="" fill draggable={false} />
          </span>
        );
      })}

      {/* scanline sweeping down every few seconds */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[9%] bg-gradient-to-b from-transparent via-cyan/10 to-transparent will-change-transform motion-safe:animate-[quet_7s_linear_infinite]" />

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

      {ten && (
        <h1 className="td absolute whitespace-nowrap text-sang" style={{ ...(ten === "trong" ? o(65, 464) : o(46, 310)), fontSize: co(57.21) }}>
          <ChuGiaiMa chu="Le Tung Lam" tre={300} />
        </h1>
      )}

      {toi && <div aria-hidden className="absolute inset-0 bg-black/50 motion-safe:animate-[mo-dan_.5s_ease-out]" />}

      {chanDung === "hop" && (
        <div key="hop" className="absolute overflow-hidden motion-safe:animate-[nhap-nhay_.18s_steps(2)_3]" style={CHAN_DUNG.hop}>
          <Image src="/hinh/cau-chuyen/hero/chan-dung.png" alt="Le Tung Lam" fill preload sizes="20vw" className="object-cover" draggable={false} />
        </div>
      )}
      {chanDung === "lon" && (
        <div key="lon" className="absolute motion-safe:animate-[bat-len_.6s_cubic-bezier(.2,.9,.25,1.1)_both]" style={CHAN_DUNG.lon}>
          <Image src="/hinh/cau-chuyen/hero/chan-dung.png" alt="Le Tung Lam" fill preload sizes="40vw" className="object-cover" draggable={false} />
        </div>
      )}

      {nhan.map((k, i) => {
        const n = NHAN[k];
        const kieu = { ...o(n.x, n.y), fontSize: co(32) };
        const chu = <ChuGiaiMa chu={n.chu} tre={300 + i * 250} tocDo={30} />;
        return nhanBam ? (
          <Link
            key={k}
            href={n.den}
            // the intro listens for clicks on the whole stage; a label is a door, not "next"
            data-cua=""
            className="td absolute z-10 whitespace-nowrap text-sang transition-[color,text-shadow] duration-300 hover:text-white hover:[text-shadow:0_0_12px_#46d3ff,0_0_28px_#0575ff]"
            style={kieu}
          >
            {chu}
          </Link>
        ) : (
          <span key={k} className="td absolute whitespace-nowrap text-sang" style={kieu}>
            {chu}
          </span>
        );
      })}

      {children}
    </div>
  );
}

const KHUNG = {
  lon: { src: "/hinh/chung/khung-thoai-lon.svg", w: 523, h: 304 },
  nho: { src: "/hinh/chung/khung-thoai-nho.svg", w: 501, h: 213 },
  // same box, solid fill: the last intro line (frame 226:12288)
  nhoDac: { src: "/hinh/chung/khung-thoai-nho-dac.svg", w: 501, h: 213 },
  hero: { src: "/hinh/chung/khung-thoai-hero.svg", w: 452, h: 241 },
} as const;

// the cyan speech box from Figma (Group 24/25/26). x/y/children in HUD coords, text box relative to the frame
export function KhungThoai({ loai, x, y, children }: { loai: keyof typeof KHUNG; x: number; y: number; children: React.ReactNode }) {
  const k = KHUNG[loai];
  return (
    <div className="absolute motion-safe:animate-[bat-khung_.55s_cubic-bezier(.2,.8,.2,1)]" style={o(x, y, k.w, k.h)}>
      <Image src={k.src} alt="" fill className="pointer-events-none" draggable={false} />
      {children}
    </div>
  );
}

// text inside a KhungThoai: 42dot Sans in Figma, Inter Medium here. coords relative to the frame
export function LoiThoai({ x, y, w, c, khung, children }: { x: number; y: number; w: number; c: number; khung: keyof typeof KHUNG; children: React.ReactNode }) {
  const k = KHUNG[khung];
  return (
    <p
      className="absolute font-inter font-medium leading-[1.2] tracking-[-0.035em] whitespace-pre-line text-[#5fffff]"
      style={{ left: `${(x / k.w) * 100}%`, top: `${(y / k.h) * 100}%`, width: `${(w / k.w) * 100}%`, fontSize: co(c) }}
    >
      {children}
    </p>
  );
}
