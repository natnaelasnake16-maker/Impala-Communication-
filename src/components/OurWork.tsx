import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { brandMarks, homeImages, ourWorkImages } from "../lib/images";
import FinalCallToAction from "./FinalCallToAction";

interface CaseStudy {
  approach: string;
  challenge: string;
  client: string;
  fallback: string;
  image?: string;
  logoUrl?: string;
  outcome: string;
  tag: string;
}

const caseStudies: CaseStudy[] = [
  {
    client: "African Business Magazine",
    tag: "Institutional Profiling",
    logoUrl: brandMarks.africanBusiness,
    fallback: "ABM",
    challenge: "Ethiopia's story needed clearer representation for international investment audiences.",
    approach: "Led strategic profiling of Ethiopian institutions and businesses.",
    outcome: "Helped elevate Ethiopia's transformation story within African and global conversations.",
  },
  {
    client: "Association of Women in Business (AWiB)",
    tag: "Leadership Visibility",
    logoUrl: brandMarks.awib,
    fallback: "AWI",
    image: ourWorkImages.caseStudies.awib[1],
    challenge: "Amplify women's leadership and increase visibility.",
    approach: "Supported leadership initiatives and profiled more than 60 Women of Excellence.",
    outcome: "Amplified voices, strengthened visibility, and inspired future leaders.",
  },
  {
    client: "Ethiopian Women Lawyers Association (EWLA)",
    tag: "Access to Justice",
    logoUrl: brandMarks.ewla,
    fallback: "EWL",
    challenge: "Strengthen visibility and expand access to justice.",
    approach: "Developed strategic storytelling and multimedia content.",
    outcome: "Enabled stronger engagement with local and international stakeholders.",
  },
  {
    client: "LonAdd HR Consultancy",
    tag: "Market Leadership",
    logoUrl: brandMarks.lonadd,
    fallback: "LON",
    challenge: "Strengthen market leadership and support growth across Africa.",
    approach: "Led strategic positioning and communication transformation.",
    outcome: "Strengthened brand, clearer positioning, and stronger market leadership.",
  },
  {
    client: "World Bank and Development Partners",
    tag: "Development Communication",
    logoUrl: brandMarks.worldBank,
    fallback: "WBG",
    image: homeImages.featuredWork.worldBank,
    challenge: "Communicate complex development programmes clearly.",
    approach: "Supported communication initiatives and stakeholder engagement.",
    outcome: "Created clearer public narratives and stronger stakeholder understanding and engagement.",
  },
  {
    client: "CMAG",
    tag: "Trade Narrative",
    logoUrl: brandMarks.ghanaCocoa,
    fallback: "CMAG",
    challenge: "Ghana's cocoa story needed global framing across sustainability and diaspora engagement.",
    approach: "Built sector storytelling around heritage, sustainability, and market relevance.",
    outcome: "Reframed cocoa as an economic, cultural, and sustainability narrative.",
  },
];

const BrandMark = ({
  fallback,
  logoUrl,
  placement,
  title,
}: {
  fallback: string;
  logoUrl?: string;
  placement: "overlay" | "stage";
  title: string;
}) => {
  const isStage = placement === "stage";

  return (
    <div
      className={`flex shrink-0 items-center justify-center border bg-white/94 shadow-[0_18px_46px_rgba(26,18,12,0.12)] backdrop-blur-md ${
        isStage
          ? "relative z-10 h-36 w-[94%] max-w-[21rem] rounded-[1rem] border-white px-4 py-4 sm:h-40"
          : "min-h-[4.65rem] w-[min(78%,15.5rem)] rounded-[0.95rem] border-white/70 px-5 py-3"
      }`}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${title} logo`}
          className={`w-full object-contain ${
            isStage ? "max-h-28 sm:max-h-32" : "max-h-12 sm:max-h-14"
          }`}
          referrerPolicy="no-referrer"
        />
      ) : (
        <span
          className={`font-sans font-bold uppercase text-prestige-black ${
            isStage
              ? "text-3xl tracking-[0.18em] sm:text-4xl"
              : "text-base tracking-[0.2em]"
          }`}
        >
          {fallback}
        </span>
      )}
    </div>
  );
};

const ProjectVisual = ({ project }: { project: CaseStudy }) => {
  const hasImage = Boolean(project.image);

  return (
    <div
      className={`relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-[1.05rem] border md:min-h-full ${
        hasImage
          ? "border-white/10 bg-prestige-black"
          : "border-prestige-gray bg-[linear-gradient(135deg,#f8f3ed_0%,#fffaf8_47%,#efe3d7_100%)]"
      }`}
    >
      {hasImage ? (
        <>
          <img
            src={project.image}
            alt={project.client}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/62 via-prestige-black/10 to-transparent" />
          <div className="absolute inset-x-4 bottom-4">
            <BrandMark
              fallback={project.fallback}
              logoUrl={project.logoUrl}
              placement="overlay"
              title={project.client}
            />
          </div>
        </>
      ) : (
        <>
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/12 blur-2xl" />
          <div className="absolute -bottom-20 left-0 h-48 w-48 rounded-full bg-prestige-black/6 blur-3xl" />
          <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute inset-x-10 bottom-8 h-px bg-gradient-to-r from-transparent via-prestige-black/12 to-transparent" />
          <BrandMark
            fallback={project.fallback}
            logoUrl={project.logoUrl}
            placement="stage"
            title={project.client}
          />
        </>
      )}
    </div>
  );
};

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
              Selected <span className="text-primary italic">Experience</span>
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-white/72 sm:text-base lg:text-lg">
              We help organisations communicate achievements, engage stakeholders, and strengthen reputation through focused strategic communication.
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
              Scannable examples of challenge, approach, and outcome.
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
                className="group relative overflow-hidden rounded-[1.25rem] border border-prestige-gray bg-white p-3 shadow-[0_18px_50px_rgba(26,18,12,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_rgba(241,90,41,0.13)] sm:p-4"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,90,41,0.12),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
                  <ProjectVisual project={project} />

                  <div className="flex min-w-0 flex-col gap-4 px-1 py-1 sm:px-2">
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
                      <Field label="Challenge" text={project.challenge} />
                      <Field label="Approach" text={project.approach} />
                      <Field label="Outcome" text={project.outcome} />
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
