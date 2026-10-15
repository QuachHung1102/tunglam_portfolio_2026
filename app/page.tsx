import Link from "next/link";
import HeroHud from "@/components/HeroHud";
import { Anh, Chu, Hinh, Nhom, San } from "@/components/San";
import HieuUngCuon from "@/components/effects/HieuUngCuon";

const H = "/hinh/cau-chuyen";

// the four doors under About me. Figma calls them Card, we call them doors
const cacCua = [
  { den: "/research", nhan: "Project", f: "td", src: `${H}/the-dieu-huong/project.png`, x: 186, y: 1329, h: 405, cat: [98.52, 100, 0.74, 0], ny: 1758 },
  { den: "/activities", nhan: "Activities", f: "td", src: `${H}/the-dieu-huong/activities.png`, x: 743, y: 1316, h: 405, cat: [109.88, 100, -9.88, 0], ny: 1745 },
  { den: "/creative", nhan: "Interest", f: "td", src: `${H}/the-dieu-huong/interest.png`, x: 186, y: 1846, h: 399, cat: [100, 134.34, 0, 0], ny: 2269 },
  // yes, Awards is set in Roboto in the design. not our call
  { den: "/honors", nhan: "Awards", f: "rb", src: `${H}/the-dieu-huong/awards.png`, x: 745, y: 1846, h: 399, cat: [148.51, 100, -13.21, 0], ny: 2265 },
] as const;

