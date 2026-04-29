import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Megaphone, 
  Compass, 
  PenTool, 
  Radio, 
  GraduationCap, 
  BarChart3, 
  Users, 
  Target, 
  Flag, 
  Film, 
  Handshake,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Globe,
  Zap,
  ShieldCheck,
  MessageSquare
} from "lucide-react";
import { ourServicesImages } from "../lib/images";
import FinalCallToAction from "./FinalCallToAction";

const OurServices = () => {
  const services = [
    {
      title: "Strategic Narrative & Positioning",
      icon: <Compass size={32} />,
      desc: "We define how institutions articulate their role within Africa’s transformation and global relevance, creating the narrative architecture that anchors trust and strategic direction.",
      proofRefs: ["LonAdd", "African Business", "Ghana Cocoa"],
    },
    {
      title: "Investment & Sector Positioning",
      icon: <BarChart3 size={32} />,
      desc: "We translate complex economic, financial, and sector developments into compelling narratives that attract investors, partners, and high-level attention.",
      proofRefs: ["Ethiopia financial sector", "Capital markets", "EAITE"],
    },
    {
      title: "Institutional Profiling & Thought Leadership",
      icon: <Radio size={32} />,
      desc: "We position organisations and leaders within continental and global conversations through editorial visibility, media positioning, and executive profiling.",
      proofRefs: ["African Business Magazine", "Executive visibility"],
    },
    {
      title: "Strategic Communications Systems",
      icon: <Flag size={32} />,
      desc: "We design internal and external communication structures that strengthen governance, align leadership messaging, and build long-term institutional credibility.",
      proofRefs: ["LonAdd ISO", "Governance", "Stakeholder alignment"],
    },
    {
      title: "Content & Narrative Activation",
      icon: <Film size={32} />,
      desc: "From flagship films to executive messaging and digital platforms, we activate narratives across channels to influence audiences at scale.",
      proofRefs: ["Films", "Digital platforms", "Campaign rollouts"],
    },
  ];

  const whyUs = [
    {
      title: "Insight-Led",
      desc: "We ground communication in context, audience intelligence, and institutional priorities.",
      icon: <Zap size={24} className="text-primary" />
    },
    {
      title: "Culturally Grounded",
      desc: "We design communication that respects people, place, and context.",
      icon: <Globe size={24} className="text-primary" />
    },
    {
      title: "Impact-Focused",
      desc: "We align communication with credibility, market perception, and long-term institutional outcomes.",
      icon: <ShieldCheck size={24} className="text-primary" />
    }
  ];

  return (
    <div className="bg-prestige-white">
      {/* 1. Hero Section */}
      <section className="relative page-hero-space section-shell bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-primary mb-4 block">
                Our Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prestige-black mb-4 sm:mb-6 leading-tight">
                Strategic positioning for institutions shaping markets, sectors, and public trust
              </h1>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-prestige-text mb-6 sm:mb-8 leading-relaxed max-w-xl">
                We provide strategic communication advisory that strengthens institutional credibility, sharpens market perception, and aligns organizations with evolving economic and investment landscapes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/our-services" className="w-full sm:w-auto text-center bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-prestige-black transition-all duration-300 shadow-xl">
                  Explore Services
                </Link>
                <Link to="/get-in-touch" className="w-full sm:w-auto text-center border-2 border-prestige-black text-prestige-black px-6 sm:px-8 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-prestige-black hover:text-white transition-all duration-300">
                  Start a Conversation
                </Link>
              </div>
            </motion.div>

            <div className="relative h-[420px] hidden lg:block">
              {/* Floating Icon Cards Cluster */}
              {[
                { icon: <Compass size={24} />, label: "Positioning", top: "10%", left: "20%", delay: 0 },
                { icon: <BarChart3 size={24} />, label: "Investment", top: "40%", left: "60%", delay: 0.2 },
                { icon: <Radio size={24} />, label: "Thought Leadership", top: "70%", left: "15%", delay: 0.4 },
                { icon: <Flag size={24} />, label: "Systems", top: "20%", left: "70%", delay: 0.6 },
                { icon: <Film size={24} />, label: "Activation", top: "62%", left: "46%", delay: 0.8 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -15, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: item.delay },
                    scale: { duration: 0.5, delay: item.delay },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay }
                  }}
                  className="absolute bg-white p-4 shadow-2xl rounded-[1rem] border border-prestige-gray flex items-center gap-3 group hover:border-primary transition-colors"
                  style={{ top: item.top, left: item.left }}
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-prestige-black">{item.label}</span>
                </motion.div>
              ))}
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>


      {/* 3. Core Service Spotlight */}
      <section className="section-space section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
                Featured Capability
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black mb-4 sm:mb-5 leading-tight">
                Strategic Narrative & Positioning
              </h2>
              <p className="font-sans text-sm sm:text-base text-prestige-text leading-relaxed mb-6">
                We define how institutions articulate their relevance within Africa’s transformation, ensuring that leadership, sector role, and public value are communicated with clarity, strategic alignment, and institutional weight.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-7">
                {["Positioning", "Narrative Architecture", "Credibility", "Market Relevance"].map(chip => (
                  <span key={chip} className="px-3 py-1.5 bg-prestige-gray text-prestige-black font-sans text-[10px] font-bold uppercase tracking-[0.16em] rounded-full">
                    {chip}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.16em] text-xs sm:text-sm group">
                More Info <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-prestige-cream p-5 sm:p-6 lg:p-8 rounded-[1.7rem] border border-prestige-gray relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-primary/10">
                <Target size={96} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white flex items-center justify-center rounded-[1rem] shadow-xl text-primary mb-5 sm:mb-6">
                  <Compass size={32} />
                </div>
                <div className="h-px w-20 bg-primary mb-6" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-sans text-xs font-bold text-prestige-black uppercase tracking-[0.16em]">Institutional Positioning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-sans text-xs font-bold text-prestige-black uppercase tracking-[0.16em]">Stakeholder Alignment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-sans text-xs font-bold text-prestige-black uppercase tracking-[0.16em]">Market Relevance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="section-space section-shell bg-prestige-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black">
              Five Strategic Service Areas
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white p-5 sm:p-6 lg:p-7 border border-transparent hover:border-primary hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
              >
                <div className="text-primary mb-5 group-hover:scale-105 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-prestige-black mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-prestige-text leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <p className="mt-4 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-primary/80">
                  Relevant work: {service.proofRefs.join(" · ")}
                </p>
                <div className="mt-6 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Community Engagement Highlight Section */}
      <section className="section-space section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={ourServicesImages.communityCollage[0]}
                    className="w-full h-full object-cover"
                    alt="Community interaction"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={ourServicesImages.communityCollage[1]}
                    className="w-full h-full object-cover"
                    alt="Collaboration"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="pt-4 sm:pt-6 lg:pt-8 space-y-3">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={ourServicesImages.communityCollage[2]}
                    className="w-full h-full object-cover"
                    alt="Workshop"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={ourServicesImages.communityCollage[3]}
                    className="w-full h-full object-cover"
                    alt="Community presence"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
                Specialization
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black mb-4 sm:mb-5 leading-tight">
                Strategic Stakeholder Engagement
              </h2>
              <p className="font-sans text-sm sm:text-base text-prestige-text leading-relaxed mb-6 sm:mb-7">
                We help institutions build trust through structured stakeholder engagement, participation frameworks, and communication processes that keep communities, partners, and leadership aligned around a shared direction.
              </p>
              <button className="w-full sm:w-auto bg-prestige-black text-white px-6 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-primary transition-all duration-300">
                Explore Our Approach
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Why Our Services Work */}
      <section className="section-space section-shell bg-prestige-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black">
              Why organizations choose Impala
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-xl transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-prestige-gray flex items-center justify-center rounded-full mb-5 group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-prestige-black mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-prestige-text leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCallToAction />
    </div>
  );
};

export default OurServices;
