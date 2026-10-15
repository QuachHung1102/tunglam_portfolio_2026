import type { Metadata } from "next";
import HopThoai from "@/components/HopThoai";
import { Anh, Chu, Hinh, Nhom, San, type ThuocTinhHinh } from "@/components/San";
import HieuUngCuon from "@/components/effects/HieuUngCuon";

export const metadata: Metadata = { title: "Creative and Passion" };

const H = "/hinh/sang-tao";

// one of the four things floating on the page. click it and its paper sheet lands on top
function DoVat({ ten, anh, x, y, tre, tiLe, children }: { ten: string; anh: ThuocTinhHinh; x: number; y: number; tre: number; tiLe: number; children: React.ReactNode }) {
  return (
    <HopThoai
      loai="giay"
      tiLe={tiLe}
      nhan={`${ten}: open`}
      className="vat group outline-none max-lg:mx-auto max-lg:w-4/5"
      kieu={{ "--x": x, "--y": y, "--w": anh.w, "--h": anh.h, aspectRatio: `${anh.w} / ${anh.h}` } as React.CSSProperties}
      nut={
        // bob on its own clock, glow cyan when you point at it
        <span className="troi absolute inset-0 block" style={{ animationDelay: `${tre}s` }}>
          <span className="absolute inset-0 transition-[scale,filter] duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_24px_#33d4ff] group-focus-visible:drop-shadow-[0_0_24px_#33d4ff]">
            <Hinh {...anh} sizes="60vw" />
          </span>
        </span>
      }
    >
      {children}
    </HopThoai>
  );
}

// black Roboto on the paper sheets
function TieuDeGiay({ x, y, w, children }: { x: number; y: number; w: number; children: React.ReactNode }) {
  return (
    <Chu as="h2" f="rb" c={40} l={0.9} mau="#000000" x={x} y={y} w={w}>
      {children}
    </Chu>
  );
}

function DoanGiay({ x, y, w, children }: { x: number; y: number; w: number; children: React.ReactNode }) {
  return (
    <Chu f="rb" c={24} l={1.5} canh="justified" mau="#000000" x={x} y={y} w={w}>
      {children}
    </Chu>
  );
}

