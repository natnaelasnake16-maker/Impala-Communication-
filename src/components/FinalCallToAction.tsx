import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { whoWeAreImages } from "../lib/images";

export default function FinalCallToAction() {
  return (
    <section className="section-space section-shell bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-prestige-black text-white shadow-[0_30px_80px_rgba(10,10,10,0.24)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,90,41,0.22),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="absolute inset-0 noise-overlay opacity-20" />

        <div className="relative z-10 grid items-stretch lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="mb-5 h-1 w-16 bg-primary sm:mb-6 sm:w-20" />
            <h2 className="max-w-2xl text-3xl font-bold leading-[1.04] sm:text-4xl lg:text-[3.35rem]">
              Ready to define your narrative and strengthen your positioning?
            </h2>
            <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/74 sm:mt-6 sm:text-base lg:text-lg">
              Let’s shape Africa’s next chapter — together.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Link
                to="/get-in-touch"
                className="inline-flex min-h-11 items-center justify-center rounded-[1rem] bg-white px-6 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-prestige-black transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Contact Us
              </Link>
              <Link
                to="/our-work"
                className="inline-flex min-h-11 items-center justify-center rounded-[1rem] border border-white/18 bg-white/6 px-6 py-3 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-primary hover:bg-primary/16"
              >
                Start a Conversation
              </Link>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
            <img
              src={whoWeAreImages.about}
              alt="Impala Communication team in discussion"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08)_0%,rgba(10,10,10,0.22)_100%)] lg:bg-[linear-gradient(90deg,rgba(10,10,10,0.54)_0%,rgba(10,10,10,0.08)_38%,rgba(10,10,10,0.18)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(241,90,41,0.35),transparent_32%)]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/12 bg-prestige-black/55 px-4 py-4 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-5 sm:px-5">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-primary/90">
                Start the Conversation
              </p>
              <p className="mt-2 text-base font-semibold leading-snug text-white sm:text-lg">
                Strengthen your positioning with clear, strategic communication.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
