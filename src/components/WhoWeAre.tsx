import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  PenTool, 
  Film, 
  Globe, 
  Eye, 
  Handshake, 
  Network, 
  BarChart3, 
  Flame, 
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Heart,
  Users,
  ShieldCheck,
  Zap,
  Target,
  BookOpen,
  Activity,
  UserCheck,
  Leaf,
  Smartphone
} from "lucide-react";
import { whoWeAreImages } from "../lib/images";
import FinalCallToAction from "./FinalCallToAction";
import RoadAhead from "./RoadAhead";
import SDGSection from "./SDGSection";

const WhoWeAre = () => {
  const values = [
    {
      title: "Insight",
      icon: <Eye size={32} />,
      desc: "We take the time to understand every challenge deeply. No communication begins without clarity on strategy, audience, and the desired outcome."
    },
    {
      title: "Partnership",
      icon: <Handshake size={32} />,
      desc: "We build long-term partnerships with our clients, enabling deeper understanding and sustainable impact over time."
    },
    {
      title: "Integration",
      icon: <Network size={32} />,
      desc: "Effective communication requires synergy. We bring together multidisciplinary expertise to ensure consistent and impactful messaging."
    },
    {
      title: "Proof",
      icon: <BarChart3 size={32} />,
      desc: "Measurement is essential. From the start, we define outcomes and track impact to ensure our work creates real, measurable change."
    },
    {
      title: "Passion",
      icon: <Flame size={32} />,
      desc: "We are driven by purpose. The belief that communication can change lives is what motivates everything we do."
    }
  ];

  const initiatives = [
    { title: "Education Enhancement Project", icon: <BookOpen size={18} /> },
    { title: "Healthcare Access Initiative", icon: <Activity size={18} /> },
    { title: "Diversity and Inclusion Training Program", icon: <Users size={18} /> },
    { title: "Women’s Economic Empowerment Program", icon: <UserCheck size={18} /> },
    { title: "Environmental Conservation Campaign", icon: <Leaf size={18} /> },
    { title: "Community Infrastructure Development Project", icon: <Target size={18} /> },
    { title: "SME Support Initiative", icon: <Zap size={18} /> },
    { title: "Supply Chain Sustainability Project", icon: <ShieldCheck size={18} /> },
    { title: "Digital Literacy Initiative", icon: <Smartphone size={18} /> }
  ];

  return (
    <div className="bg-prestige-white">
      {/* 1. Hero Section */}
      <section className="relative page-hero-space section-shell bg-prestige-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={whoWeAreImages.hero}
            className="w-full h-full object-cover"
            alt="Office background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-black/48 via-prestige-black/28 to-prestige-black/12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              A dedicated team of communication experts driving meaningful social change.
            </h1>
            <p className="font-sans text-lg sm:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-12 leading-relaxed max-w-2xl">
              Impala Communication operates at the intersection of communication, investment, and institutional strategy — shaping how Africa’s transformation is positioned, understood, and engaged with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/our-work" className="w-full sm:w-auto text-center bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
                Explore Our Work
              </Link>
              <Link to="/get-in-touch" className="w-full sm:w-auto text-center border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-prestige-black transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Impala - Story Section */}
      <section className="section-space section-shell">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={whoWeAreImages.about}
                  alt="Impala Communication team at work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-primary/10 -z-10 rounded-lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                About Impala Communication
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prestige-black mb-6 sm:mb-8 leading-tight">
                More Than a Company — <br />A Purpose-Driven Journey
              </h2>
              <div className="font-sans text-prestige-text space-y-5 sm:space-y-6 leading-relaxed text-base sm:text-lg">
                <p>
                  Impala Communication is not just a company; it is a passion project born from a deep-rooted desire to rewrite the narrative of Ethiopia and Africa.
                </p>
                <p>
                  Founded by a husband and wife team, Meron and Terusew, Impala began with a vision to showcase the beauty, resilience, and complexity of our continent and its people. Their mission was deeply personal — to ensure their daughters grow up proud of their identity and culture.
                </p>
                <p>
                  In 2011, they returned to Ethiopia to bring this vision to life. Since then, Impala has remained committed to humanizing narratives, tackling challenging topics with dignity, and ensuring every narrative is told with care and respect.
                </p>
                <p>
                  Today, our work extends beyond storytelling into shaping institutional narratives that influence investment, policy, and global perception.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our Story + Our Commitment */}
      <section className="py-14 sm:py-16 lg:py-20 section-shell bg-prestige-black text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-primary mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6">
              Turning positioning into momentum
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/74 leading-relaxed max-w-3xl">
              Through our proprietary BrandStory Forge™ model, we transform complex social, economic, and investment narratives into movements that build trust, inspire collaboration, and unlock opportunity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="grid gap-3"
          >
            {[
              {
                icon: ShieldCheck,
                text: "Build trust and credibility with local and global audiences",
              },
              {
                icon: Globe,
                text: "Position institutions as leaders in Africa’s transformation",
              },
              {
                icon: Users,
                text: "Inspire collaboration across public, private, and diaspora sectors",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 sm:px-5 sm:py-5 flex items-start gap-4"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary shadow-[0_0_18px_rgba(241,90,41,0.25)]">
                    <Icon size={18} strokeWidth={1.9} />
                  </div>
                  <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-white/78">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. Our Story + Our Commitment */}
      <section className="bg-prestige-gray section-space section-shell">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-24">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            <div className="flex gap-4 sm:gap-6 lg:gap-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white flex items-center justify-center rounded-full shadow-sm shrink-0 text-primary">
                <PenTool size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-prestige-black mb-4">Our Story</h3>
                <p className="font-sans text-prestige-text leading-relaxed">
                  We employ a wide range of communication techniques to deliver effective results. These include communication strategy, message development, narrative development, visual identity and brand building, campaign creation, digital media production, as well as print and publication services.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 lg:gap-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white flex items-center justify-center rounded-full shadow-sm shrink-0 text-primary">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-prestige-black mb-4">Our Commitment</h3>
                <p className="font-sans text-prestige-text leading-relaxed">
                  We are committed to supporting advocacy efforts and promoting positive social and environmental action. Whether identifying opportunities for impact, promoting sustainability initiatives, or implementing responsible and diverse practices, we help organizations communicate their commitments clearly and effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 sm:pt-10 lg:pt-12 border-t border-prestige-black/5">
            <p className="text-2xl sm:text-3xl font-bold text-primary italic">
              Together, let’s create a better future for all.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Impact Stats Section */}
      <section className="section-space section-shell bg-prestige-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 sm:mb-12 lg:mb-16">
            This Year, We Are Going Bigger Than Ever
          </h2>
          <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {[
              { val: "12+", label: "Years", sub: "Experience" },
              { val: "100+", label: "Projects", sub: "Delivered" },
              { val: "1M+", label: "Reach", sub: "People impacted" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8 backdrop-blur-sm shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-primary/70 hover:bg-white/8 hover:shadow-[0_24px_45px_rgba(0,0,0,0.24)]"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">{stat.val}</div>
                <div className="text-sm sm:text-base font-bold uppercase tracking-[0.22em] mb-1.5">{stat.label}</div>
                <div className="font-sans text-[11px] sm:text-xs text-white/45 uppercase tracking-[0.22em]">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Where We Are Currently Working */}
      <section className="py-16 sm:py-20 lg:py-24 section-shell bg-prestige-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Our Current Focus
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prestige-black mb-6">
              Where We Are Currently Working
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              "Financial sector transformation and banking positioning",
              "Investment and capital market narratives",
              "Institutional profiling and global visibility",
              "Industrial and sector positioning",
              "Global value chain narratives",
              "High-growth African enterprise positioning"
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 border border-prestige-gray flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <p className="font-sans text-prestige-black font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Values */}
      <section className="section-space section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prestige-black">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-6 sm:p-8 lg:p-10 bg-prestige-cream border border-prestige-gray hover:border-primary transition-all duration-300"
              >
                <div className="text-primary mb-6">{v.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-prestige-black mb-4">{v.title}</h3>
                <p className="font-sans text-prestige-text leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Visual Story Strip */}
      <section className="flex overflow-hidden h-[220px] sm:h-[280px] lg:h-[400px]">
        {whoWeAreImages.visualStrip.map((img, i) => (
          <div key={i} className="flex-1 relative group cursor-pointer overflow-hidden">
            <img 
              src={img}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt={`Story strip ${i}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </section>

      {/* 7. Impact Statement */}
      <section className="section-space section-shell bg-prestige-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-5xl sm:text-6xl font-display block mb-6 sm:mb-8">“</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-prestige-black leading-tight italic">
              Empowering Communities: Leveraging over 12 years of experience, we have impacted the lives of thousands across Ethiopia and Sub-Saharan Africa, catalysing change through effective communication strategies.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 8. Social Impact Initiatives */}
      <section className="section-space section-shell bg-prestige-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prestige-black mb-6">
              Our Focus on Social Impact Initiatives
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {initiatives.map((item, i) => (
              <div key={i} className="bg-white p-5 sm:p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="text-primary shrink-0">{item.icon}</div>
                <span className="font-sans text-sm font-bold text-prestige-black uppercase tracking-wide">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SDGSection />
      <RoadAhead />
      <FinalCallToAction />
    </div>
  );
};

export default WhoWeAre;