export default function SangTao() {
  return (
    <main className="flex-1">
      <h1 className="sr-only">Creative and Passion</h1>
      <San cao={4110} dich={72}>
        <Anh src="/hinh/chung/nen-hud.png" x={-1} y={136} w={1441} h={886} mo={0.3} nhoe={8.9} hien={false} className="chi-lg" />

        {/* ---------- origami ---------- */}
        <DoVat ten="Origami" anh={{ src: `${H}/do-vat/01.png`, alt: "Paper lotus", w: 540, h: 462 }} x={436} y={479} tre={0} tiLe={1356 / 846}>
          <San cao={846} rong={1356} className="bg-[#efe7da] text-black">
            <Anh hien={false} src={`${H}/origami/01.png`} x={0} y={0} w={1356} h={846} cat={[111.26, 100.04, -11.26, -0.02]} className="chi-lg" />
            <TieuDeGiay x={739} y={40} w={225}>Origami</TieuDeGiay>
            <DoanGiay x={739} y={202} w={432}>
              Turning a single A4 sheet into a complicated animal used to make me feel I could reshape the world. I’ve loved
              those origami paper worlds since childhood, and later, that same fascination with creating things led me toward
              Materials Science.
            </DoanGiay>
            <Nhom>
              <Anh hien={false} src={`${H}/origami/12.png`} alt="Origami turtle" x={45} y={40} w={208} h={156} />
              <Anh hien={false} src={`${H}/origami/02.png`} alt="" x={272} y={40} w={208} h={156} />
              <Anh hien={false} src={`${H}/origami/03.png`} alt="" x={494} y={40} w={212} h={156} cat={[100, 101.92, 0, 0]} />
              <Anh hien={false} src={`${H}/origami/04.png`} alt="" x={45} y={212} w={208} h={156} />
              <Anh hien={false} src={`${H}/origami/05.png`} alt="" x={271} y={212} w={209} h={157} />
              <Anh hien={false} src={`${H}/origami/06.png`} alt="" x={494} y={212} w={212} h={157} cat={[100, 101.27, 0, 0]} />
              <Anh hien={false} src={`${H}/origami/08.png`} alt="" x={45} y={379} w={208} h={156} />
              <Anh hien={false} src={`${H}/origami/09.png`} alt="" x={270} y={378.17} w={210.02} h={157.77} bienDoi={[0, -1, 1, 0]} goc={[157.18, 209.57]} />
              <Anh hien={false} src={`${H}/origami/07.png`} alt="" x={494} y={378} w={212} h={157} cat={[100, 101.27, 0, 0]} />
              <Anh hien={false} src={`${H}/origami/11.png`} alt="" x={420} y={545} w={207} h={276} />
              <Anh hien={false} src={`${H}/origami/10.png`} alt="Origami dragons" x={45} y={545} w={367} h={276} rong />
            </Nhom>
          </San>
        </DoVat>

        {/* ---------- guitar ---------- */}
        <DoVat ten="Guitar" anh={{ src: `${H}/do-vat/02.png`, alt: "Acoustic guitar", w: 567, h: 757 }} x={437} y={1097} tre={-1.6} tiLe={1334 / 934}>
          <San cao={934} rong={1334} className="bg-[#efe7da] text-black">
            <Anh hien={false} src={`${H}/guitar/01.png`} x={0} y={0} w={1334} h={934} className="chi-lg" />
            <Anh hien={false} src={`${H}/guitar/02.png`} alt="Lam playing guitar on stage" x={60} y={41} w={535} h={443} />
            <TieuDeGiay x={667} y={73} w={292}>Guitar</TieuDeGiay>
            <DoanGiay x={667} y={191} w={432}>
              My parents brought me to a guitar centre in my fourth grade. Surprisingly, it was the best thing they’ve ever made
              me do. The first “Happy Birthday” song soon grew into a habit: whenever I have a free moment, I reach for my guitar.
            </DoanGiay>
            <Nhom>
              <Anh hien={false} src={`${H}/guitar/03.png`} alt="" x={60} y={531} w={245} h={327} />
              <Anh hien={false} src={`${H}/guitar/04.png`} alt="" x={321} y={531} w={245} h={327} />
              <Anh hien={false} src={`${H}/guitar/05.png`} alt="" x={582} y={531} w={414} h={327} cat={[140.41, 100, -34.61, 0]} />
              <Anh hien={false} src={`${H}/guitar/06.png`} alt="" x={1012} y={531} w={221} h={327} />
            </Nhom>
          </San>
        </DoVat>

        {/* ---------- chess ---------- */}
        <DoVat ten="Chess" anh={{ src: `${H}/do-vat/03.png`, alt: "Chessboard", w: 977, h: 637, cat: [100, 153.38, 0, -36.58] }} x={260} y={2158} tre={-3.1} tiLe={1508 / 861}>
          <San cao={861} rong={1508} className="bg-[#efe7da] text-black">
            <Anh hien={false} src={`${H}/chess/01.png`} x={0} y={0} w={1508} h={861} cat={[241.72, 238.16, -49.26, -63.65]} className="chi-lg" />
            <TieuDeGiay x={50} y={109} w={432}>Chess</TieuDeGiay>
            <DoanGiay x={50} y={233} w={562}>
              My classmates pulled me into chess tournaments on Discord and Chess.com when Covid 19 lockdown kept us apart in
              seventh grade. I mostly play for fun and to exercise my thinking. Until now, any chess positions could make me lose
              myself in it.
            </DoanGiay>
            <Nhom>
              <Anh hien={false} src={`${H}/chess/02.png`} alt="" x={642} y={55} w={469} h={454} cat={[122.9, 95.24, -7.35, 0]} />
              <Anh hien={false} src={`${H}/chess/03.png`} alt="" x={1140} y={55} w={326} h={435} />
              <Anh hien={false} src={`${H}/chess/04.png`} alt="" x={336} y={509} w={426} h={304} cat={[144.75, 131.02, 0, -0.04]} />
              <Anh hien={false} src={`${H}/chess/05.png`} alt="" x={768} y={509} w={698} h={303} cat={[145.27, 245.58, 0, 0]} />
            </Nhom>
          </San>
        </DoVat>

        {/* ---------- photograph ---------- */}
        <DoVat ten="Photograph" anh={{ src: `${H}/do-vat/04.png`, alt: "Camera", w: 992, h: 700 }} x={224} y={3006} tre={-2.2} tiLe={1338.59 / 961.66}>
          <San cao={961.66} rong={1338.59} className="bg-[#efe7da] text-black">
            <Anh hien={false} src={`${H}/photograph/01.jpg`} x={0} y={0} w={1338.59} h={961.66} cat={[192.74, 138.34, -46.23, -18.95]} bienDoi={[0, 1, -1, 0]} goc={[959.96, 1337.37]} className="chi-lg" />
            <TieuDeGiay x={108} y={146} w={436}>Photograph</TieuDeGiay>
            <DoanGiay x={108} y={205} w={387}>
              One day, my walk home from school suddenly seemed beautiful as I looked more closely at familiar things. Since then,
              I have captured everything I see with the iPhone 8 that has been with me through my high school years.
            </DoanGiay>
            <Nhom>
              <Anh hien={false} src={`${H}/photograph/04.png`} alt="" x={546} y={265} w={146} h={195} />
              <Anh hien={false} src={`${H}/photograph/03.png`} alt="" x={704} y={264} w={263} h={197} />
              <Anh hien={false} src={`${H}/photograph/02.png`} alt="" x={979} y={263} w={263} h={198} cat={[100.38, 100, -0.19, 0]} />
              <Anh hien={false} src={`${H}/photograph/05.png`} alt="" x={109.52} y={475} w={288} h={384} />
              <Anh hien={false} src={`${H}/photograph/07.png`} alt="" x={954} y={475} w={288} h={384} />
              <Anh hien={false} src={`${H}/photograph/06.png`} alt="" x={420} y={475} w={512} h={384} rong />
            </Nhom>
          </San>
        </DoVat>
      </San>
      <HieuUngCuon />
    </main>
  );
}
