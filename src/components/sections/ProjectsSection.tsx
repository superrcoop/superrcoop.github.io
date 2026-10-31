import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { LiveProjectButton } from '../common/LiveProjectButton';
import { projectsData, ProjectItem } from '../../data/projectsData';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  // Scale down calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[85vh] sticky flex items-start justify-center"
      style={{
        top: `calc(6rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Top Row: Number, Category, Project Name, Live Project Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                {project.category}
              </span>
              <h3
                className="font-black uppercase tracking-tight text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.githubUrl} />
        </div>

        {/* Bottom Row: Two-Column Image Grid (40% left, 60% right) */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Left Column (40% / 5 cols): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] border border-white/10 shadow-lg"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} Detail 1`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] border border-white/10 shadow-lg"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} Detail 2`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% / 7 cols): 1 tall image */}
          <div className="md:col-span-7 h-full min-h-[300px] md:min-h-[460px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] border border-white/10 shadow-lg">
            <img
              src={project.col2Image}
              alt={`${project.name} Featured Showcase`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-40"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading: "Project" (singular) */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* 3 Sticky Stacking Project Cards */}
        <div className="w-full flex flex-col gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
