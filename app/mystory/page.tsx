import type { Metadata } from "next";
import Link from "next/link";
import HeroHud, { KhungThoai, LoiThoai } from "@/components/HeroHud";
import { Anh, Chu, Hinh, Nhom, San } from "@/components/San";
import HieuUngCuon from "@/components/effects/HieuUngCuon";

export const metadata: Metadata = { title: "My Story" };

const H = "/hinh/cau-chuyen";

// the four doors under About me, square cards in Figma ("Card")
const cacCua = [
  { den: "/research", nhan: "Project", src: `${H}/the-dieu-huong/project.png`, x: 255, y: 1459, w: 405, h: 405, cat: [98.52, 100, 0.74, 0], ny: 1888 },
  { den: "/activities", nhan: "Activities", src: `${H}/the-dieu-huong/activities.png`, x: 812, y: 1446, w: 405, h: 405, cat: [109.88, 100, -9.88, 0], ny: 1875 },
  { den: "/creative", nhan: "Interest", src: `${H}/the-dieu-huong/interest.png`, x: 255, y: 1976, w: 402, h: 399, cat: [100, 134.34, 0, 0], ny: 2399 },
  { den: "/honors", nhan: "Awards", src: `${H}/the-dieu-huong/awards.png`, x: 814, y: 1976, w: 403, h: 399, cat: [148.51, 100, -13.21, 0], ny: 2405 },
] as const;

// Roboto 30 / 1.2 / +3%: every paragraph on this page
function Doan({ x, y, w, canh, children }: { x: number; y: number; w: number; canh?: "justified"; children: React.ReactNode }) {
  return (
    <Chu f="rb" c={30} l={1.2} ls={0.03} canh={canh} x={x} y={y} w={w}>
      {children}
    </Chu>
  );
}

