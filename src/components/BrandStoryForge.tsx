import { motion } from "motion/react";
import { BarChart3, Megaphone, PenTool, Search } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    title: "Discover",
    icon: Search,
    text: "Uncover deep audience insights, cultural context, and opportunity drivers that shape authentic communication.",
  },
  {
    title: "Design",
    icon: PenTool,
    text: "Craft authentic narratives rooted in culture and purpose.",
  },
  {
    title: "Deliver",
    icon: Megaphone,
    text: "Activate stories through media, events, and digital strategy.",
  },
  {
    title: "Deepen",
    icon: BarChart3,
    text: "Measure, refine, and sustain engagement.",
  },
];

export default function BrandStoryForge() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section-space section-shell bg-prestige-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6">
            The BrandStory Forge™ Model
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/72 leading-relaxed">
            At the heart of every project is our proprietary model — a system that transforms communication into measurable impact.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[12%] right-[12%] top-8 h-px bg-white/12" />
          <motion.div
            className="hidden md:block absolute left-[12%] right-[12%] top-8 h-px origin-left bg-primary shadow-[0_0_20px_rgba(241,90,41,0.7)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          <div className="md:hidden absolute left-5 top-4 bottom-4 w-px bg-white/12" />
          <motion.div
            className="md:hidden absolute left-5 top-4 bottom-4 w-px origin-top bg-primary shadow-[0_0_20px_rgba(241,90,41,0.7)]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          <div className="grid gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.12, duration: 0.55 }}
                  onViewportEnter={() => setActiveStep(index)}
                  className="relative pl-12 md:pl-0 md:pt-14"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    animate={isActive ? { scale: [1, 1.07, 1] } : { scale: 1 }}
                    transition={
                      isActive
                        ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.2 }
                    }
                    className={`absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 md:top-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary/14 text-primary shadow-[0_0_26px_rgba(241,90,41,0.45)]"
                        : "border-white/14 bg-white/6 text-white/90 hover:border-primary/70 hover:text-primary hover:shadow-[0_0_20px_rgba(241,90,41,0.25)]"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -6 }}
                    className={`rounded-[1.6rem] border p-5 sm:p-6 md:min-h-[240px] transition-all duration-300 ${
                      isActive
                        ? "border-primary/70 bg-white/10 shadow-[0_20px_55px_rgba(0,0,0,0.28)]"
                        : "border-white/10 bg-white/4 shadow-[0_16px_40px_rgba(0,0,0,0.24)]"
                    }`}
                  >
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-primary/90">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 text-lg sm:text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 font-sans text-sm sm:text-[15px] leading-relaxed text-white/72">
                      {step.text}
                    </p>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-8 sm:mt-10 lg:mt-12 rounded-[1.8rem] border border-white/10 bg-white/6 p-6 sm:p-8 lg:p-10"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-primary block mb-3">
            Why This Model Works
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Where culture meets strategy
          </h3>
          <p className="font-sans text-base sm:text-lg text-white/72 leading-relaxed max-w-4xl">
            We bridge insight, context, and communication to translate Africa’s transformation into narratives that attract investment and global engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
