import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  label = "Live Project",
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-200 hover:bg-[#D7E2EA]/10 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
};