export default function CauChuyen() {
  return (
    <main className="flex-1">
      {/* the Intro frame sits 18px under the nav in Figma */}
      <div className="mx-auto max-w-360 lg:pt-[1.25%]">
        <HeroHud />
      </div>

      <San cao={5009} dich={978}>
        <Anh src="/hinh/chung/nen-hud.png" x={-1} y={978} w={1441} h={886} mo={0.3} nhoe={8.9} hien={false} className="chi-lg" />

        <Chu as="h2" f="td" c={96} ls={-0.02} x={76} y={1042} w={624} tach>
          About me
        </Chu>
        <Chu f="rb" c={28} l={1.29} x={77} y={1156} w={1282}>
          I’m Lam, a 17-year-old physics-track student at Hanoi–Amsterdam High School for the Gifted. My story started with
          paper folds, chessboards, and science books full of mysteries. Today, that same dreamer is just as curious about
          astronomy and materials science. Come explore this collection of moments that have made me who I am today.
        </Chu>

        <Nhom className="max-lg:mt-4">
          {cacCua.map((cua) => (
            // one real box per door (photo + label), so keyboards and screen readers can find it
            <Link
              key={cua.den}
              href={cua.den}
              className="vat group flex flex-col gap-2 outline-none lg:gap-(--khe)"
              style={{ "--x": cua.x, "--y": cua.y, "--w": 405, "--h": cua.ny + 48 - cua.y, "--khe": `calc(${cua.ny - cua.y - cua.h} * 100cqw / 1440)` } as React.CSSProperties}
              data-hien=""
            >
              <span
                className="relative block w-full shrink-0 overflow-hidden transition-shadow duration-400 group-hover:shadow-[0_0_0_2px_#33d4ff,0_0_32px_rgb(51_212_255/.5)] group-focus-visible:shadow-[0_0_0_3px_#33d4ff] [&_img]:transition-[scale] [&_img]:duration-700 group-hover:[&_img]:scale-105"
                style={{ aspectRatio: `405 / ${cua.h}` }}
              >
                <Hinh src={cua.src} alt="" w={405} h={cua.h} cat={[...cua.cat]} sizes="30vw" />
              </span>
              <span
                className={`chu ${cua.f === "td" ? "td" : "font-than"} transition-colors group-hover:text-cyan`}
                style={{ "--c": 32, "--l": cua.f === "td" ? 1.5 : 1.29 } as React.CSSProperties}
              >
                {cua.nhan}
              </span>
            </Link>
          ))}
        </Nhom>

        <Chu as="h2" f="td" c={48} ls={-0.02} x={70} y={2417} w={416} className="max-lg:mt-8" tach>
          The journey started from Math
        </Chu>
        <Chu f="rb" c={28} l={1.29} x={70} y={2573} w={416}>
          At four, I learned that one billion plus one billion equals two billion. The numbers were enormous, and I was
          thrilled that I could add them. Math lessons on YouTube led me to illustrated books about the universe and animals.
          By the end of elementary school, I had a wall full of medals from math competitions across Vietnam.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/hanh-trinh-toan-hoc/01.png`} alt="Math medals" x={657} y={2412} w={363} h={279} />
          <Anh soi src={`${H}/hanh-trinh-toan-hoc/02.png`} alt="Math competition day" x={1033} y={2412} w={357} h={306} />
          <Anh soi src={`${H}/hanh-trinh-toan-hoc/03.png`} alt="At an olympiad venue" x={658} y={2705} w={361} h={330} cat={[107.83, 101.52, -3.92, 0]} />
          <Anh soi src={`${H}/hanh-trinh-toan-hoc/04.png`} alt="" x={1033} y={2735} w={358} h={300} cat={[104.19, 100.14, 0, -0.07]} />
        </Nhom>

        <Chu as="h2" f="td" c={48} ls={-0.02} x={790} y={3144} w={416} className="max-lg:mt-8" tach>
          Falling for Science
        </Chu>
        <Chu f="rbc" c={20} l={1.5} x={790} y={3199} w={515}>
          The patterns I loved in math made me curious about physical laws and how molecules interact in chemical reactions.
          By the end of middle school, I had chosen physics as my main focus. After city-level awards in science and physics,
          I earned a place in Ams’s physics program.
        </Chu>
        <Anh soi src={`${H}/say-me-khoa-hoc/01.png`} alt="Orientation day at Ams" x={89} y={3074} w={530} h={353} />

        <Chu as="h2" f="td" c={48} ls={-0.02} x={89} y={3478} w={416} className="max-lg:mt-8" tach>
          IJSO - The chance to a bigger World
        </Chu>
        <Chu f="rbc" c={20} l={1.5} x={89} y={3587} w={515}>
          At the start of tenth grade, I joined Vietnam’s six-student team for the International Junior Science Olympiad. We
          trained from morning to late evening, leaving little time to get to know my new classmates. For six months, I
          studied, ate, and lived with the team. Past team members who had earned places overseas shared their advice. In
          Romania, I spent eleven days meeting international friends and exploring historic buildings. I returned with a
          silver medal and a new goal: studying abroad.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/ijso/01.png`} alt="Holding the flag at IJSO" x={808} y={3423} w={452} h={302} rong />
          <Anh soi src={`${H}/ijso/02.png`} alt="" x={694} y={3741} w={156} h={208} />
          <Anh soi src={`${H}/ijso/03.png`} alt="" x={882} y={3741} w={206} h={206} />
          <Anh soi src={`${H}/ijso/04.png`} alt="" x={1121} y={3741} w={206} h={206} rong />
        </Nhom>

        <Chu as="h2" f="td" c={48} ls={-0.02} x={844} y={4095} w={492} className="max-lg:mt-8" tach>
          High School of Dream
        </Chu>
        <Chu f="rbc" c={20} l={1.5} x={844} y={4152} w={515}>
          After six months away, I felt out of place in my class and club. But slowly, I opened up and talked more with
          friends, exploring different perspectives as I worked out my own direction. Along the way, I became Amstronomy’s
          vice president and discovered an interest in materials science. My high school years were slowly becoming a dream
          in full color, and Ams was beginning to feel like a second home.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/ngoi-truong-mo-uoc/04.jpg`} alt="Club session at Ams" x={40} y={4022} w={716} h={425} cat={[100, 126.35, 0, -12.24]} rong />
          <Anh soi src={`${H}/ngoi-truong-mo-uoc/01.png`} alt="" x={40} y={4484} w={510} h={382} rong />
          <Anh soi src={`${H}/ngoi-truong-mo-uoc/02.png`} alt="VSIC 2026 final round" x={550} y={4484} w={509.33} h={382} />
          <Anh soi src={`${H}/ngoi-truong-mo-uoc/03.png`} alt="In the lab" x={1061} y={4484} w={287} h={382} />
        </Nhom>
      </San>
      <HieuUngCuon />
    </main>
  );
}
