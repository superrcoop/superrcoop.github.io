import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactButton } from './components/common/ContactButton';
import { Github, Globe, Mail } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans relative selection:bg-[#7621B0] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* Footer & Contact Target */}
      <footer
        id="contact"
        className="w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8 z-20 relative"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-black text-2xl tracking-wider uppercase text-[#D7E2EA]">
            Jordan Cooper
          </span>
          <p className="text-sm text-[#D7E2EA]/60 tracking-wide uppercase">
            Lead Cloud Architect & Creative Systems Engineer • superrcoop.net
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/superrcoop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://superrcoop.net"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Official Website"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors duration-200"
          >
            <Globe className="w-6 h-6" />
          </a>
          <a
            href="mailto:jordan@superrcoop.net"
            aria-label="Send Email"
            className="text-[#D7E2EA]/70 hover:text-white transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div>
          <ContactButton href="mailto:jordan@superrcoop.net" />
        </div>
      </footer>
    </div>
  );
};

export default App;
