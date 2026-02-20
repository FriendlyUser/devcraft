import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SvgPlaceholder from './SvgPlaceholder';
import BounceButton from './BounceButton';
import FancyHeader, { Token } from './FancyHeader';
import LifeIcon from '../icons/flowers.svg?react';
import Websites from '../icons/websites.svg?react'
import RobotIcon from '../icons/robot.svg?react'
import AnimatedMonitor from './AnimatedMonitor'
export default function Hero() {
  const heroTokens: Token[] = [
    "We build software that ",
    { text: "scales", className: "text-indigo-600" },
    " your business."
  ];

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <FancyHeader tokens={heroTokens} as="h1" className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6" />
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            Expert software development consultancy specializing in modern web, mobile, and cloud architectures. We turn complex problems into elegant solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <BounceButton className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2">
              Let's Talk <ArrowRight className="w-4 h-4" />
            </BounceButton>
            <BounceButton className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-medium rounded-full hover:bg-slate-50 transition-colors">
              View Our Work
            </BounceButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Main Hero SVG Placeholder */}
          <LifeIcon className="w-full aspect-square md:aspect-[4/3]" text="Hero Illustration SVG (e.g., isometric tech scene)" />
          
          {/* Decorative floating elements placeholders */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 w-24 h-24"
          >
             <RobotIcon className="w-full h-full rounded-full" text="Robot Head 1" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-8 w-24 h-24"
          >
             <AnimatedMonitor className="w-full h-full rounded-2xl" text="Float SVG 2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
