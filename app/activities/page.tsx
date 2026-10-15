import type { Metadata } from "next";
import { Anh, Chu, Nhom, San } from "@/components/San";
import TheCauLacBo from "@/components/TheCauLacBo";
import HieuUngCuon from "@/components/effects/HieuUngCuon";

export const metadata: Metadata = { title: "Activities & Impact" };

const H = "/hinh/hoat-dong";
const C = `${H}/cau-lac-bo`;

// the 3px white rules that frame each section title
function Vach({ x, y, w }: { x: number; y: number; w: number }) {
  return <div aria-hidden className="vat h-[3px] bg-white" style={{ "--x": x, "--y": y - 1.5, "--w": w, "--h": 3 } as React.CSSProperties} data-hien="" />;
}

// popup text: Roboto 12/16, justified, popup coords
function ChuPopup({ x, y, children }: { x: number; y: number; children: React.ReactNode }) {
  return (
    <Chu f="rb" c={12} l={1.33} canh="justified" x={x} y={y} w={354}>
      {children}
    </Chu>
  );
}

function TieuDePopup({ x, y, w, children }: { x: number; y: number; w: number; children: React.ReactNode }) {
  return (
    <Chu as="h3" f="td" c={24} ls={-0.02} x={x} y={y} w={w}>
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
        <Chu as="h1" f="td" c={96} canh="center" x={390} y={222.63} w={661} className="max-lg:-mt-36 max-lg:mb-16 max-lg:text-[44px]" tach>
          Activities &amp; Impact
        </Chu>
        <Anh src="/hinh/chung/nen-hud.png" x={0} y={629} w={1441} h={886} mo={0.3} nhoe={8.9} hien={false} className="chi-lg" />

        {/* ---------- Leadership and Initiatives ---------- */}
        <Vach x={123} y={778} w={1194} />
        <Chu as="h2" f="td" c={64} ls={-0.02} canh="center" x={409} y={818} w={624} tach>
          Leadership and Initiatives
        </Chu>
        <Vach x={124} y={920} w={1193} />

        <Anh soi src={`${H}/lanh-dao/02.png`} alt="Lam on stage" x={58} y={1172} w={682} h={1435} cat={[150.42, 100.02, -29.48, -0.01]} className="chi-lg" />

        <Anh soi src={`${H}/lanh-dao/01.jpg`} alt="Explaining a red giant model to visitors" x={795} y={1171} w={522} h={348} />
        <Chu as="h3" f="td" c={36} ls={-0.02} x={796} y={1607} w={564}>
          Lead of Expertise and Content at Amstro’s Gallery 2025
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={796} y={1769} w={521}>
          After working on several club events, I became a team lead for the first time in summer 2025. At Amstro’s Gallery,
          I listened to each member’s personal stories as we built our Space Age zone together. That care helped make our part
          of the exhibition a success.
        </Chu>

        <Anh soi src={`${H}/lanh-dao/04.jpg`} alt="Stargazing night with the club" x={796} y={2021} w={521} h={338} cat={[120.9, 139.76, -16, -39.76]} className="max-lg:mt-6" />
        <Chu as="h3" f="td" c={36} ls={-0.02} x={796} y={2564} w={508}>
          Vice President of Amstronomy club gen 7
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={796} y={2661} w={521}>
          When I became vice president, I took charge of our science content and event documents. We kept organizing
          stargazing sessions, trying new activities, and sharing them on our fanpage. Those efforts caught Sea Limited’s
          attention. Today, they have donated us two modern telescopes and still support the club’s events with significant
          funding.
        </Chu>

        <Anh soi src={`${H}/lanh-dao/05.jpg`} alt="Hosting Astrotales 26" x={126} y={2939} w={521} h={347.38} className="max-lg:mt-6" />
        <Chu as="h3" f="td" c={36} ls={-0.02} x={126} y={3318} w={442}>
          Head of Organization Astrotales 26
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={126} y={3415} w={521}>
          This time, we took Astrotales outside Ams to reach more people nearby. I had venue paperwork to sort out and a host
          school to negotiate with, all while reviewing the science activities. It was a stressful stretch. Then the event day
          arrived: nearly 3,000 visitors came, including Jason Bay of Sea Limited.
        </Chu>

        <Anh soi src={`${H}/lanh-dao/06.png`} alt="Selfie on the way to Long Coc" x={796} y={2953} w={521} h={390.75} bienDoi={[-1, 0, 0, 1]} goc={[521, 390.75]} className="bg-[#d9d9d9] max-lg:mt-6" />
        <Chu as="h3" f="td" c={36} ls={-0.02} x={796} y={3371} w={394}>
          Amstronomy Representative in Astronomy Community
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={796} y={3451} w={521}>
          Astronomy also took me beyond our own school events. Through talks and workshops, I connected Amstronomy with other
          groups in Vietnam. I also led a club delegation to Long Coc for stargazing the Perseids meteor shower in August - a
          chance for our members to join the wider astronomy community.
        </Chu>

        {/* ---------- Culture and Community ---------- */}
        <Vach x={146} y={3724} w={1194} />
        <Chu as="h2" f="td" c={64} ls={-0.02} canh="center" x={409} y={3772} w={624} tach>
          Culture and Community
        </Chu>
        <Vach x={147} y={3866} w={1193} />

        <Anh soi src={`${H}/van-hoa-cong-dong/01.png`} alt="ARIA concert" x={150} y={3892} w={375} h={364} cat={[109.92, 100, -0.03, 0]} className="bg-[#d9d9d9]" />
        <Chu as="h3" f="td" c={36} ls={-0.02} x={147} y={4272} w={164}>
          Concert ARIA
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={150} y={4323} w={357}>
          I played electric guitar, acoustic guitar, and bass as lead guitarist in ARIA’s ten-member band. Our concert welcomed
          nearly 150 listeners at the Vietnam National Academy of Music and raised over $2,000 for programs supporting
          underprivileged students’ education.
        </Chu>

        <Anh soi src={`${H}/van-hoa-cong-dong/02.png`} alt="CISV camp friends" x={557} y={3892} w={376} h={364} cat={[99.36, 100, -0.08, 0]} className="max-lg:mt-6" />
        <Chu as="h3" f="td" c={36} ls={-0.02} x={556} y={4272} w={266}>
          {"National CISV Camper\n(since grade 6th)"}
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={559} y={4361} w={354}>
          Since sixth grade, CISV camps have introduced me to stories and perspectives beyond the classroom. I’ve also learned
          to organize activities that help people get to know one another, discovering how much I can learn from those around
          me.
        </Chu>

        <Anh soi src={`${H}/van-hoa-cong-dong/03.png`} alt="Walking the terraced fields at Khau Pha" x={968} y={3892} w={365} h={364} cat={[168.06, 112.5, -30.85, -12.49]} className="max-lg:mt-6" />
        {/* accented letters come from Oswald and run wider, so only break where Figma breaks */}
        <Chu as="h3" f="td" c={36} ls={-0.02} x={964} y={4272} w={337} className="lg:whitespace-pre">
          {"Khau Phạ\nGiao lưu bản miền năm lớp 8"}
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={964} y={4361} w={354}>
          I spent a week around Khau Pha Pass, away from my phone. Each morning, I took long walks to watch farmers in the
          terraced fields. In the evenings, we shared sticky-rice dinners and practiced for our final-day performance. Those
          everyday moments left me with plenty of small, lasting memories.
        </Chu>

        <Anh soi src={`${H}/van-hoa-cong-dong/06.png`} alt="Charity visit with classmates" x={125} y={4716} w={390} h={362} cat={[104.87, 100.14, -4.87, -0.07]} className="max-lg:mt-6" />
        <Chu as="h3" f="td" c={36} ls={-0.02} x={147} y={5095} w={196} className="lg:whitespace-pre">
          {"Từ thiện với lớp\n(Tháng 6/2025)"}
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={150} y={5180} w={357}>
          With my classmates, I helped raise $500 for the Nho Quan War Invalids Convalescent Center. I emceed our performance
          and gift-distribution program, and we spent the day visiting residents and providing companionship.
        </Chu>

        <Anh soi src={`${H}/van-hoa-cong-dong/04.png`} alt="Science activities at Tri Le school" x={553} y={4713} w={383} h={365} cat={[127.15, 100.07, -18.98, 0.04]} className="bg-[#d9d9d9] max-lg:mt-6" />
        <Chu as="h3" f="td" c={36} ls={-0.02} x={556} y={5095} w={299}>
          Cosmosics 2025: ASTRISE
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={557} y={5158} w={354}>
          I prepared five experiments and led three hands-on activities at Tri Le Ethnic Minority Semi-Boarding Secondary
          School. Conversations with children in this remote mountain community gave me new perspectives on education.
        </Chu>

        <Anh soi src={`${H}/van-hoa-cong-dong/05.png`} alt="Packing medicinal herbs in Ba Vi" x={987} y={4713} w={328} h={365} className="max-lg:mt-6" />
        <Chu as="h3" f="td" c={36} ls={-0.02} x={964} y={5095} w={276} className="lg:whitespace-pre">
          Giao lưu bản miền Ba Vì
        </Chu>
        <Chu f="rb" c={24} l={1.5} canh="justified" x={964} y={5184} w={354}>
          I helped install two solar-powered lights for local households and joined residents in weeding and planting
          medicinal herbs. At a Dao Quan Chet cooperative, I learned about medicinal-leaf harvesting and packaging, and I also
          demonstrated practical science-based tools to local residents.
        </Chu>

        {/* ---------- Club and Other Activities ---------- */}
        <Vach x={146} y={5605} w={1194} />
        <Chu as="h2" f="td" c={64} ls={-0.02} canh="center" x={409} y={5653} w={624} tach>
          Club and Other Activities
        </Chu>
        <Vach x={147} y={5747} w={1193} />

        <TheCauLacBo
          chu="Mentor of KHKK (Physics)"
          rongChu={211}
          chuXY={[27, 21]}
          x={149}
          y={5766}
          anh={{ src: `${C}/02.png`, w: 376, h: 236, cat: [102.16, 136.44, -0.55, -21.61] }}
          muiTen={[1, 180]}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/02.png`} alt="KHKK webinar poster" x={37} y={107} w={376} h={236} cat={[102.16, 136.44, -0.55, -21.61]} />
              <TieuDePopup x={555} y={122} w={211}>Mentor of KHKK (Physics)</TieuDePopup>
              <ChuPopup x={460} y={181}>
                As one of KHKK’s founding teachers, I taught an eight-session course covering the Grade 6 physics curriculum on
                Google Meet. It was a great experience designing the lessons myself, reviewing students’ homework, and keeping
                parents updated on their children’s progress.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/khkk/02.png`} alt="Lesson slides on friction" x={28} y={357} w={237} h={122} />
                <Anh hien={false} src={`${C}/khkk/03.png`} alt="Online class on Google Meet" x={294} y={360} w={261} h={121} />
                <Anh hien={false} src={`${C}/khkk/01.png`} alt="Homework slide" x={584} y={338} w={255} h={143} rong />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu="Main of Exploration Room and MC in AT25"
          rongChu={331}
          chuXY={[23, 32]}
          x={556}
          y={5766}
          anh={{ src: `${C}/03.png`, w: 377, h: 236, cat: [100, 106.63, 0.01, -3.93] }}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/03.png`} alt="Emceeing Astrotales 25" x={28} y={107} w={377} h={236} cat={[100, 106.63, 0.01, -3.93]} />
              <TieuDePopup x={471} y={133} w={331}>Main of Exploration Room and MC in AT25</TieuDePopup>
              <ChuPopup x={454} y={175}>
                I emceed Amstronomy’s Astrotales ’25 and led its Exploration Room, developing the concept and designing the
                slides. Our five-person team introduced elementary school students to constellations and the solar system’s
                planets through playful, interactive presentations. The success in enthusiastic visitors’ responses was
                unexpected.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/at25/01.png`} alt="" x={437} y={265} w={197} h={96} cat={[100, 113.38, 0, 0]} />
                <Anh hien={false} src={`${C}/at25/05.png`} alt="" x={437} y={380} w={203} h={100} />
                <Anh hien={false} src={`${C}/at25/03.png`} alt="" x={39} y={361} w={156} h={117} />
                <Anh hien={false} src={`${C}/at25/04.png`} alt="" x={246} y={361} w={138} h={104} />
                <Anh hien={false} src={`${C}/at25/02.png`} alt="" x={694} y={300} w={120} h={170} rong />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu="SOS - Science passion"
          rongChu={176}
          chuXY={[23, 14]}
          x={964}
          y={5766}
          anh={{ src: `${C}/01.png`, w: 376, h: 236, cat: [100, 105.56, 0, -0.05] }}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/01.png`} alt="Science Fair experiment table" x={467} y={117} w={337} h={225} />
              <TieuDePopup x={47} y={148} w={176}>SOS - Science passion</TieuDePopup>
              <ChuPopup x={66} y={195}>
                During my time with the Society of Open Science Club, I presented experiments at Science Tornado 2024, prepared
                nine experiments for Science Fair 2025, and taught campers about optical illusions at Science Camp 2025 while
                helping look after them. Science kept me busy beyond the classroom.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/sos/01.png`} alt="" x={48} y={325} w={195} h={146} />
                <Anh hien={false} src={`${C}/sos/02.png`} alt="" x={282} y={368} w={138} h={103} />
                <Anh hien={false} src={`${C}/sos/04.png`} alt="" x={459.25} y={361.33} w={156.99} h={117.74} bienDoi={[0, -1, 1, 0]} goc={[117.74, 156.99]} />
                <Anh hien={false} src={`${C}/sos/03.png`} alt="" x={655} y={371} w={174} h={100} cat={[100, 130.21, 0, -9.18]} />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu="Gart Camp 2025"
          rongChu={126}
          chuXY={[31, 8]}
          x={150}
          y={6034}
          anh={{ src: `${C}/04.png`, w: 373, h: 236, cat: [99.94, 210.47, 0.06, -70.18] }}
          muiTen={[8, 180]}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/04.png`} alt="Gart Camp at the American Center" x={54} y={106} w={373} h={236} cat={[99.94, 210.47, 0.06, -70.18]} />
              <TieuDePopup x={543} y={131} w={126}>Gart Camp 2025</TieuDePopup>
              <ChuPopup x={460} y={181}>
                I introduced campers to their kits and led interactive sessions at Gart Camp, a five-day program for 80 campers
                hosted at the U.S. Embassy in 2025. I also emceed games, helped care for campers and coordinate parent pickup,
                and learned how to capture young children’s attention and spark their interest.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/gart-camp/02.png`} alt="" x={39} y={377} w={123} h={92} />
                <Anh hien={false} src={`${C}/gart-camp/03.png`} alt="" x={225} y={378} w={137} h={91} />
                <Anh hien={false} src={`${C}/gart-camp/04.png`} alt="" x={397} y={360} w={201.03} h={111.88} bienDoi={[-0.01, -1, 1, -0.01]} goc={[110, 200]} />
                <Anh hien={false} src={`${C}/gart-camp/01.png`} alt="" x={621} y={273} w={213} h={207} cat={[100, 184.25, 0, -45.56]} />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu="ACA - Chess passion"
          rongChu={163}
          chuXY={[38, 27]}
          x={556}
          y={6034}
          anh={{ src: `${C}/05.png`, w: 377, h: 236, cat: [136.39, 100, -33.45, 0] }}
          muiTen={[0, 175]}
          noiDung={
            <>
              <Anh hien={false} src={`${C}/05.png`} alt="Chess tournament hall" x={30} y={107} w={377} h={236} cat={[136.39, 100, -33.45, 0]} />
              <TieuDePopup x={532} y={130} w={163}>ACA - Chess passion</TieuDePopup>
              <ChuPopup x={460} y={181}>
                I helped organize HCT’25 and HSCC’25, each with nearly 100 competitors, by coordinating chess sets and seating
                and serving as a referee. Playing in club’s friendly matches and tournaments, I feel like I belong to a community
                with the same passion.
              </ChuPopup>
              <Nhom>
                <Anh hien={false} src={`${C}/aca-chess/02.png`} alt="" x={63} y={353} w={169} h={127} />
                <Anh hien={false} src={`${C}/aca-chess/03.png`} alt="" x={285} y={353} w={215} h={138} cat={[100, 116.85, 0, -0.09]} />
                <Anh hien={false} src={`${C}/aca-chess/01.png`} alt="" x={554} y={302} w={260} h={173} rong />
              </Nhom>
            </>
          }
        />
        <TheCauLacBo
          chu={"BAC’25 - Referee at Badminton\nAms Championship 2025"}
          rongChu={247}
          chuXY={[23, 9]}
          x={964}
          y={6034}
          anh={{ src: `${C}/06.png`, w: 376, h: 236, cat: [100, 212.34, -0.12, -73.35] }}
          muiTen={[0, 175]}
          noiDung={
            <>
              <TieuDePopup x={58} y={121} w={247}>{"BAC’25 - Referee at Badminton\nAms Championship 2025"}</TieuDePopup>
              <ChuPopup x={39} y={195}>
                Invited by head organizer Phan Hoang Lam, I refereed at BAC’25, a three-day badminton tournament with 700
                participants. I worked from 8 a.m. to 5 p.m. in an indoor arena, with bad weather even causing a power outage on
                the final day. But along the way, it was a memorable memory as I swapped plenty of badminton stories with the
                players.
              </ChuPopup>
              <Anh hien={false} src={`${C}/06.png`} alt="Refereeing selfie at BAC’25" x={427} y={121} w={376} h={236} cat={[100, 212.34, -0.12, -73.35]} />
              <Nhom>
                <Anh hien={false} src={`${C}/bac25/01.png`} alt="" x={48} y={304} w={281} h={187} rong />
                <Anh hien={false} src={`${C}/bac25/03.png`} alt="" x={381} y={359} w={253} h={116} />
                <Anh hien={false} src={`${C}/bac25/02.png`} alt="" x={667} y={357} w={157} h={118} />
              </Nhom>
            </>
          }
        />
      </San>
      <HieuUngCuon />
    </main>
  );
}
