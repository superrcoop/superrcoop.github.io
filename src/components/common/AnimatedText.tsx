import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA]"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p ref={containerRef} className={className} style={style}>
      {characters.map((char, index) => {
        const start = index / total;
        const end = Math.min(start + 1 / total, 1);
        return (
          <AnimatedChar
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
