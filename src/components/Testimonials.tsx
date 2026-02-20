import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SvgPlaceholder from './SvgPlaceholder';
import BounceButton from './BounceButton';
import FancyHeader, { Token } from './FancyHeader';

const testimonials = [
  {
    id: 1,
    quote: "DevCraft completely transformed our legacy systems. Their architectural insights and execution speed were unparalleled. We've seen a 40% increase in performance.",
    author: "Sarah Jenkins",
    role: "CTO, TechFlow Inc.",
    svgText: "Company Logo SVG 1"
  },
  {
    id: 2,
    quote: "Working with this team felt like an extension of our own engineering department. They didn't just write code; they helped us refine our product strategy.",
    author: "Marcus Chen",
    role: "Founder, InnovateApp",
    svgText: "Company Logo SVG 2"
  },
  {
    id: 3,
    quote: "The cloud migration went flawlessly. They anticipated edge cases we hadn't even considered. Highly recommend for any complex infrastructure projects.",
    author: "Elena Rodriguez",
    role: "VP Engineering, CloudScale",
    svgText: "Company Logo SVG 3"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const testimonialsTokens: Token[] = ["Client Stories"];

  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <FancyHeader tokens={testimonialsTokens} as="h2" className="text-3xl md:text-5xl font-bold text-slate-900 mb-4" />
          <p className="text-lg text-slate-600">Don't just take our word for it.</p>
        </div>

        <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-3xl mx-auto bg-slate-50 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 cursor-grab active:cursor-grabbing"
            >
              <Quote className="w-12 h-12 text-indigo-200 mb-6" />
              <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0">
                  <SvgPlaceholder className="w-full h-full rounded-full" text="Avatar SVG" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm text-slate-500">{testimonials[currentIndex].role}</p>
                </div>
                <div className="ml-auto w-24 h-8 hidden md:block">
                  <SvgPlaceholder className="w-full h-full" text={testimonials[currentIndex].svgText} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-10">
            <BounceButton
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-indigo-600 transition-colors"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="w-6 h-6" />
            </BounceButton>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-10">
            <BounceButton
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-indigo-600 transition-colors"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="w-6 h-6" />
            </BounceButton>
          </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-indigo-600' : 'bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
