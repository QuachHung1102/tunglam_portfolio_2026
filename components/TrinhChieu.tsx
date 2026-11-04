"use client";

import { useEffect, useState } from "react";
import { Hinh, type ThuocTinhHinh } from "./San";

type ThuocTinh = {
  cacAnh: ThuocTinhHinh[];
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  giay?: number;
  className?: string;
};

// photos slide left on their own, one every few seconds; hover holds them. a single photo just sits there
export default function TrinhChieu({ cacAnh, alt, x, y, w, h, giay = 4, className = "" }: ThuocTinh) {
  const [dang, datDang] = useState(0);
  const [dung, datDung] = useState(false);
  const nhieu = cacAnh.length > 1;

  useEffect(() => {
    if (!nhieu || dung || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hen = setInterval(() => datDang((i) => (i + 1) % cacAnh.length), giay * 1000);
    return () => clearInterval(hen);
  }, [nhieu, dung, giay, cacAnh.length]);

  return (
    <div
      role={nhieu ? "region" : undefined}
      aria-roledescription={nhieu ? "carousel" : undefined}
      aria-label={alt}
      className={`vat anh anh-soi overflow-hidden ${className}`}
      style={{ "--x": x, "--y": y, "--w": w, "--h": h } as React.CSSProperties}
      onMouseEnter={() => datDung(true)}
      onMouseLeave={() => datDung(false)}
      data-hien=""
    >
      <div className="flex h-full transition-transform duration-700 ease-[cubic-bezier(.65,0,.35,1)]" style={{ transform: `translateX(-${dang * 100}%)` }}>
        {cacAnh.map((a, i) => (
          <div key={a.src} aria-hidden={i !== dang || undefined} className="relative h-full w-full shrink-0 overflow-hidden">
            <Hinh {...a} alt={i === 0 ? alt : ""} sizes="40vw" />
          </div>
        ))}
      </div>

      {nhieu && (
        <div className="absolute inset-x-0 bottom-[3%] flex justify-center gap-2">
          {cacAnh.map((a, i) => (
            <button
              key={a.src}
              type="button"
              aria-label={`Photo ${i + 1} of ${cacAnh.length}`}
              aria-current={i === dang || undefined}
              onClick={() => datDang(i)}
              className="size-2.5 rounded-full bg-white/50 transition-colors aria-[current]:bg-cyan"
            />
          ))}
        </div>
      )}
    </div>
  );
}
