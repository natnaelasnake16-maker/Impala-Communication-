import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { brandMarks, ourWorkImages } from "../lib/images";

type CaseStudy = {
  client: string;
  context: string;
  work: string;
  impact: string;
  logoUrl?: string;
  imageUrl?: string;
  fallback: string;
};

const cases: CaseStudy[] = [
  {
    client: "African Business Magazine – Ethiopia Representation",
    context: "Ethiopia needed stronger visibility within African and global business conversations.",
    work: "Developed institutional profiling and investment-facing narrative support.",
    impact: "Positioned Ethiopia’s growth story with clearer relevance for investor and policy audiences.",
    fallback: "AB",
  },
  {
    client: "UK Black Business Entrepreneurs Conference & Africa Business Platform",
    context: "African opportunities needed to be framed for high-level international platforms.",
    work: "Integrated African investment narratives into conference positioning and stakeholder engagement.",
    impact: "Strengthened Africa’s presence in global investment dialogue.",
    fallback: "UK",
  },
  {
    client: "EWLA – Expanding Access to Justice",
    context: "Legal services needed a clearer public narrative around access, trust, and institutional visibility.",
    work: "Translated service delivery into audience-focused communication and visibility strategy.",
    impact: "Improved understanding of EWLA’s role in strengthening access to justice.",
    logoUrl: brandMarks.ewla,
    fallback: "EW",
  },
  {
    client: "LonAdd HR Consultancy",
    context: "A 17-year HR legacy needed sharper positioning for a growing African market.",
    work: "Refined brand architecture, messaging, and thought-leadership direction.",
    impact: "Repositioned LonAdd as a trusted institutional voice in workforce solutions.",
    logoUrl: brandMarks.lonadd,
    fallback: "LO",
  },
  {
    client: "Ghana Cocoa Marketing Company (UK & Ghana)",
    context: "Ghana’s cocoa story required a stronger global narrative across sustainability and diaspora engagement.",
    work: "Supported strategic storytelling around industry value, market relevance, and institutional credibility.",
    impact: "Reframed cocoa as an economic, cultural, and sustainability narrative for global audiences.",
    fallback: "GC",
  },
  {
    client: "AWiB – ElevateHER Campaign",
    context: "Women leaders needed stronger profiling to inspire visibility, investment, and institutional support.",
    work: "Developed campaign narratives and profiles for over 60 women leaders.",
    impact: "Expanded public understanding of women’s leadership and influence.",
    logoUrl: brandMarks.awib,
    imageUrl: ourWorkImages.caseStudies.awib[0],
    fallback: "AW",
  },
  {
    client: "Dereja (Mastercard Foundation)",
    context: "Youth employability programmes needed storytelling that built confidence and clarity.",
    work: "Created narratives that connected youth potential with practical career readiness.",
    impact: "Strengthened communication around employability and opportunity for young audiences.",
    fallback: "DE",
  },
  {
    client: "IWMI – Climate Narrative Project",
    context: "Climate research needed to reach policy, development, and community audiences with greater clarity.",
    work: "Translated technical research into human-centred climate narratives.",
    impact: "Made sustainability evidence more accessible for decision-making and engagement.",
    logoUrl: brandMarks.iwmi,
    imageUrl: ourWorkImages.caseStudies.iwmi[0],
    fallback: "IW",
  },
  {
    client: "World Bank Group",
    context: "Complex economic data required clearer public and policy-facing communication.",
    work: "Translated research and development insights into accessible narratives.",
    impact: "Supported policy engagement through clearer economic storytelling.",
    logoUrl: brandMarks.worldBank,
    fallback: "WB",
  },
  {
    client: "ESDP",
    context: "Institutional programmes needed a clearer identity and structured communication foundation.",
    work: "Supported brand strategy, messaging, and communication materials.",
    impact: "Built stronger alignment around institutional purpose and audience engagement.",
    logoUrl: brandMarks.esdp,
    imageUrl: ourWorkImages.caseStudies.esdp[0],
    fallback: "ES",
  },
  {
    client: "Roha Medical Campus",
    context: "A major healthcare initiative needed positioning that matched its ambition and sector relevance.",
    work: "Developed strategic communication and brand-aligned storytelling.",
    impact: "Strengthened visibility for a health platform with regional significance.",
    logoUrl: brandMarks.roha,
    imageUrl: ourWorkImages.caseStudies.roha[0],
    fallback: "RO",
  },
  {
    client: "MICHU / CIRHT",
    context: "Health communication needed to connect technical priorities with public understanding.",
    work: "Supported campaign messaging, training communication, and audience-facing content.",
    impact: "Improved clarity around reproductive health education and service awareness.",
    logoUrl: brandMarks.cirht,
    imageUrl: ourWorkImages.caseStudies.michu[0],
    fallback: "CI",
  },
  {
    client: "ACSIS",
    context: "Climate and sustainability work required concise institutional visibility.",
    work: "Supported communication positioning within the broader development ecosystem.",
    impact: "Created a clearer signal for sector partners and stakeholders.",
    logoUrl: brandMarks.acsis,
    fallback: "AC",
  },
  {
    client: "Haset",
    context: "Community-focused work needed a simple, credible communication presence.",
    work: "Clarified core messaging and audience relevance.",
    impact: "Improved recognition of the organisation’s role and value.",
    fallback: "HA",
  },
];

const LogoMark = ({ item }: { item: CaseStudy }) => (
  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#efd8be] bg-[#fff7ee] text-sm font-bold text-[#8b4a16]">
    {item.logoUrl ? (
      <img src={item.logoUrl} alt={`${item.client} logo`} className="h-full w-full object-contain p-2" />
    ) : (
      item.fallback
    )}
  </div>
);

const OurWork = () => (
  <div className="bg-[#fffaf4] text-[#24150f]">
    <section className="page-hero-space section-shell">
      <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f58220] sm:text-xs">
            Work
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-[#24150f] sm:text-5xl lg:text-6xl">
            Selected Work
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#6b5542] sm:text-lg">
            We work across sectors and geographies, supporting institutions to communicate complex ideas with clarity and strategic direction.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        >
          {ourWorkImages.heroMosaic.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-[1.4rem] shadow-[0_16px_45px_rgba(61,36,15,0.12)] ${
                index % 2 === 0 ? "aspect-[1.2/1]" : "aspect-[1/1.1]"
              }`}
            >
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="section-shell section-space pt-0">
      <div className="grid gap-4 lg:grid-cols-2">
        {cases.map((item, index) => (
          <motion.article
            key={item.client}
            className="group overflow-hidden rounded-[1.6rem] border border-[#efd8be] bg-white shadow-[0_16px_50px_rgba(61,36,15,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#f58220]/50 hover:shadow-[0_24px_70px_rgba(245,130,32,0.13)]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: (index % 4) * 0.04 }}
          >
            {item.imageUrl && (
              <div className="h-28 overflow-hidden sm:h-36">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-4 sm:p-5">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <LogoMark item={item} />
                  <h2 className="font-display text-xl font-semibold leading-tight text-[#24150f] sm:text-2xl">
                    {item.client}
                  </h2>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#f58220] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="space-y-3 text-sm leading-6 text-[#6b5542]">
                <p>
                  <span className="font-semibold text-[#24150f]">Context: </span>
                  {item.context}
                </p>
                <p>
                  <span className="font-semibold text-[#24150f]">What We Did: </span>
                  {item.work}
                </p>
                <p>
                  <span className="font-semibold text-[#24150f]">Impact: </span>
                  {item.impact}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </div>
);

export default OurWork;
