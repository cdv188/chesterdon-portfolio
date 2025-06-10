import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const RevealOnScroll = ({ children }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(containerRef.current, { opacity: 0, y: 50 });

      gsap.to(containerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.Out",
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="reveal">
      {children}
    </div>
  );
};
