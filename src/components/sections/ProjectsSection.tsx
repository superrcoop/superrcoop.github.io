import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { LiveProjectButton } from '../common/LiveProjectButton';
import { projectsData, ProjectItem } from '../../data/projectsData';
import { Github } from 'lucide-react';

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
      className="h-[88vh] sticky flex items-start justify-center"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
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

          <div className="flex items-center gap-3">
            {project.githubUrl && project.githubUrl.includes('github.com') && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="p-3 rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA]/70 hover:text-white hover:border-[#D7E2EA] transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            <LiveProjectButton
              href={project.liveUrl || project.githubUrl}
              label={project.id === 'repyt' ? "Play Live" : "Live Project"}
            />
          </div>
        </div>

        {/* Bottom: Single Showcase Frame (Collage of Screens) */}
        <div className="pt-6 w-full flex-1">
          <div className="w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px] rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#141414] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group relative">
            <img
              src={project.image}
              alt={`${project.name} Showcase Collage`}
              className="w-full h-full object-cover object-center rounded-[24px] sm:rounded-[36px] md:rounded-[44px] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[24px] sm:rounded-[36px] md:rounded-[44px]" />
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
        {/* Heading: "Project" */}
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
