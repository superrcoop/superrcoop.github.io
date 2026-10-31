import React, { useRef, useState, useEffect } from 'react';
import { marqueeImagesRow1, marqueeImagesRow2 } from '../../data/marqueeImages';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const currentScroll = window.scrollY;
            const windowHeight = window.innerHeight;

            // Scroll offset formula from spec: (window.scrollY - sectionTop + window.innerHeight) * 0.3
            const calcOffset = (currentScroll - sectionTop + windowHeight) * 0.3;
            setOffset(calcOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculate

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Tripled lists for continuous seamless scrolling
  const row1Images = [...marqueeImagesRow1, ...marqueeImagesRow1, ...marqueeImagesRow1];
  const row2Images = [...marqueeImagesRow2, ...marqueeImagesRow2, ...marqueeImagesRow2];

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row1Transform,
            willChange: 'transform',
            transition: 'transform 0.1s linear',
          }}
        >
          {row1Images.map((src, i) => (
            <div
              key={`row1-${i}`}
              className="w-[320px] h-[200px] sm:w-[420px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#181818] border border-white/5 shadow-lg"
            >
              <img
                src={src}
                alt="3D Project Preview"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none select-none"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row2Transform,
            willChange: 'transform',
            transition: 'transform 0.1s linear',
          }}
        >
          {row2Images.map((src, i) => (
            <div
              key={`row2-${i}`}
              className="w-[320px] h-[200px] sm:w-[420px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#181818] border border-white/5 shadow-lg"
            >
              <img
                src={src}
                alt="3D Project Preview"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
