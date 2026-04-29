import { motion } from "motion/react";
import { Compass, Layers, Sparkles, UserRound } from "lucide-react";
import { whoWeAreImages } from "../lib/images";

const sections = [
  {
    title: "Our Position",
    text: "Our work sits at the intersection of context, strategy, and influence—bridging deep local insight with global standards of communication and delivery.",
    icon: Compass,
  },
  {
    title: "Our Perspective",
    text: "Africa’s growth story is complex and evolving. We translate this complexity into clear, structured narratives that connect with stakeholders across markets.",
    icon: Sparkles,
  },
  {
    title: "How We Work",
    text: "Our approach combines insight, narrative development, and strategic execution—ensuring communication is aligned, consistent, and impactful.",
    support: "This is guided by our BrandStory Forge™ Model, a structured framework that connects strategy to delivery.",
    icon: Layers,
  },
];

const WhoWeAre = () => (
  <div className="bg-[#fffaf4] text-[#24150f]">
    <section className="page-hero-space section-shell">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f58220] sm:text-xs">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-[#24150f] sm:text-5xl lg:text-6xl">
            Who We Are
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6b5542] sm:text-lg">
            Impala Communication is a strategic communication and narrative advisory firm working across Africa and internationally. We support institutions, governments, and businesses to define how they are positioned, understood, and engaged.
          </p>
        </motion.div>
        <motion.div
          className="relative min-h-[260px] overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(61,36,15,0.16)] sm:min-h-[340px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        >
          <img
            src={whoWeAreImages.hero}
            alt="Impala Communication leadership and institutional storytelling"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24150f]/45 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>

    <section className="section-shell section-space pt-0">
      <div className="grid gap-4 lg:grid-cols-3">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.article
              key={section.title}
              className="rounded-[1.6rem] border border-[#efd8be] bg-white p-5 shadow-[0_16px_50px_rgba(61,36,15,0.08)] sm:p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1e5] text-[#f58220]">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="font-display text-2xl font-semibold text-[#24150f]">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6b5542] sm:text-base">
                {section.text}
              </p>
              {section.support && (
                <p className="mt-4 rounded-2xl bg-[#fff4e9] px-4 py-3 text-sm font-medium leading-6 text-[#7a4720]">
                  {section.support}
                </p>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>

    <section className="section-shell section-space pt-0">
      <motion.div
        className="grid overflow-hidden rounded-[2rem] border border-[#efd8be] bg-white shadow-[0_20px_65px_rgba(61,36,15,0.09)] lg:grid-cols-[0.8fr_1fr]"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="relative min-h-[240px] lg:min-h-full">
          <img
            src={whoWeAreImages.about}
            alt="Leadership at Impala Communication"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="p-5 sm:p-7 lg:p-9">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#24150f] text-[#ffb25f]">
            <UserRound className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#f58220] sm:text-xs">
            Leadership
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#24150f] sm:text-4xl">
            Leadership
          </h2>
          <p className="mt-4 text-base leading-8 text-[#5f4a39]">
            Meron Feleke is an impact-driven communications strategist with over a decade of experience working across Africa and internationally. She has led high-level engagements with governments, multilateral institutions, and private sector leaders—shaping narratives that influence investment, policy, and public understanding.
          </p>
        </div>
      </motion.div>
    </section>
  </div>
);

export default WhoWeAre;
