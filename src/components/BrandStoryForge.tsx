import { motion } from "motion/react";
import { BarChart3, Megaphone, PenTool, Search } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    title: "Insight & Context",
    icon: Search,
    text: "Understand institutional priorities, market dynamics, and stakeholder perspectives.",
  },
  {
    title: "Narrative Development",
    icon: PenTool,
    text: "Define positioning, build clear messaging, and align communication structure.",
  },
  {
    title: "Activation & Engagement",
    icon: Megaphone,
    text: "Deliver strategies, content, and engagement across key audiences.",
  },
  {
    title: "Measurement & Refinement",
    icon: BarChart3,
    text: "Track performance and continuously strengthen impact.",
  },
];

export default function BrandStoryForge() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section-shell relative overflow-hidden bg-[linear-gradient(135deg,#f15a29_0%,#ff7f32_48%,#ef5a24_100%)] py-10 text-white sm:py-12 lg:py-14 xl:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-white/18 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#ffb38e]/25 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[#f38c5b]/24 blur-3xl sm:h-60 sm:w-60" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[1.7rem] border border-white/25 bg-white/10 p-4 shadow-[0_24px_72px_rgba(138,40,10,0.2)] backdrop-blur-[14px] sm:p-5 lg:rounded-[2rem] lg:p-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_28%)]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 bottom-1 hidden text-[5.5rem] font-bold uppercase tracking-[-0.08em] text-white/10 xl:block"
          >
            Forge
          </div>
          <div className="absolute right-3 top-3 hidden h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/12 text-[9px] font-bold uppercase tracking-[0.18em] text-white sm:flex">
            TM
          </div>

          <div className="relative z-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-3 py-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-white">
                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
                Our Approach
              </span>
              <h2 className="mt-3 text-xl font-bold leading-[1.02] sm:text-[1.8rem] lg:text-[2.2rem]">
                The BrandStory Forge™ Model
              </h2>
            </div>

            <div className="lg:border-l lg:border-white/24 lg:pl-6">
              <p className="font-sans text-xs leading-relaxed text-white/88 sm:text-sm">
                Guided by our BrandStory Forge™ Model, we move from insight to narrative to activation with clarity and structure.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-6 sm:mt-8 lg:mt-10">
            <div className="absolute bottom-4 left-4 top-4 w-px bg-white/22 lg:hidden" />
            <motion.div
              className="absolute bottom-4 left-4 top-4 w-px origin-top bg-white shadow-[0_0_16px_rgba(255,255,255,0.85)] lg:hidden"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="absolute left-[11%] right-[11%] top-5 hidden h-px bg-white/22 lg:block" />
            <motion.div
              className="absolute left-[11%] right-[11%] top-5 hidden h-px origin-left bg-white shadow-[0_0_16px_rgba(255,255,255,0.85)] lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="grid gap-3 lg:grid-cols-4 lg:gap-3.5">
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
                    className="relative pl-12 lg:pl-0 lg:pt-12"
                  >
                    <motion.div
                      animate={isActive ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                      transition={
                        isActive
                          ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.35, ease: "easeOut" }
                      }
                      className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-[1rem] border border-white/55 bg-white shadow-[0_12px_28px_rgba(130,36,8,0.14)] lg:left-1/2 lg:top-0 lg:-translate-x-1/2 sm:h-11 sm:w-11"
                    >
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-[0.8rem] transition-all duration-500 sm:h-7 sm:w-7 ${
                          isActive
                            ? "bg-primary text-white shadow-[0_0_20px_rgba(241,90,41,0.35)]"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon size={14} strokeWidth={1.9} />
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -2, scale: 1.008 }}
                      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.85 }}
                      className={`relative overflow-hidden rounded-[1.2rem] p-3.5 pt-12 transition-[background-color,color,box-shadow,transform] duration-500 sm:p-4 sm:pt-14 ${
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
                        className={`font-sans text-[9px] font-bold uppercase tracking-[0.2em] ${
                          isActive ? "text-white/72" : "text-primary/85"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h3 className="mt-2 text-base font-bold sm:text-[1.15rem]">
                        {step.title}
                      </h3>
                      <p
                        className={`mt-2 font-sans text-[12px] leading-relaxed sm:text-[13px] ${
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
