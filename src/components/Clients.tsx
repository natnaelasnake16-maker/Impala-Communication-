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
      className="group relative flex h-24 sm:h-28 items-center justify-center rounded-xl border border-prestige-gray bg-[#F9F6F2] px-4 py-3 sm:px-5 sm:py-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04),0_6px_14px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-primary/30 overflow-hidden"
    >
      {/* Shine Sweep Animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(241,90,41,0.1)]" />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src={client.logoUrl}
          alt={client.alt}
          className="h-10 sm:h-11 lg:h-12 w-full max-w-[140px] object-contain"
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
              className="absolute text-white/5 blur-sm font-display text-4xl lg:text-6xl font-bold uppercase tracking-tighter"
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
            <span className="font-sans text-xs font-bold uppercase tracking-[0.4em] text-white/60 mb-6 block">
              Trusted By
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Organizations shaping Africa and the world
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              We collaborate with institutions, governments, and global organizations to drive meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Client Strip */}
      <section className="py-8 sm:py-10 lg:py-12 bg-prestige-gray overflow-hidden border-b border-prestige-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
          <h4 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-prestige-text text-center">Strategic Partnerships</h4>
        </div>
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center">
              {featuredClientStrip.map((client) => (
                <div key={client.slug} className="bg-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl shadow-sm border border-prestige-gray flex items-center justify-center min-w-[160px] sm:min-w-[200px] lg:min-w-[250px]">
                  <img
                    src={client.logoUrl}
                    alt={client.alt}
                    className="h-10 sm:h-12 w-full object-contain"
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
            {clientWallClients.map((client) => (
              <ClientBadge key={client.slug} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust Signal Section */}
      <section className="section-space section-shell bg-prestige-cream border-y border-prestige-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-prestige-black mb-6 sm:mb-8">
            Over 12 years of trusted partnerships
          </h2>
          <p className="font-sans text-base sm:text-lg text-prestige-text mb-10 sm:mb-16 leading-relaxed">
            Working across sectors, regions, and communities to deliver communication that creates real impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { val: "100+", label: "Projects Delivered" },
              { val: "1M+", label: "People Reached" },
              { val: "Multi-sector", label: "Collaboration" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.val}</span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-prestige-text opacity-60">{stat.label}</span>
              </div>
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
