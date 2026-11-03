import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { AnimatedText } from '../common/AnimatedText';
import { ContactButton } from '../common/ContactButton';

export const AboutSection: React.FC = () => {
  const bioText = "With more than five years of experience in design and engineering, I focus on distributed systems, cloud architecture, and modern user experiences. I truly enjoy working with teams and businesses that aim to stand out and present their best image. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center px-6 sm:px-10 md:px-12 py-24 sm:py-32 overflow-hidden"
    >
      {/* 4 Decorative 3D images in corners */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D Asset"
            loading="lazy"
            className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Floating Shape"
            loading="lazy"
            className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D Asset"
            loading="lazy"
            className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Composition"
            loading="lazy"
            className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          />
        </FadeIn>
      </div>

      {/* Central content container */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl text-center w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing between heading and text */}
        <div className="h-10 sm:h-14 md:h-16 w-full" />

        {/* Character-by-character animated paragraph with fixed spacing */}
        <div className="w-full max-w-[620px] px-2 sm:px-4">
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-normal sm:font-medium text-center tracking-normal sm:tracking-wide"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              lineHeight: '1.9',
            }}
          />
        </div>

        {/* Spacing between text block and button */}
        <div className="h-14 sm:h-18 md:h-20 w-full" />

        {/* Contact button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton href="mailto:fact-clogs.2e@icloud.com?subject=Portfolio%20Inquiry%20via%20superrcoop" />
        </FadeIn>
      </div>
    </section>
  );
};
