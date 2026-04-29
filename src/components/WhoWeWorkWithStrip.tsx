import { motion } from "motion/react";
import { Building2, Globe2, Landmark, TrendingUp } from "lucide-react";

const audiences = [
  { title: "Governments & Public Institutions", icon: Landmark },
  { title: "Development & Multilateral Organisations", icon: Globe2 },
  { title: "Financial Institutions & Investors", icon: TrendingUp },
  { title: "Private Sector & Growth Enterprises", icon: Building2 },
];

const WhoWeWorkWithStrip = () => (
  <section className="section-shell section-space">
    <div className="mb-7 max-w-2xl">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#f58220] sm:text-xs">
        Who We Work With
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-[#24150f] sm:text-4xl">
        Who We Work With
      </h2>
    </div>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {audiences.map((audience, index) => {
        const Icon = audience.icon;
        return (
          <motion.div
            key={audience.title}
            className="group rounded-[1.4rem] border border-[#efd8be] bg-white/88 p-4 shadow-[0_16px_45px_rgba(49,28,12,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#f58220]/50 hover:shadow-[0_20px_55px_rgba(245,130,32,0.16)] sm:p-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fff3e7] text-[#f58220] transition duration-300 group-hover:scale-105 group-hover:bg-[#f58220] group-hover:text-white">
              <Icon className="h-5 w-5" strokeWidth={1.7} />
            </div>
            <h3 className="font-display text-lg font-semibold leading-tight text-[#24150f]">
              {audience.title}
            </h3>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default WhoWeWorkWithStrip;
