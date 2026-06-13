import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BarChart3, Compass, Megaphone, PenTool, Search } from "lucide-react";
import { whoWeAreImages } from "../lib/images";
import BrandStoryForge from "./BrandStoryForge";
import FinalCallToAction from "./FinalCallToAction";

const processSteps = [
  { title: "Discovery & Insight", icon: Search },
  { title: "Positioning & Strategy", icon: Compass },
  { title: "Narrative Development", icon: PenTool },
  { title: "Activation & Engagement", icon: Megaphone },
  { title: "Measurement & Refinement", icon: BarChart3 },
];

export default function Approach() {
  return (
    <div className="bg-prestige-white">
      <section className="relative page-hero-space section-shell overflow-hidden bg-prestige-black text-white">
        <div className="absolute inset-0">
          <img
            src={whoWeAreImages.visualStrip[0]}
            alt="Impala Communication approach"
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-black/72 via-prestige-black/48 to-prestige-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="mb-4 block font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
              Our Approach
            </span>
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl xl:text-6xl">
              Our Approach
            </h1>
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
              A structured process that connects insight, strategy, communication, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      <BrandStoryForge />

      <section className="section-space section-shell bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <span className="mb-3 block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                BrandStory Forge™ Model
              </span>
              <h2 className="text-2xl font-bold leading-tight text-prestige-black sm:text-3xl lg:text-4xl">
                Communication aligned to priorities, expectations, and outcomes.
              </h2>
              <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-prestige-text sm:text-base">
                The BrandStory Forge™ Model ensures communication is aligned to organisational priorities, stakeholder expectations, and measurable outcomes.
              </p>
              <Link
                to="/get-in-touch"
                className="mt-6 inline-flex items-center justify-center bg-primary px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-prestige-black sm:text-sm"
              >
                Start a Conversation
              </Link>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group rounded-[1.15rem] border border-prestige-gray bg-prestige-cream px-4 py-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[1rem] border border-primary/25 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className="mb-2 block font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-primary">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-bold leading-tight text-prestige-black sm:text-xl">
                      {step.title}
                    </h3>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FinalCallToAction />
    </div>
  );
}
