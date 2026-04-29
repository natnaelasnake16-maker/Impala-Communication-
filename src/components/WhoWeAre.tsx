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

      {/* 3. Our Story + Our Commitment */}
      <section className="bg-prestige-gray section-space section-shell">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-14">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="flex gap-4 sm:gap-5 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white flex items-center justify-center rounded-full shadow-sm shrink-0 text-primary">
                <PenTool size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-prestige-black mb-3">Our Perspective</h3>
                <p className="font-sans text-sm text-prestige-text leading-relaxed">
                  Africa’s growth story is complex and evolving. We translate this complexity into clear, structured narratives that connect with stakeholders across markets.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white flex items-center justify-center rounded-full shadow-sm shrink-0 text-primary">
                <Globe size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-prestige-black mb-3">Leadership</h3>
                <p className="font-sans text-sm text-prestige-text leading-relaxed">
                  Meron Feleke is an impact-driven communications strategist with over a decade of experience working across Africa and internationally. She has led high-level engagements with governments, multilateral institutions, and private sector leaders—shaping narratives that influence investment, policy, and public understanding.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-6 sm:pt-8 border-t border-prestige-black/5">
            <p className="text-xl sm:text-2xl font-bold text-primary italic">
              Positioning Africa with clarity, credibility, and strategic intent.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;
