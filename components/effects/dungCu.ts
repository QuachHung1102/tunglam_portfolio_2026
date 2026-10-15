import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// register once here so nobody forgets in their own file
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// people who asked for less motion get none. be nice
export const CHO_PHEP_DONG = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, SplitText, useGSAP };
