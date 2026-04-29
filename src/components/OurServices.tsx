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
      title: "Narrative Strategy",
      icon: <Compass size={32} />,
      desc: "Define your positioning, develop clear messaging frameworks, and map stakeholders to strengthen alignment and influence.",
      proofRefs: ["Positioning", "Messaging", "Stakeholders"],
    },
    {
      title: "Strategic Communication",
      icon: <BarChart3 size={32} />,
      desc: "Design and execute communication strategies that engage key stakeholders and audiences, including investors, policymakers, and communities.",
      proofRefs: ["Strategy", "Engagement", "Influence"],
    },
    {
      title: "Content & Campaigns",
      icon: <Radio size={32} />,
      desc: "Create high-impact storytelling, multimedia content, and campaigns that translate complex ideas into compelling narratives.",
      proofRefs: ["Storytelling", "Campaigns", "Content"],
    },
    {
      title: "Institutional Positioning",
      icon: <Flag size={32} />,
      desc: "Support organisations in positioning themselves within Africa’s evolving economic and investment landscape.",
      proofRefs: ["Markets", "Credibility", "Leadership"],
    },
  ];

  const approachSteps = [
    {
      title: "Insight & Context",
      desc: "Understand institutional priorities, market dynamics, and stakeholder perspectives.",
    },
    {
      title: "Narrative Development",
      desc: "Define positioning and build clear, consistent messaging.",
    },
    {
      title: "Systems & Alignment",
      desc: "Ensure internal clarity, communication structure, and consistency.",
    },
    {
      title: "Activation & Engagement",
      desc: "Deliver strategies, content, and engagement across key audiences.",
    },
    {
      title: "Measurement & Refinement",
      desc: "Track performance and continuously strengthen impact.",
    },
  ];

  const whyUs = [
    {
      title: "Context-Led",
      desc: "We ground communication in institutional priorities, market dynamics, and stakeholder perspectives.",
      icon: <Zap size={24} className="text-primary" />
    },
    {
      title: "Strategically Clear",
      desc: "We connect insight, narrative, systems, activation, and measurement into one clear approach.",
      icon: <Globe size={24} className="text-primary" />
    },
    {
      title: "Audience-Focused",
      desc: "We help institutions engage key stakeholders and audiences with clarity and credibility.",
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
                What We Do
              </h1>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-prestige-text mb-6 sm:mb-8 leading-relaxed max-w-xl">
                We provide strategic communication and narrative advisory to help institutions define positioning, align messaging, and engage key stakeholders and audiences effectively.
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
                { icon: <Compass size={24} />, label: "Insight & Context", top: "10%", left: "20%", delay: 0 },
                { icon: <BarChart3 size={24} />, label: "Narrative", top: "40%", left: "60%", delay: 0.2 },
                { icon: <Radio size={24} />, label: "Systems", top: "70%", left: "15%", delay: 0.4 },
                { icon: <Flag size={24} />, label: "Activation", top: "20%", left: "70%", delay: 0.6 },
                { icon: <Film size={24} />, label: "Measurement", top: "62%", left: "46%", delay: 0.8 }
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


      {/* 4. Services Grid */}
      <section className="section-space section-shell bg-prestige-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black">
              Services
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
                Our Approach: BrandStory Forge™ Model
              </h2>
              <p className="font-sans text-sm sm:text-base text-prestige-text leading-relaxed mb-6 sm:mb-7">
                Our work is guided by a structured approach that transforms insight into clear narrative and measurable impact.
              </p>
              <div className="mb-6 grid gap-2.5">
                {approachSteps.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-3 rounded-xl bg-prestige-cream px-3.5 py-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-prestige-black">
                        {step.title}
                      </h3>
                      <p className="mt-1 font-sans text-xs leading-relaxed text-prestige-text">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full sm:w-auto bg-prestige-black text-white px-6 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-primary transition-all duration-300">
                Explore Our Approach
              </button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurServices;
