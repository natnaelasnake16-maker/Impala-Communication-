import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  PenTool, 
  Film, 
  Globe, 
  Eye, 
  Handshake, 
  Network, 
  BarChart3, 
  Flame, 
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Heart,
  Users,
  ShieldCheck,
  Zap,
  Target,
  BookOpen,
  Activity,
  UserCheck,
  Leaf,
  Smartphone
} from "lucide-react";
import { whoWeAreImages } from "../lib/images";
import FinalCallToAction from "./FinalCallToAction";
import RoadAhead from "./RoadAhead";
import SDGSection from "./SDGSection";
import WhoWeWorkWithStrip from "./WhoWeWorkWithStrip";

const WhoWeAre = () => {
  const values = [
    {
      title: "Context",
      icon: <Eye size={32} />,
      desc: "We ground communication in local insight, institutional priorities, and the realities shaping each audience."
    },
    {
      title: "Strategy",
      icon: <Handshake size={32} />,
      desc: "We define positioning, messaging, and stakeholder priorities before communication moves into delivery."
    },
    {
      title: "Influence",
      icon: <Network size={32} />,
      desc: "We help institutions communicate in ways that build trust, credibility, and relevance across markets."
    },
    {
      title: "Alignment",
      icon: <BarChart3 size={32} />,
      desc: "We create consistency across leadership, teams, partners, and public-facing communication."
    },
    {
      title: "Delivery",
      icon: <Flame size={32} />,
      desc: "We turn strategy into content, campaigns, and engagement that can be executed with confidence."
    }
  ];

  const initiatives = [
    { title: "Financial sector transformation", icon: <Activity size={18} /> },
    { title: "Banking and Islamic finance positioning", icon: <ShieldCheck size={18} /> },
    { title: "Capital market narrative development", icon: <BookOpen size={18} /> },
    { title: "Institutional profiling and executive visibility", icon: <Users size={18} /> },
    { title: "Industrial and sector positioning", icon: <Target size={18} /> },
    { title: "Global value chain repositioning", icon: <Leaf size={18} /> },
    { title: "Strategic stakeholder engagement", icon: <UserCheck size={18} /> },
    { title: "Governance and communication systems", icon: <Zap size={18} /> },
    { title: "High-growth enterprise visibility", icon: <Smartphone size={18} /> }
  ];

  return (
    <div className="bg-prestige-white">
      {/* 1. Hero Section */}
      <section className="relative page-hero-space section-shell bg-prestige-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={whoWeAreImages.hero}
            className="w-full h-full object-cover"
            alt="Office background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-black/48 via-prestige-black/28 to-prestige-black/12" />
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
            <p className="font-sans text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Impala Communication is a strategic communication and narrative advisory firm working across Africa and internationally. We support institutions, governments, and businesses to define how they are positioned, understood, and engaged.
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

      {/* 2. About Impala - Story Section */}
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
                Our Position
              </h2>
              <div className="font-sans text-prestige-text space-y-4 sm:space-y-5 leading-relaxed text-sm sm:text-base">
                <p>
                  Our work sits at the intersection of context, strategy, and influence—bridging deep local insight with global standards of communication and delivery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our Story + Our Commitment */}
      <section className="py-10 sm:py-12 lg:py-14 section-shell bg-prestige-black text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
              How We Work
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/74 leading-relaxed max-w-3xl">
              Our approach combines insight, narrative development, and strategic execution—ensuring communication is aligned, consistent, and impactful. This is guided by our BrandStory Forge™ Model, a structured framework that connects strategy to delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="grid gap-2.5"
          >
            {[
              {
                icon: ShieldCheck,
                text: "Build trust and credibility with local and global audiences",
              },
              {
                icon: Globe,
                text: "Position institutions as leaders in Africa’s transformation",
              },
              {
                icon: Users,
                text: "Inspire collaboration across public, private, and diaspora sectors",
              },
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
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/78">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. Perspective */}
      <section className="section-space section-shell bg-prestige-gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
              className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white p-3 shadow-[0_24px_70px_rgba(26,18,12,0.09)] sm:p-4"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-prestige-black">
                <img
                  src={whoWeAreImages.visualStrip[0]}
                  alt="Strategic communication context"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.25rem] border border-white/20 bg-prestige-black/62 p-4 text-white shadow-2xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:w-72">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <PenTool size={18} />
                </div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white/64">
                  Context into clarity
                </p>
                <p className="mt-1 text-lg font-bold leading-tight">
                  Structured narratives for evolving markets.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
              <span className="mb-3 block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                Our Perspective
              </span>
              <h2 className="max-w-2xl text-2xl font-bold leading-tight text-prestige-black sm:text-3xl lg:text-4xl">
                Africa’s growth story requires context before communication.
              </h2>
              <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-prestige-text sm:text-base">
                Africa’s growth story is complex and evolving. We translate this complexity into clear, structured narratives that connect with stakeholders across markets.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "Local insight",
                  "Institutional clarity",
                  "Global relevance",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white bg-white px-4 py-4 shadow-sm"
                  >
                    <CheckCircle size={16} className="mb-2 text-primary" />
                    <p className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-prestige-black">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Leadership */}
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
                  src={whoWeAreImages.visualStrip[3]}
                  alt="Impala leadership and production work"
                  className="absolute inset-0 h-full w-full object-cover opacity-86"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prestige-black via-prestige-black/18 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/14 bg-white/10 p-4 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    Leadership
                  </p>
                  <p className="mt-1 text-xl font-bold leading-tight sm:text-2xl">
                    Meron Feleke
                  </p>
                </div>
              </div>

              <div className="px-5 py-7 sm:px-7 sm:py-9 lg:px-10 lg:py-12 xl:px-12">
                <span className="mb-3 block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                  Strategic Leadership
                </span>
                <h2 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                  Leadership built around influence, trust, and institutional clarity.
                </h2>
                <p className="mt-5 max-w-3xl font-sans text-sm leading-relaxed text-white/74 sm:text-base">
                  Meron Feleke is an impact-driven communications strategist with over a decade of experience working across Africa and internationally. She has led high-level engagements with governments, multilateral institutions, and private sector leaders—shaping narratives that influence investment, policy, and public understanding.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    { value: "10+", label: "Years of experience" },
                    { value: "Africa", label: "Regional perspective" },
                    { value: "Global", label: "Institutional engagement" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.15rem] border border-white/10 bg-white/7 px-4 py-4"
                    >
                      <p className="font-display text-2xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-white/58">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-lg font-sans text-xs leading-relaxed text-white/58 sm:text-sm">
                    Shaping narratives that strengthen visibility, credibility, and strategic engagement.
                  </p>
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
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;
