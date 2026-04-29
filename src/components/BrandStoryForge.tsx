import { motion } from "motion/react";
import { BarChart3, Megaphone, Network, PenLine, Search } from "lucide-react";

const steps = [
  {
    title: "Insight & Context",
    text: "Understand institutional priorities, market dynamics, and stakeholder perspectives.",
    icon: Search,
  },
  {
    title: "Narrative Development",
    text: "Define positioning and build clear, consistent messaging.",
    icon: PenLine,
  },
  {
    title: "Systems & Alignment",
    text: "Ensure internal clarity, communication structure, and consistency.",
    icon: Network,
  },
  {
    title: "Activation & Engagement",
    text: "Deliver strategies, content, and engagement across key audiences.",
    icon: Megaphone,
  },
  {
    title: "Measurement & Refinement",
    text: "Track performance and continuously strengthen impact.",
    icon: BarChart3,
  },
];

const BrandStoryForge = () => (
  <section className="section-shell section-space">
    <div className="overflow-hidden rounded-[2rem] border border-[#3a2a1f] bg-[#1d1712] px-4 py-7 text-white shadow-[0_26px_80px_rgba(30,19,10,0.24)] sm:px-7 sm:py-9 lg:px-9">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#ffb25f] sm:text-xs"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Approach
        </motion.p>
        <motion.h2
          className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.7rem]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          Our Approach: BrandStory Forge™ Model
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          Our work is guided by a structured approach that transforms insight into clear narrative and measurable impact.
        </motion.p>
      </div>

      <div className="relative mt-8 grid gap-4 lg:grid-cols-5">
        <motion.div
          className="absolute left-[10%] right-[10%] top-8 hidden h-px origin-left bg-gradient-to-r from-[#f58220] via-[#ffb25f] to-[#f58220] lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.title}
              className="group relative rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#f58220]/60 hover:bg-white/[0.085] sm:p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f58220]/40 bg-[#f58220]/10 text-[#ffb25f] transition duration-500 group-hover:scale-105 group-hover:bg-[#f58220] group-hover:text-white group-hover:shadow-[0_0_28px_rgba(245,130,32,0.55)]">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#ffb25f]/80">
                0{index + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{step.text}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default BrandStoryForge;
