import { motion } from "motion/react";
import { BarChart3, Handshake, Scale, TrendingUp } from "lucide-react";

export default function WhoWeWorkWithStrip() {
  const audienceGroups = [
    {
      label: "Governments & Public Institutions",
      icon: <BarChart3 size={22} />,
    },
    {
      label: "Development & Multilateral Organisations",
      icon: <TrendingUp size={22} />,
    },
    {
      label: "Financial Institutions & Investors",
      icon: <Scale size={22} />,
    },
    {
      label: "Private Sector & Growth Enterprises",
      icon: <Handshake size={22} />,
    },
  ];

  return (
    <section className="bg-white px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[1.6rem] border border-primary/20 bg-[linear-gradient(135deg,#b9471f_0%,#ff8d52_44%,#f15a29_100%)] px-4 py-6 shadow-[0_22px_56px_rgba(241,90,41,0.2)] sm:px-6 sm:py-8 lg:px-8 lg:py-9"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.36),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(15,15,15,0.22),transparent_36%)]" />
          <div className="absolute inset-y-5 right-6 hidden w-40 rounded-full bg-white/12 blur-3xl lg:block" />

          <div className="relative z-10">
            <div className="mb-5 max-w-3xl">
              <span className="mb-2 block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-white/78">
                Who We Work With
              </span>
              <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-[2rem]">
                We partner with the institutions, investors, and enterprises shaping Africa’s next chapter.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {audienceGroups.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex min-h-[104px] flex-col justify-between rounded-[1.1rem] border border-white/18 bg-white/12 px-3.5 py-3.5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/16 hover:shadow-[0_16px_28px_rgba(0,0,0,0.12)] sm:min-h-[116px] sm:px-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-[1rem] border border-white/22 bg-white/14 text-white shadow-[0_0_18px_rgba(255,255,255,0.08)] sm:h-10 sm:w-10">
                    {item.icon}
                  </div>
                  <p className="font-sans text-xs sm:text-sm font-semibold leading-snug text-white/92">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
