import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-32 pb-10 sm:pb-12 px-4 sm:px-8 md:px-12 bg-[#0C0C0C] select-none">
      {/* Subtle ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-gradient-to-tr from-[#7621B0]/15 via-[#B600A8]/10 to-transparent rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      {/* Main Center Block: Heading and Tagline */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-auto z-10 max-w-6xl mx-auto w-full px-2">
        {/* Responsive Heading: guaranteed visible on all devices without chopping */}
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-[0.94] text-center w-full select-none flex flex-col md:flex-row items-center justify-center gap-y-1 md:gap-x-4"
          style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)' }}
        >
          <span className="whitespace-nowrap">Hi, i&apos;m</span>
          <span className="whitespace-nowrap">superrcoop</span>
        </h1>

        {/* Tagline */}
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-2xl px-2">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-relaxed text-xs sm:text-base md:text-xl lg:text-2xl">
            a cloud architect & creative engineer driven by crafting striking and unforgettable projects
          </p>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator */}
      <div className="w-full flex justify-center items-center z-10 pt-4">
        <a
          href="#about"
          className="flex items-center gap-2 text-[#D7E2EA]/60 hover:text-white transition-colors duration-200 uppercase text-xs sm:text-sm tracking-widest font-medium"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
