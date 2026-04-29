import { motion } from "motion/react";
import { CalendarDays, Mail, Send } from "lucide-react";
import { getInTouchImages } from "../lib/images";

const GetInTouch = () => {
  return (
    <div className="min-h-screen bg-prestige-white">
      <section className="relative page-hero-space section-shell overflow-hidden bg-prestige-black text-white">
        <div className="absolute inset-0">
          <img
            src={getInTouchImages.hero}
            className="h-full w-full object-cover"
            alt="Contact background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-black/46 via-prestige-black/26 to-prestige-black/12" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="mb-4 block font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs">
              Contact
            </span>
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl lg:text-5xl xl:text-6xl">
              Work With <span className="text-primary italic">Us</span>
            </h1>
            <p className="font-sans text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
              If you are looking to define your narrative, strengthen your positioning, or engage key stakeholders and audiences—we would be glad to connect.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-space section-shell">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-7"
          >
            <div>
              <span className="mb-3 block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                Contact Options
              </span>
              <h2 className="text-2xl font-bold leading-tight text-prestige-black sm:text-3xl">
                Start the conversation with the right context.
              </h2>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:info@impalacommunication.com"
                className="group flex items-start gap-4 rounded-[1.35rem] border border-prestige-gray bg-white p-4 shadow-[0_18px_50px_rgba(26,18,12,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_22px_60px_rgba(241,90,41,0.12)] sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-prestige-cream text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="mb-1 block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-prestige-text/60">
                    Email Us
                  </span>
                  <span className="break-all text-base font-bold text-prestige-black transition-colors group-hover:text-primary sm:text-lg">
                    info@impalacommunication.com
                  </span>
                </span>
              </a>

              <a
                href="mailto:info@impalacommunication.com?subject=Schedule%20a%20Conversation"
                className="group flex items-center justify-between gap-4 rounded-[1.35rem] border border-primary/20 bg-primary p-4 text-white shadow-[0_24px_70px_rgba(241,90,41,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-prestige-black hover:shadow-[0_26px_80px_rgba(26,18,12,0.2)] sm:p-5"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-sm sm:h-12 sm:w-12">
                    <CalendarDays size={20} />
                  </span>
                  <span>
                    <span className="mb-1 block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                      Preferred Next Step
                    </span>
                    <span className="text-base font-bold sm:text-lg">
                      Schedule a Conversation
                    </span>
                  </span>
                </span>
                <span className="font-sans text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.7rem] border border-prestige-gray bg-white p-5 shadow-2xl sm:p-6 lg:p-8"
          >
            <form className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-b border-prestige-gray py-2.5 font-sans text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-b border-prestige-gray py-2.5 font-sans text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60">
                  Subject
                </label>
                <select className="w-full border-b border-prestige-gray bg-transparent py-2.5 font-sans text-sm outline-none transition-colors focus:border-primary">
                  <option>Strategic Communication</option>
                  <option>Narrative Advisory</option>
                  <option>Partnership</option>
                  <option>Schedule a Conversation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals, audiences, or project."
                  className="w-full resize-none border-b border-prestige-gray py-2.5 font-sans text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <button className="group flex w-full items-center justify-center gap-3 bg-primary py-3.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-prestige-black sm:text-sm">
                Send Message
                <Send
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
