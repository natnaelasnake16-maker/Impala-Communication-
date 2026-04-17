import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function FinalCallToAction() {
  return (
    <section className="section-space section-shell bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] bg-prestige-black px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16 text-center text-white shadow-[0_30px_80px_rgba(10,10,10,0.25)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(241,90,41,0.22),transparent_44%)]" />
        <div className="absolute inset-0 noise-overlay opacity-25" />

        <div className="relative z-10">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.32em] text-primary mb-4 block">
            Final CTA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Let’s shape Africa’s next chapter — together.
          </h2>
          <Link
            to="/get-in-touch"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.24em] text-prestige-black transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
