import { Hinh, type ThuocTinhHinh } from "./San";

// photo + its coords inside the strip box, Figma px
export type AnhDai = ThuocTinhHinh & { x: number; y: number };

type ThuocTinh = {
  cacAnh: AnhDai[];
  // the strip's own box on the page, Figma px
  x: number;
  y: number;
  w: number;
  h: number;
  giay?: number;
};

// Figma note on this strip: "(LƯU Ý: DẢI ẢNH NÀY LÀ CUỘN NGANG)". so it scrolls sideways.
// desktop: the design's layout loops forever (React Bits LogoLoop vibe), hover to stop it.
// phones: a plain swipeable row with snap
export default function DaiAnhNgang({ cacAnh, x, y, w, h, giay = 45 }: ThuocTinh) {
  const ban = (an: boolean) => (
    <div aria-hidden={an || undefined} className="relative h-full w-1/2 shrink-0">
      {cacAnh.map((a) => (
        <div
          key={a.src}
          className="anh-soi absolute overflow-hidden"
          style={{ left: `${(a.x / w) * 100}%`, top: `${(a.y / h) * 100}%`, width: `${(a.w / w) * 100}%`, height: `${(a.h / h) * 100}%` }}
        >
          <Hinh {...a} alt={an ? "" : a.alt} sizes="25vw" />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div
        className="vat chi-lg group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]"
        style={{ "--x": x, "--y": y, "--w": w, "--h": h } as React.CSSProperties}
        data-hien=""
      >
        <div
          className="flex h-full w-[200%] motion-safe:animate-[chay-ngang_var(--giay)_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ "--giay": `${giay}s` } as React.CSSProperties}
        >
          {ban(false)}
          {ban(true)}
        </div>
      </div>

      <div className="an-lg -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none]">
        {cacAnh.map((a) => (
          <div key={a.src} className="relative h-48 shrink-0 snap-start overflow-hidden" style={{ aspectRatio: `${a.w} / ${a.h}` }}>
            <Hinh {...a} sizes="50vw" />
          </div>
        ))}
      </div>
    </>
  );
}
