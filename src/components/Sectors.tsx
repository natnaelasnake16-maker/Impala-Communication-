import { motion } from "motion/react";
import { Building2, CloudRain, Globe2, HeartPulse, Landmark, Scale, TrendingUp, Users } from "lucide-react";
import { ourWorkImages } from "../lib/images";
import FinalCallToAction from "./FinalCallToAction";

const sectors = [
  { title: "Financial Services", icon: Scale },
  { title: "Investment & Capital Markets", icon: TrendingUp },
  { title: "Government & Public Institutions", icon: Landmark },
  { title: "Development & Multilateral Organisations", icon: Globe2 },
  { title: "Health & Social Impact", icon: HeartPulse },
  { title: "Women's Economic Empowerment", icon: Users },
  { title: "Climate & Sustainability", icon: CloudRain },
  { title: "Trade & Industrial Development", icon: Building2 },
];

export default function Sectors() {
  return (
    <div className="bg-prestige-white">
      <section className="relative page-hero-space section-shell overflow-hidden bg-prestige-black text-white">
        <div className="absolute inset-0">
          <img
            src={ourWorkImages.heroMosaic[1]}
            alt="Sectors Impala Communication supports"
            className="h-full w-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-black via-prestige-black/72 to-prestige-black/22" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="mb-4 block font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
              Sectors
            </span>
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl xl:text-6xl">
              Sectors We Understand
            </h1>
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
              We support organisations whose work depends on trust, stakeholder confidence, and clear public understanding.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-space section-shell bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <span className="mb-3 block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              Sector Experience
            </span>
            <h2 className="text-2xl font-bold leading-tight text-prestige-black sm:text-3xl lg:text-4xl">
              Impala understands the sectors where reputation, confidence, and stakeholder alignment matter.
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <motion.article
                  key={sector.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.045, duration: 0.4 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group flex min-h-[180px] flex-col justify-between rounded-[1.25rem] border border-prestige-gray bg-prestige-cream p-5 shadow-sm transition-all duration-500 hover:border-primary/40 hover:bg-white hover:shadow-xl sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-primary/25 bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold leading-tight text-prestige-black sm:text-xl">
                    {sector.title}
                  </h3>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCallToAction />
    </div>
  );
}
