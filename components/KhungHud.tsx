import Image from "next/image";
import { San } from "./San";

// the cyan folder-tab frame from Figma (Group 3..11, 854x575). content uses the popup's own coords
export default function KhungHud({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-dem/90 max-lg:border-t-[44px] max-lg:border-cyan">
      <Image src="/hinh/chung/khung-hud.svg" alt="" fill className="pointer-events-none z-10 max-lg:hidden" draggable={false} />
      <San cao={575} rong={854} className="max-lg:!pt-6">
        {children}
      </San>
    </div>
  );
}
