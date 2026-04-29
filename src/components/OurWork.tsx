import { AnimatePresence, motion } from "motion/react";
import {
  BarChart3,
  Briefcase,
  ChevronDown,
  Compass,
  Globe,
  GraduationCap,
  Leaf,
  Megaphone,
  MessageSquare,
  PenTool,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { brandMarks, homeImages, ourWorkImages } from "../lib/images";
import FinalCallToAction from "./FinalCallToAction";

type ProjectCategory =
  | "Branding & Strategy"
  | "Campaigns"
  | "Health"
  | "Gender"
  | "Climate"
  | "Development"
  | "Research & Policy";

type FilterValue = "All" | ProjectCategory;
type ProjectCardMode = "full" | "compact";

interface BaseProject {
  cardMode: ProjectCardMode;
  filters: ProjectCategory[];
  id: string;
  logoFallbackText: string;
  logoUrl?: string;
  primaryCategory: ProjectCategory;
  tag: string;
  title: string;
}

interface FullProject extends BaseProject {
  approach: string;
  cardMode: "full";
  challenge: string;
  deliverables: { icon: ReactNode; label: string }[];
  hook: string;
  impact: string;
  previewImage?: string;
  relatedImages: string[];
  solution: string[];
  tagline: string;
}

interface CompactProject extends BaseProject {
  cardMode: "compact";
  summary: string;
}

type Project = FullProject | CompactProject;

const CATEGORY_ORDER: ProjectCategory[] = [
  "Branding & Strategy",
  "Campaigns",
  "Health",
  "Gender",
  "Climate",
  "Development",
  "Research & Policy",
];

const FILTERS: FilterValue[] = ["All", ...CATEGORY_ORDER];

const projects: Project[] = [
  {
    id: "esdp",
    cardMode: "full",
    primaryCategory: "Branding & Strategy",
    filters: ["Branding & Strategy", "Development"],
    tag: "Case Study",
    title: "ESDP",
    logoUrl: brandMarks.esdp,
    logoFallbackText: "ESDP",
    hook: "Positioning a new organization with clarity, credibility, and a unified voice.",
    tagline: "Defining the future of social development.",
    challenge:
      "ESDP sought to align its organizational goals with a clear and effective communication strategy ahead of its official launch.",
    approach:
      "We conducted a comprehensive brand discovery process, including stakeholder interviews and workshops, to define ESDP’s identity, messaging, and positioning.",
    solution: [
      "Narrative and messaging framework",
      "Brand vision and mission",
      "Core values and personality",
      "Voice and tone system",
      "Tagline development",
    ],
    impact:
      "We ensured that communication content informed, empowered, and inspired stakeholders to take meaningful action.",
    deliverables: [
      { icon: <Compass size={16} />, label: "Strategy" },
      { icon: <Users size={16} />, label: "Workshops" },
      { icon: <MessageSquare size={16} />, label: "Messaging" },
      { icon: <Sparkles size={16} />, label: "Brand Identity" },
      { icon: <PenTool size={16} />, label: "Tone Guidelines" },
      { icon: <Target size={16} />, label: "Tagline" },
    ],
    previewImage: ourWorkImages.caseStudies.esdp[0],
    relatedImages: [...ourWorkImages.caseStudies.esdp],
  },
  {
    id: "abm-ethiopia",
    cardMode: "full",
    primaryCategory: "Branding & Strategy",
    filters: ["Branding & Strategy", "Development"],
    tag: "Partnership",
    title: "African Business Magazine – Ethiopia Representation",
    logoFallbackText: "ABM",
    hook:
      "Positioning Ethiopia within Africa’s broader growth and investment story through credible institutional profiling.",
    tagline: "Institutional profiling for a more investment-ready Ethiopian narrative.",
    challenge:
      "Ethiopia needed stronger narrative placement within high-trust African business conversations so its growth story could land with institutional, investor, and policy audiences.",
    approach:
      "We shaped representation through editorial positioning, strategic framing, and message architecture that connected Ethiopia’s progress to wider African opportunity narratives.",
    solution: [
      "Institutional profiling strategy",
      "Editorial narrative development",
      "Investment-facing story framing",
      "Cross-market positioning support",
    ],
    impact:
      "Positioned Ethiopia more credibly within African and global business conversations by strengthening its institutional and investment narrative.",
    deliverables: [
      { icon: <Compass size={16} />, label: "Positioning" },
      { icon: <PenTool size={16} />, label: "Narrative" },
      { icon: <Globe size={16} />, label: "Representation" },
      { icon: <MessageSquare size={16} />, label: "Editorial" },
    ],
    relatedImages: [],
  },
  {
    id: "lonadd",
    cardMode: "full",
    primaryCategory: "Branding & Strategy",
    filters: ["Branding & Strategy", "Development"],
    tag: "Current Project",
    title: "LonAdd HR Consultancy",
    logoUrl: brandMarks.lonadd,
    logoFallbackText: "LON",
    hook:
      "Repositioning a 17-year HR legacy into a category leader with sharper visibility and stronger institutional credibility.",
    tagline: "Institutional repositioning anchored in category leadership and ISO-ready credibility.",
    challenge:
      "LonAdd needed to evolve from a respected legacy consultancy into a clearer category leader with stronger governance signals, sharper market positioning, and a more contemporary institutional profile.",
    approach:
      "We developed a positioning framework that translated LonAdd’s legacy into a forward-looking advisory profile rooted in expertise, governance, ISO credibility, and African market relevance.",
    solution: [
      "Brand architecture refinement",
      "Thought leadership positioning",
      "ISO credibility narrative",
      "Narrative and messaging framework",
      "Strategic visibility support",
    ],
    impact:
      "Strengthened LonAdd’s category leadership by aligning its brand architecture, credibility signals, and institutional narrative with a more ambitious market position.",
    deliverables: [
      { icon: <Briefcase size={16} />, label: "Brand Architecture" },
      { icon: <ShieldCheck size={16} />, label: "ISO Credibility" },
      { icon: <Sparkles size={16} />, label: "Thought Leadership" },
      { icon: <Compass size={16} />, label: "Positioning" },
      { icon: <PenTool size={16} />, label: "Messaging" },
    ],
    relatedImages: [],
  },
  {
    id: "ghana-cocoa",
    cardMode: "full",
    primaryCategory: "Branding & Strategy",
    filters: ["Branding & Strategy", "Development"],
    tag: "Current Project",
    title: "Ghana Cocoa Marketing Company (UK & Ghana)",
    logoFallbackText: "GCMC",
    hook:
      "Positioning Ghana’s cocoa story as a premium narrative of heritage, sustainability, and global relevance.",
    tagline: "Global value-chain positioning for a flagship national sector.",
    challenge:
      "The cocoa narrative needed to communicate more than trade value, connecting industry relevance to sustainability, identity, and international audience engagement.",
    approach:
      "We reframed the sector around heritage, sustainability, diaspora resonance, and premium global positioning to create stronger strategic and commercial relevance.",
    solution: [
      "Global narrative platform",
      "Sustainability narrative framing",
      "Diaspora engagement messaging",
      "Cross-market communication support",
    ],
    impact:
      "Repositioned Ghana’s cocoa sector as a premium global narrative with stronger sustainability, heritage, and diaspora relevance.",
    deliverables: [
      { icon: <Leaf size={16} />, label: "Sustainability" },
      { icon: <Globe size={16} />, label: "Diaspora Reach" },
      { icon: <Megaphone size={16} />, label: "Global Narrative" },
      { icon: <Target size={16} />, label: "Industry Positioning" },
    ],
    relatedImages: [],
  },
  {
    id: "ethiopia-financial-sector",
    cardMode: "full",
    primaryCategory: "Branding & Strategy",
    filters: ["Branding & Strategy", "Research & Policy"],
    tag: "Current Focus",
    title: "Financial Sector Engagement (Ethiopia)",
    logoFallbackText: "FSE",
    hook:
      "Positioning banking reform, Islamic finance, and capital-market ambition as credible national investment narratives.",
    tagline: "Sector positioning for financial reform, investor confidence, and institutional trust.",
    challenge:
      "Ethiopia’s financial transformation required clearer communication that could connect reform, innovation, and sector opportunity to investor, regulatory, and public audiences.",
    approach:
      "We structured the narrative around reform credibility, market readiness, and institutional confidence so the sector’s momentum could be communicated with clarity and authority.",
    solution: [
      "Financial sector narrative architecture",
      "Investor-facing message development",
      "Reform communication framework",
      "Sector visibility support",
    ],
    impact:
      "Strengthened the clarity and investment relevance of Ethiopia’s banking, Islamic finance, and capital-market conversations.",
    deliverables: [
      { icon: <BarChart3 size={16} />, label: "Sector Narrative" },
      { icon: <Compass size={16} />, label: "Positioning" },
      { icon: <ShieldCheck size={16} />, label: "Reform Credibility" },
      { icon: <Globe size={16} />, label: "Investor Relevance" },
    ],
    relatedImages: [],
  },
  {
    id: "haset",
    cardMode: "compact",
    primaryCategory: "Branding & Strategy",
    filters: ["Branding & Strategy", "Development"],
    tag: "Portfolio Project",
    title: "Haset",
    logoFallbackText: "HAS",
    summary: "Selected project in Impala’s broader portfolio.",
  },
  {
    id: "uk-black-business-africa-platform",
    cardMode: "full",
    primaryCategory: "Campaigns",
    filters: ["Campaigns", "Development"],
    tag: "Partnership",
    title:
      "UK Black Business Entrepreneurs Conference & Africa Business Platform",
    logoFallbackText: "UKB",
    hook:
      "Bringing African opportunity into high-level international platforms where investment narratives are shaped.",
    tagline: "Connecting Africa to global investment dialogue.",
    challenge:
      "African opportunities needed stronger visibility within premium global business forums where investors, founders, and ecosystem leaders gather.",
    approach:
      "We positioned the platform as a bridge between African opportunity and global capital conversations through strategic framing, platform architecture, and partnership messaging.",
    solution: [
      "Platform narrative architecture",
      "Event communication strategy",
      "Global investment positioning",
      "Partner-facing message development",
    ],
    impact:
      "Positioning Africa in global investment dialogues by integrating African opportunities into high-level international platforms.",
    deliverables: [
      { icon: <Megaphone size={16} />, label: "Event Strategy" },
      { icon: <Users size={16} />, label: "Partnerships" },
      { icon: <Globe size={16} />, label: "Global Reach" },
      { icon: <Target size={16} />, label: "Opportunity Framing" },
    ],
    relatedImages: [],
  },
  {
    id: "roha",
    cardMode: "full",
    primaryCategory: "Health",
    filters: ["Health", "Branding & Strategy"],
    tag: "Case Study",
    title: "Roha Medical Campus",
    logoUrl: brandMarks.roha,
    logoFallbackText: "ROH",
    hook:
      "Establishing a premier medical identity in the heart of East Africa.",
    tagline: "Excellence in healthcare communication.",
    challenge:
      "Roha needed a brand that reflected its world-class medical facilities while remaining accessible and trustworthy to the local community.",
    approach:
      "We developed a multi-layered communication strategy that bridged international medical standards with local cultural nuances.",
    solution: [
      "Visual identity system",
      "Stakeholder engagement plan",
      "Digital presence strategy",
      "Launch campaign assets",
    ],
    impact:
      "Successfully positioned Roha as a leading medical hub, attracting stronger visibility, trust, and strategic interest.",
    deliverables: [
      { icon: <Sparkles size={16} />, label: "Visual Identity" },
      { icon: <Users size={16} />, label: "Engagement" },
      { icon: <Globe size={16} />, label: "Digital Strategy" },
      { icon: <Megaphone size={16} />, label: "Launch Assets" },
    ],
    previewImage: ourWorkImages.caseStudies.roha[0],
    relatedImages: [...ourWorkImages.caseStudies.roha],
  },
  {
    id: "michu-cirht",
    cardMode: "full",
    primaryCategory: "Health",
    filters: ["Health", "Campaigns"],
    tag: "Case Study",
    title: "MICHU / CIRHT",
    logoUrl: brandMarks.cirht,
    logoFallbackText: "CIR",
    hook:
      "Transforming clinic culture through clear, human-centered reproductive health communication.",
    tagline: "Brand transformation for a clinic culture initiative.",
    challenge:
      "The initiative needed a clearer identity and communication system to make its clinic culture work understandable, actionable, and internally aligned.",
    approach:
      "We translated technical program objectives into a more accessible story and communication framework grounded in service experience, staff engagement, and practical rollout.",
    solution: [
      "Program identity refinement",
      "Audience-centered messaging",
      "Campaign support assets",
      "Internal communication alignment",
    ],
    impact:
      "Strengthened the clarity and visibility of the initiative and supported a more coherent public-facing and internal narrative around clinic culture transformation.",
    deliverables: [
      { icon: <MessageSquare size={16} />, label: "Messaging" },
      { icon: <Megaphone size={16} />, label: "Campaign Assets" },
      { icon: <Users size={16} />, label: "Staff Alignment" },
      { icon: <ShieldCheck size={16} />, label: "Program Clarity" },
    ],
    previewImage: ourWorkImages.caseStudies.michu[0],
    relatedImages: [...ourWorkImages.caseStudies.michu],
  },
  {
    id: "ewla",
    cardMode: "full",
    primaryCategory: "Gender",
    filters: ["Gender", "Development"],
    tag: "Strategic Project",
    title: "EWLA – Expanding Access to Justice",
    logoUrl: brandMarks.ewla,
    logoFallbackText: "EWL",
    hook:
      "Turning legal access and institutional advocacy into narratives people can understand, trust, and act on.",
    tagline: "Making justice visible, human, and accessible.",
    challenge:
      "EWLA’s work required communication that could translate legal services and advocacy into clear public narratives without losing institutional depth or credibility.",
    approach:
      "We translated access-to-justice work into a stronger public-interest narrative, building visibility tools that strengthened trust in the institution’s role.",
    solution: [
      "Access-to-justice messaging",
      "Institutional visibility support",
      "Public-interest narrative framing",
      "Stakeholder communication tools",
    ],
    impact:
      "Strengthened institutional visibility and public understanding around access to justice through clearer, more trusted communication.",
    deliverables: [
      { icon: <Scale size={16} />, label: "Justice Narrative" },
      { icon: <ShieldCheck size={16} />, label: "Credibility" },
      { icon: <MessageSquare size={16} />, label: "Public Messaging" },
      { icon: <Users size={16} />, label: "Stakeholder Trust" },
    ],
    relatedImages: [],
  },
  {
    id: "awib",
    cardMode: "full",
    primaryCategory: "Gender",
    filters: ["Gender", "Campaigns"],
    tag: "Ongoing Collaboration",
    title: "AWiB – ElevateHER Campaign",
    logoUrl: brandMarks.awib,
    logoFallbackText: "AWI",
    hook:
      "Profiling women leaders at scale to strengthen visibility, credibility, and investment in leadership.",
    tagline: "Turning leadership visibility into a stronger institutional signal.",
    challenge:
      "The campaign needed to elevate many voices without losing narrative quality, emotional resonance, or strategic coherence across the platform.",
    approach:
      "We used profile-led positioning, campaign consistency, and visibility strategy to turn leadership stories into a stronger collective signal.",
    solution: [
      "Leadership profile positioning",
      "Campaign narrative system",
      "Audience engagement strategy",
      "Visibility and amplification support",
    ],
    impact:
      "Strengthened the visibility of more than 60 women leaders and helped frame women’s leadership as an investable institutional priority.",
    deliverables: [
      { icon: <Sparkles size={16} />, label: "Campaign Narrative" },
      { icon: <Users size={16} />, label: "Leadership Profiles" },
      { icon: <BarChart3 size={16} />, label: "Engagement" },
      { icon: <PenTool size={16} />, label: "Profile Development" },
    ],
    previewImage: ourWorkImages.caseStudies.awib[0],
    relatedImages: [...ourWorkImages.caseStudies.awib],
  },
  {
    id: "iwmi",
    cardMode: "full",
    primaryCategory: "Climate",
    filters: ["Climate", "Research & Policy"],
    tag: "Ongoing Collaboration",
    title: "IWMI – Climate Narrative Project",
    logoUrl: brandMarks.iwmi,
    logoFallbackText: "IWM",
    hook:
      "Turning technical climate research into accessible narratives that move policy and public understanding.",
    tagline: "Making climate evidence relevant beyond research circles.",
    challenge:
      "The project required communication that could preserve the credibility of climate research while making it legible and urgent for broader public and policy audiences.",
    approach:
      "We grounded complex findings in lived experience, shaping accessible narratives that connected research to policy influence and sustainability action.",
    solution: [
      "Climate narrative framing",
      "Research translation support",
      "Audience-centered communication",
      "Policy-facing communication tools",
    ],
    impact:
      "Strengthened the policy relevance and public legibility of climate research through clearer narrative framing.",
    deliverables: [
      { icon: <Leaf size={16} />, label: "Climate Strategy" },
      { icon: <BarChart3 size={16} />, label: "Research Translation" },
      { icon: <Users size={16} />, label: "Human Stories" },
      { icon: <ShieldCheck size={16} />, label: "Policy Relevance" },
    ],
    previewImage: ourWorkImages.caseStudies.iwmi[0],
    relatedImages: [...ourWorkImages.caseStudies.iwmi],
  },
  {
    id: "dereja",
    cardMode: "full",
    primaryCategory: "Development",
    filters: ["Development", "Campaigns"],
    tag: "Completed Project",
    title: "Dereja – Reframing Youth Employability as Economic Infrastructure",
    logoFallbackText: "DE",
    hook:
      "Positioning youth employability not as a social issue, but as critical economic infrastructure.",
    tagline: "Making employability relevant to policymakers, funders, and employers.",
    challenge:
      "The work needed communication that could resonate with young audiences while also presenting employability as an issue of economic transformation, workforce readiness, and institutional relevance.",
    approach:
      "We reframed the narrative around economic participation, workforce readiness, and national opportunity so employability messaging could connect with youth, employers, and decision-makers at once.",
    solution: [
      "Youth narrative framework",
      "Employability positioning system",
      "Audience-specific message development",
      "Audience-centered communication tools",
    ],
    impact:
      "Positioned youth employability as a stronger economic and institutional priority, with messaging that resonated across youth, funder, and employer audiences.",
    deliverables: [
      { icon: <GraduationCap size={16} />, label: "Employability" },
      { icon: <Zap size={16} />, label: "Youth Activation" },
      { icon: <PenTool size={16} />, label: "Narrative System" },
      { icon: <MessageSquare size={16} />, label: "Audience Messaging" },
    ],
    relatedImages: [],
  },
  {
    id: "acsis",
    cardMode: "compact",
    primaryCategory: "Development",
    filters: ["Development"],
    tag: "Portfolio Project",
    title: "ACSIS",
    logoUrl: brandMarks.acsis,
    logoFallbackText: "ACS",
    summary: "Selected project in Impala’s broader portfolio.",
  },
  {
    id: "world-bank",
    cardMode: "full",
    primaryCategory: "Research & Policy",
    filters: ["Research & Policy", "Development"],
    tag: "Long-term Collaboration",
    title: "World Bank Group",
    logoUrl: brandMarks.worldBank,
    logoFallbackText: "WBG",
    hook:
      "Making complex economic and development data more accessible, strategic, and actionable through narrative clarity.",
    tagline: "Translating technical depth into public relevance.",
    challenge:
      "Highly technical economic material needed to be communicated in ways that were accessible to broader audiences without losing analytical rigor.",
    approach:
      "We translated complex data and institutional thinking into clear, structured narratives that supported policy engagement and stronger public understanding.",
    solution: [
      "Economic narrative translation",
      "Policy engagement messaging",
      "Institutional communication support",
      "Development impact framing",
    ],
    impact:
      "Translating complex economic data into accessible narratives that drive policy engagement and development impact.",
    deliverables: [
      { icon: <BarChart3 size={16} />, label: "Economic Narrative" },
      { icon: <Compass size={16} />, label: "Policy Positioning" },
      { icon: <MessageSquare size={16} />, label: "Public Messaging" },
      { icon: <Target size={16} />, label: "Impact Framing" },
    ],
    previewImage: homeImages.featuredWork.worldBank,
    relatedImages: [homeImages.featuredWork.worldBank],
  },
];

const isFullProject = (project: Project): project is FullProject =>
  project.cardMode === "full";

const ProjectLogoBadge = ({
  logoUrl,
  fallbackText,
  title,
  size = "default",
}: {
  fallbackText: string;
  logoUrl?: string;
  size?: "default" | "small" | "poster";
  title: string;
}) => {
  const sizeClass =
    size === "poster"
      ? "h-14 w-32 rounded-[1.15rem] px-4"
      : size === "small"
        ? "h-10 w-24 rounded-[1rem] px-3"
        : "h-11 w-28 rounded-[1.1rem] px-4";
  const logoClass =
    size === "poster" ? "max-h-8" : size === "small" ? "max-h-6" : "max-h-7";
  const textClass =
    size === "poster"
      ? "text-sm tracking-[0.24em]"
      : "text-[11px] tracking-[0.22em]";
  const containerClass = logoUrl
    ? "border-transparent bg-transparent shadow-none"
    : "border border-prestige-gray bg-prestige-cream/95 shadow-sm";

  return (
    <div
      className={`flex items-center justify-center ${containerClass} ${sizeClass}`}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${title} logo`}
          className={`w-full object-contain ${logoClass}`}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span
          className={`font-sans font-bold uppercase text-prestige-black ${textClass}`}
        >
          {fallbackText}
        </span>
      )}
    </div>
  );
};

const ProjectPreview = ({ project }: { project: FullProject }) => {
  if (project.previewImage) {
    return (
      <img
        src={project.previewImage}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#f4ede6_0%,#fff8f3_48%,#f6f1ea_100%)] px-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,90,41,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(10,10,10,0.08),transparent_35%)]" />
      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <ProjectLogoBadge
          fallbackText={project.logoFallbackText}
          logoUrl={project.logoUrl}
          size="poster"
          title={project.title}
        />
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-prestige-text">
          {project.primaryCategory}
        </span>
      </div>
    </div>
  );
};

const CaseStudyCard = ({
  project,
  index,
}: {
  index: number;
  project: FullProject;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`overflow-hidden border border-prestige-gray bg-white transition-all duration-500 ${
        isExpanded ? "shadow-[0_24px_60px_rgba(18,18,18,0.1)]" : "hover:-translate-y-1 hover:shadow-xl"
      }`}
    >
      <div
        className={`flex cursor-pointer flex-col md:flex-row ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        }`}
        onClick={() => setIsExpanded((current) => !current)}
      >
        <div className="aspect-[4/3] overflow-hidden md:w-[26%]">
          <ProjectPreview project={project} />
        </div>
        <div className="relative flex flex-col justify-center p-4 sm:p-5 md:w-[74%] md:p-6 lg:p-7">
          <div className="absolute right-3 top-3 rounded-full bg-prestige-gray px-2.5 py-1">
            <span className="font-sans text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
              {project.tag}
            </span>
          </div>

          <div className="mb-3">
            <ProjectLogoBadge
              fallbackText={project.logoFallbackText}
              logoUrl={project.logoUrl}
              size="small"
              title={project.title}
            />
          </div>

          <h3 className="max-w-3xl pr-12 text-base font-bold text-prestige-black sm:pr-16 sm:text-[1.35rem] md:text-[1.65rem]">
            {project.title}
          </h3>
          <p className="mb-4 mt-2.5 max-w-3xl font-sans text-xs italic leading-relaxed text-prestige-text sm:text-sm">
            "{project.hook}"
          </p>
          <div className="flex items-center gap-2 font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-primary sm:text-[10px]">
            {isExpanded ? "Close Project" : "View Project"}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-prestige-gray"
          >
            <div className="bg-prestige-cream/30 p-4 sm:p-5 lg:p-6 xl:p-7">
              <div className="mb-6 sm:mb-7">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <ProjectLogoBadge
                    fallbackText={project.logoFallbackText}
                    logoUrl={project.logoUrl}
                    title={project.title}
                  />
                  <span className="rounded-full bg-white px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.16em] text-primary shadow-sm">
                    {project.tag}
                  </span>
                </div>
                <h4 className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Project Detail
                </h4>
                <h2 className="mb-2 text-xl font-bold text-prestige-black sm:text-2xl lg:text-[2rem]">
                  {project.title}
                </h2>
                <p className="text-sm text-prestige-text opacity-75 sm:text-base">
                  {project.tagline}
                </p>
                <div className="mt-4 h-1 w-14 bg-primary sm:mt-5 sm:w-16" />
              </div>

              <div className="mb-6 grid gap-6 sm:mb-7 sm:gap-7 lg:grid-cols-2 lg:gap-8">
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <h5 className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                      The Challenge
                    </h5>
                    <p className="font-sans text-xs leading-relaxed text-prestige-text sm:text-sm">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h5 className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                      Our Approach
                    </h5>
                    <p className="font-sans text-xs leading-relaxed text-prestige-text sm:text-sm">
                      {project.approach}
                    </p>
                  </div>
                </div>
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <h5 className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                      What We Delivered
                    </h5>
                    <ul className="space-y-2">
                      {project.solution.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 font-sans text-xs text-prestige-text sm:text-sm"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                      Impact
                    </h5>
                    <p className="font-sans text-xs font-medium leading-relaxed text-prestige-text sm:text-sm">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 sm:mb-7">
                <h5 className="mb-4 text-center font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Deliverables
                </h5>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-6">
                  {project.deliverables.map((item) => (
                    <div
                      key={item.label}
                      className="group flex flex-col items-center border border-prestige-gray bg-white p-3 text-center transition-colors hover:border-primary"
                    >
                      <div className="mb-2 text-primary transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <span className="font-sans text-[9px] font-bold uppercase tracking-[0.16em] text-prestige-black">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {project.relatedImages.length > 0 && (
                <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1 sm:gap-4">
                  {project.relatedImages.map((image, imageIndex) => (
                    <div
                      key={`${project.id}-${imageIndex}`}
                      className="group aspect-video min-w-[180px] overflow-hidden rounded-xl shadow-lg sm:min-w-[220px] lg:min-w-[280px]"
                    >
                      <img
                        src={image}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt={`${project.title} visual ${imageIndex + 1}`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CompactProjectCard = ({ project }: { project: CompactProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      className="border border-prestige-gray bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-5"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <ProjectLogoBadge
          fallbackText={project.logoFallbackText}
          logoUrl={project.logoUrl}
          size="small"
          title={project.title}
        />
        <span className="rounded-full bg-prestige-gray px-2.5 py-1 font-sans text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.16em] text-primary sm:px-3">
          {project.tag}
        </span>
      </div>
      <h3 className="text-base font-bold text-prestige-black">{project.title}</h3>
      <p className="mt-2.5 font-sans text-xs sm:text-sm leading-relaxed text-prestige-text">
        {project.summary}
      </p>
    </motion.div>
  );
};

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  const groupedProjects = useMemo(
    () =>
      CATEGORY_ORDER.map((category) => ({
        category,
        fullProjects: filteredProjects.filter(
          (project): project is FullProject =>
            project.primaryCategory === category && isFullProject(project),
        ),
        compactProjects: filteredProjects.filter(
          (project): project is CompactProject =>
            project.primaryCategory === category && !isFullProject(project),
        ),
      })).filter(
        (group) => group.fullProjects.length > 0 || group.compactProjects.length > 0,
      ),
    [filteredProjects],
  );

  return (
    <div className="bg-prestige-white">
      <section className="relative page-hero-space section-shell overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 block font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Our Work
            </span>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-prestige-black sm:mb-6 sm:text-4xl lg:text-5xl">
              Strategic interventions that strengthen markets, institutions, and public trust
            </h1>
            <p className="mb-6 max-w-xl font-sans text-sm leading-relaxed text-prestige-text sm:mb-8 sm:text-base md:text-lg">
              Our work translates complex institutional, economic, and sector realities into positioning frameworks that influence perception, strengthen credibility, and support higher-stakes decision-making.
            </p>

            <div className="grid max-w-xl grid-cols-2 gap-2.5 border-t border-prestige-gray pt-5 sm:grid-cols-3 sm:gap-3 sm:pt-6">
              {[
                { val: "12+", label: "Years" },
                { val: "100+", label: "Projects" },
                { val: "1M+", label: "Reach" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.35 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-prestige-gray bg-white px-3.5 py-3.5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)]"
                >
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    {stat.val}
                  </span>
                  <span className="mt-1 block font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-70">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative hidden h-[460px] lg:block">
            <div className="grid h-full grid-cols-2 gap-3">
              <div className="space-y-3 pt-8">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="h-48 overflow-hidden rounded-[1.6rem] bg-prestige-cream shadow-2xl"
                >
                  <img
                    src={ourWorkImages.heroMosaic[0]}
                    className="h-full w-full object-cover"
                    alt="Mosaic 1"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 18, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="h-36 overflow-hidden rounded-[1.6rem] bg-primary/10 shadow-xl"
                >
                  <img
                    src={ourWorkImages.heroMosaic[1]}
                    className="h-full w-full object-cover"
                    alt="Mosaic 2"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              <div className="space-y-3">
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="h-36 overflow-hidden rounded-[1.6rem] bg-prestige-cream shadow-xl"
                >
                  <img
                    src={ourWorkImages.heroMosaic[2]}
                    className="h-full w-full object-cover"
                    alt="Mosaic 3"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  className="h-48 overflow-hidden rounded-[1.6rem] bg-prestige-cream shadow-2xl"
                >
                  <img
                    src={ourWorkImages.heroMosaic[3]}
                    className="h-full w-full object-cover"
                    alt="Mosaic 4"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-[52px] z-40 border-y border-prestige-gray bg-white/82 backdrop-blur-md sm:top-[62px]">
        <div className="scrollbar-hide mx-auto max-w-7xl overflow-x-auto px-4 sm:px-5 lg:px-6">
          <div className="flex min-w-max items-center gap-3 py-2.5 sm:gap-4 sm:py-3 lg:gap-6">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative py-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.16em] transition-all sm:text-[10px] ${
                  activeFilter === filter
                    ? "text-primary"
                    : "text-prestige-text hover:text-prestige-black"
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div
                    layoutId="filterUnderline"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-shell py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl space-y-10 sm:space-y-14 lg:space-y-16">
          {groupedProjects.map((group) => (
            <div key={group.category}>
              <div className="mb-6 sm:mb-8">
                <h2 className="mb-2 text-xl font-bold text-prestige-black sm:text-2xl">
                  {group.category}
                </h2>
                <div className="mb-3 h-0.5 w-14 bg-primary" />
                <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-prestige-text opacity-60">
                  Strategic Interventions
                </p>
              </div>

              {group.fullProjects.length > 0 && (
                <div className="space-y-5 sm:space-y-6">
                  {group.fullProjects.map((project, index) => (
                    <div key={project.id}>
                      <CaseStudyCard project={project} index={index} />
                    </div>
                  ))}
                </div>
              )}

              {group.compactProjects.length > 0 && (
                <div
                  className={`grid gap-4 sm:grid-cols-2 ${
                    group.fullProjects.length > 0 ? "mt-5 sm:mt-6" : ""
                  }`}
                >
                  {group.compactProjects.map((project) => (
                    <div key={project.id}>
                      <CompactProjectCard project={project} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <FinalCallToAction />
    </div>
  );
};

export default OurWork;
