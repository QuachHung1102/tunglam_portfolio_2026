import HopThoai from "./HopThoai";
import KhungHud from "./KhungHud";
import { Hinh, type ThuocTinhHinh } from "./San";

export type The = {
  ten: string;
  // title lines; "\n\n" in Figma becomes a gap
  chu: string;
  co: number;
  // text box width in Figma, so lines break where they break there
  rongChu: number;
  anh: ThuocTinhHinh;
  // what opens in the HUD popup
  noiDung: React.ReactNode;
};

const u = (px: number) => `calc(${px} * 100cqw / 1440)`;
const MUI_TEN = "/hinh/chung/mui-ten.png";

// "Exploring more" row: Figma shows one card already wider than the rest, so cards trade width on hover
// (React Bits-ish flex accordion). click opens the HUD popup with the gallery
export default function TheMoRong({ cacThe, x, y, w, h }: { cacThe: The[]; x: number; y: number; w: number; h: number }) {
  return (
    <div
      className="vat flex flex-col gap-3 lg:flex-row lg:gap-0"
      style={{ "--x": x, "--y": y, "--w": w, "--h": h } as React.CSSProperties}
      data-hien=""
    >
      {cacThe.map((the) => (
        <HopThoai
          key={the.ten}
          nhan={`${the.ten}: open gallery`}
          kieu={{ "--phan": the.anh.w } as React.CSSProperties}
          className="group relative h-60 overflow-hidden bg-nen text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(.2,.8,.2,1)] lg:h-full lg:flex-(--phan) lg:hover:flex-[calc(var(--phan)*1.9)] lg:focus-visible:flex-[calc(var(--phan)*1.9)]"
          nut={
            <>
              <span className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-75">
                <Hinh {...the.anh} sizes="40vw" />
              </span>
              <span
                className="absolute bottom-5 left-5 flex flex-col gap-3 lg:bottom-(--day) lg:left-(--trai) lg:gap-(--khe)"
                style={{ "--day": u(13), "--trai": u(25), "--khe": u(24) } as React.CSSProperties}
              >
                <span
                  className="pr-6 font-inter text-[22px] leading-[1.1] font-semibold lg:pr-0 whitespace-pre-line lg:w-(--rc) lg:text-(length:--co)"
                  style={{ "--co": u(the.co), "--rc": u(the.rongChu) } as React.CSSProperties}
                >
                  {the.chu}
                </span>
                {/* the red arrow pill from Figma, slides right on hover */}
                <span
                  className="relative block h-11 w-14 transition-transform duration-300 group-hover:translate-x-2 lg:-ml-(--lui) lg:h-(--ca) lg:w-(--cr)"
                  style={{ backgroundImage: `url(${MUI_TEN})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", "--cr": u(71), "--ca": u(56), "--lui": u(17) } as React.CSSProperties}
                />
              </span>
            </>
          }
        >
          <KhungHud>{the.noiDung}</KhungHud>
        </HopThoai>
      ))}
    </div>
  );
}
