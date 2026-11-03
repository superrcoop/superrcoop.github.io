import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { Magnet } from '../common/Magnet';
import { ContactButton } from '../common/ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a
            href="#about"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            About
          </a>
          <a
            href="#services"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            Services
          </a>
          <a
            href="#projects"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            Projects
          </a>
          <a
            href="mailto:fact-clogs.2e@icloud.com?subject=Portfolio%20Inquiry%20via%20superrcoop"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading: Hi, i'm superrcoop */}
      <div className="w-full overflow-hidden text-center z-0 mt-6 sm:mt-4 md:-mt-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14.5vw] select-none"
        >
          Hi, i&apos;m superrcoop
        </motion.h1>
      </div>

      {/* 3. Hero 3D Creator Avatar with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[490px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex items-center justify-center cursor-pointer group"
          >
            <img
              src="/template-hero.png"
              alt="superrcoop -- 3D Creator"
              className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] filter contrast-105 brightness-100 group-hover:scale-105 transition-transform duration-500 ease-out pointer-events-none select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 pointer-events-auto">
        {/* Left paragraph */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a cloud architect & creative engineer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="mailto:fact-clogs.2e@icloud.com?subject=Portfolio%20Inquiry%20via%20superrcoop" />
        </FadeIn>
      </div>
    </section>
  );
};
