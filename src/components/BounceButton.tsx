import React, { useRef } from 'react';
import gsap from 'gsap';

interface BounceButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BounceButton({ children, className = '', ...props }: BounceButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: -4,
        scale: 1.05,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)",
      });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)",
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
