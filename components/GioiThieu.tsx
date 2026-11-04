"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HeroHud, { KhungThoai, LoiThoai, type Nhan } from "./HeroHud";
import { Hinh, type ThuocTinhHinh } from "./San";

type Canh = {
  ten?: "tren" | "trong" | false;
  chanDung?: "hop" | "lon" | false;
  toi?: boolean;
  nhan?: Nhan[];
  thoai?: { khung: "lon" | "nho" | "nhoDac"; x: number; y: number; c: number; w: number; chu: string };
  anh?: (ThuocTinhHinh & { x: number; y: number })[];
};

// the 9 Intro frames in Figma (226:1404 ... 226:12288), one per click. coords in the 1440x888 HUD
const LON = { khung: "lon", x: 75, y: 320, w: 482 } as const;
const NHO = { khung: "nho", x: 217, y: 543, w: 482 } as const;
const CANH: Canh[] = [
  { ten: "trong", chanDung: false, nhan: [] },
  { ten: false, chanDung: false, nhan: [], thoai: { ...LON, c: 50, chu: "... Hello" } },
  { ten: false, chanDung: false, nhan: [], toi: true, thoai: { ...LON, c: 50, chu: "... Okay, so ...\nLet me introduce myself" } },
  { ten: false, chanDung: "lon", nhan: [], toi: true, thoai: { ...LON, c: 50, chu: "... Okay, so ...\nLet me introduce myself" } },
  {
    ten: false,
    chanDung: "lon",
    nhan: [],
    toi: true,
    // 40px in Figma, but Inter runs wider than 42dot Sans and spills a 5th line
    thoai: { ...LON, c: 36, chu: "... I am Lam, Le Tung Lam, a physics-track student at Hanoi - Amsterdam High School for the Gifted" },
  },
  { nhan: [], thoai: { ...NHO, x: 246, y: 537, c: 31.5, chu: "... My story once started with paper folds, chess board and science books full of mysteries" } },
  {
    nhan: ["sang-tao"],
    thoai: { ...NHO, c: 31.5, chu: "... My story once started with paper folds, chess board and science books full of mysteries" },
    anh: [{ src: "/hinh/sang-tao/origami/10.png", alt: "Origami dragons", x: 788, y: 250, w: 357, h: 268 }],
  },
  {
    nhan: ["nghien-cuu", "hoat-dong", "sang-tao"],
    thoai: { ...NHO, w: 470, c: 30, chu: "... Today, that same dreamer is just as curious about astronomy, leadership activities, and materials science." },
    anh: [
      { src: "/hinh/cau-chuyen/hero/gioi-thieu/nghien-cuu.png", alt: "Lam writing up lab notes", x: 544, y: 162, w: 288, h: 311, cat: [94.09, 155.17, 5.91, -47.51] },
      { src: "/hinh/cau-chuyen/hero/gioi-thieu/hoat-dong.png", alt: "Lam at an Amstronomy booth", x: 970, y: 437, w: 404, h: 272, cat: [122.73, 121.39, -5.81, -9.01] },
    ],
  },
  {
    nhan: ["nghien-cuu", "hoat-dong", "sang-tao"],
    thoai: { ...NHO, khung: "nhoDac", w: 470, c: 30, chu: "... Now, let’s come explore this collection of moments that have made me who I am today!" },
  },
];

const o = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
  left: `${(x / 1440) * 100}%`,
  top: `${(y / 888) * 100}%`,
  width: `${(w / 1440) * 100}%`,
  height: `${(h / 888) * 100}%`,
});

// the line types itself out; the rest is already laid out (invisible) so the box never jumps.
// keyed by the line, so a new line starts from zero. only mounts after a click, so window is there
function ChuGo({ chu }: { chu: string }) {
  const [n, datN] = useState(() => (matchMedia("(prefers-reduced-motion: reduce)").matches ? chu.length : 0));
  useEffect(() => {
    const hen = setInterval(() => datN((v) => (v >= chu.length ? v : v + 1)), 22);
    return () => clearInterval(hen);
  }, [chu]);
  return (
    <>
      <span className="sr-only">{chu}</span>
      <span aria-hidden>
        {chu.slice(0, n)}
        <span className="invisible">{chu.slice(n)}</span>
      </span>
    </>
  );
}

