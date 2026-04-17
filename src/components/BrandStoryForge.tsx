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
    <section className="section-shell relative overflow-hidden bg-[linear-gradient(135deg,#f15a29_0%,#ff7f32_48%,#ef5a24_100%)] py-12 text-white sm:py-14 lg:py-16 xl:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-white/18 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#ffb38e]/25 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[#f38c5b]/24 blur-3xl sm:h-60 sm:w-60" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-white/10 p-4 shadow-[0_24px_72px_rgba(138,40,10,0.2)] backdrop-blur-[14px] sm:p-6 lg:rounded-[2.4rem] lg:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_28%)]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 bottom-1 hidden text-[5.5rem] font-bold uppercase tracking-[-0.08em] text-white/10 xl:block"
          >
            Forge
          </div>
          <div className="absolute right-4 top-4 hidden h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/12 text-[10px] font-bold uppercase tracking-[0.22em] text-white sm:flex">
            TM
          </div>

          <div className="relative z-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-3.5 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-white">
                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
                Our Approach
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-[1.02] sm:text-3xl lg:text-[2.6rem]">
                The BrandStory Forge™ Model
              </h2>
            </div>

            <div className="lg:border-l lg:border-white/24 lg:pl-8">
              <p className="font-sans text-sm leading-relaxed text-white/88 sm:text-base">
                At the heart of every project is our proprietary model — a system that transforms communication into measurable impact.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-8 sm:mt-10 lg:mt-12">
            <div className="absolute bottom-5 left-5 top-5 w-px bg-white/22 lg:hidden" />
            <motion.div
              className="absolute bottom-5 left-5 top-5 w-px origin-top bg-white shadow-[0_0_16px_rgba(255,255,255,0.85)] lg:hidden"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="absolute left-[11%] right-[11%] top-6 hidden h-px bg-white/22 lg:block" />
            <motion.div
              className="absolute left-[11%] right-[11%] top-6 hidden h-px origin-left bg-white shadow-[0_0_16px_rgba(255,255,255,0.85)] lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="grid gap-3.5 lg:grid-cols-4 lg:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;

                return (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onViewportEnter={() => setActiveStep(index)}
                    onHoverStart={() => setActiveStep(index)}
                    className="relative pl-14 lg:pl-0 lg:pt-14"
                  >
                    <motion.div
                      animate={isActive ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                      transition={
                        isActive
                          ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.35, ease: "easeOut" }
                      }
                      className="absolute left-0 top-4 flex h-11 w-11 items-center justify-center rounded-[1.1rem] border border-white/55 bg-white shadow-[0_12px_28px_rgba(130,36,8,0.14)] lg:left-1/2 lg:top-0 lg:-translate-x-1/2 sm:h-12 sm:w-12"
                    >
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-[0.9rem] transition-all duration-500 sm:h-8 sm:w-8 ${
                          isActive
                            ? "bg-primary text-white shadow-[0_0_20px_rgba(241,90,41,0.35)]"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon size={16} strokeWidth={1.9} />
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.85 }}
                      className={`relative overflow-hidden rounded-[1.45rem] p-4 pt-14 transition-[background-color,color,box-shadow,transform] duration-500 sm:p-5 sm:pt-16 ${
                        isActive
                          ? "bg-[#ff6f30] text-white shadow-[0_18px_38px_rgba(140,36,8,0.2)]"
                          : "bg-white text-prestige-black shadow-[0_14px_32px_rgba(140,36,8,0.12)]"
                      }`}
                    >
                      <div
                        className={`absolute inset-x-0 top-0 h-1.5 ${
                          isActive
                            ? "bg-white/90"
                            : "bg-[linear-gradient(90deg,#f15a29_0%,#ff8a47_100%)]"
                        }`}
                      />
                      <span
                        className={`font-sans text-[10px] font-bold uppercase tracking-[0.28em] ${
                          isActive ? "text-white/72" : "text-primary/85"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h3 className="mt-2.5 text-lg font-bold sm:text-[1.35rem]">
                        {step.title}
                      </h3>
                      <p
                        className={`mt-2.5 font-sans text-[13px] leading-relaxed sm:text-sm ${
                          isActive ? "text-white/82" : "text-prestige-text"
                        }`}
                      >
                        {step.text}
                      </p>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
