import { ArrowDown } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import Orb from "./Orb";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 "
    >
      <img
        src="/projects/backImg.png"
        alt=""
        className="absolute right-1.5 md:top-4 md:w-2xl w-1/2 top-3/5"
      />

      <RevealOnScroll>
        <div
          style={{
            width: "100%",
            height: "800px",
            position: "absolute",
            zIndex: -1,
            top: "-280px",
          }}
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={235}
            forceHoverState={false}
          />
        </div>
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm </span>
              <span className="text-primary text-glow opacity-0 animate-fade-in-delay-1">
                Chester Don
              </span>
              <span className="opacity-0 text-gradient ml-2 animate-fade-in-delay-2">
                Valencerina
              </span>
            </h1>
            <p className="text-lg text md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I'm a Programmer with a passion for creating user-friendly and
              efficient applications.
            </p>
            <div className="opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
      <SpeedInsights />
    </section>
  );
};
