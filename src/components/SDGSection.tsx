import { useState } from "react";
import { motion } from "motion/react";
import { 
  HeartPulse,
  GraduationCap,
  Sparkles,
  Compass,
  Scale,
  CloudRain,
  Handshake,
  ChevronDown,
  ChevronRight
} from "lucide-react";

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
    <section className="bg-prestige-cream py-10 sm:py-14 lg:py-16 section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Global Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-prestige-black mb-4">
            Global Development Sustainability Goals (SDGs)
          </h2>
          <p className="font-sans text-sm sm:text-base text-prestige-text max-w-3xl mx-auto leading-relaxed">
            Impala Communication’s services and programmes contribute directly and indirectly to key Sustainable Development Goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {sdgs.map((sdg, i) => (
            <motion.div 
              key={i}
              className="bg-white border border-prestige-gray overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setExpandedId(expandedId === sdg.id ? null : sdg.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-prestige-gray/30 transition-colors gap-3"
              >
                <div className="flex items-center gap-3">
                  {sdg.icon}
                  <div>
                    <span className="block text-[9px] font-bold text-primary uppercase tracking-[0.18em]">{sdg.id}</span>
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
                <div className="p-4 sm:p-5 pt-0 font-sans text-[11px] sm:text-xs text-prestige-text leading-relaxed border-t border-prestige-gray/50">
                  {sdg.desc}
                  <button className="mt-3 flex items-center gap-1 text-primary font-bold uppercase tracking-[0.16em] text-[9px] sm:text-[10px]">
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

export default SDGSection;
