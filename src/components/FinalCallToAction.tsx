import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const FinalCallToAction = () => (
  <section className="section-shell section-space">
    <motion.div
      className="overflow-hidden rounded-[2rem] border border-[#f4d8b6]/70 bg-[#1f170f] px-5 py-8 text-center text-white shadow-[0_24px_70px_rgba(42,25,10,0.22)] sm:px-8 sm:py-10 lg:px-12"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#ffb25f] sm:text-xs">
        Start the conversation
      </p>
      <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-semibold leading-[1.05] sm:text-4xl lg:text-[3rem]">
        Ready to define your narrative and strengthen your positioning?
      </h2>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/get-in-touch"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#f58220] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f58220]/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d96f18] sm:w-auto"
        >
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          to="/get-in-touch"
          className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/18 sm:w-auto"
        >
          Start a Conversation
        </Link>
      </div>
    </motion.div>
  </section>
);

export default FinalCallToAction;
