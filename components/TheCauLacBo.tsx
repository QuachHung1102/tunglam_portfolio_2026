import HopThoai from "./HopThoai";
import KhungHud from "./KhungHud";
import { Hinh, type ThuocTinhHinh } from "./San";

type ThuocTinh = {
  // title as laid out in Figma (line breaks included)
  chu: string;
  rongChu: number;
  // where the title sits inside the card, Figma px
  chuXY: [number, number];
  anh: ThuocTinhHinh;
  x: number;
  y: number;
  // arrow sits a few px off in some cards, Figma says so
  muiTen?: [number, number];
  noiDung: React.ReactNode;
};

const u = (px: number) => `calc(${px} * 100cqw / 1440)`;

// grey card, photo at 40%, Avilock title top-left, red arrow bottom-left. click = HUD popup
export default function TheCauLacBo({ chu, rongChu, chuXY, anh, x, y, muiTen = [0, 180], noiDung }: ThuocTinh) {
  return (
    <HopThoai
      // screen readers hear the same words the card shows
      nhan={`${chu.replaceAll("\n", " ")}: read more`}
      className="vat group overflow-hidden bg-[#d9d9d9] text-left max-lg:aspect-[376/236] max-lg:w-full"
      kieu={{ "--x": x, "--y": y, "--w": anh.w, "--h": anh.h } as React.CSSProperties}
      nut={
        <>
          <span className="absolute inset-0 opacity-40 transition-[opacity,scale] duration-500 group-hover:scale-105 group-hover:opacity-80">
            <Hinh {...anh} sizes="30vw" />
          </span>
          <span
            className="td absolute top-4 left-6 text-[22px] tracking-[-0.02em] whitespace-pre-line text-white lg:top-(--tren) lg:left-(--trai) lg:w-(--rc) lg:text-(length:--co)"
            style={{ "--trai": u(chuXY[0]), "--tren": u(chuXY[1]), "--rc": u(rongChu), "--co": u(24) } as React.CSSProperties}
          >
            {chu}
          </span>
          <span
            className="absolute bottom-3 left-2 block h-11 w-14 bg-[url(/hinh/chung/mui-ten.png)] bg-contain bg-no-repeat transition-transform duration-300 group-hover:translate-x-2 lg:top-(--mt) lg:bottom-auto lg:left-(--ml) lg:h-(--ca) lg:w-(--cr)"
            style={{ "--ml": u(muiTen[0]), "--mt": u(muiTen[1]), "--cr": u(71), "--ca": u(56) } as React.CSSProperties}
          />
        </>
      }
    >
      <KhungHud>{noiDung}</KhungHud>
    </HopThoai>
  );
}
