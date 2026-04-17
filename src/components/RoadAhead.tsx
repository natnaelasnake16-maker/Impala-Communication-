import { motion } from "motion/react";
import { Building2, Globe2, RadioTower, UsersRound } from "lucide-react";

const initiatives = [
  {
    title: "Impala Empowerment Hub",
    description:
      "A creative platform nurturing new voices, collaboration, and capacity across Africa and its diaspora.",
    icon: UsersRound,
    gradient:
      "linear-gradient(135deg, rgba(241,90,41,0.95), rgba(174,57,23,0.92), rgba(67,24,14,0.9))",
  },
  {
    title: "Africa Agriculture Investment Summit 2026 – London",
    description:
      "Serving as strategic curator and communication partner — shaping investment and sustainability narratives.",
    icon: Globe2,
    gradient:
      "linear-gradient(135deg, rgba(13,95,120,0.92), rgba(20,126,149,0.9), rgba(44,167,152,0.88))",
  },
  {
    title: "Madica Content Alliance",
    description:
      "A tech-driven storytelling initiative amplifying Africa’s startup and innovation ecosystem.",
    icon: RadioTower,
    gradient:
      "linear-gradient(135deg, rgba(44,50,92,0.95), rgba(66,77,146,0.9), rgba(126,90,232,0.86))",
  },
  {
    title: "UN & Institutional Partnerships",
    description:
      "Expanding Africa’s visibility in global systems and enabling access to funding and partnerships.",
    icon: Building2,
    gradient:
      "linear-gradient(135deg, rgba(32,42,58,0.95), rgba(54,87,109,0.92), rgba(89,151,145,0.88))",
  },
];

export default function RoadAhead() {
  return (
    <section className="section-space section-shell bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-8 sm:mb-10 lg:mb-12">
          <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3 block">
            The Road Ahead
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black mb-4 sm:mb-5">
            Building the Bridge Between Africa and the World
          </h2>
          <p className="font-sans text-sm sm:text-base text-prestige-text leading-relaxed">
            Impala Communication is evolving beyond a communications agency — becoming a platform that connects Africa’s opportunities with global investors, innovators, and change-makers.
          </p>
        </div>

        <div className="overflow-hidden border border-prestige-gray/20 bg-prestige-gray/20 shadow-[0_18px_44px_rgba(20,20,20,0.1)]">
          <div className="grid gap-px sm:grid-cols-2">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;

            return (
              <motion.article
                key={initiative.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{ scale: 1.01, rotate: index % 2 === 0 ? -0.5 : 0.5 }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{
                  backgroundPosition: {
                    duration: 10 + index,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: { delay: index * 0.08, duration: 0.55 },
                  y: { delay: index * 0.08, duration: 0.55 },
                  scale: { duration: 0.25 },
                  rotate: { duration: 0.25 },
                }}
                style={{
                  background: initiative.gradient,
                  backgroundSize: "200% 200%",
                }}
                className="relative min-h-[220px] overflow-hidden p-4 text-white sm:min-h-[240px] sm:p-5 lg:min-h-[260px] lg:p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_36%)]" />
                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] border border-white/20 bg-white/10 shadow-[0_0_22px_rgba(255,255,255,0.18)]"
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </motion.div>

                  <h3 className="max-w-md text-lg sm:text-xl font-bold leading-tight">
                    {initiative.title}
                  </h3>
                  <p className="mt-3 max-w-xl font-sans text-xs sm:text-sm leading-relaxed text-white/82">
                    {initiative.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
