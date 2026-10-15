import type { Metadata } from "next";
import { Anh, Chu, Nhom, San } from "@/components/San";
import HieuUngCuon from "@/components/effects/HieuUngCuon";

export const metadata: Metadata = { title: "Honor and Award" };

const B = "/hinh/vinh-danh/buc-tuong";

// trophies and medals, shot upright
const cupHuyChuong = [
  { so: "02.jpg", x: 38, y: 1037, w: 323, h: 431 },
  { so: "03.jpg", x: 367, y: 1037, w: 325, h: 431 },
  { so: "04.jpg", x: 700, y: 1037, w: 322, h: 431 },
  { so: "05.jpg", x: 1027, y: 1037, w: 323, h: 431 },
  { so: "06.jpg", x: 38, y: 1480, w: 323, h: 432 },
  { so: "07.jpg", x: 369, y: 1480, w: 324.88, h: 432 },
  { so: "08.jpg", x: 700, y: 1480, w: 337, h: 432 },
  { so: "09.png", x: 1049, y: 1480, w: 301, h: 432 },
  { so: "10.jpg", x: 33, y: 1927, w: 507, h: 365, cat: [109.55, 114.01, 0, 0] },
  { so: "11.jpg", x: 551, y: 1927, w: 509, h: 367, cat: [100, 103.84, 0, 0] },
  { so: "12.jpg", x: 1073, y: 1927, w: 275, h: 367 },
] as const;

// certificates were scanned sideways, Figma turns them back 90°. w/h below is the turned outline
const QUAY: [number, number, number, number] = [0, 1, -1, 0];
const giayKhen = [
  { so: "15.png", x: 38, y: 2311, w: 427.15, h: 297 },
  { so: "13.png", x: 479, y: 2306, w: 427.14, h: 302 },
  { so: "14.png", x: 919, y: 2309, w: 428.09, h: 301 },
  { so: "16.png", x: 38, y: 2648, w: 427.62, h: 299, cat: [100.64, 100, -0.02, 0] },
  { so: "17.png", x: 479, y: 2648, w: 427.62, h: 299 },
  { so: "18.png", x: 919, y: 2648, w: 427.62, h: 299 },
  { so: "19.png", x: 38, y: 2985, w: 427.62, h: 299 },
  { so: "20.png", x: 479, y: 2985, w: 427.62, h: 299 },
  // same certificate twice in the design. Lam earned it twice, apparently
  { so: "18.png", x: 919, y: 2985, w: 427.62, h: 299 },
  // this one is upside down in the file, Figma spins it 180°
  { so: "23.jpg", x: 38, y: 3303, w: 406.43, h: 304, bienDoi: [-1, 0, 0, -1] },
  { so: "21.png", x: 474, y: 3303, w: 431.65, h: 304 },
  { so: "22.png", x: 919, y: 3303, w: 431.65, h: 304 },
  { so: "24.png", x: 38, y: 3617, w: 424.13, h: 299 },
  { so: "25.png", x: 474, y: 3617, w: 432.16, h: 301 },
  { so: "26.png", x: 920, y: 3617, w: 430.48, h: 301 },
] as const;

export default function VinhDanh() {
  return (
    <main className="flex-1">
      <San cao={4144} dich={72}>
        <Anh src="/hinh/chung/nen-hud.png" x={-1} y={136} w={1441} h={886} mo={0.3} nhoe={8.9} hien={false} className="chi-lg" />
        <Anh src={`${B}/01.png`} alt="Lam with a flower garland and his IJSO medal" x={-179} y={136} w={1130} h={753} taiTruoc hien={false} className="max-lg:-mx-5 max-lg:-mt-10 max-lg:w-auto" />

        <Chu as="h1" f="rb" c={40} l={0.9} x={763} y={675} w={464} tach>
          My Wall of Fame
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={763} y={751} w={521}>
          All the medals, certificates, and awards I’ve collected along the way. They’ve earned a wall of their own.
        </Chu>

        <Nhom className="max-lg:mt-6">
          {cupHuyChuong.map((a) => (
            <Anh key={a.so} soi src={`${B}/${a.so}`} x={a.x} y={a.y} w={a.w} h={a.h} cat={"cat" in a ? [...a.cat] : undefined} className="loa-sang" />
          ))}
        </Nhom>

        <Nhom className="max-lg:mt-6">
          {giayKhen.map((a) => (
            <Anh
              key={`${a.so}-${a.y}`}
              soi
              rong
              src={`${B}/${a.so}`}
              x={a.x}
              y={a.y}
              w={a.w}
              h={a.h}
              cat={"cat" in a ? [...a.cat] : undefined}
              bienDoi={"bienDoi" in a ? [...a.bienDoi] : QUAY}
              goc={"bienDoi" in a ? [a.w, a.h] : [a.h, a.w]}
              className="loa-sang"
            />
          ))}
        </Nhom>
      </San>
      <HieuUngCuon />
    </main>
  );
}
