import type { Metadata } from "next";
import DaiAnhNgang, { type AnhDai } from "@/components/DaiAnhNgang";
import { Anh, Chu, Nhom, San } from "@/components/San";
import TheMoRong, { type The } from "@/components/TheMoRong";
import VideoNen from "@/components/VideoNen";
import HieuUngCuon from "@/components/effects/HieuUngCuon";

export const metadata: Metadata = { title: "Research & Projects" };

const H = "/hinh/nghien-cuu";

// the lab strip on the blue band under the CuMn₂O₄ story. coords inside one lap (2380 wide, 305 tall)
const dayAnhPhongLab: AnhDai[] = [
  { src: `${H}/ag-cumn2o4/03.jpg`, x: 36, y: 0, w: 250, h: 305, cat: [123.27, 112.79, 0, -6.9], bienDoi: [0, 1, -1, 0], goc: [305, 250] },
  { src: `${H}/ag-cumn2o4/05.jpg`, x: 322, y: 0, w: 229, h: 305 },
  { src: `${H}/ag-cumn2o4/06.jpg`, x: 587, y: 0, w: 229, h: 305 },
  { src: `${H}/ag-cumn2o4/07.jpg`, x: 852, y: 0, w: 229, h: 305 },
  { src: `${H}/ag-cumn2o4/15.jpg`, x: 1118, y: 0, w: 407, h: 305 },
  { src: `${H}/ag-cumn2o4/14.jpg`, x: 1563, y: 0, w: 229, h: 305 },
  { src: `${H}/ag-cumn2o4/11.jpg`, x: 1830, y: 0, w: 229, h: 305 },
  { src: `${H}/ag-cumn2o4/12.png`, x: 2097, y: 0, w: 247, h: 305, cat: [164.91, 100, -23.03, 0] },
];

// institute / prize lines: Roboto 28 italic
function DongPhu({ x, y, w, canh, children }: { x: number; y: number; w: number; canh?: "justified"; children: React.ReactNode }) {
  return (
    <Chu f="rb" c={28} l={1.29} canh={canh} x={x} y={y} w={w} className="italic">
      {children}
    </Chu>
  );
}

function TieuDe({ x, y, w, children }: { x: number; y: number; w: number; children: React.ReactNode }) {
  return (
    <Chu as="h2" f="td" c={48} ls={-0.02} x={x} y={y} w={w} className="max-lg:mt-10" tach>
      {children}
    </Chu>
  );
}

// popup galleries keep the popup's own 964 x 561 coords
const K = `${H}/kham-pha-them`;
const cacTheKhamPha: The[] = [
  {
    ten: "IAPHO 2026",
    chu: "IAPHO 2026\n\nGold Medalist",
    co: 36,
    rongChu: 241,
    anh: { src: `${K}/01.png`, w: 320, h: 507, alt: "IAPHO 2026" },
    noiDung: (
      <Nhom>
        <Anh hien={false} src={`${K}/01.png`} x={63} y={88} w={241} h={382} alt="IAPHO 2026 gold medal" rong />
        <Anh hien={false} src={`${K}/iapho/02.jpg`} x={364.76} y={91.02} w={251.89} h={189.18} bienDoi={[0, -1, 1, 0]} goc={[188.59, 251.46]} />
        <Anh hien={false} src={`${K}/iapho/01.jpg`} x={670.86} y={90.98} w={230.14} h={173.36} bienDoi={[0.01, -1, 1, 0.01]} goc={[171.64, 228.86]} />
        <Anh hien={false} src={`${K}/iapho/03.jpg`} x={341} y={312} w={133} h={160} cat={[100.09, 110.22, -0.05, -5.65]} />
        <Anh hien={false} src={`${K}/iapho/04.jpg`} x={512} y={312} w={120} h={160} />
        <Anh hien={false} src={`${K}/iapho/05.jpg`} x={671} y={299} w={230} h={173} rong />
      </Nhom>
    ),
  },
  {
    ten: "ASCEND 2026",
    chu: "Satellite Data & Disaster Alerts\n\nASCEND 2026",
    co: 40,
    rongChu: 428,
    anh: { src: `${K}/02.png`, w: 534, h: 507, cat: [101.31, 100.06, 0, -0.03], alt: "ASCEND 2026 satellite model" },
    noiDung: (
      <Nhom>
        <Anh hien={false} src={`${K}/02.png`} x={86} y={92.73} w={402} h={376} alt="Satellite model drawing" rong />
        <Anh hien={false} src={`${K}/ascend/01.png`} x={526} y={90.73} w={374} h={154} rong />
        <Anh hien={false} src={`${K}/ascend/02.png`} x={526} y={275.73} w={374} h={195} rong />
      </Nhom>
    ),
  },
  {
    ten: "ASLC 2024",
    chu: "Seed Bombs for Sustainable Restoration\n\nASLC 2024",
    co: 40,
    rongChu: 428,
    anh: { src: `${K}/03.png`, w: 453, h: 507, cat: [149.29, 100.06, -28.33, -0.03], alt: "ASLC 2024 team at work" },
    noiDung: (
      <Nhom>
        <Anh hien={false} src={`${K}/03.png`} x={75} y={79.73} w={358} h={401} cat={[149.29, 100.06, -28.33, -0.03]} alt="ASLC 2024 workshop" rong />
        <Anh hien={false} src={`${K}/aslc/01.png`} x={574} y={79.73} w={266} h={189} cat={[100.07, 105.57, -0.03, -5.57]} rong />
        <Anh hien={false} src={`${K}/aslc/02.png`} x={515} y={284.73} w={147} h={196} />
        <Anh hien={false} src={`${K}/aslc/03.png`} x={743} y={284.73} w={147} h={196} />
      </Nhom>
    ),
  },
];

