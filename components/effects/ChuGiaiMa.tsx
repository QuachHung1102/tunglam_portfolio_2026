"use client";

import { useEffect, useState } from "react";

const KY_TU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@$";

type ThuocTinh = { chu: string; tre?: number; tocDo?: number };

// React Bits' DecryptedText: gibberish settles into the real letters left to right, like a HUD booting up
export default function ChuGiaiMa({ chu, tre = 0, tocDo = 45 }: ThuocTinh) {
  const [hien, datHien] = useState(chu);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let buoc = 0;
    let hen = 0;
    const tron = () =>
      [...chu].map((c, i) => (c === " " || i < buoc ? c : KY_TU[Math.floor(Math.random() * KY_TU.length)])).join("");

    const batDau = setTimeout(() => {
      hen = window.setInterval(() => {
        buoc += 0.5;
        datHien(tron());
        if (buoc >= chu.length) {
          clearInterval(hen);
          datHien(chu);
        }
      }, tocDo);
    }, tre);
    // scramble on the next tick, before the delay runs out
    const xaoTron = setTimeout(() => datHien(tron()), 0);

    return () => {
      clearTimeout(xaoTron);
      clearTimeout(batDau);
      clearInterval(hen);
    };
  }, [chu, tre, tocDo]);

  return (
    <>
      <span className="sr-only">{chu}</span>
      <span aria-hidden>{hien}</span>
    </>
  );
}
