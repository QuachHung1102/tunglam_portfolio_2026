import type { Metadata } from "next";
import DaiAnhNgang, { type AnhDai } from "@/components/DaiAnhNgang";
import { Anh, Chu, Nhom, San } from "@/components/San";
import TheMoRong, { type The } from "@/components/TheMoRong";
import HieuUngCuon from "@/components/effects/HieuUngCuon";

export const metadata: Metadata = { title: "Research & Projects" };

const H = "/hinh/nghien-cuu";

// the lab strip under the CuMn₂O₄ story. coords are inside the strip box (x 0, y 2444, 1440 x 532)
const dayAnhPhongLab: AnhDai[] = [
  { src: `${H}/ag-cumn2o4/03.jpg`, x: 36, y: 0, w: 224.1, h: 265.97, cat: [123.27, 112.79, 0, -6.9], bienDoi: [0.07, 1, -1, 0.07], goc: [251.43, 206.08] },
  { src: `${H}/ag-cumn2o4/04.jpg`, x: 271, y: 0, w: 177, h: 236 },
  { src: `${H}/ag-cumn2o4/05.jpg`, x: 470, y: 0, w: 177, h: 236 },
  { src: `${H}/ag-cumn2o4/06.jpg`, x: 662, y: 0, w: 177, h: 236 },
  { src: `${H}/ag-cumn2o4/07.jpg`, x: 861, y: 0, w: 165, h: 220 },
  { src: `${H}/ag-cumn2o4/08.jpg`, x: 1055, y: 0, w: 315, h: 236 },
  { src: `${H}/ag-cumn2o4/15.jpg`, x: 50, y: 308, w: 287, h: 215 },
  { src: `${H}/ag-cumn2o4/16.jpg`, x: 349, y: 332, w: 150, h: 200 },
  { src: `${H}/ag-cumn2o4/14.jpg`, x: 507, y: 306, w: 155, h: 207 },
  { src: `${H}/ag-cumn2o4/11.jpg`, x: 611, y: 301, w: 156, h: 207 },
  { src: `${H}/ag-cumn2o4/09.jpg`, x: 733, y: 292, w: 173, h: 231 },
  { src: `${H}/ag-cumn2o4/13.jpg`, x: 891, y: 303, w: 135, h: 205, cat: [128.3, 112.72, -21, -13.81] },
  { src: `${H}/ag-cumn2o4/10.jpg`, x: 1008, y: 298, w: 205, h: 214, cat: [139.02, 100.03, -23.22, -0.01] },
  { src: `${H}/ag-cumn2o4/12.png`, x: 1212, y: 301, w: 166, h: 205, cat: [164.91, 100, -23.03, 0] },
];

// popup galleries keep the popup's own 854 x 575 coords
const K = `${H}/kham-pha-them`;
const cacTheKhamPha: The[] = [
  {
    ten: "IAPHO 2026",
    chu: "IAPHO 2026\n\nGold Medalist",
    co: 36,
    rongChu: 241,
    anh: { src: `${K}/01.png`, w: 324, h: 512, alt: "IAPHO 2026" },
    noiDung: (
      <Nhom>
        <Anh hien={false} src={`${K}/01.png`} x={58} y={125} w={205} h={324} alt="IAPHO 2026 gold medal" rong />
        <Anh hien={false} src={`${K}/iapho/02.jpg`} x={314} y={127} w={222.33} h={166.97} bienDoi={[0, -1, 1, 0]} goc={[166.46, 221.95]} />
        <Anh hien={false} src={`${K}/iapho/01.jpg`} x={598} y={127} w={203.13} h={153.01} bienDoi={[0.01, -1, 1, 0.01]} goc={[151.5, 202]} />
        <Anh hien={false} src={`${K}/iapho/03.jpg`} x={295} y={314} w={117} h={141} cat={[100.09, 110.22, -0.05, -5.65]} />
        <Anh hien={false} src={`${K}/iapho/04.jpg`} x={450} y={314} w={106} h={141} />
        <Anh hien={false} src={`${K}/iapho/05.jpg`} x={601} y={316} w={203} h={153} rong />
      </Nhom>
    ),
  },
  {
    ten: "ASCEND 2026",
    chu: "Satellite Data & Disaster Alerts\n\nASCEND 2026",
    co: 40,
    rongChu: 428,
    anh: { src: `${K}/02.png`, w: 546, h: 512, alt: "ASCEND 2026 satellite model" },
    noiDung: (
      <Nhom>
        <Anh hien={false} src={`${K}/02.png`} x={51} y={119} w={355} h={333} alt="Satellite model drawing" rong />
        <Anh hien={false} src={`${K}/ascend/01.png`} x={454} y={119} w={327} h={134} rong />
        <Anh hien={false} src={`${K}/ascend/02.png`} x={454} y={286} w={366} h={191} rong />
      </Nhom>
    ),
  },
  {
    ten: "ASLC 2024",
    chu: "Seed Bombs for Sustainable Restoration\n\nASLC 2024",
    co: 40,
    rongChu: 428,
    anh: { src: `${K}/03.png`, w: 458, h: 512, cat: [149.29, 100.06, -28.33, -0.03], alt: "ASLC 2024 team at work" },
    noiDung: (
      <Nhom>
        <Anh hien={false} src={`${K}/03.png`} x={60} y={101} w={332} h={372} cat={[149.29, 100.06, -28.33, -0.03]} alt="ASLC 2024 workshop" rong />
        <Anh hien={false} src={`${K}/aslc/01.png`} x={491} y={113} w={231} h={164} cat={[100.07, 105.57, -0.03, -5.57]} rong />
        <Anh hien={false} src={`${K}/aslc/02.png`} x={458} y={287} w={135} h={180} />
        <Anh hien={false} src={`${K}/aslc/03.png`} x={639} y={290} w={133} h={177} />
      </Nhom>
    ),
  },
];

