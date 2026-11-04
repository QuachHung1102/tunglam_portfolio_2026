import type { Metadata } from "next";
import { Anh, Chu, Nhom, San } from "@/components/San";
import HieuUngCuon from "@/components/effects/HieuUngCuon";

export const metadata: Metadata = { title: "Honor and Award" };

const B = "/hinh/vinh-danh/buc-tuong";

// certificates scanned sideways: Figma turns them back 90°. w/h below is the turned outline, the scan is h x w
const QUAY: [number, number, number, number] = [0, 1, -1, 0];

type Giay = { so: string; x: number; y: number; w: number; h: number; cat?: [number, number, number, number]; quay?: boolean };

// three columns, top to bottom as in Figma
const bucTuong: Giay[] = [
  { so: "15.png", x: 49, y: 962, w: 431.46, h: 300, quay: true },
  { so: "13.png", x: 509, y: 962, w: 424.31, h: 300, quay: true },
  { so: "17.png", x: 961, y: 962, w: 429, h: 300, quay: true },
  { so: "25.png", x: 49, y: 1288, w: 430.73, h: 300, quay: true },
  { so: "24.png", x: 508, y: 1288, w: 425.54, h: 300, quay: true },
  { so: "20.png", x: 961, y: 1288, w: 429, h: 300, quay: true },
  { so: "19.png", x: 49, y: 1614, w: 429, h: 300, quay: true },
  { so: "16.png", x: 508, y: 1614, w: 429, h: 300, cat: [100.64, 100, -0.02, 0], quay: true },
  { so: "18.png", x: 961, y: 1614, w: 429, h: 300, quay: true },
  { so: "22.png", x: 49, y: 1940, w: 426, h: 300, quay: true },
  { so: "21.png", x: 506, y: 1940, w: 426, h: 300, quay: true },
  { so: "14.png", x: 963, y: 1940, w: 426.67, h: 300, quay: true },
  { so: "26.png", x: 49, y: 2266, w: 429, h: 300, quay: true },
  { so: "28.jpg", x: 508, y: 2266, w: 423, h: 300, cat: [110.18, 109.82, -4.56, -0.86] },
  { so: "27.jpg", x: 968, y: 2265, w: 422, h: 300, cat: [112.66, 111.98, -6.66, -1.43] },
  { so: "29.jpg", x: 49, y: 2591, w: 429, h: 300, cat: [125.05, 126.47, -12.69, -8.33] },
  { so: "30.jpg", x: 508, y: 2592, w: 431, h: 300, cat: [109.79, 111.38, -4.11, -1.81] },
  { so: "31.jpg", x: 967, y: 2592, w: 423, h: 300, cat: [110.13, 109.77, -4.75, -0.2] },
  { so: "09.png", x: 55, y: 2918, w: 429, h: 607, cat: [100, 101.94, 0, -0.15] },
  { so: "32.jpg", x: 508, y: 2918, w: 429, h: 607 },
  { so: "33.jpg", x: 961, y: 2918, w: 429, h: 607 },
  { so: "34.jpg", x: 55, y: 3551, w: 429, h: 607 },
  { so: "35.jpg", x: 510, y: 3551, w: 429, h: 607 },
  { so: "36.jpg", x: 961, y: 3551, w: 429, h: 607 },
  // trophies and medals, shot upright
  { so: "05.jpg", x: 55, y: 4186, w: 430, h: 575 },
  { so: "03.jpg", x: 509, y: 4186, w: 432, h: 575 },
  { so: "02.jpg", x: 960, y: 4186, w: 430, h: 575 },
  { so: "08.jpg", x: 55, y: 4791, w: 415, h: 575, cat: [127.97, 117.69, -13.98, -14.35] },
  { so: "06.jpg", x: 509, y: 4791, w: 430, h: 575 },
  { so: "04.jpg", x: 960, y: 4791, w: 430, h: 575 },
  { so: "10.jpg", x: 55, y: 5397, w: 507, h: 365, cat: [109.55, 114.01, 0, 0] },
  { so: "11.jpg", x: 585, y: 5397, w: 509, h: 367, cat: [100, 103.84, 0, 0] },
  { so: "12.jpg", x: 1117, y: 5397, w: 275, h: 367 },
];

export default function VinhDanh() {
  return (
    <main className="flex-1">
      {/* cao = bottom of the last row (5764) + 117, the same end gap as Activities */}
      <San cao={5881} dich={72}>
        <Anh src={`${B}/01.png`} alt="Lam with a flower garland and his IJSO medal" x={-184} y={82} w={1200} h={800} taiTruoc hien={false} className="max-lg:-mx-5 max-lg:-mt-10 max-lg:w-auto" />

        <Chu as="h1" f="td" c={96} l={0.38} ls={0.01} x={738} y={364} w={644} className="max-lg:mt-6 max-lg:leading-none" tach>
          My Wall of Fame
        </Chu>
        <Chu f="rb" c={30} l={1.2} ls={0.03} x={738} y={482} w={504}>
          All the medals, certificates, and awards I’ve collected along the way. They’ve earned a wall of their own.
        </Chu>

        <Nhom className="max-lg:mt-6">
          {bucTuong.map((a) => (
            <Anh
              key={a.so}
              soi
              rong={a.quay || a.h < a.w}
              src={`${B}/${a.so}`}
              x={a.x}
              y={a.y}
              w={a.w}
              h={a.h}
              cat={a.cat}
              bienDoi={a.quay ? QUAY : undefined}
              goc={a.quay ? [a.h, a.w] : undefined}
              className="loa-sang"
            />
          ))}
        </Nhom>
      </San>
      <HieuUngCuon />
    </main>
  );
}
