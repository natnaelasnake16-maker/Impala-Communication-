import { motion } from "motion/react";
import { ArrowRight, CalendarDays, Mail, MapPin, Send } from "lucide-react";
import { getInTouchImages } from "../lib/images";

const GetInTouch = () => (
  <div className="bg-[#fffaf4] text-[#24150f]">
    <section className="relative overflow-hidden bg-[#1f170f] text-white">
      <div className="absolute inset-0">
        <img
          src={getInTouchImages.hero}
          className="h-full w-full object-cover"
          alt=""
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f170f]/78 via-[#1f170f]/54 to-[#1f170f]/20" />
      </div>
      <div className="page-hero-space section-shell relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#ffb25f] sm:text-xs">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Work With Us
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
            If you are looking to define your narrative, strengthen your positioning, or engage key stakeholders and audiences—we would be glad to connect.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-shell section-space">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[1.6rem] border border-[#efd8be] bg-white p-5 shadow-[0_16px_50px_rgba(61,36,15,0.08)] sm:p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1e5] text-[#f58220]">
              <Mail className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-display text-2xl font-semibold">Email Address</h2>
            <a
              href="mailto:info@impalacommunication.com"
              className="mt-3 block break-all text-sm font-semibold text-[#6b5542] transition hover:text-[#f58220] sm:text-base"
            >
              info@impalacommunication.com
            </a>
          </div>

          <a
            href="mailto:info@impalacommunication.com?subject=Schedule%20a%20Conversation"
            className="group flex items-center justify-between rounded-[1.6rem] border border-[#efd8be] bg-[#24150f] p-5 text-white shadow-[0_18px_55px_rgba(61,36,15,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#2e1d13] sm:p-6"
          >
            <span>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#ffb25f]">
                <CalendarDays className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="mt-4 block font-display text-2xl font-semibold">
                Schedule a Conversation
              </span>
            </span>
            <ArrowRight className="h-5 w-5 text-[#ffb25f] transition duration-300 group-hover:translate-x-1" />
          </a>

          <div className="rounded-[1.6rem] border border-[#efd8be] bg-white p-5 shadow-[0_16px_50px_rgba(61,36,15,0.08)] sm:p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1e5] text-[#f58220]">
              <MapPin className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-display text-2xl font-semibold">Location</h2>
            <p className="mt-3 text-sm leading-7 text-[#6b5542] sm:text-base">
              Addis Ababa, Ethiopia
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[1.8rem] border border-[#efd8be] bg-white p-5 shadow-[0_20px_65px_rgba(61,36,15,0.1)] sm:p-7"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#f58220]">
            Contact Form
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#24150f]">
            Tell us what you are building.
          </h2>
          <form className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8b7563]">
                  Full Name
                </span>
                <input
                  type="text"
                  className="mt-2 w-full border-b border-[#d8c1a9] bg-transparent py-3 text-sm outline-none transition focus:border-[#f58220]"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8b7563]">
                  Email Address
                </span>
                <input
                  type="email"
                  className="mt-2 w-full border-b border-[#d8c1a9] bg-transparent py-3 text-sm outline-none transition focus:border-[#f58220]"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8b7563]">
                Organisation
              </span>
              <input
                type="text"
                className="mt-2 w-full border-b border-[#d8c1a9] bg-transparent py-3 text-sm outline-none transition focus:border-[#f58220]"
                placeholder="Organisation or institution"
              />
            </label>
            <label className="block">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#8b7563]">
                Message
              </span>
              <textarea
                rows={4}
                className="mt-2 w-full resize-none border-b border-[#d8c1a9] bg-transparent py-3 text-sm outline-none transition focus:border-[#f58220]"
                placeholder="Tell us about your goals, audiences, or project."
              />
            </label>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#f58220] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d96f18] sm:w-auto"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  </div>
);

export default GetInTouch;
