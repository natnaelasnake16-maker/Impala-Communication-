import { motion } from "motion/react";
import { Briefcase, Home, Layers, UserPlus, Wind } from "lucide-react";
import { homeImages } from "../lib/images";

export default function PrioritiesSection() {
  const priorities = [
    {
      title: "Empowering Women",
      icon: <UserPlus size={32} />,
      image: homeImages.priorities.empoweringWomen,
      desc: "We amplify her voice, harness her power, and highlight her leadership and resilience. Through strategic narrative development and media advocacy, we ensure that women’s contributions to families, communities, and society are recognized and celebrated on a global stage.",
    },
    {
      title: "Climate Change",
      icon: <Wind size={32} />,
      image: homeImages.priorities.climateChange,
      desc: "We address climate change through innovative communication campaigns and advocacy efforts that promote environmental sustainability and resilience. By leveraging PR and media engagement, we raise awareness, mobilize action, and influence policies that drive lasting change.",
    },
    {
      title: "Youth Employment",
      icon: <Briefcase size={32} />,
      image: homeImages.priorities.youthEmployment,
      desc: "We focus on projects that empower young individuals with the skills and opportunities they need to succeed in the workforce and contribute to economic growth. Through public engagement and thought leadership, we help shape narratives that inspire investment in youth potential.",
    },
    {
      title: "Community Development",
      icon: <Home size={32} />,
      image: homeImages.priorities.communityDevelopment,
      desc: "We foster sustainable development initiatives that uplift communities, improve livelihoods, and create positive social change. By crafting compelling narratives and building strategic partnerships, we amplify grassroots voices and drive real impact.",
    },
    {
      title: "Gender Equality",
      icon: <Layers size={32} />,
      image: homeImages.priorities.genderEquality,
      desc: "We champion gender equality by amplifying women’s voices, advancing their rights, and promoting inclusivity. Through media advocacy and thought leadership, we challenge stereotypes, spark conversations, and influence systemic change.",
    },
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
          {priorities.map((priority, index) => (
            <motion.div
              key={priority.title}
              whileHover={{ y: -8 }}
              className="relative h-[280px] sm:h-[300px] lg:h-[320px] overflow-hidden group cursor-pointer shadow-xl"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={priority.image}
                  alt={priority.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/50 via-prestige-black/22 to-transparent group-hover:bg-primary/60 transition-colors duration-500" />
              </div>

              <div className="relative z-10 h-full p-5 sm:p-6 lg:p-7 flex flex-col justify-center text-white text-center items-center">
                <div className="mb-4 text-primary group-hover:text-white transition-colors duration-300">
                  {priority.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 uppercase tracking-[0.12em]">
                  {priority.title}
                </h3>
                <p className="max-w-xs font-sans text-xs sm:text-sm opacity-80 leading-relaxed">
                  {priority.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
