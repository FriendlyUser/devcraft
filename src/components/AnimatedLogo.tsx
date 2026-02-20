import { motion } from 'motion/react';

interface AnimatedLogoProps {
  isScrolled?: boolean;
  className?: string;
}

export default function AnimatedLogo({ isScrolled = false, className = "text-indigo-600" }: AnimatedLogoProps) {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ 
        rotate: isScrolled ? 90 : 0,
        scale: isScrolled ? 0.9 : 1
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.rect
        x="4" y="4" width="10" height="10" rx="2"
        stroke="currentColor" strokeWidth="2.5"
        animate={{
          x: isScrolled ? 14 : 0,
          y: isScrolled ? 14 : 0,
          rx: isScrolled ? 5 : 2
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
      <motion.rect
        x="18" y="4" width="10" height="10" rx="2"
        stroke="currentColor" strokeWidth="2.5"
        animate={{
          x: isScrolled ? -14 : 0,
          y: isScrolled ? 14 : 0,
          rx: isScrolled ? 5 : 2
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
      <motion.rect
        x="4" y="18" width="10" height="10" rx="2"
        stroke="currentColor" strokeWidth="2.5"
        animate={{
          x: isScrolled ? 14 : 0,
          y: isScrolled ? -14 : 0,
          rx: isScrolled ? 5 : 2
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
      <motion.rect
        x="18" y="18" width="10" height="10" rx="2"
        stroke="currentColor" strokeWidth="2.5"
        animate={{
          x: isScrolled ? -14 : 0,
          y: isScrolled ? -14 : 0,
          rx: isScrolled ? 5 : 2
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
    </motion.svg>
  );
}
