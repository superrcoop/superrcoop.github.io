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
            href="mailto:jordan@superrcoop.net"
            className="transition-opacity duration-200 hover:opacity-70"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 mt-6 sm:mt-4 md:-mt-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] select-none"
        >
          Hi, i&apos;m jordan
        </motion.h1>
      </div>

      {/* 3. Hero Portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex items-center justify-center cursor-pointer group"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[70vh] rounded-3xl overflow-hidden border border-[#D7E2EA]/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm bg-gradient-to-b from-[#18011F]/40 via-[#0C0C0C]/60 to-[#0C0C0C]">
              <img
                src="/me.jpg"
                alt="Jordan Cooper"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== 'https://avatars.githubusercontent.com/u/17491604?v=4') {
                    target.src = 'https://avatars.githubusercontent.com/u/17491604?v=4';
                  }
                }}
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
                draggable={false}
              />
              {/* Subtle ambient lighting vignette */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />
            </div>
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
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
