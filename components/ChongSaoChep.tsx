"use client";

import { useEffect } from "react";

// CSS already blocks selecting; this catches right-click "save image", Ctrl+C and dragging photos out.
// not Fort Knox, a screenshot still works. just enough to stop the lazy copy-paste
export default function ChongSaoChep() {
  useEffect(() => {
    const chan = (e: Event) => e.preventDefault();
    const cacSuKien = ["contextmenu", "copy", "cut", "dragstart", "selectstart"] as const;
    for (const ten of cacSuKien) document.addEventListener(ten, chan);
    return () => {
      for (const ten of cacSuKien) document.removeEventListener(ten, chan);
    };
  }, []);

  return null;
}
