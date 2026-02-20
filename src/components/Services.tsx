import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FancyHeader, { Token } from './FancyHeader';
import SkillsIcon from '../icons/skills.svg?react';
import roadmapSvg from '../icons/roadmap.svg'; // Path to your SVG file

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const servicesTokens: Token[] = ["Our Expertise"];

  return (
    <section id="services" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FancyHeader tokens={servicesTokens} as="h2" className="text-3xl md:text-5xl font-bold text-slate-900 mb-4" />
          <p className="text-lg text-slate-600">Comprehensive software engineering services tailored to your unique business challenges.</p>
        </div>

       {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Column 1: Skills/Icons */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center md:text-left">Technical Proficiency</h3>
            <div className="w-full">
              <SkillsIcon className="w-full h-auto drop-shadow-sm pointer-events-none" />
            </div>
          </div>

          {/* Column 2: Roadmap Image */}
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Development Roadmap</h3>
            <img 
              src={roadmapSvg} 
              alt="Project Roadmap Timeline" 
              className="w-full h-auto max-h-[450px] object-contain rounded-2xl shadow-xl border border-slate-200/50"
            />
          </div>

        </div>
      </div>
    </section>
  );
}