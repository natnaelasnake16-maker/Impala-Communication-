import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  clientWallClients,
  featuredClientStrip,
  type ClientLogo,
} from "../lib/images";
import FinalCallToAction from "./FinalCallToAction";

const ClientBadge = ({ client }: { client: ClientLogo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative flex h-20 sm:h-24 items-center justify-center rounded-xl border border-prestige-gray bg-[#F9F6F2] px-3.5 py-3 sm:px-4 sm:py-3.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04),0_6px_14px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-primary/30 overflow-hidden"
    >
      {/* Shine Sweep Animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(241,90,41,0.1)]" />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src={client.logoUrl}
          alt={client.alt}
          className="h-8 sm:h-9 lg:h-10 w-full max-w-[120px] object-contain"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </motion.div>
  );
};

const Clients = () => {
  return (
    <div className="bg-prestige-white">
      {/* 1. Hero Section */}
      <section className="relative page-hero-space section-shell bg-gradient-to-br from-[#E26B39] via-[#D15C2E] to-[#A8451F] text-white overflow-hidden">
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none noise-overlay" />
        
        {/* Floating Blurred Logo Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -40, 0],
                x: [0, 20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 1.5
              }}
              className="absolute text-white/5 blur-sm font-display text-3xl lg:text-5xl font-bold uppercase tracking-tighter"
              style={{ 
                top: `${15 + i * 15}%`, 
                left: `${10 + i * 15}%` 
              }}
            >
              IMPALA
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-white/60 mb-4 block">
              Trusted By
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Organizations shaping Africa and the world
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              We collaborate with institutions, governments, and global organizations to drive meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Client Strip */}
      <section className="py-6 sm:py-8 lg:py-9 bg-prestige-gray overflow-hidden border-b border-prestige-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 mb-4 sm:mb-5">
          <h4 className="font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-prestige-text text-center">Strategic Partnerships</h4>
        </div>
        <div className="flex gap-5 sm:gap-6 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-5 sm:gap-6 items-center">
              {featuredClientStrip.map((client) => (
                <div key={client.slug} className="bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl shadow-sm border border-prestige-gray flex items-center justify-center min-w-[130px] sm:min-w-[160px] lg:min-w-[190px]">
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
          ))}
        </div>
      </section>

      {/* 3. Compact Logo Grid */}
      <section className="section-space section-shell">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {clientWallClients.map((client) => (
              <div key={client.slug}>
                <ClientBadge client={client} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Signal Section */}
      <section className="section-space section-shell bg-prestige-cream border-y border-prestige-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black mb-4 sm:mb-5">
            Over 12 years of trusted partnerships
          </h2>
          <p className="font-sans text-sm sm:text-base text-prestige-text mb-8 sm:mb-10 leading-relaxed">
            Working across sectors, regions, and communities to deliver communication that creates real impact.
          </p>
          
          <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { val: "100+", label: "Projects Delivered" },
              { val: "1M+", label: "People Reached" },
              { val: "Multi-sector", label: "Collaboration" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl border border-prestige-gray bg-white px-4 py-5 sm:px-5 sm:py-6 shadow-[0_14px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-primary/40 hover:shadow-[0_18px_36px_rgba(0,0,0,0.08)]"
              >
                <span className="block text-2xl sm:text-[1.7rem] font-bold text-primary mb-2">{stat.val}</span>
                <span className="block font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-70">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCallToAction />

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Clients;
