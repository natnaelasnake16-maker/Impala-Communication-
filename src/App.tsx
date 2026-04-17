/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import WhoWeAre from "./components/WhoWeAre";
import OurServices from "./components/OurServices";
import OurWork from "./components/OurWork";
import Clients from "./components/Clients";
import GetInTouch from "./components/GetInTouch";
import FinalCallToAction from "./components/FinalCallToAction";
import RoadAhead from "./components/RoadAhead";
import BrandStoryForge from "./components/BrandStoryForge";
import { useState, useEffect } from "react";
import { brandAssets, homeImages, homeTickerClients } from "./lib/images";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Compass, 
  Radio, 
  Globe, 
  Users, 
  BarChart3, 
  MessageSquare,
  ChevronRight,
  ChevronDown,
  HeartPulse,
  GraduationCap,
  Scale,
  CloudRain,
  Handshake,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Wind,
  Briefcase,
  Home,
  Layers,
  UserPlus
} from "lucide-react";
// --- Components ---

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const BrandLogo = ({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <span className={className}>
      <img
        src={brandAssets.impalaLogo}
        alt="Impala Communication logo"
        className={imageClassName}
        referrerPolicy="no-referrer"
      />
    </span>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Our Services", href: "/our-services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Clients", href: "/clients" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-2.5 sm:py-3 shadow-sm"
          : "bg-white/68 backdrop-blur-lg border-b border-white/40 py-3 sm:py-4 lg:py-5 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 flex justify-between items-center gap-3 sm:gap-4">
        <Link to="/" className="flex items-center gap-2">
          <BrandLogo
            className="inline-flex"
            imageClassName="h-8 sm:h-10 lg:h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="font-sans text-xs lg:text-sm font-medium uppercase tracking-[0.16em] text-prestige-black hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link to="/get-in-touch" className="border-2 border-primary text-primary px-4 lg:px-5 py-2 font-display text-xs lg:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-primary hover:text-white transition-all duration-300">
            Get In Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-prestige-black shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-4 sm:py-5 px-4 sm:px-5 md:hidden flex flex-col gap-4 sm:gap-5"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="font-display text-base sm:text-lg font-medium uppercase tracking-[0.16em] text-prestige-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/get-in-touch" 
            className="bg-primary text-white px-5 py-3 font-display text-sm sm:text-base font-semibold uppercase tracking-[0.16em] text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden sm:min-h-[96svh]">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={homeImages.hero}
          alt="Team Collaboration"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/45 via-prestige-black/28 to-prestige-black/12" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:mb-5 sm:gap-3">
            <div className="h-0.5 w-5 sm:w-8 bg-primary" />
            <span className="font-sans text-[9px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em]">
              Strategic Communication & Institutional Positioning
            </span>
            <div className="h-0.5 w-5 sm:w-8 bg-primary" />
          </div>
          <h1 className="mb-4 text-[2.1rem] font-bold leading-[1.01] text-balance uppercase tracking-tight sm:mb-5 sm:text-[2.85rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.7rem]">
            Shaping Africa’s <br />
            <span className="text-primary italic font-light">Investment Narrative</span>
          </h1>
          <p className="mx-auto mb-4 max-w-3xl font-sans text-sm leading-relaxed opacity-90 sm:mb-5 sm:text-base md:text-lg lg:text-[1.15rem]">
            Strategic Communication. Institutional Positioning. Narratives That Drive Investment and Influence.
          </p>
          <p className="mx-auto mb-6 max-w-2xl font-sans text-xs leading-relaxed opacity-70 italic sm:mb-7 sm:text-sm md:text-base">
            We work with institutions, governments, and market leaders to position Africa’s transformation with clarity, credibility, and strategic intent.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button className="w-full sm:w-auto bg-primary text-white px-5 sm:px-7 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-primary transition-all duration-300 shadow-xl">
              View Our Work
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-5 sm:px-7 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-prestige-black transition-all duration-300">
              Who We Are
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ClientTicker = () => {
  return (
    <div className="bg-white border-y border-prestige-gray py-5 sm:py-6 lg:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 mb-4 sm:mb-5 text-center">
        <h3 className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-prestige-text opacity-60">
          Trusted by institutions shaping economies and communities
        </h3>
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...homeTickerClients, ...homeTickerClients].map((client, i) => (
          <div
            key={`${client.slug}-${i}`}
            className="mx-2 sm:mx-3 lg:mx-4 flex min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] items-center justify-center rounded-xl border border-prestige-gray bg-prestige-cream px-4 sm:px-5 lg:px-6 py-3 sm:py-4 shadow-sm"
          >
            <img
              src={client.logoUrl}
              alt={client.alt}
              className="h-7 sm:h-8 w-full object-contain"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Strategic Narrative & Positioning",
      icon: <Compass className="text-primary" size={32} />,
      desc: "We define how institutions articulate their role, relevance, and strategic value within Africa’s transformation and wider global conversations."
    },
    {
      title: "Investment & Sector Positioning",
      icon: <TrendingUp className="text-primary" size={32} />,
      desc: "We translate complex market, financial, and sector developments into clear positioning that attracts investors, partners, and institutional confidence."
    },
    {
      title: "Institutional Credibility & Engagement",
      icon: <Handshake className="text-primary" size={32} />,
      desc: "We build communication systems that strengthen trust, align stakeholders, and position institutions with clarity, authority, and long-term relevance."
    }
  ];

  return (
    <section id="services" className="bg-white section-space section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prestige-black mb-4 sm:mb-5">
            What We Do
          </h2>
          <p className="font-sans text-sm sm:text-base text-prestige-text max-w-3xl mx-auto leading-relaxed">
            We work at the intersection of communication, investment, and institutional strategy — helping organizations position themselves with clarity, credibility, and relevance in evolving markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-prestige-cream p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 border-transparent hover:border-primary group flex flex-col h-full"
            >
              <div className="mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-prestige-black">{s.title}</h3>
              <p className="font-sans text-sm text-prestige-text leading-relaxed mb-5 sm:mb-6 flex-grow">
                {s.desc}
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.18em] group/btn">
                More Info <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeWorkWithStrip = () => {
  const audienceGroups = [
    {
      label: "Financial institutions and banks",
      icon: <BarChart3 size={22} />,
    },
    {
      label: "Investment and capital market actors",
      icon: <TrendingUp size={22} />,
    },
    {
      label: "Governments and regulatory bodies",
      icon: <Scale size={22} />,
    },
    {
      label: "Development and multilateral institutions",
      icon: <Handshake size={22} />,
    },
    {
      label: "High-growth African enterprises",
      icon: <Briefcase size={22} />,
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
                We partner with institutions shaping markets, regulation, and growth across Africa.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
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
};



const WhyImpala = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const values = [
    {
      title: "Driving Social Change",
      desc: "As a leading social and behavioral change agency, we create data-driven strategies that inspire action and deliver real results.",
      image: homeImages.whyImpala.drivingSocialChange
    },
    {
      title: "Innovative Approach",
      desc: "Utilizing cutting-edge techniques and technologies, we create impactful campaigns that drive behaviour change and resonate with audiences.",
      image: homeImages.whyImpala.innovativeApproach
    },
    {
      title: "PR Strategy",
      desc: "Helping organizations build, strengthen, and protect their reputation through strategic public relations and brand positioning.",
      image: homeImages.whyImpala.prStrategy
    },
    {
      title: "Collaborative Partnerships",
      desc: "Working closely with clients and partners to co-create solutions and maximize the reach and impact of campaigns.",
      image: homeImages.whyImpala.collaborativePartnerships
    },
    {
      title: "Cultural Sensitivity",
      desc: "Navigating diverse cultural contexts to ensure communication strategies are relevant and sensitive to the communities they serve.",
      image: homeImages.whyImpala.culturalSensitivity
    },
    {
      title: "Message Development",
      desc: "Crafting inspiring, compelling messages that resonate with target audiences, promote desired behaviour change, and address misconceptions.",
      image: homeImages.whyImpala.messageDevelopment
    }
  ];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16 section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Why Impala
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-prestige-black mb-4">
            Why Impala
          </h2>
          <p className="font-sans text-sm sm:text-base text-prestige-text max-w-3xl mx-auto leading-relaxed">
            We understand the audience you aim to reach and the change you want to create.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              className="relative h-60 sm:h-64 lg:h-56 overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={v.image} 
                  alt={v.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/45 via-prestige-black/22 to-transparent group-hover:bg-primary/55 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-4 sm:p-5 lg:p-6 flex flex-col justify-end text-white">
                <h3 className="text-[15px] sm:text-base font-bold mb-2 leading-tight uppercase tracking-[0.08em]">{v.title}</h3>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedIndex === i ? 'auto' : 0, opacity: expandedIndex === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="font-sans text-[11px] sm:text-xs opacity-90 leading-relaxed mb-3">
                    {v.desc}
                  </p>
                </motion.div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedIndex(expandedIndex === i ? null : i);
                  }}
                  className="mt-1.5 flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em]"
                >
                  {expandedIndex === i ? 'Show Less' : 'More Info'} 
                  <ChevronDown size={12} className={`transition-transform duration-300 ${expandedIndex === i ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactStats = () => {
  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "1M+", label: "People Reached" }
  ];

  return (
    <section className="bg-prestige-black section-space section-shell text-white text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Our Reach
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Amplifying Your Impact
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 sm:px-5 sm:py-6 lg:px-6 lg:py-7 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-primary/70 hover:bg-white/8 hover:shadow-[0_24px_45px_rgba(0,0,0,0.24)]"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-2">
                {s.value}
              </div>
              <div className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrioritiesSection = () => {
  const priorities = [
    {
      title: "Empowering Women",
      icon: <UserPlus size={32} />,
      image: homeImages.priorities.empoweringWomen,
      desc: "We amplify her voice, harness her power, and highlight her leadership and resilience. Through strategic narrative development and media advocacy, we ensure that women’s contributions to families, communities, and society are recognized and celebrated on a global stage."
    },
    {
      title: "Climate Change",
      icon: <Wind size={32} />,
      image: homeImages.priorities.climateChange,
      desc: "We address climate change through innovative communication campaigns and advocacy efforts that promote environmental sustainability and resilience. By leveraging PR and media engagement, we raise awareness, mobilize action, and influence policies that drive lasting change."
    },
    {
      title: "Youth Employment",
      icon: <Briefcase size={32} />,
      image: homeImages.priorities.youthEmployment,
      desc: "We focus on projects that empower young individuals with the skills and opportunities they need to succeed in the workforce and contribute to economic growth. Through public engagement and thought leadership, we help shape narratives that inspire investment in youth potential."
    },
    {
      title: "Community Development",
      icon: <Home size={32} />,
      image: homeImages.priorities.communityDevelopment,
      desc: "We foster sustainable development initiatives that uplift communities, improve livelihoods, and create positive social change. By crafting compelling narratives and building strategic partnerships, we amplify grassroots voices and drive real impact."
    },
    {
      title: "Gender Equality",
      icon: <Layers size={32} />,
      image: homeImages.priorities.genderEquality,
      desc: "We champion gender equality by amplifying women’s voices, advancing their rights, and promoting inclusivity. Through media advocacy and thought leadership, we challenge stereotypes, spark conversations, and influence systemic change."
    }
  ];

  return (
    <section className="bg-prestige-cream py-10 sm:py-14 lg:py-16 section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Focus Areas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-prestige-black mb-4">
            Our Priorities
          </h2>
          <p className="font-sans text-sm sm:text-base text-prestige-text max-w-3xl mx-auto leading-relaxed">
            Empowering communities through impactful communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {priorities.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="relative h-[280px] sm:h-[300px] lg:h-[320px] overflow-hidden group cursor-pointer shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/50 via-prestige-black/22 to-transparent group-hover:bg-primary/60 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-5 sm:p-6 lg:p-7 flex flex-col justify-center text-white text-center items-center">
                <div className="mb-4 text-primary group-hover:text-white transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 uppercase tracking-[0.12em]">{p.title}</h3>
                <p className="max-w-xs font-sans text-xs sm:text-sm opacity-80 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

const FeaturedWork = () => {
  const projects = [
    {
      title: "Roha Medical Campus",
      category: "Health · Branding",
      desc: "Brand positioning and narrative development for Ethiopia's premier medical hub.",
      image: homeImages.featuredWork.rohaMedicalCampus
    },
    {
      title: "MICHU / CIRHT",
      category: "Reproductive Health",
      desc: "Brand transformation for University of Michigan's clinic culture initiative.",
      image: homeImages.featuredWork.michuCirht
    },
    {
      title: "World Bank",
      category: "Development · Finance",
      desc: "Translating complex economic data into accessible public-facing narratives.",
      image: homeImages.featuredWork.worldBank
    }
  ];

  return (
    <section className="section-space section-shell bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 gap-4 sm:gap-5">
          <div>
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
              Selected Work
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black">
              Impact, Across Sectors
            </h2>
          </div>
          <button className="font-sans font-bold text-sm text-prestige-black hover:text-primary transition-colors flex items-center gap-2 group border-b-2 border-prestige-black hover:border-primary pb-1">
            Explore Portfolio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-4 aspect-[4/3]">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2 block">
                {p.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-prestige-black group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-prestige-text leading-relaxed mb-3">
                {p.desc}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 transition-opacity">
                View Project <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-prestige-black text-white pt-10 sm:pt-14 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-5 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          <div className="col-span-1 md:col-span-2">
            <BrandLogo
              className="mb-4 inline-flex"
              imageClassName="h-12 sm:h-14 w-auto"
            />
            <p className="font-sans text-sm sm:text-base opacity-60 max-w-md leading-relaxed mb-6">
              For when communication can change lives. Strategic narratives grounded in truth, culture, and impact.
            </p>
            <div className="flex gap-4">
              {["FB", "IG", "TW", "YT"].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <span className="text-xs font-bold">{s}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-[0.16em] mb-4 sm:mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 opacity-60 font-sans text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/who-we-are" className="hover:text-primary transition-colors">Who We Are</Link></li>
              <li><Link to="/our-services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/our-work" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link to="/clients" className="hover:text-primary transition-colors">Clients</Link></li>
              <li><Link to="/get-in-touch" className="hover:text-primary transition-colors">Get In Touch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-[0.16em] mb-4 sm:mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 opacity-60 font-sans text-sm">
              <li>info@impalacommunication.com</li>
              <li>Addis Ababa, Ethiopia</li>
              <li>+251 911 000 000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 opacity-40 font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.14em]">
          <span>© 2026 Impala Communication. All rights reserved.</span>
          <p className="text-center md:text-left">Leveraging over 12 years of experience, shaping narratives that influence impact, investment, and institutional growth.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomeContent = () => {
  return (
    <>
      <Hero />
      <div id="clients">
        <ClientTicker />
      </div>
      <div id="services">
        <Services />
      </div>
      <WhoWeWorkWithStrip />
      <WhyImpala />
      <BrandStoryForge />
      <PrioritiesSection />
      <ImpactStats />
      <div id="work">
        <FeaturedWork />
      </div>
      <RoadAhead />
      <FinalCallToAction />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="selection:bg-primary selection:text-white">
        <Navbar />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/get-in-touch" element={<GetInTouch />} />
          </Routes>
        </main>
        <Footer />

        {/* Custom Styles for Marquee */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </Router>
  );
}
