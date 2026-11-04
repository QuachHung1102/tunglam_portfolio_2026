"use client";

import { useEffect, useRef } from "react";

type ThuocTinh = {
  // mp4 in public/, played as is: full 1080p from the first frame, no YouTube logo or "More videos" on top
  src: string;
  // a real frame of the clip (the one at batDau), shown until it starts
  poster: string;
  // first play starts here, in seconds; loops go back to 0
  batDau?: number;
  x: number;
  y: number;
  w: number;
  h: number;
  className?: string;
};

// muted looping clip filling a design box, like a hero photo that moves.
// give the box the clip's own shape (16:9) and nothing gets cropped
export default function VideoNen({ src, poster, batDau, x, y, w, h, className = "" }: ThuocTinh) {
  const video = useRef<HTMLVideoElement>(null);

  // people who asked for less motion get the still frame
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) video.current?.pause();
  }, []);

  return (
    <div className={`vat anh overflow-hidden bg-black ${className}`} style={{ "--x": x, "--y": y, "--w": w, "--h": h } as React.CSSProperties}>
      <video ref={video} src={batDau ? `${src}#t=${batDau}` : src} poster={poster} autoPlay muted loop playsInline preload="auto" aria-hidden className="absolute inset-0 size-full object-cover" />
    </div>
  );
}
