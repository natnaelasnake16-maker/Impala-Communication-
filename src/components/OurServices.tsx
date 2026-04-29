import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, FileText, Megaphone, PenTool, Target } from "lucide-react";
import BrandStoryForge from "./BrandStoryForge";

const services = [
  {
    title: "Narrative Strategy",
    text: "Define your positioning, develop clear messaging frameworks, and map stakeholders to strengthen alignment and influence.",
    icon: Target,
  },
  {
    title: "Strategic Communication",
    text: "Design and execute communication strategies that engage key stakeholders and audiences, including investors, policymakers, and communities.",
    icon: Megaphone,
  },
  {
    title: "Content & Campaigns",
    text: "Create high-impact storytelling, multimedia content, and campaigns that translate complex ideas into compelling narratives.",
    icon: PenTool,
  },
  {
    title: "Institutional Positioning",
    text: "Support organisations in positioning themselves within Africa’s evolving economic and investment landscape.",
    icon: FileText,
  },
];

const OurServices = () => (
  <div className="bg-[#fffaf4] text-[#24150f]">
    <section className="page-hero-space section-shell">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f58220] sm:text-xs">
          Services
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-[#24150f] sm:text-5xl lg:text-6xl">
          What We Do
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#6b5542] sm:text-lg">
          We provide strategic communication and narrative advisory to help institutions define positioning, align messaging, and engage key stakeholders and audiences effectively.
        </p>
      </motion.div>
    </section>

    <section className="section-shell section-space pt-0">
      <div className="grid gap-4 lg:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              className="group rounded-[1.7rem] border border-[#efd8be] bg-white p-5 shadow-[0_18px_55px_rgba(61,36,15,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#f58220]/55 hover:shadow-[0_22px_65px_rgba(245,130,32,0.14)] sm:p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1e5] text-[#f58220] transition duration-300 group-hover:scale-105 group-hover:bg-[#f58220] group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="font-display text-2xl font-semibold text-[#24150f]">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#6b5542] sm:text-base">
                {service.text}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>

    <BrandStoryForge />

    <section className="section-shell pb-12 sm:pb-16">
      <div className="flex flex-col gap-4 rounded-[1.6rem] border border-[#efd8be] bg-white px-5 py-5 shadow-[0_14px_45px_rgba(61,36,15,0.07)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="max-w-2xl font-display text-xl font-semibold leading-snug text-[#24150f] sm:text-2xl">
          Ready to define your narrative and strengthen your positioning?
        </p>
        <Link
          to="/get-in-touch"
          className="inline-flex items-center justify-center rounded-full bg-[#f58220] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d96f18]"
        >
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default OurServices;
