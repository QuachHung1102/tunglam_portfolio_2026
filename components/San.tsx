import Image from "next/image";

// Figma coords, in design px of a 1440-wide frame
type ToaDo = { x: number; y: number; w: number; h?: number };

const bien = ({ x, y, w, h }: ToaDo, them: React.CSSProperties = {}) =>
  ({ "--x": x, "--y": y, "--w": w, ...(h != null && { "--h": h }), ...them }) as React.CSSProperties;

type ThuocTinhSan = {
  cao: number;
  // frame width in Figma. pages are 1440, popups 854
  rong?: number;
  // skip the top of the frame the layout already draws (the nav bar)
  dich?: number;
  className?: string;
  children: React.ReactNode;
};

// one Figma frame. column on phones, pixel-pinned canvas from 1024px up
export function San({ cao, rong, dich = 0, className = "", children }: ThuocTinhSan) {
  return (
    <section className={`san ${className}`} style={{ "--cao": cao, "--rong": rong, "--dy": dich } as React.CSSProperties}>
      {children}
    </section>
  );
}

// photos that pile into a grid on phones and vanish into the stage on desktop
export function Nhom({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`nhom ${className}`}>{children}</div>;
}

export type ThuocTinhHinh = {
  src: string;
  alt?: string;
  w: number;
  h: number;
  // crop lifted from Figma, in % of the box: [width, height, left, top]
  cat?: [number, number, number, number];
  // fit the whole picture instead of filling the box
  vua?: boolean;
  // photo turned/flipped in Figma: CSS matrix(a, b, c, d) + its size before turning. w/h is then the turned outline
  bienDoi?: [number, number, number, number];
  goc?: [number, number];
  taiTruoc?: boolean;
  sizes?: string;
};

// the bare photo: fills whatever box it's dropped in, with the design's crop and turn
export function Hinh({ src, alt = "", w, h, cat, vua, bienDoi, goc, taiTruoc, sizes = "100vw" }: ThuocTinhHinh) {
  let hinh = (
    <Image
      src={src}
      alt={alt}
      fill
      draggable={false}
      preload={taiTruoc}
      sizes={sizes}
      className={vua ? "object-contain" : cat ? "" : "object-cover"}
    />
  );

  if (cat) {
    hinh = (
      <span className="absolute" style={{ width: `${cat[0]}%`, height: `${cat[1]}%`, left: `${cat[2]}%`, top: `${cat[3]}%` }}>
        {hinh}
      </span>
    );
  }

  // spin the photo inside its turned outline, around the middle
  if (bienDoi && goc) {
    hinh = (
      <span
        className="absolute top-1/2 left-1/2"
        style={{
          width: `${(goc[0] / w) * 100}%`,
          height: `${(goc[1] / h) * 100}%`,
          transform: `translate(-50%, -50%) matrix(${bienDoi.join(", ")}, 0, 0)`,
        }}
      >
        {hinh}
      </span>
    );
  }

  return hinh;
}

type ThuocTinhAnh = ToaDo &
  ThuocTinhHinh & {
  mo?: number;
  // Figma layer blur, in Figma px
  nhoe?: number;
  soi?: boolean;
  hien?: boolean;
  rong?: boolean;
  className?: string;
  children?: React.ReactNode;
};

// a photo pinned on the stage
export function Anh({ mo, nhoe, soi, hien = true, rong, className = "", children, x, y, ...hinh }: ThuocTinhAnh) {
  return (
    <div
      className={`vat anh overflow-hidden ${soi ? "anh-soi" : ""} ${rong ? "rong" : ""} ${className}`}
      style={bien({ x, y, w: hinh.w, h: hinh.h }, { opacity: mo, filter: nhoe ? `blur(${nhoe / 2}px)` : undefined })}
      data-hien={hien ? "" : undefined}
    >
      <Hinh {...hinh} />
      {children}
    </div>
  );
}

const PHONG = { td: "td", rb: "font-than", rbc: "font-hep", it: "font-inter" } as const;
const DAM = { Medium: "font-medium", "Semi Bold": "font-semibold", Bold: "font-bold" } as const;

type ThuocTinhChu = Omit<ToaDo, "h"> & {
  f: keyof typeof PHONG;
  // font size, line height (multiplier) and tracking (em), all straight from Figma
  c: number;
  l?: number;
  ls?: number;
  canh?: "center" | "right" | "justified";
  dam?: keyof typeof DAM;
  mau?: string;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
  // letters rise one by one on scroll
  tach?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Chu({ f, c, l, ls, canh, dam, mau, as: The = "p", tach, className = "", children, ...toaDo }: ThuocTinhChu) {
  const canhLe = canh === "justified" ? "text-justify" : canh === "center" ? "text-center" : canh === "right" ? "text-right" : "";
  return (
    <The
      className={`vat chu ${PHONG[f]} ${dam ? DAM[dam] : ""} ${canhLe} ${className}`}
      style={bien(toaDo, { "--c": c, "--l": l, "--ls": ls, color: mau } as React.CSSProperties)}
      data-tach={tach ? "" : undefined}
      data-hien={tach ? undefined : ""}
    >
      {children}
    </The>
  );
}
