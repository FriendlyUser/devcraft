import { motion } from 'motion/react';
import { Zap, Shield, Rocket, Clock } from 'lucide-react';
import FancyHeader, { Token } from './FancyHeader';
import BounceButton from './BounceButton';
import Websites from '../icons/websites.svg?react';

export default function Process() {
  const processTokens: Token[] = ["Engineered for Speed"];
  
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Lightning Fast Performance",
      description: "We optimize every byte, ensuring sub-second load times and perfect Core Web Vitals scores."
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-500" />,
      title: "Rapid Development",
      description: "Our modern CI/CD pipelines and component-driven approach cut development time by 40%."
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      title: "Resilient Architecture",
      description: "Built with type-safety and automated testing to ensure your site stays up and bug-free."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Websites 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">99/100</div>
                  <div className="text-sm text-slate-500">Lighthouse Score</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <FancyHeader tokens={processTokens} as="h2" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6" />
              <p className="text-lg text-slate-600 leading-relaxed">
                We've spent years refining our process to eliminate friction. By combining cutting-edge tools with a disciplined engineering culture, we deliver premium websites at startup speed.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <BounceButton className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
                Learn About Our Process
              </BounceButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

