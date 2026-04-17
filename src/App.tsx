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
import { useState, useEffect } from "react";
import { homeImages, homeTickerClients } from "./lib/images";
import { 
  ArrowRight, 
  Menu, 
  X, 
  Compass, 
  Video, 
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
          ? "bg-white/90 backdrop-blur-md py-3 sm:py-4 shadow-sm"
          : "bg-white/60 backdrop-blur-lg border-b border-white/40 py-4 sm:py-6 lg:py-8 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-lg sm:text-xl lg:text-2xl font-bold tracking-tight sm:tracking-tighter leading-tight text-prestige-black">
            IMPALA <span className="text-primary">COMMUNICATION</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="font-sans text-sm font-medium uppercase tracking-widest text-prestige-black hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link to="/get-in-touch" className="border-2 border-primary text-primary px-5 lg:px-6 py-2 font-display text-sm font-semibold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
            Get In Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-prestige-black shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 sm:py-8 px-4 sm:px-6 md:hidden flex flex-col gap-5 sm:gap-6"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="font-display text-lg sm:text-xl font-medium uppercase tracking-widest text-prestige-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/get-in-touch" 
            className="bg-primary text-white px-6 py-3.5 sm:py-4 font-display text-base sm:text-lg font-semibold uppercase tracking-widest text-center"
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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 flex-wrap">
            <div className="w-6 sm:w-12 h-0.5 bg-primary" />
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em]">
              Strategic Communication & Institutional Positioning
            </span>
            <div className="w-6 sm:w-12 h-0.5 bg-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 text-balance uppercase tracking-tight">
            Shaping Africa’s <br />
            <span className="text-primary italic font-light">Investment Narrative</span>
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            Strategic Communication. Institutional Positioning. Narratives That Drive Investment and Influence.
          </p>
          <p className="font-sans text-sm opacity-70 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto italic">
            We work with institutions, governments, and market leaders to position Africa’s transformation with clarity, credibility, and strategic intent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 items-center">
            <button className="w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 font-display text-sm sm:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 shadow-xl">
              View Our Work
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 font-display text-sm sm:text-base font-bold uppercase tracking-widest hover:bg-white hover:text-prestige-black transition-all duration-300">
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
    <div className="bg-white border-y border-prestige-gray py-8 sm:py-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 text-center">
        <h3 className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-prestige-text opacity-60">
          Trusted by institutions shaping economies and communities
        </h3>
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...homeTickerClients, ...homeTickerClients].map((client, i) => (
          <div
            key={`${client.slug}-${i}`}
            className="mx-3 sm:mx-4 lg:mx-6 flex min-w-[140px] sm:min-w-[160px] lg:min-w-[180px] items-center justify-center rounded-2xl border border-prestige-gray bg-prestige-cream px-5 sm:px-6 lg:px-8 py-4 sm:py-5 shadow-sm"
          >
            <img
              src={client.logoUrl}
              alt={client.alt}
              className="h-8 sm:h-10 w-full object-contain"
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
      title: "Impact Strategy Building",
      icon: <Compass className="text-primary" size={32} />,
      desc: "We craft plans that resonate deeply, shaping messages that tackle significant obstacles such as economic development, healthcare disparities, and environmental sustainability. With original ideas and forward-thinking methods, we ignite the drive to create change."
    },
    {
      title: "Compelling Narrative & Media Expertise",
      icon: <Video className="text-primary" size={32} />,
      desc: "We craft captivating narratives and produce stunning visuals that deeply resonate with multiple audiences, including governments, decision-makers, communities, and beyond. Through our work, we ignite enthusiasm and motivate diverse stakeholders to contribute toward making the world a better place."
    },
    {
      title: "PR & Brand Positioning",
      icon: <Radio className="text-primary" size={32} />,
      desc: "We empower organizations to craft strategic messages that cut through the noise and connect with their audience. Whether shaping public narratives or building media presence, we help you stay in control of your story while strengthening trust and credibility."
    }
  ];

  return (
    <section id="services" className="bg-white section-space section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-prestige-black mb-6">
            What We Do
          </h2>
          <p className="font-sans text-base sm:text-lg text-prestige-text max-w-3xl mx-auto leading-relaxed">
            We work at the intersection of communication, investment, and institutional strategy — helping organizations position themselves with clarity, credibility, and relevance in evolving markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-prestige-cream p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 border-transparent hover:border-primary group flex flex-col h-full"
            >
              <div className="mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-prestige-black">{s.title}</h3>
              <p className="font-sans text-prestige-text leading-relaxed mb-8 flex-grow">
                {s.desc}
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm uppercase tracking-widest group/btn">
                More Info <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SDGSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sdgs = [
    {
      id: "SDG 3",
      title: "Good Health and Well-being",
      icon: <HeartPulse className="text-primary" size={24} />,
      desc: "Impala Communication’s projects often focus on health communication, including initiatives related to reproductive health, disease prevention, and healthcare access. By promoting awareness and education, Impala contributes to improving health outcomes and well-being within communities."
    },
    {
      id: "SDG 4",
      title: "Quality Education",
      icon: <GraduationCap className="text-primary" size={24} />,
      desc: "Through communication campaigns and advocacy efforts, Impala Communication supports initiatives aimed at improving access to quality education, promoting literacy, and enhancing educational opportunities, particularly for marginalized groups."
    },
    {
      id: "SDG 5",
      title: "Gender Equality",
      icon: <Sparkles className="text-primary" size={24} />,
      desc: "Impala Communication is deeply committed to promoting gender equality and women’s empowerment. Many of our projects focus on addressing gender-based inequalities, advocating for women’s rights, and challenging societal norms and stereotypes."
    },
    {
      id: "SDG 6",
      title: "Clean Water and Sanitation",
      icon: <Compass className="text-primary" size={24} />,
      desc: "Impala Communication collaborates on projects related to water conservation, hygiene promotion, and access to clean water and sanitation facilities. These efforts contribute to advancing SDG 6 by promoting sustainable water management practices and improving access to safe drinking water."
    },
    {
      id: "SDG 10",
      title: "Reduced Inequalities",
      icon: <Scale className="text-primary" size={24} />,
      desc: "Impala Communication’s initiatives often target marginalized and vulnerable populations, aiming to reduce disparities and promote inclusivity. By amplifying the voices of underrepresented groups and advocating for their rights, Impala works toward reducing inequalities within society."
    },
    {
      id: "SDG 13",
      title: "Climate Action",
      icon: <CloudRain className="text-primary" size={24} />,
      desc: "Impala Communication actively engages in communication campaigns and awareness-raising initiatives to tackle climate change-related challenges. Collaborating with organizations like IWMI and Nile Basin, we focus on capturing the lived experiences of communities in Sub-Saharan Africa, particularly women and pastoral communities, to highlight the impacts of climate change. Through these efforts, we promote environmental sustainability and advocate for climate action at various levels, from individual behaviour to community initiatives and policy development."
    },
    {
      id: "SDG 17",
      title: "Partnerships for the Goals",
      icon: <Handshake className="text-primary" size={24} />,
      desc: "Impala Communication values collaboration and partnerships, working closely with various stakeholders, including governments, NGOs, international organizations, and communities. By fostering synergies and collective action, Impala contributes to the achievement of all SDGs through effective partnerships."
    }
  ];

  return (
    <section className="bg-prestige-cream py-16 sm:py-20 lg:py-24 section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            Global Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prestige-black mb-6">
            Global Development Sustainability Goals (SDGs)
          </h2>
          <p className="font-sans text-base text-prestige-text max-w-3xl mx-auto leading-relaxed">
            Impala Communication’s services and programmes contribute directly and indirectly to key Sustainable Development Goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {sdgs.map((sdg, i) => (
            <motion.div 
              key={i}
              className="bg-white border border-prestige-gray overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setExpandedId(expandedId === sdg.id ? null : sdg.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left hover:bg-prestige-gray/30 transition-colors gap-4"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {sdg.icon}
                  <div>
                    <span className="block text-[10px] font-bold text-primary uppercase tracking-widest">{sdg.id}</span>
                    <h3 className="text-sm font-bold text-prestige-black leading-tight">{sdg.title}</h3>
                  </div>
                </div>
                <ChevronDown 
                  size={18} 
                  className={`text-prestige-text transition-transform duration-300 ${expandedId === sdg.id ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: expandedId === sdg.id ? 'auto' : 0, opacity: expandedId === sdg.id ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-6 pt-0 font-sans text-xs sm:text-sm text-prestige-text leading-relaxed border-t border-prestige-gray/50">
                  {sdg.desc}
                  <button className="mt-4 flex items-center gap-1 text-primary font-bold uppercase tracking-widest text-[10px]">
                    More Info <ChevronRight size={12} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
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
    <section className="bg-white py-16 sm:py-20 lg:py-24 section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            Why Impala
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prestige-black mb-6">
            Why Impala
          </h2>
          <p className="font-sans text-base text-prestige-text max-w-3xl mx-auto leading-relaxed">
            We understand the audience you aim to reach and the change you want to create.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              className="relative h-72 sm:h-80 lg:h-64 overflow-hidden group cursor-pointer"
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
              <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-end text-white">
                <h3 className="text-base sm:text-lg font-bold mb-2 leading-tight uppercase tracking-wide">{v.title}</h3>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedIndex === i ? 'auto' : 0, opacity: expandedIndex === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="font-sans text-xs sm:text-sm opacity-90 leading-relaxed mb-4">
                    {v.desc}
                  </p>
                </motion.div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedIndex(expandedIndex === i ? null : i);
                  }}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mt-2"
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
    { value: "30M+", label: "People Reached" }
  ];

  return (
    <section className="bg-prestige-black section-space section-shell text-white text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            Our Reach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Amplifying Your Impact
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 p-8 sm:p-10 lg:p-12 border border-white/10 hover:border-primary transition-colors duration-500">
              <div className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary mb-4">
                {s.value}
              </div>
              <div className="font-sans text-sm font-semibold uppercase tracking-widest opacity-60">
                {s.label}
              </div>
            </div>
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
    <section className="bg-prestige-cream py-16 sm:py-20 lg:py-24 section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            Focus Areas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prestige-black mb-6">
            Our Priorities
          </h2>
          <p className="font-sans text-base text-prestige-text max-w-3xl mx-auto leading-relaxed">
            Empowering communities through impactful communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {priorities.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative h-[340px] sm:h-80 lg:h-96 overflow-hidden group cursor-pointer shadow-xl"
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
              <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-white text-center items-center">
                <div className="mb-6 text-primary group-hover:text-white transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase tracking-wider">{p.title}</h3>
                <p className="font-sans text-sm opacity-80 leading-relaxed max-w-xs">
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-prestige-black">
              Impact, Across Sectors
            </h2>
          </div>
          <button className="font-sans font-bold text-prestige-black hover:text-primary transition-colors flex items-center gap-2 group border-b-2 border-prestige-black hover:border-primary pb-1">
            Explore Portfolio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 aspect-[4/3]">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                {p.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-prestige-black group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="font-sans text-prestige-text leading-relaxed mb-4">
                {p.desc}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
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
    <footer className="bg-prestige-black text-white pt-16 sm:pt-20 lg:pt-32 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight sm:tracking-tighter mb-6 block">
              IMPALA <span className="text-primary">COMMUNICATION</span>
            </span>
            <p className="font-sans text-base sm:text-lg opacity-60 max-w-md leading-relaxed mb-8">
              For when communication can change lives. Strategic narratives grounded in truth, culture, and impact.
            </p>
            <div className="flex gap-6">
              {["FB", "IG", "TW", "YT"].map(s => (
                <a key={s} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <span className="text-xs font-bold">{s}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold uppercase tracking-widest mb-6 sm:mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4 opacity-60 font-sans text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/who-we-are" className="hover:text-primary transition-colors">Who We Are</Link></li>
              <li><Link to="/our-services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/our-work" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link to="/clients" className="hover:text-primary transition-colors">Clients</Link></li>
              <li><Link to="/get-in-touch" className="hover:text-primary transition-colors">Get In Touch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold uppercase tracking-widest mb-6 sm:mb-8">Contact</h4>
            <ul className="flex flex-col gap-4 opacity-60 font-sans text-sm">
              <li>info@impalacommunication.com</li>
              <li>Addis Ababa, Ethiopia</li>
              <li>+251 911 000 000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 sm:pt-10 lg:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 opacity-40 font-sans text-[10px] sm:text-xs uppercase tracking-widest">
          <span>© 2026 Impala Communication. All rights reserved.</span>
          <p className="text-center md:text-left">Leveraging over 12 years of experience, shaping narratives that influence impact, investment, and institutional growth.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
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
      <SDGSection />
      <WhyImpala />
      <ImpactStats />
      <PrioritiesSection />
      <div id="work">
        <FeaturedWork />
      </div>
      
      {/* CTA Section */}
      <section id="contact" className="bg-primary section-space section-shell text-center text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            Ready to Change <br /> the Conversation?
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl opacity-90 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Let's build something that matters. Our team is ready to partner with you to shift narratives and drive real impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link to="/get-in-touch" className="w-full sm:w-auto bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 font-display text-base sm:text-lg font-bold uppercase tracking-widest hover:bg-prestige-black hover:text-white transition-all duration-300 shadow-2xl">
              Get In Touch
            </Link>
            <button className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 font-display text-base sm:text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
              View Our Work
            </button>
          </div>
        </motion.div>
      </section>
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
