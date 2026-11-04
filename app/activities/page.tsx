import fs from "node:fs";
import type { Metadata } from "next";
import { Anh, Chu, Nhom, San, type ThuocTinhHinh } from "@/components/San";
import TheCauLacBo from "@/components/TheCauLacBo";
import TrinhChieu from "@/components/TrinhChieu";
import HieuUngCuon from "@/components/effects/HieuUngCuon";

export const metadata: Metadata = { title: "Activities & Impact" };

const H = "/hinh/hoat-dong";
const C = `${H}/cau-lac-bo`;

// every photo in a leadership folder joins its slideshow, in file-name order. 01 keeps the crop from Figma
function anhTrong(thuMuc: string, w: number, h: number, dau: Partial<ThuocTinhHinh> = {}): ThuocTinhHinh[] {
  return fs
    .readdirSync(`public${H}/lanh-dao/${thuMuc}`)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort()
    .map((f, i) => ({ src: `${H}/lanh-dao/${thuMuc}/${f}`, w, h, ...(i === 0 && dau) }));
}

// the 3px white rules that frame each section title
function Vach({ x, y, w }: { x: number; y: number; w: number }) {
  return <div aria-hidden className="vat h-[3px] bg-white" style={{ "--x": x, "--y": y - 1.5, "--w": w, "--h": 3 } as React.CSSProperties} data-hien="" />;
}

