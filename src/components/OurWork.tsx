import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Compass, 
  Search, 
  Megaphone, 
  Radio, 
  HeartPulse, 
  Leaf, 
  Scale, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Sparkles, 
  PenTool, 
  Target,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Globe,
  Zap,
  ShieldCheck,
  Briefcase,
  GraduationCap
} from "lucide-react";
import React, { useState, useMemo } from "react";
import { ourWorkImages } from "../lib/images";

interface Project {
  id: string;
  category: string;
  filterCategory: string;
  title: string;
  hook: string;
  tagline: string;
  challenge: string;
  approach: string;
  solution: string[];
  impact: string;
  deliverables: { icon: React.ReactNode; label: string }[];
  images: string[];
  logo?: string;
}

const projects: Project[] = [
  {
    id: "esdp",
    category: "Branding & Strategic Communication",
    filterCategory: "Branding & Strategy",
    title: "ESDP: Brand Proposition & Assets",
    hook: "Positioning a new organization with clarity, credibility, and a unified voice.",
    tagline: "Defining the future of social development.",
    challenge: "ESDP sought to align its organizational goals with a clear and effective communication strategy ahead of its official launch.",
    approach: "We conducted a comprehensive brand discovery process, including stakeholder interviews and workshops, to define ESDP’s identity, messaging, and positioning.",
    solution: [
      "Narrative and messaging framework",
      "Brand vision and mission",
      "Core values and personality",
      "Voice and tone system",
      "Tagline development"
    ],
    impact: "We ensured that communication content informed, empowered, and inspired stakeholders to take meaningful action.",
    deliverables: [
      { icon: <Compass size={18} />, label: "Strategy" },
      { icon: <Users size={18} />, label: "Workshops" },
      { icon: <MessageSquare size={18} />, label: "Messaging" },
      { icon: <Sparkles size={18} />, label: "Brand Identity" },
      { icon: <PenTool size={18} />, label: "Tone Guidelines" },
      { icon: <Target size={18} />, label: "Tagline" }
    ],
    images: [
      ...ourWorkImages.caseStudies.esdp
    ]
  },
  {
    id: "roha",
    category: "Branding & Strategic Communication",
    filterCategory: "Branding & Strategy",
    title: "Roha Medical Campus",
    hook: "Establishing a premier medical identity in the heart of East Africa.",
    tagline: "Excellence in healthcare communication.",
    challenge: "Roha needed a brand that reflected its world-class medical facilities while remaining accessible and trustworthy to the local community.",
    approach: "We developed a multi-layered communication strategy that bridged international medical standards with local cultural nuances.",
    solution: [
      "Visual identity system",
      "Stakeholder engagement plan",
      "Digital presence strategy",
      "Launch campaign assets"
    ],
    impact: "Successfully positioned Roha as the leading medical hub in Ethiopia, attracting top-tier medical talent and international partnerships.",
    deliverables: [
      { icon: <Sparkles size={18} />, label: "Visual Identity" },
      { icon: <Users size={18} />, label: "Engagement" },
      { icon: <Globe size={18} />, label: "Digital Strategy" },
      { icon: <Megaphone size={18} />, label: "Launch Campaign" }
    ],
    images: [
      ...ourWorkImages.caseStudies.roha
    ]
  },
  {
    id: "awib",
    category: "Gender & Social Impact",
    filterCategory: "Gender",
    title: "AWiB: Women in Business",
    hook: "Empowering female leaders through strategic visibility and networking.",
    tagline: "Leading the change for women.",
    challenge: "AWiB needed to amplify its reach to young female professionals while maintaining its prestige among established leaders.",
    approach: "We created a digital-first narrative campaign highlighting the diverse success stories of AWiB members.",
    solution: [
      "Digital narrative series",
      "Social media growth strategy",
      "Event communication assets",
      "Membership value proposition"
    ],
    impact: "Increased membership by 40% and significantly improved engagement across all digital platforms.",
    deliverables: [
      { icon: <PenTool size={18} />, label: "Narrative" },
      { icon: <Globe size={18} />, label: "Social Strategy" },
      { icon: <Users size={18} />, label: "Community" },
      { icon: <BarChart3 size={18} />, label: "Growth" }
    ],
    images: [
      ...ourWorkImages.caseStudies.awib
    ]
  },
  {
    id: "iwmi",
    category: "Climate & Environment",
    filterCategory: "Climate",
    title: "IWMI: Awash Basin Project",
    hook: "Communicating water resilience in a changing climate.",
    tagline: "Sustainable water for all.",
    challenge: "Translating complex hydrological data into actionable insights for local farming communities and policy makers.",
    approach: "We used community-centered narratives and visual data representation to make the science accessible.",
    solution: [
      "Community outreach toolkits",
      "Data visualization system",
      "Policy brief design",
      "Field documentary production"
    ],
    impact: "Improved local adoption of sustainable water practices and informed regional water policy updates.",
    deliverables: [
      { icon: <Leaf size={18} />, label: "Climate Strategy" },
      { icon: <BarChart3 size={18} />, label: "Data Viz" },
      { icon: <Radio size={18} />, label: "Outreach" },
      { icon: <Users size={18} />, label: "Field Work" }
    ],
    images: [
      ...ourWorkImages.caseStudies.iwmi
    ]
  }
];

const CaseStudyCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white border border-prestige-gray overflow-hidden transition-all duration-500 ${isExpanded ? 'shadow-2xl' : 'hover:shadow-xl hover:-translate-y-1'}`}
    >
      {/* Collapsed State */}
      <div 
        className={`flex flex-col md:flex-row cursor-pointer ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="md:w-1/3 aspect-[4/3] overflow-hidden">
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center relative">
          <div className="absolute top-8 right-8 bg-prestige-gray px-3 py-1 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{project.filterCategory}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-prestige-black mb-4">{project.title}</h3>
          <p className="font-sans text-lg text-prestige-text italic mb-6">
            "{project.hook}"
          </p>
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
            {isExpanded ? 'Close Case Study' : 'View Case Study'} 
            <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </div>

      {/* Expanded State */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-prestige-gray"
          >
            <div className="p-8 md:p-20 bg-prestige-cream/30">
              {/* Header */}
              <div className="mb-16">
                <h4 className="text-primary font-sans text-xs font-bold uppercase tracking-[0.3em] mb-4">Case Study</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-prestige-black mb-4">{project.title}</h2>
                <p className="text-xl text-prestige-text opacity-70">{project.tagline}</p>
                <div className="h-1 w-24 bg-primary mt-8" />
              </div>

              {/* Grid Content */}
              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div className="space-y-12">
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4">The Challenge</h5>
                    <p className="font-sans text-lg text-prestige-text leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4">Our Approach</h5>
                    <p className="font-sans text-lg text-prestige-text leading-relaxed">{project.approach}</p>
                  </div>
                </div>
                <div className="space-y-12">
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4">What We Delivered</h5>
                    <ul className="space-y-4">
                      {project.solution.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 font-sans text-prestige-text">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4">Impact</h5>
                    <p className="font-sans text-lg text-prestige-text leading-relaxed font-medium">{project.impact}</p>
                  </div>
                </div>
              </div>

              {/* Deliverables Icon Grid */}
              <div className="mb-20">
                <h5 className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-8 text-center">Deliverables</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {project.deliverables.map((d, i) => (
                    <div key={i} className="bg-white p-6 border border-prestige-gray flex flex-col items-center text-center group hover:border-primary transition-colors">
                      <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{d.icon}</div>
                      <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-prestige-black">{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visuals Horizontal Scroll */}
              <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
                {project.images.map((img, i) => (
                  <div key={i} className="min-w-[300px] md:min-w-[500px] aspect-video rounded-xl overflow-hidden shadow-lg group">
                    <img 
                      src={img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt={`Visual ${i}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All", 
    "Branding & Strategy", 
    "Campaigns", 
    "Health", 
    "Gender", 
    "Climate", 
    "Development", 
    "Research & Policy"
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => p.filterCategory === activeFilter);
  }, [activeFilter]);

  const categories = useMemo(() => {
    const groups: Record<string, Project[]> = {};
    filteredProjects.forEach(p => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });
    return groups;
  }, [filteredProjects]);

  return (
    <div className="bg-prestige-white">
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
              Our Work
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-prestige-black mb-8 leading-tight">
              We turn communication into measurable impact
            </h1>
            <p className="font-sans text-xl text-prestige-text mb-12 leading-relaxed max-w-xl">
              Our work translates complex institutional, economic, and social realities into strategic narratives that influence perception, engagement, and decision-making.
            </p>
            
            {/* Inline Stats */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-prestige-gray">
              {[
                { val: "12+", label: "Years" },
                { val: "100+", label: "Projects" },
                { val: "1M+", label: "Reach" }
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">{s.val}</span>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-prestige-text opacity-60">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Animated Mosaic Collage */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4 pt-12">
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="h-64 bg-purple-100 rounded-[2rem] overflow-hidden shadow-2xl"
                >
                  <img src={ourWorkImages.heroMosaic[0]} className="w-full h-full object-cover" alt="Mosaic 1" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="h-48 bg-primary/10 rounded-[2rem] overflow-hidden shadow-xl"
                >
                  <img src={ourWorkImages.heroMosaic[1]} className="w-full h-full object-cover" alt="Mosaic 2" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="h-48 bg-green-100 rounded-[2rem] overflow-hidden shadow-xl"
                >
                  <img src={ourWorkImages.heroMosaic[2]} className="w-full h-full object-cover" alt="Mosaic 3" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="h-64 bg-blue-100 rounded-[2rem] overflow-hidden shadow-2xl"
                >
                  <img src={ourWorkImages.heroMosaic[3]} className="w-full h-full object-cover" alt="Mosaic 4" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sticky Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-md border-y border-prestige-gray">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-8 py-4 min-w-max">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-sans text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${activeFilter === f ? 'text-primary' : 'text-prestige-text hover:text-prestige-black'}`}
              >
                {f}
                {activeFilter === f && (
                  <motion.div layoutId="filterUnderline" className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Case Study Sections */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {Object.entries(categories).map(([catName, catProjects]) => (
            <div key={catName}>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-prestige-black mb-2">{catName}</h2>
                <div className="h-0.5 w-16 bg-primary mb-4" />
                <p className="font-sans text-sm text-prestige-text opacity-60 uppercase tracking-widest">Selected Case Studies</p>
              </div>
              <div className="space-y-12">
                {(catProjects as Project[]).map((p, i) => (
                  <div key={p.id}>
                    <CaseStudyCard project={p} index={i} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-32 px-6 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to make a difference?
            </h2>
            <p className="font-sans text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Let’s collaborate to create communication that drives real change.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/get-in-touch" className="bg-white text-primary px-10 py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-prestige-black hover:text-white transition-all duration-300 shadow-2xl">
                Contact Us
              </Link>
              <button className="border-2 border-white text-white px-10 py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
                Start a Project
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