export default function NghienCuu() {
  return (
    <main className="flex-1">
      {/* cao = bottom of the last row (10199) + 117, the same end gap as Activities */}
      <San cao={10316} dich={72}>
        {/* ---------- cover: lab clip instead of a still ---------- */}
        {/* youtu.be/onLjq8rINIk as a local 1080p file (.ai/tools/video-lab.sh). Figma's box is 1459x859; 16:9 edge to edge shows
            the whole frame. it opens on a blurry pan, so the first play starts at 7s, on Lam at his desk */}
        <VideoNen src={`${H}/anh-bia/video.mp4`} poster={`${H}/anh-bia/video-poster.jpg`} batDau={7} x={0} y={72} w={1440} h={810} className="max-lg:-mx-5 max-lg:-mt-10 max-lg:w-auto" />
        {/* the text sits on a black fade, 70% at the bottom */}
        <div aria-hidden className="vat chi-lg bg-gradient-to-b from-transparent to-black/70" style={{ "--x": 0, "--y": 290, "--w": 1440, "--h": 592 } as React.CSSProperties} />
        <Chu as="h1" f="td" c={102.26} ls={-0.02} x={43} y={526} w={873.48} className="max-lg:mt-6" tach>
          Research and Projects
        </Chu>
        <Chu f="rb" c={20} l={1.4} ls={0.05} x={43} y={639} w={829}>
          My fascination with how a sheet of A4 paper could become nearly anything through Origami led me to molecular physics
          and, later, materials science. Through internships at the Vietnam Academy of Science and Technology (VAST) and Hanoi
          University of Science and Technology (HUST), I learned how research projects develop, how dissertations are
          presented, and how to operate many lab equipment like centrifuges and thermal CVD sys. My translation work led to
          co-authorship on a paper, and I am currently working independently on a small part of another research project.
        </Chu>

        {/* ---------- Ag-substituted CuMn₂O₄ ---------- */}
        <Anh soi src={`${H}/ag-cumn2o4/01.png`} alt="Mixing a sample at ITIMS" x={63} y={1015} w={635} h={829} cat={[99.63, 114.01, 0.25, -13.96]} className="max-lg:mt-10" />
        <DongPhu x={751} y={1015} w={583} canh="justified">
          {"International Training Institute for Material Science (ITIMS) - HUST\nMentors: Assoc. Prof. Nguyen Van Quy\n"}
          <span className="pl-[4.1em]">Nguyen Thanh Hai, M.Sc</span>
        </DongPhu>
        <TieuDe x={751} y={1200} w={624}>
          Ag-Substituted CuMn₂O₄ for Electrochemical Sensing
        </TieuDe>
        <Chu f="rb" c={28} l={1.29} ls={0.04} x={749} y={1348} w={629}>
          After being introduced to Assoc. Prof. Nguyen Van Quy, I asked to join his ITIMS research group in summer 2026. For
          the first time, I read earlier studies to choose my own research direction.
        </Chu>
        <Chu f="rb" c={28} l={1.29} ls={0.04} x={751} y={1549} w={590}>
          With guidance from Nguyen Thanh Hai, MSc, and the graduate researchers, I synthesized Ag-substituted CuMn₂O₄ spinel
          and Ag/CMO composites. Making batch after batch taught me patience and precision, while I gained practice with
          thermal CVD, ultrasonication, centrifugation, and magnetic stirring.
        </Chu>
        {/* the blue band behind the lab strip */}
        <div aria-hidden className="vat chi-lg bg-[#279dff]" style={{ "--x": 0, "--y": 1893, "--w": 1440, "--h": 361 } as React.CSSProperties} data-hien="" />
        <DaiAnhNgang cacAnh={dayAnhPhongLab} x={0} y={1921} w={1440} h={305} dai={2380} />

        {/* ---------- g-C₃N₄ / Co-doped TiO₂ ---------- */}
        <TieuDe x={81} y={2404} w={624}>
          Hydrothermal construction of g-C₃N₄/Co-doped TiO₂ for methylene blue removal
        </TieuDe>
        <DongPhu x={740} y={2431} w={583} canh="justified">
          School of Chemistry and Life Sciences (SCLS), HUST · Dr. Cao Hong Ha
        </DongPhu>
        <Chu f="rb" c={30} l={1.2} ls={0.03} canh="justified" x={81} y={2600} w={1260}>
          I began helping Dr. Cao Hong Ha with research translation after we talked about materials science at HUST’s School
          of Chemistry and Life Sciences. The work gave me a chance to read published studies.
        </Chu>
        <Chu f="rb" c={30} l={1.2} ls={0.03} canh="justified" x={81} y={2733} w={1260}>
          Later, he asked me to read this study and write its full abstract on my own. I became a coauthor on the paper in the
          Vietnam Journal of Catalysis and Adsorption and joined him at a national conference in Hue in August 2026.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/g-c3n4-tio2/04.png`} alt="Conference hall" x={65} y={2895} w={295} h={221} />
          <Anh soi src={`${H}/g-c3n4-tio2/05.png`} alt="Conference badge" x={389} y={2895} w={316} h={220} cat={[100.23, 107.8, -0.11, 0]} />
          <Anh soi src={`${H}/g-c3n4-tio2/01.png`} alt="Thien Mu pagoda, Hue" x={65} y={3152} w={229} h={289} cat={[100.12, 105.86, -0.06, 0]} />
          <Anh soi src={`${H}/g-c3n4-tio2/02.png`} alt="At the national catalysis conference" x={320} y={3152} w={385} h={289} />
          <Anh soi src={`${H}/g-c3n4-tio2/03.png`} alt="The paper with Lam as coauthor" x={738} y={2895} w={648.63} h={546} cat={[100, 112.24, 0, -9.49]} bienDoi={[0, -1, 1, 0]} goc={[546, 648.63]} rong />
        </Nhom>

        {/* ---------- Polydopamine ---------- */}
        <Anh soi src={`${H}/polydopamine/01.png`} alt="Thesis page on PDA formation" x={65} y={3612} w={642} h={890} className="max-lg:mt-10" />
        <DongPhu x={767} y={3613} w={583}>
          {"Institute of Materials Science (IMS), VAST\nProf. Dr. Tran Dai Lam, Director of IMS"}
        </DongPhu>
        <TieuDe x={769} y={3735} w={581}>
          Polydopamine Electrode Coatings
        </TieuDe>
        <Chu f="rb" c={30} l={1.2} ls={0.03} x={767} y={3840} w={608}>
          I joined a research group for the first time at VAST. Under Prof. Tran Dai Lam’s guidance, I coated electrodes with
          polydopamine (PDA) under thee-scan condition and kept the team’s research log. We were studying how the number of
          cyclic voltammetry scans used to form the coating affects the sensor’s electrochemical response.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/polydopamine/03.png`} alt="VAST campus gate" x={753} y={4217} w={616} h={285} rong />
          <Anh soi src={`${H}/polydopamine/04.png`} alt="Lab equipment" x={65} y={4537} w={313} h={420} />
          <Anh soi src={`${H}/polydopamine/06.png`} alt="Measurement station" x={1089} y={4537} w={286} h={420} />
          <Anh soi src={`${H}/polydopamine/05.png`} alt="Coating chamber" x={413} y={4537} w={645} h={420} rong />
        </Nhom>

        {/* ---------- OpenCV game ---------- */}
        <DongPhu x={65} y={5144} w={583}>
          {"Second Prize in \nHanoi Science and Engineering Fair (HASEF)"}
        </DongPhu>
        <TieuDe x={65} y={5264} w={593}>
          OpenCV Rehabilitation Game
        </TieuDe>
        <Nhom>
          <Anh soi src={`${H}/game-opencv/01.png`} alt="Presenting at HaSEF" x={647} y={5144} w={728} h={409} rong />
          <Anh soi src={`${H}/game-opencv/02.png`} alt="The game’s Python code" x={65} y={5346} w={550} h={207} cat={[117.7, 218.93, -0.01, -52.94]} rong />
        </Nhom>
        <Chu f="rb" c={28} l={1.29} ls={0.04} x={65} y={5593} w={1310}>
          While visiting my grandfather, I noticed patients recovering from strokes. That gave me an idea for a ball-catching
          game, which I coded myself in Python using OpenCV to recognize movement. Later, I went to Hanoi Medical University
          Hospital to speak with specialists, then added movement-tracking charts for doctors. The project won Second Prize at
          the city-level Hanoi Science and Engineering Fair (HaSEF).
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/game-opencv/03.png`} alt="Hand tracking and movement charts" x={65} y={5807} w={1310} h={566} rong />
          <Anh soi src={`${H}/game-opencv/04.png`} alt="At the rehab room" x={65} y={6405} w={300} h={400} />
          <Anh soi src={`${H}/game-opencv/07.png`} alt="Talking with specialists" x={397} y={6405} w={319} h={400} />
          <Anh soi src={`${H}/game-opencv/05.jpg`} alt="Grandpa testing the game" x={745} y={6405} w={300} h={400} />
          <Anh soi src={`${H}/game-opencv/06.png`} alt="Playing with grandpa" x={1075} y={6405} w={300} h={400} />
        </Nhom>

        {/* ---------- Battery box ---------- */}
        <Anh soi src={`${H}/hop-xu-ly-pin/01.jpg`} alt="Project poster: used-battery treatment box" x={65} y={6996} w={641} h={888} className="max-lg:mt-10" />
        <DongPhu x={758} y={6996} w={583}>
          Third Prize in Vinschool Science and Innovation Challenge (VSIC)
        </DongPhu>
        <TieuDe x={758} y={7119} w={652}>
          Smart Used-Battery Treatment Box
        </TieuDe>
        <Chu f="rb" c={30} l={1.2} ls={0.05} x={758} y={7216} w={619}>
          I was the deputy leader of a three-person team that designed and built a box to treat leakage from used batteries
          and monitor conditions for maintenance. The prototype combined adsorption, chemical neutralization, and pH
          monitoring. We took our demo to the Vinschool Science and Innovation Challenge 2026, where it won Third Prize.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/hop-xu-ly-pin/02.png`} alt="The filter layers inside the box" x={874} y={7590} w={501} h={668} />
          <Anh soi src={`${H}/hop-xu-ly-pin/04.png`} alt="pH sensor and display" x={696} y={7924} w={445} h={334} />
          <Anh soi src={`${H}/hop-xu-ly-pin/03.png`} alt="" x={64} y={7925} w={593} h={334} rong />
        </Nhom>

        {/* ---------- Fold & Glide ---------- */}
        <DongPhu x={68} y={8462} w={583}>
          An independent project building mechanical toys to bring science to highland kids.
        </DongPhu>
        <TieuDe x={68} y={8569} w={593}>
          Fold &amp; Glide Project
        </TieuDe>
        <Chu f="rb" c={26} l={1.38} ls={0.04} x={68} y={8651} w={583}>
          A YouTube video on automata - mechanical toys with moving parts - gave me a way to bring crafts and physics together.
        </Chu>
        <Chu f="rb" c={26} l={1.38} ls={0.04} x={68} y={8781} w={564}>
          I started Fold &amp; Glide and have completed technical drawings for ten models, including Vietnam-themed designs. In
          Ba Vi, children felt excited, making toys from wooden sticks and paper cups.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/fold-and-glide/01.png`} alt="Building a toy with kids in Ba Vi" x={651} y={8462} w={328} h={235} cat={[100.01, 115.28, 0.09, -11.32]} />
          <Anh soi src={`${H}/fold-and-glide/02.png`} alt="" x={1000} y={8462} w={375} h={499} />
          <Anh soi src={`${H}/fold-and-glide/03.png`} alt="A finished paper-cup toy" x={651} y={8722} w={328} h={239} cat={[100, 114.1, -0.12, -2.61]} />
          <Anh soi src={`${H}/fold-and-glide/06.png`} alt="Paper bird automaton" x={68} y={8989} w={340} h={360} cat={[108.64, 182.92, -8.64, -6.19]} />
          <Anh soi src={`${H}/fold-and-glide/04.png`} alt="" x={436} y={8989} w={270} h={360} />
          <Anh soi src={`${H}/fold-and-glide/05.png`} alt="" x={735} y={8989} w={640} h={360} rong />
        </Nhom>

        {/* ---------- Exploring more ---------- */}
        <TieuDe x={124} y={9561} w={625}>
          Exploring more
        </TieuDe>
        <TheMoRong cacThe={cacTheKhamPha} x={68} y={9692} w={1307} h={507} />
      </San>
      <HieuUngCuon />
    </main>
  );
}
