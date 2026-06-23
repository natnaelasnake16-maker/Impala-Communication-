/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import WhoWeAre from "./components/WhoWeAre";
import OurServices from "./components/OurServices";
import OurWork from "./components/OurWork";
import Clients from "./components/Clients";
import Approach from "./components/Approach";
import Sectors from "./components/Sectors";
import GetInTouch from "./components/GetInTouch";
import FinalCallToAction from "./components/FinalCallToAction";
import { brandAssets, brandMarks, homeImages, homeTickerClients, ourServicesImages, ourWorkImages } from "./lib/images";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronRight,
  Compass,
  EyeOff,
  Flag,
  Fingerprint,
  Globe,
  Handshake,
  Lightbulb,
  Menu,
  MessageSquare,
  Network,
  Send,
  ShieldCheck,
  Target,
  Users,
  X,
} from "lucide-react";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

const BrandLogo = ({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <span className={className}>
      <img
        src={brandAssets.impalaLogo}
        alt="Impala Communication logo"
        className={imageClassName}
        referrerPolicy="no-referrer"
      />
    </span>
  );
};

const TypewriterText = ({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) => {
  return (
    <span className="block whitespace-pre-wrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: delayOffset + index * 0.04,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/who-we-are" },
  { name: "Services", href: "/our-services" },
  { name: "Approach", href: "/approach" },
  { name: "Our Work", href: "/our-work" },
  { name: "Clients", href: "/clients" },
  { name: "Sectors", href: "/sectors" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-2.5 sm:py-3 shadow-sm"
          : "bg-white/68 backdrop-blur-lg border-b border-white/40 py-3 sm:py-4 lg:py-5 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 flex justify-between items-center gap-3 sm:gap-4">
        <Link to="/" className="flex items-center gap-3">
          <BrandLogo
            className="inline-flex"
            imageClassName="h-8 sm:h-10 lg:h-12 w-auto"
          />
          <div className="text-primary font-sans text-[8px] sm:text-[9px] lg:text-[10px] font-semibold uppercase tracking-[0.1em] leading-tight flex-col hidden sm:flex mt-2.5 sm:mt-3 lg:mt-3.5">
            <TypewriterText text="For When Communication" delayOffset={0.2} />
            <TypewriterText text="Can Change Lives" delayOffset={0.2 + "For When Communication".length * 0.04} />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-prestige-black hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link to="/get-in-touch" className="border-2 border-primary text-primary px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.16em] hover:bg-primary hover:text-white transition-all duration-300">
            Get In Touch
          </Link>
        </div>

        <button
          className="lg:hidden text-prestige-black shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-4 sm:py-5 px-4 sm:px-5 lg:hidden flex flex-col gap-4 sm:gap-5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-display text-base sm:text-lg font-medium uppercase tracking-[0.16em] text-prestige-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/get-in-touch"
            className="bg-primary text-white px-5 py-3 font-display text-sm sm:text-base font-semibold uppercase tracking-[0.16em] text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden sm:min-h-[96svh]">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={homeImages.hero}
          alt="Impala Communication team collaboration"
          className="h-full w-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/52 via-prestige-black/32 to-prestige-black/14" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-4 text-[2rem] font-bold leading-[1.03] text-balance uppercase tracking-tight sm:mb-5 sm:text-[2.65rem] md:text-[3.25rem] lg:text-[3.85rem] xl:text-[4.5rem]">
            Building Trust, Confidence and Long-Term Success Through{" "}
            <br />
            <span className="text-[#ff6a1a] italic font-light drop-shadow-[0_0_18px_rgba(255,106,26,0.38)]">Strategic Communication</span>
          </h1>
          <p className="mx-auto mb-6 max-w-3xl font-sans text-base leading-relaxed opacity-90 sm:mb-7 sm:text-lg md:text-[1.18rem] lg:text-[1.26rem]">
            Impala Communication is an African strategic communication consultancy that partners with organisations to help communicate their vision, achievements, and value with clarity, building trust, strengthening stakeholder confidence, and supporting long-term success.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/our-work" className="w-full sm:w-auto bg-primary text-white px-5 sm:px-7 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-primary transition-all duration-300 shadow-xl">
              Explore Our Work
            </Link>
            <Link to="/get-in-touch" className="w-full sm:w-auto border-2 border-white text-white px-5 sm:px-7 py-3 sm:py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-prestige-black transition-all duration-300">
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustedByCarousel = () => {
  const clients = [...homeTickerClients, ...homeTickerClients];

  return (
    <section className="relative overflow-hidden bg-white pt-8 sm:pt-10 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-col gap-2 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-[13px]">
            Trusted By
          </p>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-prestige-text sm:text-base">
            Organisations and partners whose work depends on clarity, credibility, and stakeholder confidence.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden border-y border-[#d9cec1] bg-white py-3 shadow-[0_20px_70px_rgba(36,25,17,0.07)] sm:py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />
        <div className="flex w-max animate-logo-marquee items-center gap-4 will-change-transform hover:[animation-play-state:paused] sm:gap-5">
          {clients.map((client, index) => (
            <div
              key={`${client.slug}-${index}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center rounded-[0.85rem] border border-[#ded4c8] bg-white/78 px-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/34 hover:bg-white hover:shadow-[0_16px_36px_rgba(241,90,41,0.12)] sm:h-[4.9rem] sm:w-[11.75rem]"
              aria-hidden={index >= homeTickerClients.length}
            >
              <img
                src={client.logoUrl}
                alt={index < homeTickerClients.length ? client.alt : ""}
                className={`w-auto object-contain object-center transition-all duration-300 ${
                  client.slug === "ewla"
                    ? "max-h-12 max-w-[9.5rem] sm:max-h-[3.7rem] sm:max-w-[10.75rem]"
                    : "max-h-10 max-w-[7.6rem] sm:max-h-12 sm:max-w-[9rem]"
                }`}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyThisMatters = () => {
  const points = [
    {
      text: "Achievements need clarity to create conviction.",
      icon: Target,
    },
    {
      text: "Stakeholders need context to align and support.",
      icon: Network,
    },
    {
      text: "Reputation is earned through consistent truth.",
      icon: Fingerprint,
    },
    {
      text: "Confidence grows when leadership is understood.",
      icon: Send,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4eee5] pt-8 sm:pt-9 lg:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.6 }}
        className="group relative min-h-[760px] overflow-hidden bg-[#2a211c] shadow-[0_28px_90px_rgba(36,25,17,0.18)] sm:min-h-[720px] lg:h-[31.9vw] lg:min-h-[490px] lg:max-h-[620px]"
      >
        <img
          src={ourServicesImages.successAlone}
          alt="Impala Communication strategy discussion"
          className="absolute inset-0 h-full w-full object-cover object-[61%_center] opacity-100 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,23,19,0.58)_0%,rgba(35,27,22,0.34)_36%,rgba(35,27,22,0.1)_63%,rgba(30,23,19,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(241,90,41,0.14),transparent_24%),linear-gradient(180deg,rgba(61,45,35,0.02),rgba(35,27,22,0.2))]" />

        <div className="relative z-10 flex min-h-[760px] w-full flex-col justify-between gap-6 px-4 py-5 sm:min-h-[720px] sm:px-7 sm:py-8 lg:block lg:h-full lg:min-h-0 lg:px-0 lg:py-0">
          <div className="relative overflow-hidden rounded-[1.65rem] border border-primary/48 bg-[#211a16]/62 px-5 py-7 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-[22px] sm:px-8 sm:py-9 lg:absolute lg:bottom-[2vw] lg:left-[3.65vw] lg:top-[3.35vw] lg:w-[48.7vw] lg:rounded-[1.9rem] lg:px-[3.05vw] lg:py-[2.55vw] lg:[clip-path:polygon(0_0,75%_0,81%_55%,100%_76.5%,100%_100%,0_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.055)_34%,rgba(241,90,41,0.1)_100%)]" />
            <div className="absolute -right-24 bottom-4 hidden h-64 w-64 rounded-full border border-primary/22 blur-[1px] lg:block" />

            <div className="relative flex h-full flex-col justify-between gap-10">
              <div className="max-w-[36rem]">
                <h2 className="font-sans text-[2.9rem] font-medium leading-[0.96] tracking-normal text-white normal-case drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] sm:text-[4.1rem] lg:text-[clamp(3.45rem,3.85vw,4.2rem)]">
                Success Alone <br />
                Is Not Enough
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-primary" />
                <span className="h-px w-24 bg-white/18" />
              </div>
                <p className="mt-5 max-w-[29rem] font-sans text-base leading-relaxed text-white/82 sm:text-[1.04rem]">
                Extraordinary achievements deserve more than passing glance. They deserve understanding, confidence, and lasting trust.
              </p>
            </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:max-w-[41vw] lg:grid-cols-4 lg:gap-0">
              {points.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.text}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="group/point border-white/18 lg:border-r lg:px-[1.65vw] lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                  >
                    <div className="mb-3 text-primary drop-shadow-[0_0_18px_rgba(241,90,41,0.22)] transition-transform duration-300 group-hover/point:scale-110">
                      <Icon size={36} strokeWidth={1.35} />
                    </div>
                    <p className="max-w-[9.8rem] font-sans text-sm leading-relaxed text-white/92 sm:text-[0.98rem] lg:text-[0.92rem] xl:text-[0.96rem]">
                      {point.text}
                    </p>
                  </motion.div>
                );
              })}
              </div>
            </div>
          </div>

          <Link
            to="/get-in-touch"
            className="relative z-10 ml-auto flex w-full max-w-[25.6rem] overflow-hidden rounded-[0.85rem] border border-white/16 bg-[#171511]/78 text-white shadow-[0_24px_70px_rgba(0,0,0,0.36)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/48 hover:shadow-[0_32px_86px_rgba(241,90,41,0.2)] sm:w-auto lg:absolute lg:bottom-[1.8vw] lg:right-[2.45vw] lg:w-[20.5vw] lg:max-w-[25rem] lg:min-w-[19.5rem]"
          >
            <span className="flex min-h-[6.6rem] flex-1 items-center gap-4 px-5 py-5 lg:min-h-[6.9rem]">
              <span className="h-px w-6 shrink-0 bg-primary" />
              <span className="font-sans text-base leading-relaxed text-white/84">
                We translate impact into influence that moves people, decisions and markets.
              </span>
            </span>
            <span className="flex w-[4.25rem] shrink-0 items-center justify-center bg-primary text-white transition-colors duration-300 group-hover:bg-[#ff7135] lg:w-[4.75rem]">
              <ArrowRight size={24} strokeWidth={1.7} />
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const Challenges = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f2ea] px-3 py-11 sm:px-5 sm:py-14 lg:px-[3.6vw] lg:pb-[3.8vw] lg:pt-[2.45vw]">
      <div className="absolute inset-0 opacity-[0.28] [background-image:radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.9),transparent_28%),linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.62)_52%,transparent_100%)]" />
      <div className="relative">
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10 lg:mb-[1vw]">
          <h2 className="font-sans text-3xl font-medium leading-[1.05] tracking-normal text-prestige-black normal-case sm:text-4xl lg:text-[clamp(2.75rem,3.15vw,3.75rem)]">
            The Challenges We Help Solve
          </h2>
          <div className="mx-auto mt-[0.9vw] h-[2px] w-20 bg-primary" />
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.03fr_1.18fr_0.96fr] lg:grid-rows-[clamp(10.4rem,10.8vw,13.4rem)_clamp(11rem,11.7vw,14.45rem)] lg:gap-[1vw]">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.48 }}
            whileHover={{ y: -8 }}
            className="group relative min-h-[26rem] overflow-hidden rounded-[0.9rem] border border-[#2f241d]/32 bg-[#eee1cf] shadow-[0_26px_68px_rgba(36,25,17,0.16)] transition-all duration-500 hover:border-primary/45 hover:shadow-[0_36px_90px_rgba(36,25,17,0.23)] sm:min-h-[29rem] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-h-0"
          >
            <img
              src={homeImages.whyImpala.culturalSensitivity}
              alt="Institutional presentation"
              className="absolute inset-0 h-full w-full object-cover object-[26%_center] opacity-42 grayscale-[28%] saturate-[0.72] transition-transform duration-[1000ms] group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,234,223,0.95)_0%,rgba(242,234,223,0.83)_50%,rgba(242,234,223,0.54)_100%),linear-gradient(180deg,rgba(255,255,255,0.5)_0%,rgba(238,225,207,0.84)_100%)]" />
            <div className="absolute inset-y-0 left-0 w-[5.5rem] bg-[repeating-linear-gradient(90deg,rgba(54,36,24,0.2)_0_9px,rgba(255,255,255,0.16)_9px_18px)] opacity-48" />
            <div className="relative z-10 flex h-full flex-col justify-center p-8 sm:p-10 lg:p-[2.4vw]">
              <div className="mb-[1.55vw] flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-[1rem] border border-white/74 bg-white/62 text-primary shadow-[0_18px_42px_rgba(36,25,17,0.16)] backdrop-blur-xl transition-all duration-500 group-hover:bg-white">
                <EyeOff size={31} strokeWidth={1.45} />
              </div>
              <h3 className="font-sans text-3xl font-medium leading-[1.05] tracking-normal text-prestige-black normal-case sm:text-[2.35rem] lg:text-[clamp(1.9rem,2.15vw,2.55rem)]">
                Strong Work. <br />
                Limited Recognition.
              </h3>
              <span className="mt-5 h-[2px] w-7 bg-primary" />
              <p className="mt-4 max-w-xs font-sans text-base leading-relaxed text-[#3f3a34] sm:text-[1.05rem] lg:text-[0.98rem] xl:text-[1.05rem]">
                Many institutions achieve significant results but struggle to communicate their impact effectively.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ delay: 0.06, duration: 0.48 }}
            whileHover={{ y: -8 }}
            className="group relative min-h-[16rem] overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#171511] p-6 text-white shadow-[0_28px_76px_rgba(12,10,8,0.3)] transition-all duration-500 hover:border-primary/45 hover:shadow-[0_34px_92px_rgba(241,90,41,0.18)] sm:p-8 lg:col-start-2 lg:row-start-1 lg:min-h-0 lg:p-[1.8vw]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_86%_50%,rgba(241,90,41,0.36)_0%,rgba(241,90,41,0.09)_18%,transparent_34%),radial-gradient(ellipse_at_94%_50%,transparent_0_14%,rgba(255,255,255,0.26)_14.5%_15%,transparent_15.5%_23%,rgba(241,90,41,0.34)_23.5%_24%,transparent_24.5%_31%,rgba(255,255,255,0.16)_31.5%_32%,transparent_32.5%)] opacity-80 transition-transform duration-700 group-hover:scale-105" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div className="flex h-[4.4rem] w-[4.4rem] shrink-0 items-center justify-center rounded-[1rem] border border-primary/35 bg-white/5 text-primary shadow-[0_18px_42px_rgba(0,0,0,0.24)] transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <Users size={32} strokeWidth={1.45} />
              </div>
              <div className="max-w-[22rem] sm:ml-2">
                <h3 className="font-sans text-2xl font-medium leading-[1.05] tracking-normal text-white normal-case sm:text-3xl lg:text-[clamp(1.55rem,1.8vw,2.1rem)]">
                  Stakeholders Not <br />
                  Fully Aligned.
                </h3>
                <span className="mt-4 block h-[2px] w-7 bg-primary" />
                <p className="mt-4 font-sans text-base leading-relaxed text-white/70 lg:text-[0.95rem] xl:text-base">
                  Employees, regulators, investors, partners, communities, and customers often receive fragmented messages.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ delay: 0.12, duration: 0.48 }}
            whileHover={{ y: -8 }}
            className="group relative min-h-[16rem] overflow-hidden rounded-[0.9rem] border border-[#2f241d]/24 bg-[#f8f1e8] p-6 shadow-[0_24px_68px_rgba(36,25,17,0.13)] transition-all duration-500 hover:border-primary/45 hover:shadow-[0_34px_88px_rgba(36,25,17,0.19)] sm:p-8 lg:col-start-2 lg:row-start-2 lg:min-h-0 lg:p-[1.8vw]"
          >
            <div className="absolute -right-7 -bottom-10 h-40 w-40 rounded-full border border-[#2f241d]/20 bg-white/36 shadow-inner transition-transform duration-700 group-hover:scale-110" />
            <img
              src={homeImages.hero}
              alt="Strategic communication lens"
              className="absolute -right-12 -bottom-12 h-48 w-48 rounded-full object-cover opacity-34 saturate-[0.76] transition-transform duration-[1000ms] group-hover:scale-110 sm:h-60 sm:w-60"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div className="flex h-[4.4rem] w-[4.4rem] shrink-0 items-center justify-center rounded-[1rem] border border-white/86 bg-white/58 text-primary shadow-[0_18px_42px_rgba(36,25,17,0.13)] backdrop-blur-xl transition-all duration-500 group-hover:bg-white">
                <ShieldCheck size={31} strokeWidth={1.45} />
              </div>
              <div className="max-w-[23rem] sm:ml-2">
                <h3 className="font-sans text-2xl font-medium leading-[1.05] tracking-normal text-prestige-black normal-case sm:text-3xl lg:text-[clamp(1.55rem,1.8vw,2.1rem)]">
                  Reputation Does Not <br />
                  Reflect Reality.
                </h3>
                <span className="mt-4 block h-[2px] w-7 bg-primary" />
                <p className="mt-4 font-sans text-base leading-relaxed text-prestige-text lg:text-[0.95rem] xl:text-base">
                  Organisations delivering meaningful impact are frequently under-recognised or misunderstood.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ delay: 0.18, duration: 0.48 }}
            whileHover={{ y: -8 }}
            className="group relative min-h-[28rem] overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#151411] p-7 text-white shadow-[0_30px_86px_rgba(12,10,8,0.34)] transition-all duration-500 hover:border-primary/45 hover:shadow-[0_38px_100px_rgba(241,90,41,0.2)] sm:p-9 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:min-h-0 lg:p-[2.05vw]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_78%,rgba(241,90,41,0.38),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_38%)]" />
            <div className="absolute -right-20 bottom-4 h-[22rem] w-[22rem] rounded-full border border-primary/30 opacity-70 [background-image:radial-gradient(rgba(241,90,41,0.55)_1px,transparent_1.4px)] [background-size:10px_10px] transition-transform duration-[1100ms] group-hover:rotate-6 group-hover:scale-105 sm:h-[28rem] sm:w-[28rem]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-[1rem] border border-primary/35 bg-white/5 text-primary shadow-[0_18px_42px_rgba(0,0,0,0.24)] transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <Lightbulb size={31} strokeWidth={1.45} />
              </div>
              <div className="max-w-sm pt-12">
                <h3 className="font-sans text-3xl font-medium leading-[1.05] tracking-normal text-white normal-case sm:text-4xl lg:text-[clamp(2rem,2.15vw,2.65rem)]">
                  Complexity Creates <br />
                  Confusion.
                </h3>
                <span className="mt-5 block h-[2px] w-7 bg-primary" />
                <p className="mt-5 font-sans text-base leading-relaxed text-white/72 lg:text-[0.98rem] xl:text-base">
                  Technical, financial, policy, and institutional priorities are often difficult for stakeholders to understand.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

const HomeServices = () => {
  const services = [
    {
      title: "Strategic Communication",
      href: "/our-services#strategic-communication",
      icon: <BarChart3 className="text-primary" size={32} />,
      desc: "Communication strategies aligned with organisational priorities and stakeholder expectations.",
    },
    {
      title: "Institutional Positioning",
      href: "/our-services#institutional-positioning",
      icon: <Flag className="text-primary" size={32} />,
      desc: "Defining who organisations are, what they stand for, and how they are understood.",
    },
    {
      title: "Stakeholder Engagement",
      href: "/our-services#stakeholder-engagement",
      icon: <Handshake className="text-primary" size={32} />,
      desc: "Building trust and meaningful relationships with the audiences that influence success.",
    },
    {
      title: "Leadership & Executive Positioning",
      href: "/our-services#leadership-communications",
      icon: <Users className="text-primary" size={32} />,
      desc: "Strengthening leadership visibility, credibility, and thought leadership.",
    },
    {
      title: "Content & Storytelling",
      href: "/our-services#content-storytelling",
      icon: <MessageSquare className="text-primary" size={32} />,
      desc: "Transforming complex ideas into compelling communication products.",
    },
    {
      title: "Campaigns & Public Engagement",
      href: "/our-services#campaign-development",
      icon: <Globe className="text-primary" size={32} />,
      desc: "Creating initiatives that inform, influence, and inspire action.",
    },
  ];

  return (
    <section id="services" className="bg-white section-space section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-prestige-black mb-4 sm:mb-5">
            What We Do
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -8 }}
              className="bg-prestige-cream p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 border-transparent hover:border-primary group flex flex-col h-full"
            >
              <div className="mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-prestige-black">{s.title}</h3>
              <p className="font-sans text-base text-prestige-text leading-relaxed mb-5 sm:mb-6 sm:text-[1.02rem] flex-grow">
                {s.desc}
              </p>
              <Link to={s.href} className="flex items-center gap-2 text-primary font-bold text-xs sm:text-[13px] uppercase tracking-[0.18em] group/btn">
                More Info <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyImpala = () => {
  const pillars = [
    {
      title: "Contextual Understanding",
      text: "African realities, stakeholder expectations, and market dynamics.",
      icon: Compass,
    },
    {
      title: "Strategic Clarity",
      text: "Clear positioning, language, and narrative direction.",
      icon: BarChart3,
    },
    {
      title: "Stakeholder Confidence",
      text: "Trust with the people and institutions that influence success.",
      icon: ShieldCheck,
    },
    {
      title: "Practical Execution",
      text: "Strategy connected to products, campaigns, and engagement.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14 section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 border-y border-prestige-gray py-8 sm:py-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.26 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-primary" />
              <span className="font-sans text-base font-bold uppercase tracking-[0.18em] text-primary sm:text-lg">
                Why Impala
              </span>
            </div>
            <h2 className="text-[2rem] font-bold leading-tight text-prestige-black sm:text-[2.4rem] lg:text-[2.8rem]">
              African Context. Global Standards.
            </h2>
          </motion.div>

          <div>
            <p className="max-w-3xl font-sans text-base leading-relaxed text-prestige-text sm:text-[1.02rem]">
              Our strength lies in understanding how institutions operate within African realities while applying international standards of strategy, communication, and delivery.
            </p>
            <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-prestige-text sm:text-[1.02rem]">
              We combine contextual intelligence, strategic thinking, and practical execution to help organisations communicate with confidence.
            </p>

            <div className="mt-6 grid gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.04, duration: 0.38 }}
                    className="group pr-5 sm:border-r sm:border-prestige-gray sm:pl-5 sm:first:pl-0 sm:even:border-r-0 lg:even:border-r lg:last:border-r-0"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <Icon size={18} strokeWidth={1.7} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary/70">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-sans text-base font-bold uppercase leading-snug tracking-[0.04em] text-prestige-black">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-prestige-text sm:text-[0.94rem]">
                      {pillar.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedExperience = () => {
  const projects = [
    {
      title: "African Business Magazine",
      logo: brandMarks.africanBusiness,
      tag: "Institutional Profiling",
      challenge: "Ethiopia's story needed clearer representation for international investment audiences.",
      role: "Led strategic profiling of Ethiopian institutions and businesses.",
      impact: "Helped elevate Ethiopia's transformation story within African and global conversations.",
    },
    {
      title: "AWiB",
      logo: brandMarks.awib,
      tag: "Leadership Visibility",
      partnership: "15-year partnership",
      challenge: "Amplify women's leadership and increase visibility.",
      role: "Supported leadership initiatives and profiled more than 60 Women of Excellence.",
      impact: "Amplified voices, strengthened visibility, and inspired future leaders.",
    },
    {
      title: "EWLA",
      logo: brandMarks.ewla,
      tag: "Access to Justice",
      challenge: "Strengthen visibility and expand access to justice.",
      role: "Developed strategic storytelling and multimedia content.",
      impact: "Enabled stronger engagement with local and international stakeholders.",
    },
    {
      title: "World Bank",
      logo: brandMarks.worldBank,
      tag: "Development Communication",
      partnership: "12-year partnership",
      challenge: "Communicate complex development programmes clearly.",
      role: "Supported communication initiatives and stakeholder engagement.",
      impact: "Created clearer public narratives and stronger stakeholder understanding.",
    },
    {
      title: "LonAdd",
      logo: brandMarks.lonadd,
      tag: "Market Leadership",
      challenge: "Strengthen market leadership and support growth across Africa.",
      role: "Led strategic positioning and communication transformation.",
      impact: "Strengthened brand clarity, positioning, and market leadership.",
    },
    {
      title: "CMAG",
      logo: brandMarks.cmag,
      image: ourWorkImages.caseStudies.cmag[0],
      tag: "Critical Minerals Communication",
      challenge: "Critical minerals work needed clearer communication for policy, investment, and advisory audiences.",
      role: "Supported newsletter and stakeholder communication around CMAG priorities and expert activity.",
      impact: "Created clearer public-facing updates for a specialised critical minerals audience.",
    },
    {
      title: "Africa Cocoa Finance & Investment Forum (ACFIF)",
      logo: brandMarks.acfif,
      tag: "Finance & Investment Communications",
      challenge: "Position Africa's cocoa story within global finance and investment conversations.",
      role: "Leading strategic communications, positioning, and stakeholder engagement across New York, Amsterdam, and Accra.",
      impact: "Strengthening ACFIF's profile as a platform for investment, dialogue, and collaboration across Africa's cocoa sector.",
    },
    {
      title: "Michu Clinic",
      logo: brandMarks.universityMichigan,
      image: ourWorkImages.caseStudies.michu[0],
      tag: "Healthcare Communication",
      challenge: "A healthcare initiative needed clear visibility and stronger public understanding.",
      role: "Supported communication around clinical work, institutional credibility, and stakeholder engagement.",
      impact: "Helped make the initiative easier to understand and more credible to priority audiences.",
    },
  ];

  return (
    <section className="section-space section-shell bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 gap-4 sm:gap-5">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-prestige-black">
              Selected Experience
            </h2>
          </div>
          <Link
            to="/our-work"
            className="font-sans font-bold text-sm text-prestige-black hover:text-primary transition-colors flex items-center gap-2 group border-b-2 border-prestige-black hover:border-primary pb-1"
          >
            Explore Portfolio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.035, duration: 0.45 }}
              className="group relative overflow-hidden rounded-[1.25rem] border border-prestige-gray bg-white p-3 shadow-[0_18px_50px_rgba(26,18,12,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_rgba(241,90,41,0.13)] sm:p-4"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,90,41,0.12),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 grid gap-4 md:grid-cols-[0.82fr_1.18fr]">
                <div className={`relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-[1.05rem] border ${
                  project.image
                    ? "border-white/10 bg-prestige-black"
                    : "border-prestige-gray bg-[linear-gradient(135deg,#f8f3ed_0%,#fffaf8_47%,#efe3d7_100%)]"
                }`}>
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-prestige-black/64 via-prestige-black/12 to-transparent" />
                      <div className="absolute inset-x-4 bottom-4 flex min-h-[4.25rem] items-center justify-center rounded-[0.95rem] border border-white/70 bg-white/94 px-5 py-3 shadow-[0_18px_46px_rgba(26,18,12,0.12)] backdrop-blur-md">
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="max-h-14 w-auto max-w-full object-contain object-center transition-transform duration-700 group-hover:scale-105 sm:max-h-16"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </>
                  ) : (
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="max-h-24 w-auto max-w-[82%] object-contain object-center transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>

                <div className="flex min-w-0 flex-col gap-3 px-1 py-1 sm:px-2">
                  <div>
                    <span className="mb-2 inline-flex rounded-full border border-primary/18 bg-primary/8 px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
                      {project.tag}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold leading-tight text-prestige-black sm:text-2xl">
                        {project.title}
                      </h3>
                      {project.partnership && (
                        <span className="inline-flex rounded-full border border-prestige-gray bg-prestige-cream px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-prestige-text">
                          {project.partnership}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Field label="Challenge" text={project.challenge} />
                    <Field label="Our Role" text={project.role} />
                    <Field label="Impact" text={project.impact} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, text }: { label: string; text: string }) => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
      <CheckCircle size={13} strokeWidth={1.8} />
      {label}
    </div>
    <p className="font-sans text-base leading-relaxed text-prestige-text sm:text-[1.02rem]">
      {text}
    </p>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-prestige-black text-white pt-10 sm:pt-14 lg:pt-20 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-5 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="mb-4 inline-flex">
              <img
                src="https://github.com/natnaelasnake16-maker/impala-communication-images/raw/main/white%20impala.png"
                alt="Impala Communication logo"
                className="h-12 sm:h-14 w-auto"
                referrerPolicy="no-referrer"
              />
            </span>
            <p className="font-sans text-sm sm:text-base opacity-60 max-w-md leading-relaxed mb-6">
              Communicating success, building trust, and strengthening influence through strategic communication.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/impala-communication/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/user/terusew1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-[0.16em] mb-4 sm:mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 opacity-60 font-sans text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li><Link to="/get-in-touch" className="hover:text-primary transition-colors">Get In Touch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-bold uppercase tracking-[0.16em] mb-4 sm:mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 opacity-60 font-sans text-sm">
              <li>info@impalacommunication.com</li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 opacity-40 font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.14em]">
          <span>© 2026 Impala Communication. All rights reserved.</span>
          <p className="text-center md:text-left">For When Communication Can Change Lives.</p>
        </div>
      </div>
    </footer>
  );
};

const HomeContent = () => {
  return (
    <>
      <Hero />
      <TrustedByCarousel />
      <WhyThisMatters />
      <Challenges />
      <HomeServices />
      <WhyImpala />
      <FeaturedExperience />
      <FinalCallToAction />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="selection:bg-primary selection:text-white">
        <Navbar />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/get-in-touch" element={<GetInTouch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
