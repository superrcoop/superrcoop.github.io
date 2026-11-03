import React, { useState, useEffect } from 'react';
import { ContactButton } from './ContactButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 md:px-12 ${
        isScrolled
          ? 'bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'bg-[#0C0C0C]/40 backdrop-blur-sm'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Nav Links: About, Services, Projects */}
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-10 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base">
          <a
            href="#about"
            className="transition-opacity duration-200 hover:opacity-70 py-1"
          >
            About
          </a>
          <a
            href="#services"
            className="transition-opacity duration-200 hover:opacity-70 py-1"
          >
            Services
          </a>
          <a
            href="#projects"
            className="transition-opacity duration-200 hover:opacity-70 py-1"
          >
            Projects
          </a>
        </nav>

        {/* Single Sticky Contact Me Button */}
        <div className="shrink-0">
          <ContactButton
            href="mailto:fact-clogs.2e@icloud.com?subject=Portfolio%20Inquiry%20via%20superrcoop"
            className="px-4 py-1.5 sm:px-6 sm:py-2 text-[11px] sm:text-xs md:text-sm"
          />
        </div>
      </div>
    </header>
  );
};
