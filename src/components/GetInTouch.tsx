import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  ArrowRight,
  Globe,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";
import { getInTouchImages } from "../lib/images";

const GetInTouch = () => {
  return (
    <div className="bg-prestige-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative page-hero-space section-shell bg-prestige-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={getInTouchImages.hero}
            className="w-full h-full object-cover"
            alt="Contact background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prestige-black/46 via-prestige-black/26 to-prestige-black/12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-primary mb-4 block">
              Contact
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Work With <span className="text-primary italic">Us</span>
            </h1>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
              If you are looking to define your narrative, strengthen your positioning, or engage key stakeholders and audiences—we would be glad to connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Content */}
      <section className="section-space section-shell">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-10 lg:space-y-12"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-prestige-black mb-6 sm:mb-8">Contact Options</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-prestige-cream flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60 mb-1">Email Us</p>
                    <a href="mailto:info@impalacommunication.com" className="text-base sm:text-lg font-bold text-prestige-black hover:text-primary transition-colors break-all sm:break-normal">
                      info@impalacommunication.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-prestige-cream flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60 mb-1">Call Us</p>
                    <a href="tel:+251911000000" className="text-base sm:text-lg font-bold text-prestige-black hover:text-primary transition-colors">
                      +251 911 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-prestige-cream flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60 mb-1">Visit Us</p>
                    <p className="text-base sm:text-lg font-bold text-prestige-black">
                      Addis Ababa, Ethiopia<br />
                      Bole Sub-city, Ward 03
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right: Simple Elegant Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-5 sm:p-6 lg:p-8 shadow-2xl border border-prestige-gray rounded-[1.7rem]"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full border-b border-prestige-gray py-2.5 text-sm focus:border-primary outline-none transition-colors font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full border-b border-prestige-gray py-2.5 text-sm focus:border-primary outline-none transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60">Subject</label>
                <select className="w-full border-b border-prestige-gray py-2.5 text-sm focus:border-primary outline-none transition-colors font-sans bg-transparent">
                  <option>Strategic Communication</option>
                  <option>Narrative Advisory</option>
                  <option>Partnership</option>
                  <option>Schedule a Conversation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-prestige-text opacity-60">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your goals, audiences, or project."
                  className="w-full border-b border-prestige-gray py-2.5 text-sm focus:border-primary outline-none transition-colors font-sans resize-none"
                />
              </div>

              <button className="w-full bg-primary text-white py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-prestige-black transition-all duration-300 flex items-center justify-center gap-3 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default GetInTouch;
