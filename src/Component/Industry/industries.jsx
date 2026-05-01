import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Building2,
  Shirt,
  GraduationCap,
  Hospital,
  Warehouse,
  Hotel,
  Sprout,
  Home,
  Landmark,
  Utensils,
  Server,
} from "lucide-react";

const industries = [
  { title: "Manufacturing Industry", icon: Factory },
  { title: "Commercial Buildings", icon: Building2 },
  { title: "Textile Industry", icon: Shirt },
  { title: "Educational Institutions", icon: GraduationCap },
  { title: "Hospitals & Healthcare", icon: Hospital },
  { title: "Warehouses & Logistics", icon: Warehouse },
  { title: "Hotels & Hospitality", icon: Hotel },
  { title: "Agriculture Industries", icon: Sprout },
  { title: "Real Estate Communities", icon: Home },
  { title: "Government Projects", icon: Landmark },
  { title: "Food Processing Units", icon: Utensils },
  { title: "Data Centers", icon: Server },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function IndustriesWeServe() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.08),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Industries We Serve
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
           Services for Operations and Maintenance in Important Industries 
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            With dependable, scalable solutions that guarantee effective solar performance, decreased downtime, and long-term value, our operations and maintenance services assist a variety of industries.

          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={`${item.title}-${index}`}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-white transition duration-300 group-hover:scale-105 group-hover:border-white/20">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-3 text-sm font-semibold text-white sm:text-base">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default IndustriesWeServe;