"use client";

import { useRef } from "react";
import { CHO_PHEP_DONG, gsap, ScrollTrigger, SplitText, useGSAP } from "./dungCu";

// Dropped at the end of every page: one watcher instead of a client wrapper per photo.
// [data-hien]  -> React Bits AnimatedContent: rises in when scrolled to, in small batches
// [data-tach]  -> React Bits SplitText: letters climb out of a slot one by one
// Next keeps visited pages in the DOM (hidden), so only touch our own <main>
export default function HieuUngCuon() {
  const moc = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const trang = moc.current?.closest("main");
    if (!trang) return;
    const tim = (chon: string) => [...trang.querySelectorAll<HTMLElement>(chon)].filter((vat) => !vat.closest("dialog"));

    const mm = gsap.matchMedia();
    mm.add(CHO_PHEP_DONG, () => {
      const cacVat = tim("[data-hien]");
      gsap.set(cacVat, { autoAlpha: 0, y: 36 });
      ScrollTrigger.batch(cacVat, {
        start: "top 92%",
        once: true,
        onEnter: (lo) =>
          gsap.to(lo, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            // leftover transforms would trap fixed children, so clean up after
            clearProps: "transform",
          }),
      });

      for (const dong of tim("[data-tach]")) {
        const tach = SplitText.create(dong, { type: "words,chars", mask: "chars" });
        gsap.set(dong, { visibility: "visible" });
        gsap.from(tach.chars, {
          yPercent: 110,
          duration: 0.6,
          ease: "power4.out",
          stagger: 0.025,
          scrollTrigger: { trigger: dong, start: "top 90%", once: true },
          // splitting kills kerning, glue the line back when the show is over
          onComplete: () => tach.revert(),
        });
      }
    });

    // nothing moving? then show everything as it is
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(tim("[data-hien], [data-tach]"), { visibility: "visible" });
    });

    return () => mm.revert();
  });

  return <span ref={moc} hidden />;
}
