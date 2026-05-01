import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Wrench,
  LineChart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    id: "01",
    title: "Precision-Led Project Execution",
    short: "Strong project planning, disciplined delivery, and dependable timelines.",
    description:
      "We follow a structured and detail-oriented approach across every stage—from design to commissioning—ensuring seamless execution and complete project control.",
    points: [
      "Clear project planning",
      "Skilled execution team",
      "On-time delivery assurance",
    ],
    stat: "12+",
    statLabel: "Years of execution experience",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "High-Performance Engineering Excellence",
    short: "Solutions designed for efficiency, uptime, and long-term savings.",
    description:
      "Our solutions are engineered for maximum efficiency, optimized output, and long-term reliability to deliver superior system performance.",
    points: [
      "Optimized system design",
      "High-efficiency components",
      "Long-term performance focus",
    ],
    stat: "15,000+ kW",
    statLabel: "Installed capacity",
    icon: Zap,
  },
  {
    id: "03",
    title: "Advanced Operations & Maintenance Reliability",
    short: "Preventive maintenance and fast response to keep systems healthy.",
    description:
      "We ensure consistent system health through proactive monitoring, preventive maintenance, and rapid issue resolution.",
    points: [
      "Real-time monitoring systems",
      "Preventive maintenance plans",
      "Quick response support",
    ],
    stat: "99%+",
    statLabel: "System uptime",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Data-Driven Value Optimization",
    short: "Engineering choices aligned with real commercial outcomes.",
    description:
      "We leverage data insights and analytics to improve efficiency, reduce costs, and maximize your return on investment.",
    points: [
      "Performance analytics",
      "Cost optimization strategies",
      "ROI-focused approach",
    ],
    stat: "40%+",
    statLabel: "Energy cost savings",
    icon: LineChart,
  },
];

function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = reasons[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
      {/* background accents */}
      <div className="absolute inset-0">
        <div className="absolute left-[-80px] top-16 h-64 w-64 rounded-full bg-emerald-950/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-60px] h-72 w-72 rounded-full bg-emerald-950/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Designed for Efficiency, Built for Reliable Energy Performance
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            At Madhura Energy, we go beyond conventional solutions by focusing on smart execution, 
            advanced technology, and long-term reliability—ensuring every project delivers consistent
            performance and real business value.
          </p>
        </motion.div>

        {/* Mobile view: full cards one by one */}
        <div className="space-y-5 lg:hidden">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-950/15 text-emerald-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                        {item.id}
                      </span>
                      <div className="h-px w-10 bg-white/10" />
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.short}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {item.points.map((point, idx) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      <span className="text-sm text-slate-200">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 p-5">
                  <div className="text-3xl font-bold text-white">
                    {item.stat}
                  </div>
                  <div className="mt-1 text-sm text-slate-300">
                    {item.statLabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop / large screens */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-12 lg:items-start">
          {/* Left dynamic preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-950/10 blur-3xl" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45 }}
                >
                  <motion.div
                    initial={{ scale: 0.9, rotate: -8 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-950/15 text-emerald-300"
                  >
                    <ActiveIcon className="h-8 w-8" />
                  </motion.div>

                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-sm font-medium text-emerald-300">
                      {active.id}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="max-w-md text-2xl font-semibold leading-snug text-white sm:text-3xl">
                    {active.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {active.description}
                  </p>

                  <div className="mt-8 grid gap-3">
                    {active.points.map((point, idx) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        <span className="text-sm text-slate-200">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[24px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 p-5">
                    <div className="text-3xl font-bold text-white">
                      {active.stat}
                    </div>
                    <div className="mt-1 text-sm text-slate-300">
                      {active.statLabel}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right interactive stack */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {reasons.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group cursor-pointer rounded-[26px] border p-5 transition-all duration-300 sm:p-6 ${
                      isActive
                        ? "border-emerald-500/40 bg-white/10 shadow-[0_20px_60px_rgba(16,185,129,0.12)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        <motion.div
                          animate={
                            isActive
                              ? { rotate: 0, scale: 1.05 }
                              : { rotate: 0, scale: 1 }
                          }
                          transition={{ duration: 0.3 }}
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                            isActive
                              ? "bg-emerald-950/15 text-emerald-300"
                              : "bg-white/5 text-slate-300"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.div>

                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <span className="text-xs font-semibold tracking-[0.2em] text-slate-400">
                              {item.id}
                            </span>
                            <div className="h-px w-10 bg-white/10" />
                          </div>

                          <h3 className="text-xl font-semibold text-white">
                            {item.title}
                          </h3>

                          <p
                            className={`mt-2 max-w-xl text-sm leading-7 transition-colors duration-300 ${
                              isActive ? "text-slate-200" : "text-slate-400"
                            }`}
                          >
                            {item.short}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        animate={
                          isActive
                            ? { x: 0, opacity: 1 }
                            : { x: -8, opacity: 0.6 }
                        }
                        transition={{ duration: 0.3 }}
                        className={`inline-flex items-center gap-2 self-start rounded-full px-3 py-2 text-sm font-medium ${
                          isActive
                            ? "bg-emerald-950/10 text-emerald-300"
                            : "bg-white/5 text-slate-400"
                        }`}
                      >
                        Explore
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;