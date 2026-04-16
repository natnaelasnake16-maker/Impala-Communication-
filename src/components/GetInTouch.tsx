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
      <section className="relative pt-48 pb-24 px-6 bg-prestige-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={getInTouchImages.hero}
            className="w-full h-full object-cover"
            alt="Contact background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-sans text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Let's build something <span className="text-primary italic">meaningful</span> together.
            </h1>
            <p className="font-sans text-xl md:text-2xl text-white/70 leading-relaxed">
              Whether you have a project in mind or just want to say hello, we're ready to listen and collaborate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h2 className="text-3xl font-bold text-prestige-black mb-12">Reach out directly</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-prestige-cream flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-widest text-prestige-text opacity-60 mb-1">Email Us</p>
                    <a href="mailto:info@impalacommunication.com" className="text-xl font-bold text-prestige-black hover:text-primary transition-colors">
                      info@impalacommunication.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-prestige-cream flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-widest text-prestige-text opacity-60 mb-1">Call Us</p>
                    <a href="tel:+251911000000" className="text-xl font-bold text-prestige-black hover:text-primary transition-colors">
                      +251 911 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-prestige-cream flex items-center justify-center rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-widest text-prestige-text opacity-60 mb-1">Visit Us</p>
                    <p className="text-xl font-bold text-prestige-black">
                      Addis Ababa, Ethiopia<br />
                      Bole Sub-city, Ward 03
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-primary mb-6">Follow Our Journey</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={20} />, href: "#" },
                  { icon: <Instagram size={20} />, href: "#" },
                  { icon: <Twitter size={20} />, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className="w-12 h-12 border border-prestige-gray flex items-center justify-center rounded-full text-prestige-black hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Simple Elegant Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 shadow-2xl border border-prestige-gray rounded-3xl"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-prestige-text opacity-60">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full border-b border-prestige-gray py-3 focus:border-primary outline-none transition-colors font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-prestige-text opacity-60">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full border-b border-prestige-gray py-3 focus:border-primary outline-none transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-prestige-text opacity-60">Subject</label>
                <select className="w-full border-b border-prestige-gray py-3 focus:border-primary outline-none transition-colors font-sans bg-transparent">
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Partnership</option>
                  <option>Media Request</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-prestige-text opacity-60">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your vision..."
                  className="w-full border-b border-prestige-gray py-3 focus:border-primary outline-none transition-colors font-sans resize-none"
                />
              </div>

              <button className="w-full bg-primary text-white py-5 font-display text-sm font-bold uppercase tracking-widest hover:bg-prestige-black transition-all duration-300 flex items-center justify-center gap-3 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 3. Inspirational Quote/Image Section */}
      <section className="py-24 px-6 bg-prestige-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] group">
            <img 
              src={getInTouchImages.quote}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Team collaboration"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/80 via-transparent to-transparent flex items-end p-12 md:p-20">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  "Communication is the bridge between confusion and clarity."
                </h2>
                <p className="font-sans text-white/60 uppercase tracking-widest text-sm">— Nat Turner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
