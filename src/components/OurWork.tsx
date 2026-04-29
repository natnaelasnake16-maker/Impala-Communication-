import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { brandMarks, homeImages, ourWorkImages } from "../lib/images";
import FinalCallToAction from "./FinalCallToAction";

interface CaseStudy {
  client: string;
  context: string;
  fallback: string;
  image?: string;
  impact: string;
  logoUrl?: string;
  tag: string;
  work: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: "ESDP",
    tag: "Branding & Strategy",
    logoUrl: brandMarks.esdp,
    fallback: "ESDP",
    image: ourWorkImages.caseStudies.esdp[0],
    context: "A new development organisation needed a clear identity before public launch.",
    work: "Defined positioning, messaging, values, tone, and a launch-ready narrative system.",
    impact: "Created a unified communication foundation for stakeholder engagement.",
  },
  {
    client: "African Business Magazine – Ethiopia Representation",
    tag: "Partnership",
    fallback: "ABM",
    context: "Ethiopia needed stronger visibility within African and global business conversations.",
    work: "Developed institutional profiling and investment-facing narrative support.",
    impact: "Positioned Ethiopia’s growth story for investor and policy audiences.",
  },
  {
    client: "LonAdd HR Consultancy",
    tag: "Current Project",
    logoUrl: brandMarks.lonadd,
    fallback: "LON",
    context: "A 17-year HR consultancy needed sharper positioning for African growth.",
    work: "Refined brand architecture, messaging, and thought-leadership direction.",
    impact: "Strengthened LonAdd’s profile as a trusted workforce solutions voice.",
  },
  {
    client: "Ghana Cocoa Marketing Company (UK & Ghana)",
    tag: "Current Project",
    fallback: "GCMC",
    context: "Ghana’s cocoa story needed global framing across sustainability and diaspora engagement.",
    work: "Built sector storytelling around heritage, sustainability, and market relevance.",
    impact: "Reframed cocoa as an economic, cultural, and sustainability narrative.",
  },
  {
    client: "Financial Sector Engagement (Ethiopia)",
    tag: "Current Focus",
    fallback: "FSE",
    context: "Financial reform needed clearer communication for investors, regulators, and public audiences.",
    work: "Structured narratives around banking reform, Islamic finance, and capital-market readiness.",
    impact: "Made sector momentum easier to understand and engage.",
  },
  {
    client: "Haset",
    tag: "Portfolio Project",
    fallback: "HAS",
    context: "Community-focused work needed clearer public positioning.",
    work: "Clarified core messaging and audience relevance.",
    impact: "Improved recognition of the organisation’s role and value.",
  },
  {
    client: "UK Black Business Entrepreneurs Conference & Africa Business Platform",
    tag: "Partnership",
    fallback: "UKB",
    context: "African opportunities needed stronger placement in international investment platforms.",
    work: "Integrated African narratives into conference positioning and stakeholder communication.",
    impact: "Strengthened Africa’s presence in global investment dialogue.",
  },
  {
    client: "Roha Medical Campus",
    tag: "Health",
    logoUrl: brandMarks.roha,
    fallback: "ROH",
    image: ourWorkImages.caseStudies.roha[0],
    context: "A healthcare platform needed positioning that matched its regional ambition.",
    work: "Developed strategic communication and brand-aligned storytelling.",
    impact: "Strengthened visibility for a major health initiative.",
  },
  {
    client: "MICHU / CIRHT",
    tag: "Health Campaign",
    logoUrl: brandMarks.cirht,
    fallback: "CIR",
    image: ourWorkImages.caseStudies.michu[0],
    context: "Technical reproductive health priorities needed clearer public and internal communication.",
    work: "Supported campaign messaging, training communication, and audience-facing content.",
    impact: "Improved clarity around reproductive health education and service awareness.",
  },
  {
    client: "EWLA – Expanding Access to Justice",
    tag: "Strategic Project",
    logoUrl: brandMarks.ewla,
    fallback: "EWL",
    context: "Legal services needed clearer narratives around access, trust, and institutional visibility.",
    work: "Translated access-to-justice work into public-interest messaging.",
    impact: "Strengthened public understanding of EWLA’s role.",
  },
  {
    client: "AWiB – ElevateHER Campaign",
    tag: "Ongoing Collaboration",
    logoUrl: brandMarks.awib,
    fallback: "AWI",
    image: ourWorkImages.caseStudies.awib[0],
    context: "Women leaders needed stronger visibility and profile-led storytelling.",
    work: "Developed campaign narratives and profiles for more than 60 women leaders.",
    impact: "Expanded recognition of women’s leadership and influence.",
  },
  {
    client: "IWMI – Climate Narrative Project",
    tag: "Ongoing",
    logoUrl: brandMarks.iwmi,
    fallback: "IWM",
    image: ourWorkImages.caseStudies.iwmi[0],
    context: "Climate research needed to reach policy and development audiences clearly.",
    work: "Translated technical findings into human-centred climate narratives.",
    impact: "Made sustainability evidence more accessible for decision-making.",
  },
  {
    client: "Dereja (Mastercard Foundation)",
    tag: "Completed",
    fallback: "DE",
    context: "Youth employability work needed stories that built confidence and readiness.",
    work: "Created narratives connecting youth potential with practical career pathways.",
    impact: "Strengthened communication around employability and opportunity.",
  },
  {
    client: "ACSIS",
    tag: "Portfolio Project",
    logoUrl: brandMarks.acsis,
    fallback: "ACS",
    context: "Climate and sustainability work required concise institutional visibility.",
    work: "Supported communication positioning within the development ecosystem.",
    impact: "Created a clearer signal for sector partners and stakeholders.",
  },
  {
    client: "World Bank Group",
    tag: "Long-term Collaboration",
    logoUrl: brandMarks.worldBank,
    fallback: "WBG",
    image: homeImages.featuredWork.worldBank,
    context: "Complex economic data needed accessible public and policy-facing communication.",
    work: "Translated research and development insights into structured narratives.",
    impact: "Supported policy engagement through clearer economic storytelling.",
  },
];

