"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cacTrang } from "@/data/cacTrang";

// the black bar from Figma: 72px tall, Avilock 24, white pipes between links
export default function ThanhDieuHuong() {
  const duongDan = usePathname();
  const [mo, datMo] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <nav
        aria-label="Main"
        className="td mx-auto flex h-[72px] max-w-360 items-center justify-between px-5 text-[20px] text-white lg:pr-[62px] lg:pl-[45px] lg:text-[length:clamp(17px,1.667vw,24px)]"
      >
        <Link href="/" className="transition-colors hover:text-cyan" onClick={() => datMo(false)}>
          Tung Lam Folio
        </Link>

        {/* phones get a burger, there's no room for five links */}
        <button
          type="button"
          className="flex size-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          aria-expanded={mo}
          aria-controls="menu-chinh"
          aria-label={mo ? "Close menu" : "Open menu"}
          onClick={() => datMo(!mo)}
        >
          <span className={`h-[2px] w-6 bg-white transition-transform ${mo ? "translate-y-[8px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-white transition-opacity ${mo ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-white transition-transform ${mo ? "-translate-y-[8px] -rotate-45" : ""}`} />
        </button>

        <ul
          id="menu-chinh"
          className={`absolute inset-x-0 top-full flex-col bg-black px-5 pb-6 max-lg:border-t max-lg:border-white/10 lg:static lg:flex lg:flex-row lg:items-center lg:p-0 ${mo ? "flex" : "hidden"}`}
        >
          {cacTrang.map((trang, i) => (
            <li key={trang.duongDan} className="flex items-center">
              {/* the pipe between links, 3px wide like in Figma */}
              {i > 0 && <span aria-hidden className="mx-[clamp(22px,2.36vw,34px)] hidden h-[clamp(17px,1.7vw,24.5px)] w-[3px] bg-white lg:block" />}
              <Link
                href={trang.duongDan}
                aria-current={duongDan === trang.duongDan ? "page" : undefined}
                onClick={() => datMo(false)}
                className="group relative py-3 transition-colors hover:text-cyan aria-[current=page]:text-cyan lg:py-0"
              >
                {trang.ten}
                {/* underline scans in like a HUD readout */}
                <span
                  aria-hidden
                  className="absolute -bottom-[6px] left-0 hidden h-[2px] w-full origin-left scale-x-0 bg-cyan shadow-[0_0_8px_#33d4ff] transition-transform duration-300 group-hover:scale-x-100 group-aria-[current=page]:scale-x-100 lg:block"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
