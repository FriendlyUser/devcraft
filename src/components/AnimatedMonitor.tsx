import { motion } from 'motion/react';

export default function HeroIllustration() {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      initial="initial"
      animate="animate"
    >
      {/* --- ISOMETRIC COMPUTER (Right Side, facing left) --- */}
      <motion.g transform="translate(300, 250)">
        {/* Base/Stand */}
        <path d="M-40 60 L0 80 L40 60 L0 40 Z" fill="#CBD5E1" />
        <path d="M-5 40 L-5 60 L5 60 L5 40 Z" fill="#94A3B8" />
        
        {/* Monitor Back */}
        <motion.path 
          d="M-80 -20 L0 20 L80 -20 L0 -60 Z" 
          fill="#475569"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        
        {/* Monitor Screen (Facing 45 deg bottom side) */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          {/* Bezel */}
          <path d="M-85 -15 L-5 25 L75 -15 L-5 -55 Z" fill="#1E293B" />
          {/* Screen Content */}
          <path d="M-78 -15 L-5 21 L70 -15 L-5 -50 Z" fill="#0F172A" />
          
          {/* Code lines on screen */}
          <motion.rect x="-50" y="-25" width="30" height="4" rx="1" fill="#6366F1" transform="skewY(25)" 
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} />
          <motion.rect x="-40" y="-15" width="40" height="4" rx="1" fill="#818CF8" transform="skewY(25)"
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
          <motion.rect x="-45" y="-5" width="20" height="4" rx="1" fill="#A5B4FC" transform="skewY(25)"
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
        </motion.g>
      </motion.g>

      
      {/* Connecting particles/data flow */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={i}
          r="3"
          fill="#6366F1"
          initial={{ x: 180, y: 280, opacity: 0 }}
          animate={{ 
            x: [180, 280], 
            y: [280, 230], 
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            delay: i * 0.4,
            ease: "linear"
          }}
        />
      ))}
    </motion.svg>
  );
}
