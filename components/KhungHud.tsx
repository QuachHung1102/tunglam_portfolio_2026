import Image from "next/image";
import { San } from "./San";

// the cyan HUD frame from Figma (Group 15..23, 964x561). content uses the popup's own coords
export default function KhungHud({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative max-lg:border-t-[44px] max-lg:border-cyan max-lg:bg-dem/90">
      {/* the svg brings its own dark fill and cut corners, so it sits under the content */}
      <Image src="/hinh/chung/khung-hud.svg" alt="" fill className="pointer-events-none max-lg:hidden" draggable={false} />
      <San cao={561} rong={964} className="max-lg:!pt-6">
        {children}
      </San>
    </div>
  );
}
