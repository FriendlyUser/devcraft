import { motion } from 'motion/react';

export default function SvgPlaceholder({ className = '', text = 'SVG Animation Placeholder' }: { className?: string, text?: string }) {
  return (
    <div className={`flex items-center justify-center bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl ${className}`}>
      <span className="text-slate-400 font-mono text-xs text-center px-2">{text}</span>
    </div>
  );
}
