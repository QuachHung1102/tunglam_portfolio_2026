"use client";

import { useRef } from "react";

type ThuocTinh = {
  // what you click to open it
  nut: React.ReactNode;
  // screen-reader name for the trigger
  nhan: string;
  // hud = cyan folder popup, giay = paper sheet that unfolds (Creative page)
  loai?: "hud" | "giay";
  // width / height of what's inside, so the whole sheet fits the screen without scrolling
  tiLe?: number;
  className?: string;
  kieu?: React.CSSProperties;
  children: React.ReactNode;
};

const NUT_DONG = {
  // sits inside the cyan bar on desktop, its own cyan chip on phones
  hud: "text-dem max-lg:bg-cyan lg:top-[8.5%] lg:right-[1.5%] lg:text-[clamp(28px,3vw,44px)]",
  // black ink on the paper corner
  giay: "text-black max-lg:bg-white lg:top-[2%] lg:right-[1.5%] lg:text-[clamp(28px,3vw,44px)]",
};

// native <dialog>: Esc, focus trap and the top layer come free. we only add the entrance
export default function HopThoai({ nut, nhan, loai = "hud", tiLe = 854 / 575, className = "", kieu, children }: ThuocTinh) {
  const hop = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" aria-label={nhan} aria-haspopup="dialog" className={className} style={kieu} onClick={() => hop.current?.showModal()}>
        {nut}
      </button>
      <dialog
        ref={hop}
        aria-label={nhan}
        // a click that lands on the backdrop (the dialog box itself) closes it
        onClick={(e) => e.target === e.currentTarget && hop.current?.close()}
        className={`hop-thoai hop-${loai} m-auto max-h-[92dvh] max-w-none overflow-y-auto bg-transparent p-0 text-white backdrop:bg-dem/80 backdrop:backdrop-blur-sm w-[94vw] lg:w-[min(94vw,var(--toi-da),calc(88dvh*var(--ti-le)))]`}
        style={{ "--ti-le": tiLe, "--toi-da": loai === "giay" ? "1240px" : "1100px" } as React.CSSProperties}
      >
        <button
          type="button"
          onClick={() => hop.current?.close()}
          aria-label="Close"
          className={`td sticky top-2 z-20 mr-2 ml-auto flex size-11 items-center justify-center text-[28px] outline-none transition-transform hover:rotate-90 focus-visible:rotate-90 lg:absolute ${NUT_DONG[loai]}`}
        >
          ×
        </button>
        {children}
      </dialog>
    </>
  );
}