export default function CauChuyen() {
  return (
    <main className="flex-1">
      {/* the Intro frame sits 18px under the nav in Figma */}
      <div className="lg:pt-[1.25vw]">
        <HeroHud>
          <KhungThoai loai="hero" x={258} y={550}>
            <LoiThoai khung="hero" x={11} y={42} w={441} c={31.5}>
              HELLO
            </LoiThoai>
            <LoiThoai khung="hero" x={16} y={91} w={385} c={31.5}>
              .... Let’s come explore my collection ...
            </LoiThoai>
          </KhungThoai>
        </HeroHud>
      </div>

      <San cao={5730} dich={978}>
        <Chu as="h2" f="td" c={96} ls={-0.02} x={151} y={1062} w={624} tach>
          About me
        </Chu>
        <Doan x={77} y={1203} w={1282} canh="justified">
          I’m Lam, a 17-year-old physics-track student at Hanoi–Amsterdam High School for the Gifted. My story started with
          paper folds, chessboards, and science books full of mysteries. Today, that same dreamer is just as curious about
          astronomy and materials science. Come explore this collection of moments that have made me who I am today.
        </Doan>

        <Nhom className="max-lg:mt-4">
          {cacCua.map((cua) => (
            // one real box per door (photo + label), so keyboards and screen readers can find it
            <Link
              key={cua.den}
              href={cua.den}
              className="vat group flex flex-col gap-2 outline-none lg:gap-(--khe)"
              style={{ "--x": cua.x, "--y": cua.y, "--w": cua.w, "--h": cua.ny + 48 - cua.y, "--khe": `calc(${cua.ny - cua.y - cua.h} * 100cqw / 1440)` } as React.CSSProperties}
              data-hien=""
            >
              <span
                className="relative block w-full shrink-0 overflow-hidden transition-shadow duration-400 group-hover:shadow-[0_0_0_2px_#33d4ff,0_0_32px_rgb(51_212_255/.5)] group-focus-visible:shadow-[0_0_0_3px_#33d4ff] [&_img]:transition-[scale] [&_img]:duration-700 group-hover:[&_img]:scale-105"
                style={{ aspectRatio: `${cua.w} / ${cua.h}` }}
              >
                <Hinh src={cua.src} alt="" w={cua.w} h={cua.h} cat={[...cua.cat]} sizes="30vw" />
              </span>
              <span className="chu td transition-colors group-hover:text-cyan" style={{ "--c": 32, "--l": 1.5 } as React.CSSProperties}>
                {cua.nhan}
              </span>
            </Link>
          ))}
        </Nhom>

        <Chu as="h2" f="td" c={48} ls={-0.02} x={72} y={2527} w={416} className="max-lg:mt-8" tach>
          The journey started from Math
        </Chu>
        <Doan x={72} y={2680} w={416}>
          At four, I learned that one billion plus one billion equals two billion. The numbers were enormous, and I was
          thrilled that I could add them. Math lessons on YouTube led me to illustrated books about the universe and animals.
        </Doan>
        <Doan x={72} y={3027} w={416}>
          By the end of elementary school, I had a wall full of medals from math competitions across Vietnam.
        </Doan>
        <Nhom>
          <Anh soi src={`${H}/hanh-trinh-toan-hoc/01.png`} alt="Math medals" x={548} y={2517} w={400} h={307} />
          <Anh soi src={`${H}/hanh-trinh-toan-hoc/02.png`} alt="Math competition day" x={991} y={2517} w={390} h={335} />
          <Anh soi src={`${H}/hanh-trinh-toan-hoc/03.png`} alt="At an olympiad venue" x={548} y={2855} w={400} h={366} cat={[107.83, 101.52, -3.92, 0]} />
          <Anh soi src={`${H}/hanh-trinh-toan-hoc/04.png`} alt="" x={981} y={2886} w={401} h={336} cat={[104.19, 100.14, 0, -0.07]} />
        </Nhom>

        <Chu as="h2" f="td" c={48} ls={-0.02} x={811} y={3345} w={416} className="max-lg:mt-8" tach>
          Falling for Science
        </Chu>
        <Doan x={812} y={3474} w={553}>
          The patterns I loved in math made me curious about physical laws and how molecules interact in chemical reactions.
          By the end of middle school, I had chosen physics as my main focus. After city-level awards in science and physics,
          I earned a place in Ams’s physics program.
        </Doan>
        <Anh soi src={`${H}/say-me-khoa-hoc/01.png`} alt="Orientation day at Ams" x={74} y={3327} w={683} h={455} />

        <Chu as="h2" f="td" c={48} ls={-0.02} x={77} y={3889} w={416} className="max-lg:mt-8" tach>
          IJSO - The chance to a bigger World
        </Chu>
        <Doan x={72} y={4051} w={553}>
          At the start of 10th grade, I joined Vietnam’s 6-student team for the IJSO.
        </Doan>
        <Doan x={72} y={4156} w={553}>
          We trained from morning to late evening, leaving little time to get to know my new classmates. For six months, I
          studied, ate, and lived with the team.
        </Doan>
        <Doan x={72} y={4369} w={553}>
          In Romania, I spent 11 days meeting international friends and exploring historic buildings. I returned with a silver
          medal and a new goal: studying abroad.
        </Doan>
        <Nhom>
          <Anh soi src={`${H}/ijso/01.png`} alt="Holding the flag at IJSO" x={707} y={3866} w={675} h={450} rong />
          <Anh soi src={`${H}/ijso/02.png`} alt="" x={707} y={4343} w={170} h={227} />
          <Anh soi src={`${H}/ijso/03.png`} alt="" x={908} y={4345} w={225} h={225} />
          <Anh soi src={`${H}/ijso/04.png`} alt="" x={1157} y={4345} w={225} h={225} rong />
        </Nhom>

        <Chu as="h2" f="td" c={48} ls={-0.02} x={631} y={4701} w={492} className="max-lg:mt-8" tach>
          High School of Dream
        </Chu>
        <Doan x={629} y={4817} w={667}>
          Coming back to Vietnam, I felt out of place in my class and club. But slowly, I opened up and talked more with
          friends, exploring different perspectives.
        </Doan>
        <Doan x={625} y={4979} w={671}>
          Along the way, I became club’s vice president and discovered an interest in materials science.
        </Doan>
        <Doan x={629} y={5105} w={667}>
          My high school years were slowly becoming a dream in full color, and Ams was beginning to feel like a second home.
        </Doan>
        <Nhom>
          <Anh soi src={`${H}/ngoi-truong-mo-uoc/03.png`} alt="In the lab" x={76} y={4679} w={466} h={559} cat={[100.06, 111.18, -0.03, -11.18]} rong />
          <Anh soi src={`${H}/ngoi-truong-mo-uoc/04.jpg`} alt="Club session at Ams" x={76} y={5277} w={422} h={366} cat={[145.84, 126.35, -16.09, -12.24]} />
          <Anh soi src={`${H}/ngoi-truong-mo-uoc/01.png`} alt="" x={525} y={5282} w={337} h={366} cat={[144.89, 100.13, -22.44, -0.07]} />
          <Anh soi src={`${H}/ngoi-truong-mo-uoc/02.png`} alt="VSIC 2026 final round" x={900} y={5286} w={488} h={366} rong />
        </Nhom>
      </San>
      <HieuUngCuon />
    </main>
  );
}