// the blue slab behind a leadership photo, running off the page edge in Figma
function KhoiXanh({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return <div aria-hidden className="vat chi-lg bg-[#279dff]" style={{ "--x": x, "--y": y, "--w": w, "--h": h } as React.CSSProperties} data-hien="" />;
}

function TieuDeMuc({ x, y, children }: { x: number; y: number; children: React.ReactNode }) {
  return (
    <Chu as="h2" f="td" c={64} ls={-0.02} canh="center" x={x} y={y} w={624} tach>
      {children}
    </Chu>
  );
}

function TieuDe({ x, y, w, className = "", children }: { x: number; y: number; w: number; className?: string; children: React.ReactNode }) {
  return (
    <Chu as="h3" f="td" c={36} ls={-0.02} x={x} y={y} w={w} className={className}>
      {children}
    </Chu>
  );
}

// leadership paragraphs: Roboto 28 / 1.29 / +4%
function Doan({ x, y, children }: { x: number; y: number; children: React.ReactNode }) {
  return (
    <Chu f="rb" c={28} l={1.29} ls={0.04} x={x} y={y} w={521}>
      {children}
    </Chu>
  );
}

// culture paragraphs: Roboto 24 / 1.5, some with +4% tracking in Figma
function DoanNho({ x, y, w = 354, ls, children }: { x: number; y: number; w?: number; ls?: number; children: React.ReactNode }) {
  return (
    <Chu f="rb" c={24} l={1.5} ls={ls} x={x} y={y} w={w}>
      {children}
    </Chu>
  );
}

// popup text: Roboto 15/20, popup coords
function ChuPopup({ x, y, w, canh, children }: { x: number; y: number; w: number; canh?: "right"; children: React.ReactNode }) {
  return (
    <Chu f="rb" c={15} l={1.33} ls={0.07} canh={canh} x={x} y={y} w={w}>
      {children}
    </Chu>
  );
}

// lines break only where Figma breaks them: the free Avilock runs a hair wider than the design's cut
function TieuDePopup({ x, y, w, canh, children }: { x: number; y: number; w: number; canh?: "right"; children: React.ReactNode }) {
  return (
    <Chu as="h3" f="td" c={24} ls={-0.02} canh={canh} x={x} y={y} w={w} className="lg:whitespace-pre">
      {children}
    </Chu>
  );
}

export default function HoatDong() {
  return (
    <main className="flex-1">
      <San cao={6393} rong={1442} dich={72}>
        {/* cover: the whole Amstronomy crew, half see-through over navy */}
        <Anh src={`${H}/anh-bia/01.jpg`} alt="Amstronomy club members at Astrotales" x={0} y={134} w={1441} h={555} cat={[100.01, 167.75, -0.01, -59.64]} mo={0.5} taiTruoc hien={false} className="max-lg:-mx-5 max-lg:-mt-10 max-lg:w-auto" />
        <Chu as="h1" f="td" c={96} canh="center" x={389} y={224} w={661} className="max-lg:-mt-36 max-lg:mb-16 max-lg:text-[44px]" tach>
          Activities &amp; Impact
        </Chu>

        {/* ---------- Leadership and Initiatives ---------- */}
        <Vach x={123} y={778} w={1194} />
        <TieuDeMuc x={409} y={818}>
          Leadership and Initiatives
        </TieuDeMuc>
        <Vach x={124} y={920} w={1193} />

        <Anh soi src={`${H}/lanh-dao/02.png`} alt="Lam on stage" x={77} y={1001} w={670} h={1600} cat={[170.69, 100.02, -36.78, -0.01]} className="chi-lg" />

        <KhoiXanh x={796} y={982} w={652} h={394} />
        <TrinhChieu cacAnh={anhTrong("amstro-gallery", 522, 348)} alt="Explaining a red giant model to visitors" x={829} y={1007} w={522} h={348} />
        <TieuDe x={829} y={1405} w={564}>
          Lead of Expertise and Content at Amstro’s Gallery 2025
        </TieuDe>
        <Doan x={829} y={1503}>
          After working on several club events, I became a team lead for the first time in summer 2025. At Amstro’s Gallery,
          I listened to each member’s personal stories as we built our Space Age zone together. That care helped make our part
          of the exhibition a success.
        </Doan>

        <KhoiXanh x={796} y={1813} w={652} h={394} />
        <TrinhChieu cacAnh={anhTrong("pho-chu-nhiem", 521, 338, { cat: [120.9, 139.76, -16, -39.76] })} alt="Stargazing night with the club" x={830} y={1843} w={521} h={338} className="max-lg:mt-6" />
        <TieuDe x={829} y={2244} w={508}>
          Vice President of Amstronomy club gen 7
        </TieuDe>
        <Doan x={829} y={2314}>
          When I became vice president, I took charge of the science content and event documents. Organizing stargazing
          sessions, trying new activities, sharing our fanpage, those efforts caught Sea Limited’s attention. Today, they have
          become our long-long-time partner and sponsor.
        </Doan>

        <KhoiXanh x={-35} y={2666} w={736} h={445} />
        <TrinhChieu cacAnh={anhTrong("astrotales-26", 521, 391, { cat: [112.67, 100.1, -3.45, -0.05] })} alt="Hosting Astrotales 26" x={146} y={2698} w={521} h={391} className="max-lg:mt-6" />
        <TieuDe x={146} y={3169} w={442}>
          Head of Organization Astrotales 26
        </TieuDe>
        <Doan x={146} y={3268}>
          This time, we took the event outside my school to reach more people. I had venue paperwork to sort out and a host
          school to negotiate with, all while reviewing the science activities. It was a stressful stretch. Then the event day
          arrived: nearly 3,000 visitors came, including Jason Bay of Sea Limited.
        </Doan>

        <KhoiXanh x={797} y={2668} w={736} h={445} />
        <TrinhChieu
          cacAnh={anhTrong("dai-dien", 521, 390.75, { bienDoi: [-1, 0, 0, 1], goc: [521, 390.75] })}
          alt="Selfie on the way to Long Coc"
          x={830}
          y={2698}
          w={521}
          h={390.75}
          className="bg-[#d9d9d9] max-lg:mt-6"
        />
        <TieuDe x={830} y={3156} w={394}>
          Amstronomy Representative in Astronomy Community
        </TieuDe>
        <Doan x={829} y={3266}>
          Beyond organizing events, I connected Amstronomy with other groups in Vietnam by attending workshops and talkshow. I
          also led a club delegation to Long Coc for stargazing the Perseids meteor shower in August - a chance for our members
          to join the wider astronomy community.
        </Doan>

        {/* ---------- Culture and Community ---------- */}
        <Vach x={144} y={3687} w={1194} />
        <TieuDeMuc x={407} y={3735}>
          Culture and Community
        </TieuDeMuc>
        <Vach x={145} y={3829} w={1193} />

        <Anh soi src={`${H}/van-hoa-cong-dong/01.png`} alt="ARIA concert" x={148} y={3855} w={375} h={364} cat={[109.92, 100, -0.03, 0]} className="bg-[#d9d9d9]" />
        <TieuDe x={148} y={4241} w={303}>
          {"Guitarist -\nConcert ARIA"}
        </TieuDe>
        <DoanNho x={148} y={4324} w={357}>
          I played electric guitar, acoustic guitar, and bass as lead guitarist in ARIA’s ten-member band. Our concert welcomed
          nearly 150 listeners at the Vietnam National Academy of Music and raised over $2,000 for programs supporting
          underprivileged students’ education.
        </DoanNho>

        <Anh soi src={`${H}/van-hoa-cong-dong/02.png`} alt="CISV camp friends" x={555} y={3855} w={376} h={364} cat={[99.36, 100, -0.08, 0]} className="max-lg:mt-6" />
        <TieuDe x={554} y={4241} w={152}>
          {"National\nCISV Camper"}
        </TieuDe>
        <DoanNho x={557} y={4324} ls={0.04}>
          Since sixth grade, CISV camps have introduced me to stories and perspectives beyond the classroom. I’ve also learned
          to organize activities that help people get to know one another, discovering how much I can learn from those around
          me.
        </DoanNho>

        <Anh soi src={`${H}/van-hoa-cong-dong/03.png`} alt="Walking the terraced fields at Khau Pha" x={966} y={3855} w={365} h={364} cat={[168.06, 112.5, -30.85, -12.49]} className="max-lg:mt-6" />
        <TieuDe x={962} y={4241} w={236}>
          {"Khau Pha\nRegional Exchange"}
        </TieuDe>
        <DoanNho x={962} y={4324}>
          I spent a week at Khau Pha Pass, away from my phone. Each morning, I took long walks to watch farmers in the fields.
          In the evenings, we shared sticky-rice dinners and practiced a performance. Those everyday moments left me with plenty
          of small, lasting memories.
        </DoanNho>

        <Anh soi src={`${H}/van-hoa-cong-dong/06.png`} alt="Charity visit with classmates" x={123} y={4679} w={390} h={362} cat={[104.87, 100.14, -4.87, -0.07]} className="max-lg:mt-6" />
        <TieuDe x={145} y={5066} w={162}>
          {"Charity for\nWar Invalids"}
        </TieuDe>
        <DoanNho x={148} y={5151} w={357} ls={0.04}>
          With my classmates, I helped raise $500 for the Nho Quan War Invalids Convalescent Center. I emceed our performance
          and gift-distribution program, and we spent the day visiting residents and providing companionship.
        </DoanNho>

        <Anh soi src={`${H}/van-hoa-cong-dong/04.png`} alt="Science activities at Tri Le school" x={551} y={4676} w={383} h={365} cat={[127.15, 100.07, -18.98, 0.04]} className="bg-[#d9d9d9] max-lg:mt-6" />
        <TieuDe x={554} y={5066} w={199}>
          {"Cosmosics 2025:\nASTRISE"}
        </TieuDe>
        <DoanNho x={555} y={5151} ls={0.04}>
          I prepared five experiments and led three hands-on activities at Tri Le Ethnic Minority Semi-Boarding Secondary
          School. Conversations with children in this remote mountain community gave me new perspectives on education.
        </DoanNho>

        <Anh soi src={`${H}/van-hoa-cong-dong/05.png`} alt="Packing medicinal herbs in Ba Vi" x={985} y={4676} w={328} h={365} className="max-lg:mt-6" />
        <TieuDe x={966} y={5066} w={257}>
          {"Ba Vi - Muong Village\nCultural Exchange"}
        </TieuDe>
        <DoanNho x={966} y={5147}>
          {"I helped install two solar-powered lights for local households and joined residents in weeding and planting medicinal herbs.\nAt a Dao Quan Chet cooperative, I learned about medicinal-leaf harvesting and packaging, while introducing science-based toys."}
        </DoanNho>

        {/* ---------- Club and Other Activities ---------- */}
        <Vach x={146} y={5611} w={1194} />
        <TieuDeMuc x={409} y={5659}>
          Club and Other Activities
        </TieuDeMuc>
        <Vach x={147} y={5753} w={1193} />

        <TheCauLacBo
          chu="Mentor of KHKK (Physics)"
          rongChu={211}
          chuXY={[27, 21]}
          x={149}
          y={5772}
          anh={{ src: `${C}/02.png`, w: 376, h: 236, cat: [102.16, 136.44, -0.55, -21.61] }}
          muiTen={[1, 180]}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/02.png`} alt="KHKK webinar poster" x={67} y={76} w={417} h={262} cat={[102.16, 136.44, -0.55, -21.61]} />
              <TieuDePopup x={524} y={95} w={233}>Mentor of KHKK (Physics)</TieuDePopup>
              <ChuPopup x={524} y={168} w={391}>
                As one of KHKK’s founding teachers, I taught an eight-session course covering the Grade 6 physics curriculum on
                Google Meet. It was a great experience designing the lessons myself, reviewing students’ homework, and keeping
                parents updated on their children’s progress.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/khkk/02.png`} alt="Lesson slides on friction" x={67} y={351} w={269} h={140} />
                <Anh hien={false} src={`${C}/khkk/03.png`} alt="Online class on Google Meet" x={359} y={351} w={299} h={139} />
                <Anh hien={false} src={`${C}/khkk/01.png`} alt="Homework slide" x={680} y={355} w={246} h={138} rong />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu="Main of Exploration Room and MC in AT25"
          rongChu={331}
          chuXY={[23, 32]}
          x={556}
          y={5772}
          anh={{ src: `${C}/03.png`, w: 377, h: 236, cat: [100, 106.63, 0.01, -3.93] }}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/03.png`} alt="Emceeing Astrotales 25" x={64} y={79} w={395} h={248} cat={[100, 106.63, 0.01, -3.93]} />
              {/* Figma 584..899; the box grows left (an overflowing line would only spill right) */}
              <TieuDePopup x={559} y={85} w={340} canh="right">Main of Exploration Room and MC in AT25</TieuDePopup>
              <ChuPopup x={491} y={134} w={408} canh="right">
                I emceed Amstronomy’s Astrotales ’25 and led its Exploration Room, developing the concept and designing the
                slides. Our five-person team introduced elementary school students to constellations and the solar system’s
                planets through playful, interactive presentations. The success in enthusiastic visitors’ responses was
                unexpected.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/at25/02.png`} alt="" x={482} y={285} w={137} h={194} />
                <Anh hien={false} src={`${C}/at25/03.png`} alt="" x={64} y={342} w={184} h={137} />
                <Anh hien={false} src={`${C}/at25/04.png`} alt="" x={272} y={342} w={184} h={138} />
                <Anh hien={false} src={`${C}/at25/05.png`} alt="" x={643} y={354} w={256} h={126} rong />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu="SOS - Science passion"
          rongChu={176}
          chuXY={[24, 15]}
          x={963}
          y={5771}
          anh={{ src: `${C}/01.png`, w: 377, h: 238, cat: [100, 105.56, 0, -0.05] }}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/01.png`} alt="Science Fair experiment table" x={505} y={75} w={392} h={261} />
              <TieuDePopup x={67} y={98} w={204}>SOS - Science passion</TieuDePopup>
              <ChuPopup x={66} y={170} w={409}>
                During my time with the Society of Open Science Club, I presented experiments at Science Tornado 2024, prepared
                nine experiments for Science Fair 2025, and taught campers about optical illusions at Science Camp 2025 while
                helping look after them. Science kept me busy beyond the classroom.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/sos/01.png`} alt="" x={66} y={349} w={187} h={139} />
                <Anh hien={false} src={`${C}/sos/02.png`} alt="" x={263} y={349} w={186} h={139} />
                <Anh hien={false} src={`${C}/sos/03.png`} alt="" x={655} y={349} w={242} h={139} cat={[100, 130.21, 0, -9.18]} rong />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu="Gart Camp 2025"
          rongChu={126}
          chuXY={[31, 8]}
          x={150}
          y={6040}
          anh={{ src: `${C}/04.png`, w: 373, h: 236, cat: [99.94, 210.47, 0.06, -70.18] }}
          muiTen={[8, 174]}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/04.png`} alt="Gart Camp at the American Center" x={61} y={70} w={423} h={268} cat={[99.94, 210.47, 0.06, -70.18]} />
              <TieuDePopup x={774} y={96} w={143}>Gart Camp 2025</TieuDePopup>
              <ChuPopup x={525} y={166} w={379} canh="right">
                I introduced campers to their kits and led interactive sessions at Gart Camp, a five-day program for 80 campers
                hosted at the U.S. Embassy in 2025. I also emceed games, helped care for campers and coordinate parent pickup,
                and learned how to capture young children’s attention and spark their interest.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/gart-camp/02.png`} alt="" x={62} y={357} w={181} h={136} />
                <Anh hien={false} src={`${C}/gart-camp/03.png`} alt="" x={266} y={357} w={204} h={136} />
                <Anh hien={false} src={`${C}/gart-camp/04.png`} alt="" x={493.58} y={354.46} w={249.02} h={138.54} bienDoi={[-0.01, -1, 1, -0.01]} goc={[136.2, 247.74]} />
                <Anh hien={false} src={`${C}/gart-camp/01.png`} alt="" x={764} y={355} w={140} h={136} cat={[100, 184.25, 0, -45.56]} />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu="ACA - Chess passion"
          rongChu={163}
          chuXY={[38, 27]}
          x={556}
          y={6040}
          anh={{ src: `${C}/05.png`, w: 377, h: 236, cat: [136.39, 100, -33.45, 0] }}
          muiTen={[0, 169]}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/aca-chess/01.png`} alt="Chess tournament hall" x={85} y={78} w={381} h={254} />
              <TieuDePopup x={725} y={100} w={163}>ACA - Chess passion</TieuDePopup>
              <ChuPopup x={534} y={170} w={354} canh="right">
                I helped organize HCT’25 and HSCC’25, each with nearly 100 competitors, by coordinating chess sets and seating
                and serving as a referee. Playing in club’s friendly matches and tournaments, I feel like I belong to a community
                with the same passion.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/aca-chess/02.png`} alt="" x={85} y={348} w={196} h={147} />
                <Anh hien={false} src={`${C}/aca-chess/03.png`} alt="" x={309} y={348} w={230} h={148} cat={[100, 116.85, 0, -0.09]} />
                <Anh hien={false} src={`${C}/05.png`} alt="" x={575} y={348} w={313} h={148} cat={[102.78, 100, -2.88, -0.19]} rong />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu={"BAC’25 - Referee at Badminton\nAms Championship 2025"}
          rongChu={247}
          chuXY={[23, 9]}
          x={964}
          y={6040}
          anh={{ src: `${C}/06.png`, w: 376, h: 236, cat: [100, 212.34, -0.12, -73.35] }}
          muiTen={[0, 169]}
          noiDung={
            <>
              <TieuDePopup x={94} y={89} w={247}>{"BAC’25 - Referee at Badminton\nAms Championship 2025"}</TieuDePopup>
              <ChuPopup x={94} y={156} w={365}>
                Invited by head organizer Phan Hoang Lam, I refereed at BAC’25, a three-day badminton tournament with 700
                participants. I worked from 8 a.m. to 5 p.m. in an indoor arena, with bad weather even causing a power outage on
                the final day. But along the way, it was a memorable memory as I swapped plenty of badminton stories with the
                players.
              </ChuPopup>
              <Anh hien={false} src={`${C}/06.png`} alt="Refereeing selfie at BAC’25" x={479} y={77} w={398} h={250} cat={[100, 212.34, -0.12, -73.35]} />
              <Nhom>
                <Anh hien={false} src={`${C}/bac25/01.png`} alt="" x={94} y={344} w={220} h={147} />
                <Anh hien={false} src={`${C}/bac25/03.png`} alt="" x={338} y={344} w={319} h={147} />
                <Anh hien={false} src={`${C}/bac25/02.png`} alt="" x={681} y={344} w={196} h={147} rong />
              </Nhom>
            </>
          }
        />
      </San>
      <HieuUngCuon />
    </main>
  );
}