// three cyan chevrons blinking in turn: "click to go on"
function MuiTen({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`flex gap-[0.4em] ${className}`}>
      {[0, 1, 2].map((i) => (
        <span key={i} className="block h-[1em] w-[0.5em] skew-x-[-30deg] bg-current motion-safe:animate-[nhay-mui-ten_1.2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </span>
  );
}

// home page: Lam introduces himself one line per click, then the screen flares and My Story opens
export default function GioiThieu() {
  const router = useRouter();
  const [buoc, datBuoc] = useState(0);
  const [loe, datLoe] = useState(false);
  const canh = CANH[buoc];
  const cuoi = buoc === CANH.length - 1;

  useEffect(() => {
    router.prefetch("/mystory");
  }, [router]);

  const tiep = () => {
    if (loe) return;
    if (!cuoi) return datBuoc(buoc + 1);
    datLoe(true);
    const doi = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 450;
    setTimeout(() => router.push("/mystory"), doi);
  };

  // keyboard: → / Enter / Space anywhere that isn't a link
  useEffect(() => {
    const bam = (e: KeyboardEvent) => {
      if (!["ArrowRight", "Enter", " "].includes(e.key) || (e.target as HTMLElement).closest("a")) return;
      e.preventDefault();
      tiep();
    };
    window.addEventListener("keydown", bam);
    return () => window.removeEventListener("keydown", bam);
  });

  const t = canh.thoai;

  return (
    <main className="flex min-h-[calc(100dvh-72px)] flex-1 flex-col items-center justify-center gap-5 py-6 md:h-[calc(100dvh-72px)] md:overflow-hidden md:py-0">
      {/* the whole HUD always shows: as wide as the window allows without spilling under the nav or off the bottom */}
      <div className="w-full md:w-[min(100%,calc((100dvh-72px)*1440/888))] md:shadow-[0_0_80px_rgb(5_117_255/.25)]">
        <HeroHud ten={canh.ten ?? "tren"} chanDung={canh.chanDung ?? "hop"} toi={canh.toi} nhan={canh.nhan} nhanBam={cuoi}>
          {/* the whole stage is the "next" button; label links sit above it */}
          <button type="button" onClick={tiep} aria-label={cuoi ? "Open My Story" : "Next"} className="absolute inset-0 z-[5] cursor-pointer outline-none focus-visible:shadow-[inset_0_0_0_3px_#33d4ff]" />

          {canh.anh?.map((a) => (
            <div key={a.src} className="pointer-events-none absolute overflow-hidden shadow-[0_0_24px_rgb(51_212_255/.35)] motion-safe:animate-[bat-len_.6s_cubic-bezier(.2,.9,.25,1.1)_both]" style={o(a.x, a.y, a.w, a.h)}>
              <Hinh {...a} sizes="30vw" />
            </div>
          ))}

          {t && (
            <div className="pointer-events-none max-md:hidden">
              <KhungThoai key={`${t.khung}-${t.x}`} loai={t.khung} x={t.x} y={t.y}>
                <LoiThoai khung={t.khung} x={20} y={38} w={t.w} c={t.c}>
                  <ChuGo key={t.chu} chu={t.chu} />
                </LoiThoai>
              </KhungThoai>
            </div>
          )}

          {/* the chevrons from frames 3-5, kept on every step as the "click on" cue */}
          <MuiTen className="pointer-events-none absolute bottom-[4%] left-1/2 -translate-x-1/2 text-[length:2cqw] text-cyan max-md:hidden" />
          <Link href="/mystory" className="td absolute right-[2%] bottom-[3%] z-20 text-[length:max(12px,1.1cqw)] text-white/70 transition-colors hover:text-cyan max-md:hidden">
            Skip intro ›
          </Link>
        </HeroHud>
      </div>

      {/* phones: the HUD text would be 8px, so the line is told underneath */}
      <div className="w-full px-5 md:hidden">
        <button type="button" onClick={tiep} className="w-full border-2 border-[#6dcbd8] bg-dem/80 p-5 text-left">
          <span className="block min-h-16 font-inter text-xl leading-snug font-medium text-[#5fffff]">{t ? <ChuGo key={t.chu} chu={t.chu} /> : "Le Tung Lam"}</span>
          <MuiTen className="mt-4 ml-auto w-fit text-base text-cyan" />
        </button>
        <Link href="/mystory" className="td mt-4 block text-right text-sm text-white/70 transition-colors hover:text-cyan">
          Skip intro ›
        </Link>
      </div>

      {loe && <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] bg-white motion-safe:animate-[loe-sang_.45s_ease-in_both]" />}
    </main>
  );
}
