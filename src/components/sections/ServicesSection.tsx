import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { servicesData } from '../../data/servicesData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Services vertical list */}
        <div className="w-full flex flex-col">
          {servicesData.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={30}
              className="w-full border-t border-[rgba(12,12,12,0.15)] first:border-t-0"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 gap-6 md:gap-12">
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {item.number}
                </div>

                {/* Name + description stacked on right */}
                <div className="flex flex-col justify-center flex-1 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide mb-2 sm:mb-3"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
