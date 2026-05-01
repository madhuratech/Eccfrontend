import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { path } from "framer-motion/client";
import ThirdParty from "../../Pages/ThirdParty";
// import { path } from "framer-motion/client";

const ctaData = {
  solarEpc: {
    tag: "Let’s Build Smarter Energy Systems",
    title:
      "Start your journey with Madhura Energy today",
    primaryButtonText: "Get Free Consultation",
    primaryButtonLink: "/contact/#ContactFormSection",
    
    path: "/services/solar-epc-solutions",
  },
  solarPlant: {
    tag: "Take control of your solar plant management today",
    title:
      "Start taking control of your solar production today by maximizing your energy production through our advanced solar plants.",
    primaryButtonText: "Get Free Consultation",
    primaryButtonLink: "/contact/#ContactFormSection",
    path: "/services/solar-plant-management",
  },

  batteryStorage: {
    tag: "Take control of your energy today",
    title:
      "Start saving power and enjoy uninterrupted electricity with our smart solutions.",
    primaryButtonText: "Request Consultation",
    primaryButtonLink: "/contact/#ContactFormSection",
    path: "/services/battery-storage",
  },

  operationMaintenance: {
    tag: "Reliable Operations & Maintenance",
    title:
      "Keep your solar assets running at peak performance with our technical support.",
    primaryButtonText: "Get Started",
    primaryButtonLink: "/contact/#ContactFormSection",
    path: "/services/operation-maintenance",
  },

  solarPump: {
    tag: "Get in touch for smart solar solutions",
    title: "Let’s connect and power your solar journey",
    primaryButtonText: "Get Free Consultation",
    primaryButtonLink: "/contact/#ContactFormSection",
  },

  solarCleaningRobot: {
    tag: "Get in touch for smart solar solutions",
    title: "Let’s connect and power your solar journey",
    primaryButtonText: "Get Free Consultation",
    primaryButtonLink: "/contact/#ContactFormSection",
  
  },
  
  thirdParty: {
    tag: "Connect With Our Energy Experts",
    title: "Get in touch today for reliable and cost-effective power solutions",
    primaryButtonText: "Request Consultation",
    primaryButtonLink: "/contact/#ContactFormSection",
    
  }
};

function CTASection({ page }) {
  const data = ctaData[page];

  if (!data) return null;

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm md:flex-row md:items-center md:justify-between md:px-10"
          >
            <div className="max-w-2xl">
              <p className="mb-3 text-base font-medium uppercase tracking-[0.2em] text-emerald-400">
                {data.tag}
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {data.title}
              </h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
              <a
                href={data.primaryButtonLink}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                {data.primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              {/* <a
                href={data.secondaryButtonLink}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {data.secondaryButtonText}
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;