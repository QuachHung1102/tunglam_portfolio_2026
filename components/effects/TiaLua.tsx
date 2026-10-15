"use client";

import { useEffect, useRef } from "react";

const SO_TIA = 10;
const THOI_LUONG = 450;
const MAU = "#33d4ff";

type Tia = { x: number; y: number; goc: number; batDau: number };

// React Bits' ClickSpark, HUD edition: one viewport canvas, only draws while sparks are alive
export default function TiaLua() {
  const vai = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = vai.current;
    const but = canvas?.getContext("2d");
    if (!canvas || !but) return;

    let cacTia: Tia[] = [];
    let khungHinh = 0;

    const ve = (luc: number) => {
      but.clearRect(0, 0, canvas.width, canvas.height);
      cacTia = cacTia.filter((tia) => {
        const tienDo = (luc - tia.batDau) / THOI_LUONG;
        if (tienDo >= 1) return false;

        const muot = tienDo * (2 - tienDo);
        const xa = muot * 26;
        const dai = 12 * (1 - muot);
        but.beginPath();
        but.moveTo(tia.x + xa * Math.cos(tia.goc), tia.y + xa * Math.sin(tia.goc));
        but.lineTo(tia.x + (xa + dai) * Math.cos(tia.goc), tia.y + (xa + dai) * Math.sin(tia.goc));
        but.stroke();
        return true;
      });
      khungHinh = cacTia.length ? requestAnimationFrame(ve) : 0;
    };

    const banTia = (suKien: PointerEvent) => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // resize here instead of on every window resize, clicks are rare
      if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
      }
      but.strokeStyle = MAU;
      but.lineWidth = 2;
      but.shadowColor = MAU;
      but.shadowBlur = 8;

      const luc = performance.now();
      for (let i = 0; i < SO_TIA; i++) {
        cacTia.push({ x: suKien.clientX, y: suKien.clientY, goc: (2 * Math.PI * i) / SO_TIA, batDau: luc });
      }
      if (!khungHinh) khungHinh = requestAnimationFrame(ve);
    };

    addEventListener("pointerdown", banTia);
    return () => {
      removeEventListener("pointerdown", banTia);
      cancelAnimationFrame(khungHinh);
    };
  }, []);

  return <canvas ref={vai} aria-hidden className="pointer-events-none fixed inset-0 z-[100] h-full w-full" />;
}
