import React from "react";
import { motion } from "framer-motion";
import { BatteryCharging, ArrowRight } from "lucide-react";
import partythird from "../../assets/services/Service-party/partythird.jpg";

function PartySection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-emerald-400">
            <BatteryCharging size={16} />
            Overview
          </div>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Third Party Solar Power Purchase in India
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            Third party solar power purchase in India is a reliable solution for businesses looking to reduce electricity costs and improve efficiency. Through this model, companies can directly procure power from independent producers instead of relying only on traditional utility providers. This approach ensures competitive pricing, stable supply, and better control over energy usage. It is highly beneficial for industries aiming for long-term savings and sustainable power solutions.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Get Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[30px] bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_40%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl">
            <img
              src={partythird}
              alt="Third Party Solar Purchase"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PartySection;