const LogoBadge = ({
  fallback,
  logoUrl,
  title,
}: {
  fallback: string;
  logoUrl?: string;
  title: string;
}) => (
  <div className="flex h-12 w-28 shrink-0 items-center justify-center rounded-[1rem] border border-prestige-gray bg-prestige-cream/95 px-3 shadow-sm">
    {logoUrl ? (
      <img
        src={logoUrl}
        alt={`${title} logo`}
        className="max-h-7 w-full object-contain"
        referrerPolicy="no-referrer"
      />
    ) : (
      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-prestige-black">
        {fallback}
      </span>
    )}
  </div>
);

const Field = ({ label, text }: { label: string; text: string }) => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
      <CheckCircle2 size={13} strokeWidth={1.8} />
      {label}
    </div>
    <p className="font-sans text-sm leading-relaxed text-prestige-text">
      {text}
    </p>
  </div>
);

const OurWork = () => {
  return (
    <div className="overflow-hidden bg-prestige-white">
      <section className="relative page-hero-space section-shell overflow-hidden bg-prestige-black text-white">
        <div className="absolute inset-0">
          <img
            src={ourWorkImages.heroMosaic[0]}
            alt="Impala project work"
            className="h-full w-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-black via-prestige-black/72 to-prestige-black/22" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <span className="mb-4 block font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
              Our Work
            </span>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              Selected <span className="text-primary italic">Work</span>
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-white/72 sm:text-base lg:text-lg">
              We work across sectors and geographies, supporting institutions to communicate complex ideas with clarity and strategic direction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.75 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {ourWorkImages.heroMosaic.map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-[1.4rem] border border-white/12 bg-white/8 shadow-2xl ${
                  index === 0 ? "h-40 sm:h-56 lg:h-72" : "h-32 sm:h-44 lg:h-56"
                } ${index === 2 ? "-mt-6" : ""}`}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-space section-shell">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <span className="mb-3 block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
              Case Studies
            </span>
            <h2 className="text-2xl font-bold leading-tight text-prestige-black sm:text-3xl lg:text-4xl">
              Communication work built around context, execution, and impact.
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {caseStudies.map((project, index) => (
              <motion.article
                key={project.client}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.035, duration: 0.45 }}
                className="group relative overflow-hidden rounded-[1.55rem] border border-prestige-gray bg-white p-3 shadow-[0_18px_50px_rgba(26,18,12,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_rgba(241,90,41,0.13)] sm:p-4"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,90,41,0.12),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 grid gap-4 sm:grid-cols-[0.78fr_1.22fr]">
                  <div className="relative min-h-[150px] overflow-hidden rounded-[1.15rem] bg-[linear-gradient(135deg,#f6efe7_0%,#fffaf5_50%,#efe3d8_100%)] sm:min-h-full">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.client}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex h-full min-h-[150px] items-center justify-center px-5">
                        <LogoBadge
                          fallback={project.fallback}
                          logoUrl={project.logoUrl}
                          title={project.client}
                        />
                      </div>
                    )}
                    {project.image && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <LogoBadge
                            fallback={project.fallback}
                            logoUrl={project.logoUrl}
                            title={project.client}
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex flex-col gap-4 px-1 py-1 sm:px-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="mb-2 inline-flex rounded-full border border-primary/18 bg-primary/8 px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
                          {project.tag}
                        </span>
                        <h3 className="text-xl font-bold leading-tight text-prestige-black sm:text-2xl">
                          {project.client}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={19}
                        className="mt-1 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <div className="grid gap-3.5">
                      <Field label="Context" text={project.context} />
                      <Field label="What We Did" text={project.work} />
                      <Field label="Impact" text={project.impact} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FinalCallToAction />
    </div>
  );
};

export default OurWork;
