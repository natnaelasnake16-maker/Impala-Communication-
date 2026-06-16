import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BarChart3, CheckCircle, Compass, Flag, Globe, Handshake, Megaphone, MessageSquare, Radio, Users } from "lucide-react";
import { ourServicesImages } from "../lib/images";

const services = [
  {
    title: "Strategic Communication",
    slug: "strategic-communication",
    desc: "Communication strategies aligned with organisational priorities and stakeholder expectations.",
    image: ourServicesImages.serviceCards[0],
    icon: BarChart3,
    proofRefs: ["Strategy", "Priorities", "Expectations"],
  },
  {
    title: "Institutional Positioning",
    slug: "institutional-positioning",
    desc: "Defining who organisations are, what they stand for, and how they are understood.",
    image: ourServicesImages.serviceCards[1],
    icon: Flag,
    proofRefs: ["Identity", "Reputation", "Clarity"],
  },
  {
    title: "Stakeholder Engagement",
    slug: "stakeholder-engagement",
    desc: "Building trust and meaningful relationships with investors, government, partners, employees, communities, and customers.",
    image: ourServicesImages.serviceCards[2],
    icon: Handshake,
    proofRefs: ["Trust", "Relationships", "Alignment"],
  },
  {
    title: "Leadership Communications",
    slug: "leadership-communications",
    desc: "Strengthening leadership visibility, credibility, and thought leadership.",
    image: ourServicesImages.serviceCards[3],
    icon: Users,
    proofRefs: ["Visibility", "Credibility", "Leadership"],
  },
  {
    title: "Content & Storytelling",
    slug: "content-storytelling",
    desc: "Transforming complex ideas into compelling communication products.",
    image: ourServicesImages.serviceCards[4],
    icon: MessageSquare,
    proofRefs: ["Content", "Storytelling", "Clarity"],
  },
  {
    title: "Campaign Development",
    slug: "campaign-development",
    desc: "Creating initiatives that inform, influence, and inspire action.",
    image: ourServicesImages.serviceCards[5],
    icon: Megaphone,
    proofRefs: ["Campaigns", "Influence", "Action"],
  },
  {
    title: "Public Affairs & Visibility",
    slug: "public-affairs-visibility",
    desc: "Strengthening public understanding, confidence, and visibility around institutional priorities.",
    image: ourServicesImages.serviceCards[6],
    icon: Globe,
    proofRefs: ["Public Affairs", "Visibility", "Confidence"],
  },
  {
    title: "Executive Profiling",
    slug: "executive-profiling",
    desc: "Positioning leaders to communicate vision, credibility, and influence with the audiences that matter.",
    image: ourServicesImages.serviceCards[7],
    icon: Compass,
    proofRefs: ["Profiles", "Vision", "Influence"],
  },
  {
    title: "Media & Event Strategy",
    slug: "media-event-strategy",
    desc: "Shaping media and event communication so institutional messages are clear, credible, and audience-ready.",
    image: ourServicesImages.serviceCards[8],
    icon: Radio,
    proofRefs: ["Media", "Events", "Messaging"],
  },
];

const engagementMoments = [
  "Communicate transformation",
  "Strengthen reputation",
  "Engage stakeholders",
  "Position leadership",
  "Launch new initiatives",
  "Manage change",
  "Support investment attraction",
  "Strengthen public confidence",
];

const OurServices = () => {
  return (
    <div className="bg-prestige-white">
      <section className="relative page-hero-space section-shell overflow-hidden bg-prestige-black text-white">
        <div className="absolute inset-0">
          <img
            src={ourServicesImages.hero}
            alt="Our services background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-black/72 via-prestige-black/48 to-prestige-black/20" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-primary mb-4 block">
                What We Do
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                What We Do
              </h1>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                We support organisations in communicating their priorities, strengthening stakeholder relationships, and ensuring their achievements are understood, recognised, and valued.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#services-list" className="w-full sm:w-auto text-center bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-primary transition-all duration-300 shadow-xl">
                  Explore Services
                </a>
                <Link to="/get-in-touch" className="w-full sm:w-auto text-center border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-prestige-black transition-all duration-300">
                  Start a Conversation
                </Link>
              </div>
            </motion.div>

            <div className="relative hidden h-[420px] lg:block">
              {[
                { icon: <BarChart3 size={24} />, label: "Strategic Communication", top: "10%", left: "20%", delay: 0 },
                { icon: <Flag size={24} />, label: "Institutional Positioning", top: "40%", left: "55%", delay: 0.2 },
                { icon: <Handshake size={24} />, label: "Stakeholder Engagement", top: "20%", left: "62%", delay: 0.4 },
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
              Services
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
                  id={service.slug}
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
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
              When Clients Engage Impala
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black">
              We are typically engaged when organisations need to:
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {engagementMoments.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.045, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-[1.15rem] border border-prestige-gray bg-prestige-cream px-4 py-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-md"
              >
                <CheckCircle size={17} className="mb-3 text-primary" />
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-prestige-black">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
