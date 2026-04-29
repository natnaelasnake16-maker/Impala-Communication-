import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Compass, Flag, Radio } from "lucide-react";
import { ourServicesImages } from "../lib/images";
import BrandStoryForge from "./BrandStoryForge";

const services = [
  {
    title: "Narrative Strategy",
    desc: "Define your positioning, develop clear messaging frameworks, and map stakeholders to strengthen alignment and influence.",
    image: ourServicesImages.communityCollage[0],
    icon: Compass,
    proofRefs: ["Positioning", "Messaging", "Stakeholders"],
  },
  {
    title: "Strategic Communication",
    desc: "Design and execute communication strategies that engage key stakeholders and audiences, including investors, policymakers, and communities.",
    image: ourServicesImages.communityCollage[1],
    icon: BarChart3,
    proofRefs: ["Strategy", "Engagement", "Influence"],
  },
  {
    title: "Content & Campaigns",
    desc: "Create high-impact storytelling, multimedia content, and campaigns that translate complex ideas into compelling narratives.",
    image: ourServicesImages.communityCollage[2],
    icon: Radio,
    proofRefs: ["Storytelling", "Campaigns", "Content"],
  },
  {
    title: "Institutional Positioning",
    desc: "Support organisations in positioning themselves within Africa’s evolving economic and investment landscape.",
    image: ourServicesImages.communityCollage[3],
    icon: Flag,
    proofRefs: ["Markets", "Credibility", "Leadership"],
  },
];

const OurServices = () => {
  return (
    <div className="bg-prestige-white">
      <section className="relative page-hero-space section-shell overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-primary mb-4 block">
                Our Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prestige-black mb-4 sm:mb-6 leading-tight">
                What We Do
              </h1>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-prestige-text mb-6 sm:mb-8 leading-relaxed max-w-xl">
                We provide strategic communication and narrative advisory to help institutions define positioning, align messaging, and engage key stakeholders and audiences effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#services-list" className="w-full sm:w-auto text-center bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-prestige-black transition-all duration-300 shadow-xl">
                  Explore Services
                </a>
                <Link to="/get-in-touch" className="w-full sm:w-auto text-center border-2 border-prestige-black text-prestige-black px-6 sm:px-8 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-prestige-black hover:text-white transition-all duration-300">
                  Start a Conversation
                </Link>
              </div>
            </motion.div>

            <div className="relative hidden h-[420px] lg:block">
              {[
                { icon: <Compass size={24} />, label: "Insight & Context", top: "10%", left: "20%", delay: 0 },
                { icon: <BarChart3 size={24} />, label: "Narrative", top: "40%", left: "60%", delay: 0.2 },
                { icon: <Radio size={24} />, label: "Systems", top: "70%", left: "15%", delay: 0.4 },
                { icon: <Flag size={24} />, label: "Activation", top: "20%", left: "70%", delay: 0.6 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: item.delay },
                    scale: { duration: 0.5, delay: item.delay },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                  }}
                  className="absolute bg-white p-4 shadow-2xl rounded-[1rem] border border-prestige-gray flex items-center gap-3 group hover:border-primary transition-colors"
                  style={{ top: item.top, left: item.left }}
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-prestige-black">
                    {item.label}
                  </span>
                </motion.div>
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="section-space section-shell bg-prestige-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black">
              Services
            </h2>
          </div>

          <div className="space-y-5 sm:space-y-6 lg:space-y-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 === 1;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ delay: index * 0.06, duration: 0.55 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_24px_70px_rgba(40,24,12,0.09)] backdrop-blur-xl transition-all duration-500 hover:border-primary/45 hover:bg-white/86 hover:shadow-[0_30px_90px_rgba(241,90,41,0.16)] sm:p-4"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,90,41,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.8),transparent_34%)] opacity-80" />
                  <div className={`relative z-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch ${isReversed ? "lg:grid-cols-[1.22fr_0.78fr]" : ""}`}>
                    <div className={`relative min-h-[220px] overflow-hidden rounded-[1.55rem] bg-prestige-black shadow-xl sm:min-h-[260px] lg:min-h-full ${isReversed ? "lg:order-2" : ""}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/68 via-prestige-black/16 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-[1.2rem] border border-white/18 bg-white/12 px-4 py-3 text-white backdrop-blur-md">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white/76">
                          0{index + 1}
                        </span>
                        <Icon size={30} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-[1.55rem] border border-white/70 bg-white/72 px-5 py-6 shadow-inner shadow-white/50 sm:px-7 sm:py-8 lg:px-9">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-primary/25 bg-primary/10 text-primary shadow-[0_18px_40px_rgba(241,90,41,0.14)] transition-all duration-500 group-hover:scale-105 group-hover:bg-primary group-hover:text-white sm:h-20 sm:w-20">
                        <Icon size={34} strokeWidth={1.45} />
                      </div>
                      <h3 className="max-w-3xl text-2xl font-bold leading-tight text-prestige-black sm:text-3xl lg:text-[2.35rem]">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-prestige-text sm:text-base">
                        {service.desc}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2.5">
                        {service.proofRefs.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-primary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="mt-7 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        Service Area
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <BrandStoryForge />
    </div>
  );
};

export default OurServices;
