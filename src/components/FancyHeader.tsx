import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export type Token = string | { text: string; className: string };

interface FancyHeaderProps {
  tokens: Token[];
  className?: string;
  as?: any;
}

export default function FancyHeader({ tokens, className = '', as: Tag = 'h2' }: FancyHeaderProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll('.char');
    
    // Reset initial state in case of re-renders
    gsap.set(chars, { opacity: 0, y: 20, rotateX: -90 });
    
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      stagger: 0.03,
      duration: 0.6,
      ease: "back.out(1.5)",
      delay: 0.1
    });
  }, [tokens]);

  return (
    <Tag className={className} ref={containerRef}>
      {tokens.map((token, i) => {
        if (typeof token === 'string') {
          return token.split('').map((char, j) => (
            <span key={`${i}-${j}`} className="char inline-block whitespace-pre">{char}</span>
          ));
        } else {
          return token.text.split('').map((char, j) => (
            <span key={`${i}-${j}`} className={`char inline-block whitespace-pre ${token.className}`}>{char}</span>
          ));
        }
      })}
    </Tag>
  );
}