export default function NghienCuu() {
  return (
    <main className="flex-1">
      <San cao={11557} dich={72}>
        <Anh src={`${H}/anh-bia/01.jpg`} alt="A test tube of freshly made spinel" x={0} y={164} w={1440} h={1080} taiTruoc hien={false} className="anh-bia max-lg:-mx-5 max-lg:-mt-10 max-lg:w-auto" />
        <Anh src="/hinh/chung/nen-hud.png" x={-1} y={1244} w={1441} h={886} mo={0.3} nhoe={8.9} hien={false} className="chi-lg" />

        {/* ---------- Ag-substituted CuMn₂O₄ ---------- */}
        <Chu as="h1" f="td" c={48} ls={-0.02} x={767} y={1386} w={624} className="max-lg:mt-6" tach>
          Ag-Substituted CuMn₂O₄ for Electrochemical Sensing
        </Chu>
        <Chu f="it" c={24} l={1.5} canh="justified" dam="Medium" x={768} y={1489} w={583}>
          ITIMS, HUST · Mentors: Nguyen Thanh Hai, MSc, and Assoc. Prof. Nguyen Van Quy
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/ag-cumn2o4/01.png`} alt="Mixing a sample at ITIMS" x={103} y={1423} w={603} h={636} cat={[99.9, 141.57, 0, -35.72]} />
          <Anh soi src={`${H}/ag-cumn2o4/02.jpg`} alt="Ground CuMn₂O₄ powder in a mortar" x={776} y={1592} w={544} h={467} cat={[99.9, 155.14, 0.02, -26.36]} />
        </Nhom>
        <Chu f="rb" c={28} l={1.29} canh="justified" x={119} y={2171} w={1207}>
          After being introduced to Assoc. Prof. Nguyen Van Quy, I asked to join his ITIMS research group in summer 2026. For
          the first time, I read earlier studies to choose my own research direction. With guidance from Nguyen Thanh Hai,
          MSc, and the graduate researchers, I synthesized Ag-substituted CuMn₂O₄ spinel and Ag/CMO composites. Making batch
          after batch taught me patience and precision, while I gained practice with thermal CVD, ultrasonication,
          centrifugation, and magnetic stirring.
        </Chu>
        <DaiAnhNgang cacAnh={dayAnhPhongLab} x={0} y={2444} w={1440} h={532} />

        {/* ---------- g-C₃N₄ / Co-doped TiO₂ ---------- */}
        <Chu as="h2" f="td" c={48} ls={-0.02} x={112} y={3315} w={624} className="max-lg:mt-10" tach>
          Hydrothermal construction of g-C₃N₄/Co-doped TiO₂ for methylene blue removal
        </Chu>
        <Chu f="rb" c={28} l={1.29} canh="justified" x={115} y={3498} w={583}>
          School of Chemistry and Life Sciences (SCLS), HUST · Dr. Cao Hong Ha
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/g-c3n4-tio2/03.png`} alt="The paper with Lam as coauthor" x={771} y={3253} w={532} h={399} bienDoi={[0, -1, 1, 0]} goc={[399, 532]} rong />
          <Anh soi src={`${H}/g-c3n4-tio2/01.png`} alt="Thien Mu pagoda, Hue" x={34} y={3598} w={229} h={289} cat={[100.12, 105.86, -0.06, 0]} />
          <Anh soi src={`${H}/g-c3n4-tio2/02.png`} alt="At the national catalysis conference" x={299} y={3619} w={357} h={268} />
          <Anh soi src={`${H}/g-c3n4-tio2/04.png`} alt="Conference hall" x={691} y={3666} w={295} h={221} />
          <Anh soi src={`${H}/g-c3n4-tio2/05.png`} alt="Conference badge" x={1008} y={3666} w={294} h={221} />
        </Nhom>
        <Chu f="rb" c={28} l={1.29} canh="justified" x={99} y={3922} w={1207}>
          I began helping Dr. Cao Hong Ha with research translation after we talked about materials science at HUST’s School
          of Chemistry and Life Sciences. The work gave me a chance to read published studies. Later, he asked me to read this
          study and write its full abstract on my own. I became a coauthor on the paper in the Vietnam Journal of Catalysis and
          Adsorption and joined him at a national conference in Hue in August 2026.
        </Chu>

        {/* ---------- Polydopamine ---------- */}
        <Chu as="h2" f="td" c={48} ls={-0.02} x={762} y={4313} w={581} className="max-lg:mt-10" tach>
          Polydopamine Electrode Coatings
        </Chu>
        <Chu f="rb" c={28} l={1.29} x={769} y={4463} w={583}>
          IMS, VAST · Prof. Tran Dai Lam, VAST
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/polydopamine/01.png`} alt="Thesis page on PDA formation" x={95} y={4313} w={603.93} h={837} rong />
          <Anh soi src={`${H}/polydopamine/02.png`} alt="Cyclic voltammetry slides" x={722} y={4614} w={604} h={236} rong />
          <Anh soi src={`${H}/polydopamine/03.png`} alt="VAST campus gate" x={723} y={4871} w={603} h={279} rong />
        </Nhom>
        <Chu f="rb" c={28} l={1.29} canh="justified" x={95} y={5193} w={1231}>
          I joined a research group for the first time at VAST. Under Prof. Tran Dai Lam’s guidance, I coated electrodes with
          polydopamine (PDA) under thee-scan condition and kept the team’s research log. We were studying how the number of
          cyclic voltammetry scans used to form the coating affects the sensor’s electrochemical response.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/polydopamine/04.png`} alt="Lab equipment" x={95} y={5380} w={289} h={389} />
          <Anh soi src={`${H}/polydopamine/06.png`} alt="Measurement station" x={1088} y={5380} w={271} h={398} />
          <Anh soi src={`${H}/polydopamine/05.png`} alt="Coating chamber" x={427} y={5380} w={597} h={389} rong />
        </Nhom>

        {/* ---------- OpenCV game ---------- */}
        <Chu as="h2" f="td" c={48} ls={-0.02} x={67} y={5933} w={593} className="max-lg:mt-10" tach>
          OpenCV Rehabilitation Game
        </Chu>
        <Chu f="rb" c={28} l={1.29} x={67} y={6026} w={583}>
          Second Prize in Hanoi Science and Engineering Fair (HASEF)
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/game-opencv/01.png`} alt="Presenting at HaSEF" x={660} y={6015} w={717} h={403} rong />
          <Anh soi src={`${H}/game-opencv/02.png`} alt="The game's Python code" x={120} y={6141} w={406} h={284} rong />
          <Anh soi src={`${H}/game-opencv/03.png`} alt="Hand tracking and movement charts" x={83} y={6459} w={1294} h={559} rong />
        </Nhom>
        <Chu f="rb" c={28} l={1.29} canh="justified" x={112} y={7169} w={1231}>
          While visiting my grandfather, I noticed patients recovering from strokes. That gave me an idea for a ball-catching
          game, which I coded myself in Python using OpenCV to recognize movement. Later, I went to Hanoi Medical University
          Hospital to speak with specialists, then added movement-tracking charts for doctors. The project won Second Prize at
          the city-level Hanoi Science and Engineering Fair (HaSEF).
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/game-opencv/04.png`} alt="At the rehab room" x={41} y={7487} w={319} h={425} />
          <Anh soi src={`${H}/game-opencv/07.png`} alt="Talking with specialists" x={384} y={7494} w={328} h={411} />
          <Anh soi src={`${H}/game-opencv/05.jpg`} alt="Grandpa testing the game" x={737} y={7487} w={326} h={434} />
          <Anh soi src={`${H}/game-opencv/06.png`} alt="Playing with grandpa" x={1098} y={7487} w={321} h={428} />
        </Nhom>

        {/* ---------- Battery box ---------- */}
        <Chu as="h2" f="td" c={48} ls={-0.02} x={767} y={8118} w={652} className="max-lg:mt-10" tach>
          Smart Used-Battery Treatment Box
        </Chu>
        <Chu f="rb" c={28} l={1.29} x={763} y={8307} w={583}>
          Third Prize in Vinschool Science and Innovation Challenge (VSIC)
        </Chu>
        <Chu f="rb" c={28} l={1.29} canh="justified" x={763} y={8422} w={619}>
          I was the deputy leader of a three-person team that designed and built a box to treat leakage from used batteries
          and monitor conditions for maintenance. The prototype combined adsorption, chemical neutralization, and pH
          monitoring. We took our demo to the Vinschool Science and Innovation Challenge 2026, where it won Third Prize.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/hop-xu-ly-pin/01.jpg`} alt="Project poster: used-battery treatment box" x={59} y={8118} w={641} h={888} rong />
          <Anh soi src={`${H}/hop-xu-ly-pin/02.png`} alt="The filter layers inside the box" x={895} y={8777} w={487} h={649} />
          <Anh soi src={`${H}/hop-xu-ly-pin/04.png`} alt="pH sensor and display" x={632} y={9062} w={401} h={300} />
          <Anh soi src={`${H}/hop-xu-ly-pin/03.png`} alt="" x={57} y={9062} w={524} h={295} rong />
        </Nhom>

        {/* ---------- Fold & Glide ---------- */}
        <Chu as="h2" f="td" c={48} ls={-0.02} x={94} y={9519} w={593} className="max-lg:mt-10" tach>
          Fold &amp; Glide Project
        </Chu>
        <Chu f="rb" c={28} l={1.29} canh="justified" x={94} y={9696} w={619}>
          A YouTube video on automata—mechanical toys with moving parts—gave me a way to bring crafts and physics together. I
          started Fold &amp; Glide and have completed technical drawings for ten models, including toys and larger
          Vietnam-themed designs. The project is still at the prototype stage. In Ba Vi, I taught children to make a toy from
          wooden sticks and paper cups. They joined in enthusiastically.
        </Chu>
        <Nhom>
          <Anh soi src={`${H}/fold-and-glide/01.png`} alt="Building a toy with kids in Ba Vi" x={754} y={9519} w={279} h={230} />
          <Anh soi src={`${H}/fold-and-glide/03.png`} alt="A finished paper-cup toy" x={743} y={9777} w={305} h={253} />
          <Anh soi src={`${H}/fold-and-glide/02.png`} alt="" x={1073} y={9593} w={299} h={399} />
          <Anh soi src={`${H}/fold-and-glide/04.png`} alt="" x={448} y={10045} w={266} h={354} />
          <Anh soi src={`${H}/fold-and-glide/06.png`} alt="Paper bird automaton" x={74} y={10070} w={314} h={332} cat={[108.64, 182.92, -8.64, -6.19]} />
          <Anh soi src={`${H}/fold-and-glide/05.png`} alt="" x={753} y={10045} w={640} h={360} rong />
        </Nhom>

        {/* ---------- Exploring more ---------- */}
        <Chu as="h2" f="td" c={48} ls={-0.02} x={69} y={10568} w={625} className="max-lg:mt-10" tach>
          Exploring more
        </Chu>
        <TheMoRong cacThe={cacTheKhamPha} x={70} y={10695} w={1328} h={512} />
      </San>
      <HieuUngCuon />
    </main>
  );
}
