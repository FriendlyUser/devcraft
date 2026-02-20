import { motion } from 'motion/react';
import { Users, Cpu, Sparkles, Heart } from 'lucide-react';
import FancyHeader, { Token } from './FancyHeader';
import BounceButton from './BounceButton';
// Assuming you have another SVG for this section, like a software dev or collaboration graphic
import SoftwareDev from '../icons/bring_to_life.svg?react'; 

export default function AgencyApproach() {
  const agencyTokens: Token[] = ["Empowering Your Vision"];
  
  const features = [
    {
      icon: <Users className="w-5 h-5 text-rose-500" />,
      title: "Customer-First Collaboration",
      description: "Your goals are our blueprint. We work as an extension of your team, ensuring transparency, active communication, and alignment at every step."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: "Future-Proof Engineering",
      description: "We don't just build for today. Our scalable architectures and modern tech stacks ensure your software adapts and grows seamlessly with your business."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      title: "Bringing Ideas to Life",
      description: "From napkin sketches to production-ready platforms, we transform your complex problems into elegant, user-friendly digital experiences."
    }
  ];

  return (
    // Changed background to bg-white to perfectly alternate with the bg-slate-50 of the previous section
    <section className="py-24 px-6 bg-white overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column (Left on Desktop, Bottom on Mobile) */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <FancyHeader tokens={agencyTokens} as="h2" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6" />
              <p className="text-lg text-slate-600 leading-relaxed">
                As your dedicated software development partners, we bridge the gap between imagination and execution. We build robust, custom software designed to solve real problems and delight your users.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <BounceButton className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
                Let's Build Together
              </BounceButton>
            </div>
          </div>

          {/* Image Column (Right on Desktop, Top on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Changed to slide in from the right
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <SoftwareDev 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-rose-600/10 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block" // Moved card to the left side
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}