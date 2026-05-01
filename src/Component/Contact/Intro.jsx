import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Contact from "../../assets/Contact/Contact.jpg"

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src= {Contact}
          alt="Solar energy project"
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      {/* Glow accents */}
      <div className="absolute left-[-80px] top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute right-[-100px] top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-[-100px] left-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md"
          >
            <BadgeCheck className="h-4 w-4 text-emerald-400" />
            <span>Fast Response</span>
            <span className="hidden text-slate-500 sm:inline">•</span>
            <span>Expert Support</span>
            <span className="hidden text-slate-500 sm:inline">•</span>
            <span>Pan-India Service</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Let’s Power Your
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              Next Project
            </span>
          </motion.h1>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Reach out to discuss solar EPC, electrical infrastructure,
            maintenance, or customized energy solutions for your business.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#ContactFormSection"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-emerald-400"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="tel:+919003663660"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-emerald-400/40 hover:bg-white/10"
            >
              Call Our Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;