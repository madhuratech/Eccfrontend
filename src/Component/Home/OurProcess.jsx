import React from "react";
import { motion } from "framer-motion";
import {
  SearchCheck,
  FileText,
  Settings2,
  BadgeCheck,
} from "lucide-react";
import Discovery from "../../assets/Process/Discovery.png";
import Planning from "../../assets/Process/planning.png";
import Engineering from "../../assets/Process/Engineering.png";
import Testing from "../../assets/Process/Testing.png";

const steps = [
  {
    number: "01",
    title: "Assessment & Consultation",
    description:
      "We start by analysing your energy needs, site conditions, and business goals to design the most effective solar solution.",
    icon: SearchCheck,
    image: Discovery,
    alt:"Solar Plant Installation Services 15"
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Our team develops optimized system designs and technical plans focused on efficiency, safety, and long-term performance.",
    icon: FileText,
    image: Planning,
    alt:"Solar Plant Installation Services 16"
  },
  {
    number: "03",
    title: "Execution & Deployment",
    description:
      "We deliver seamless installation using high-quality components, skilled professionals, and strict quality standards.",
    icon: Settings2,
    image: Engineering,
    alt:"Solar Plant Installation Services 17"
  },
  {
    number: "04",
    title: "Monitoring & Optimization",
    description:
      "Post-installation, we ensure continuous performance through real-time monitoring, maintenance, and system optimization.",
    icon: BadgeCheck,
    image: Testing,
    alt:"Solar Plant Installation Services 18"
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const processContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: 50, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function WhatWeDoProcess() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-16 text-white md:py-24">
      {/* background accents */}
      <div className="absolute inset-0">
        <div className="absolute left-[-80px] top-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-60px] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-emerald-300 backdrop-blur-sm">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Process for Delivering
            <span className="block text-emerald-400">
              High-Performance Solar Solutions
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            A streamlined and efficient workflow designed to ensure performance,
             safety, and long-term reliability from start to finish.
          </p>
        </motion.div>

        <div className="relative">
          {/* main desktop connector line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-10 hidden h-px origin-left bg-white/10 xl:block"
          />

          {/* steps */}
          <motion.div
            variants={processContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-4"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={stepVariants}
                  className="relative"
                >
                  {/* top icon node - hidden on mobile/tablet */}
                  <div className="relative z-10 mb-6 hidden items-center xl:justify-center xl:flex">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, amount: 0.25 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#0c1a2b] shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 rounded-2xl border border-emerald-400/20"
                      />
                      <Icon className="relative z-10 text-emerald-300" size={30} />
                    </motion.div>
                  </div>

                  {/* card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                  >
                    {/* image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={step.image}
                        alt={step.alt}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/30 to-transparent" />

                      <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-emerald-300 backdrop-blur-sm">
                        STEP {step.number}
                      </div>
                    </div>

                    {/* content */}
                    <div className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                        <span className="text-3xl font-bold text-white/10">
                          {step.number}
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-slate-300">
                        {step.description}
                      </p>

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2 + 0.2,
                        }}
                        className="mt-6 h-px bg-gradient-to-r from-emerald-400/40 to-transparent"
                      />

                      {/* bottom icon row - hidden on mobile/tablet */}
                      <div className="mt-5 hidden items-center gap-3 xl:flex">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-white/10">
                          <Icon size={18} />
                        </div>
                        <p className="text-sm text-slate-400">
                          Structured execution with premium delivery standards
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* desktop small connector */}
                  {index !== steps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: false, amount: 0.25 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.2 + 0.35,
                      }}
                      className="absolute right-[-16px] top-9 z-20 hidden h-4 w-8 origin-left items-center justify-center xl:flex"
                    >
                      <div className="h-px w-full bg-emerald-400/40" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoProcess;