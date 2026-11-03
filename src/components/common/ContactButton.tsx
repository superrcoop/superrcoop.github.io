import React from 'react';

interface ContactButtonProps {
  href?: string;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  href = "mailto:fact-clogs.2e@icloud.com?subject=Portfolio%20Inquiry%20via%20superrcoop",
  className = "",
  label,
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-wider transition-transform duration-300 hover:scale-105 active:scale-95 whitespace-nowrap ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {label || (
        <>
          <span className="sm:hidden">Contact</span>
          <span className="hidden sm:inline">Contact Me</span>
        </>
      )}
    </a>
  );
};
