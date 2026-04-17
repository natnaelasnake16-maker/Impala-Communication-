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

const OurServices = () => {
  const introCards = [
    {
      title: "Strategic Thinking",
      desc: "Tailored communication and positioning advisory aligned with your goals and audiences."
    },
    {
      title: "Strategic Execution",
      desc: "Narratives, campaigns, and content that connect with people in meaningful ways."
    },
    {
      title: "Real Engagement",
      desc: "Institutional and stakeholder relations built on trust, clarity, and participation."
    }
  ];

  const services = [
    {
      title: "Strategic Communication Consulting",
      icon: <Compass size={32} />,
      desc: "Define how your institution communicates its role, relevance, and value within broader national and global contexts."
    },
    {
      title: "Campaign Development and Management",
      icon: <Megaphone size={32} />,
      desc: "Design and execute communication initiatives that shape perception, influence engagement, and drive strategic outcomes."
    },
    {
      title: "Content Creation and Narrative Development",
      icon: <PenTool size={32} />,
      desc: "Translate complex ideas, policies, and sector dynamics into clear, compelling narratives that resonate with stakeholders."
    },
    {
      title: "Media Relations and Public Relations",
      icon: <Radio size={32} />,
      desc: "Position your organization within key conversations, strengthening visibility, credibility, and influence."
    },
    {
      title: "Training and Capacity Building",
      icon: <GraduationCap size={32} />,
      desc: "Equip teams with structured communication systems that ensure consistency, clarity, and institutional alignment."
    },
    {
      title: "Monitoring and Evaluation",
      icon: <BarChart3 size={32} />,
      desc: "Track communication effectiveness and align outputs with measurable strategic outcomes."
    },
    {
      title: "Community Engagement and Stakeholder Relations",
      icon: <Users size={32} />,
      desc: "Build structured engagement frameworks that strengthen trust, collaboration, and long-term partnerships."
    }
  ];

  const whyUs = [
    {
      title: "Insight-Led",
      desc: "We combine creativity with strategic clarity.",
      icon: <Zap size={24} className="text-primary" />
    },
    {
      title: "Culturally Grounded",
      desc: "We design communication that respects people, place, and context.",
      icon: <Globe size={24} className="text-primary" />
    },
    {
      title: "Impact-Focused",
      desc: "We help organizations communicate in ways that create measurable change.",
      icon: <ShieldCheck size={24} className="text-primary" />
    }
  ];

  return (
    <div className="bg-prestige-white">
      {/* 1. Hero Section */}
      <section className="relative page-hero-space section-shell bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-prestige-black mb-6 sm:mb-8 leading-tight">
                Innovative positioning solutions that move people and drive impact
              </h1>
              <p className="font-sans text-base sm:text-lg md:text-xl text-prestige-text mb-8 sm:mb-12 leading-relaxed max-w-xl">
                We provide strategic communication and positioning advisory tailored to your organization’s role within evolving economic, institutional, and investment landscapes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link to="/our-services" className="w-full sm:w-auto text-center bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-prestige-black transition-all duration-300 shadow-xl">
                  Explore Services
                </Link>
                <Link to="/get-in-touch" className="w-full sm:w-auto text-center border-2 border-prestige-black text-prestige-black px-8 sm:px-10 py-4 sm:py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-prestige-black hover:text-white transition-all duration-300">
                  Start a Conversation
                </Link>
              </div>
            </motion.div>

            <div className="relative h-[500px] hidden lg:block">
              {/* Floating Icon Cards Cluster */}
              {[
                { icon: <Compass size={24} />, label: "Strategy", top: "10%", left: "20%", delay: 0 },
                { icon: <Megaphone size={24} />, label: "Campaigns", top: "40%", left: "60%", delay: 0.2 },
                { icon: <Sparkles size={24} />, label: "Narrative", top: "70%", left: "15%", delay: 0.4 },
                { icon: <Radio size={24} />, label: "Media", top: "20%", left: "70%", delay: 0.6 },
                { icon: <GraduationCap size={24} />, label: "Training", top: "60%", left: "50%", delay: 0.8 },
                { icon: <Users size={24} />, label: "Engagement", top: "80%", left: "75%", delay: 1.0 }
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
                  className="absolute bg-white p-6 shadow-2xl rounded-2xl border border-prestige-gray flex items-center gap-4 group hover:border-primary transition-colors"
                  style={{ top: item.top, left: item.left }}
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-prestige-black">{item.label}</span>
                </motion.div>
              ))}
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Services Overview */}
      <section className="py-16 sm:py-20 lg:py-24 section-shell bg-prestige-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {introCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 lg:p-10 border border-prestige-gray hover:border-primary transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-prestige-black mb-4">{card.title}</h3>
                <p className="font-sans text-sm text-prestige-text leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Service Spotlight */}
      <section className="section-space section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                Featured Service
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prestige-black mb-6 sm:mb-8 leading-tight">
                Strategic Communication
              </h2>
              <p className="font-sans text-base sm:text-lg text-prestige-text leading-relaxed mb-8">
                We provide strategic communication consulting services tailored to your organization’s unique needs and objectives. From developing comprehensive communication plans to advising on messaging and audience engagement strategies, we help organizations achieve their communication goals effectively.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Strategy", "Messaging", "Engagement", "Planning"].map(chip => (
                  <span key={chip} className="px-4 py-2 bg-prestige-gray text-prestige-black font-sans text-xs font-bold uppercase tracking-widest rounded-full">
                    {chip}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group">
                More Info <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-prestige-cream p-6 sm:p-8 lg:p-12 rounded-3xl border border-prestige-gray relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/10">
                <Target size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white flex items-center justify-center rounded-2xl shadow-xl text-primary mb-6 sm:mb-8">
                  <Compass size={40} />
                </div>
                <div className="h-px w-24 bg-primary mb-8" />
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-sans text-sm font-bold text-prestige-black uppercase tracking-widest">Comprehensive Planning</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-sans text-sm font-bold text-prestige-black uppercase tracking-widest">Audience Insights</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-sans text-sm font-bold text-prestige-black uppercase tracking-widest">Impact Measurement</span>
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
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prestige-black">
              Our Full Suite of Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 sm:p-8 lg:p-10 border border-transparent hover:border-primary hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
              >
                <div className="text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-prestige-black mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-prestige-text leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <div className="mt-8 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Community Engagement Highlight Section */}
      <section className="section-space section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-3 sm:gap-4">
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
              <div className="pt-6 sm:pt-8 lg:pt-12 space-y-4">
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
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                Specialization
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prestige-black mb-6 sm:mb-8 leading-tight">
                Community Engagement
              </h2>
              <p className="font-sans text-base sm:text-lg text-prestige-text leading-relaxed mb-8 sm:mb-10">
                We specialize in community engagement and stakeholder relations, helping organizations build meaningful relationships with their stakeholders and communities. From organizing events and community outreach programs to facilitating dialogue and collaboration, we help organizations foster trust and mutual understanding.
              </p>
              <button className="w-full sm:w-auto bg-prestige-black text-white px-8 py-4 font-display text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300">
                Learn More About Our Approach
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Why Our Services Work */}
      <section className="section-space section-shell bg-prestige-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prestige-black">
              Why organizations choose Impala
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-prestige-gray flex items-center justify-center rounded-full mb-8 group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-prestige-black mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-prestige-text leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing Conversion Section */}
      <section className="section-space section-shell bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Let your communication do more than inform — let it inspire action
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl opacity-90 mb-8 sm:mb-12 max-w-2xl mx-auto">
              With over 12 years of experience, we help organizations communicate with purpose, clarity, and impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link to="/get-in-touch" className="w-full sm:w-auto bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-prestige-black hover:text-white transition-all duration-300 shadow-2xl">
                Work With Us
              </Link>
              <Link to="/get-in-touch" className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
