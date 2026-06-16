import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, ShieldCheck, Target, Users } from "lucide-react";
import { whoWeAreImages } from "../lib/images";

const leadershipFocus = [
  "Strategic advisor",
  "Institutional positioning",
  "Stakeholder engagement",
  "Economic development",
  "Investment narratives",
  "Pan-African experience",
];

const WhoWeAre = () => {
  return (
    <div className="bg-prestige-white">
      <section className="relative page-hero-space section-shell bg-prestige-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={whoWeAreImages.hero}
            className="w-full h-full object-cover"
            alt="Impala Communication office background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-black/55 via-prestige-black/32 to-prestige-black/14" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-primary mb-4 block">
              Who We Are
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Who We Are
            </h1>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-white/72 mb-6 sm:mb-8 leading-relaxed max-w-3xl">
              Impala Communication is an African strategic communication consultancy working at the intersection of leadership, reputation, stakeholder engagement, and institutional growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/our-work" className="w-full sm:w-auto text-center bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-primary transition-all duration-300">
                Explore Our Work
              </Link>
              <Link to="/get-in-touch" className="w-full sm:w-auto text-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-prestige-black transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-space section-shell">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={whoWeAreImages.about}
                  alt="Impala Communication team at work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 -z-10 rounded-lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
                About Impala Communication
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black mb-4 sm:mb-5 leading-tight">
                Communicating value clearly and credibly.
              </h2>
              <div className="font-sans text-prestige-text space-y-4 sm:space-y-5 leading-relaxed text-sm sm:text-base">
                <p>
                  For over 15 years, we have partnered with governments, financial institutions, businesses, development organisations, and social impact initiatives across Africa and internationally.
                </p>
                <p>
                  We believe that organisations are often judged not only by what they achieve, but by how effectively those achievements are understood.
                </p>
                <p>
                  Our role is to help institutions communicate their value clearly, build confidence among stakeholders, and strengthen long-term reputation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14 section-shell bg-prestige-black text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">
              Our Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
              Communication Beyond Visibility
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="grid gap-2.5"
          >
            {[
              { icon: ShieldCheck, text: "Communication is not simply about awareness." },
              { icon: Users, text: "It is about creating understanding." },
              { icon: Globe, text: "It is about building trust." },
              { icon: Target, text: "It is about ensuring that achievements, ambitions, and contributions are recognised by the people who matter most." },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="rounded-[1.15rem] border border-white/10 bg-white/6 px-3.5 py-3.5 sm:px-4 sm:py-4 flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[1rem] border border-primary/40 bg-primary/10 text-primary shadow-[0_0_18px_rgba(241,90,41,0.25)]">
                    <Icon size={16} strokeWidth={1.9} />
                  </div>
                  <p className="font-sans text-sm leading-relaxed text-white/82 sm:text-base">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-space section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] bg-prestige-black text-white shadow-[0_30px_90px_rgba(10,10,10,0.22)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,90,41,0.34),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_32%)]" />
            <div className="relative z-10 grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="relative min-h-[300px] overflow-hidden bg-prestige-black sm:min-h-[380px] lg:min-h-full">
                <img
                  src={whoWeAreImages.meronCEO}
                  alt="Meron Feleke CEO"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center 55%" }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/14 bg-white/10 p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    Leadership
                  </p>
                  <p className="mt-1 text-xl font-bold leading-tight sm:text-2xl">
                    Meron Feleke, <span className="text-sm font-normal sm:text-base opacity-80">CEO and Co-Founder</span>
                  </p>
                </div>
              </div>

              <div className="px-5 py-7 sm:px-7 sm:py-9 lg:px-10 lg:py-12 xl:px-12">
                <span className="mb-3 block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                  Strategic Leadership
                </span>
                <h2 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                  Led by experience. Driven by purpose.
                </h2>
                <p className="mt-5 max-w-3xl font-sans text-sm leading-relaxed text-white/74 sm:text-base">
                  Meron Feleke is an impact strategist and narrative architect shaping Africa's communication landscape through human-centred, culturally intelligent strategies that inspire collaboration and investment.
                </p>
                <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-white/74 sm:text-base">
                  Her work focuses on institutional positioning, stakeholder engagement, economic development narratives, investment communication, and Pan-African partnerships.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {leadershipFocus.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.15rem] border border-white/10 bg-white/7 px-4 py-4"
                    >
                      <CheckCircle size={16} className="mb-2 text-primary" />
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-white/68">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-lg font-sans text-xs leading-relaxed text-white/58 sm:text-sm">
                    London | Addis Ababa | Kigali
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/meron-feleke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/14"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      LinkedIn
                    </a>
                    <Link
                      to="/get-in-touch"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-primary"
                    >
                      Work With Us
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
