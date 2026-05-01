import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PhoneCall, FileCheck2, Wrench } from "lucide-react";

const workSteps = [
  {
    id: 1,
    title: "Understanding Your Needs",
    icon: PhoneCall,
    content:
      "We assess your energy requirements to comprehend your power consumption habits and provide an appropriate solar solution for maximum efficiency, cost savings, and long-term performance of your system.",
  },
  {
    id: 2,
    title: "Planning & Design",
    icon: FileCheck2,
    content:
      "We provide a customized solar solution for your energy requirements, space, and budget with efficient performance, long-term reliability, and maximum cost savings for your home or business.",
  },
  {
    id: 3,
    title: "Installation & Setup",
    icon: Wrench,
    content:
      "Our team of experts will install your solar system with the utmost precision, ensuring that every part is properly installed and secured to maximize efficiency and performance.",
  },
  {
    id: 4,
    title: "Support & Maintenance",
    icon: FileCheck2,
    content:
      "We offer support to ensure the efficiency of your solar system in the long term, ensuring maximum performance and efficiency through our support and maintenance service.",
  }
];

function HowWeWorkForYou() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            How We Work For You
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We follow a structured and transparent process to deliver efficient,
            reliable, and result-driven energy solutions for every project.
          </p>
        </div>

        <div className="space-y-4">
          {workSteps.map((item, index) => {
            const Icon = item.icon;
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                      {item.title}
                    </h3>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-slate-500"
                  >
                    <ChevronDown size={22} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-200 px-5 pb-5 pt-4 sm:px-6">
                        <p className="text-sm leading-7 text-slate-600 sm:text-base">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowWeWorkForYou;