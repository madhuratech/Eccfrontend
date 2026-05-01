import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import SolarEPC from "../../assets/About/SolarEPC.png"
import SolarPlant from "../../assets/About/SolarPlant.jpg"
import OM from "../../assets/About/OM.jpg"
import Batterystorage from "../../assets/About/Batterystorage.jpg"
import Solarpump from "../../assets/About/Solarpump.jpg"
import cleaningrobot from "../../assets/About/cleaningrobot.jpg"
import thirdparty from "../../assets/About/thirdparty.jpg"

function Aboutservice() {
  const { slug } = useParams();

  const serviceContent = {
    "solar-epc-services": {
      tag: "About Our Solutions",
      title: "Efficient and Reliable Solar EPC Services in India for smarter, and sustainable energy",
      description:
        "At our company, we provide complete solar EPC services, making your energy journey easier with efficient, reliable, and cost-effective services for both residential and commercial needs.",
      points: [
        "End-to-end solar project management services",
        "Cost-effective and efficient solar services",
        "Reliable solar services",
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:  SolarEPC,
      imageAlt: "Solar EPC Services",
      statLabel: "Performance",
      statValue: "98%",
      statDescription: "Optimized solar system efficiency",
      path: "/Pages/solar-epc-solutions",
    },

    "solar-plant-management": {
      tag: "About Our Solutions",
      title: "Smart Solar Plant Management in India for a Sustainable Future",
      description:
        "At Madhura Energy, we offer companies various intelligent, sophisticated solar energy management solutions to enable businesses to achieve optimal performance, increased output and long-term reliability of their solar plants through intelligent monitoring and management.",
      points: [
        "Real-time monitoring of peak production.",
        "Preventive maintenance to limit downtime.",
        "Increasing production and maximizing efficiency.",
        "Data analytics solutions to help you make better decisions."
        
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image: SolarPlant,
      imageAlt: "Solar Plant Management",
      statLabel: "Backup Reliability",
      statValue: "24/7",
      statDescription: "Power support when it matters most",
      path:"/solar-plant-management",
    },

    "solar-operation-and-maintenance-services": {
      tag: "About Our Solutions",
      title: "Dependable Solar Operation and Maintenance Services",
      description:
        "With proactive monitoring, preventative maintenance, and quick problem solving, our solar operation and maintenance services in India guarantee optimal solar performance, reducing downtime and optimizing long-term energy output.",
      points: [
        "Regular monitoring and maintenance ",
        "System control for better performance ",
        "Reliable support for daily operations",
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image: OM,
      imageAlt: "Solar Operation and Maintenance Services",
      statLabel: "System Uptime",
      statValue: "99%",
      statDescription: "Maintained for consistent operations",
      path: "/operation-maintenance",
    },

    "solar-battery-storage-services": {
      tag: "About Our Solutions",
      title: "Smart Energy Storage for a Better Tomorrow - Future",
      description:
        "The way we help companies at Madhura Energy is through the smarter management of energy, which we achieve through the storage of energy for future use.",
      points: [
        "Continuous and dependable power supply",
        "Smart energy usage and savings",
        "Easy and safe storage solutions",
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image: Batterystorage,
      imageAlt: "Solar Battery Storage Services",
      statLabel: "Safety",
      statValue: "100%",
      statDescription: "Built with compliance-focused execution",
      path:" /battery-storage",
    },

   "solar-pump-services": {
      tag: "About Our Solutions",
      title: "Smart solar pump services for efficient water management",     
      description:
        "Our solar pump services in India are designed to deliver consistent water supply using renewable energy. We help reduce electricity costs while ensuring high performance. Perfect for agriculture, residential, and industrial water needs",
      points: [
        "Reliable equipment that is sustainable",
        "Runs efficiently even in low light conditions",
        "Used for various applications"
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image: Solarpump,
      imageAlt: "Solar Pump Services",
      statLabel: "Efficiency",
      statValue: "95%",
      statDescription: "Maximized performance for optimal results",
      path: "/solar-pump",
    },

    "solar-panel-cleaning-robot-services": {
      tag: "About Our Solutions",
      title: "Solar Panel Cleaning Robots in India Designed to Preserve Solar Panel Performance",
      description:
        "Dust accumulation on solar panels is eliminated by automatic cleaning machines that don't need human help. Regular cleaning can help you maintain system efficiency, minimize performance loss, and encourage dependable energy generation. The efficiency of solar panels can be progressively diminished by prolonged exposure to dust, dirt, and environmental accumulation. Manual cleaning is frequently intensive, unreliable, and time-consuming. By completely automating the cleaning process, solar cleaning robots provide a methodical and dependable solution.",
      points: [
        "Frequent cleaning without human workers",
        "Designed to maintain consistent energy generation ",
        "Adaptable to different designs of solar systems"
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image: cleaningrobot,
      imageAlt: "Solar Panel Cleaning Robot Services",
      statLabel: "Cleaning Efficiency",
      statValue: "99%",
      statDescription: "Ensuring peak performance for solar installations",
      path: "/solar-plant-cleaning-robots",
    },

      "third-party-solar-power-purchase-services": { 
      tag: "About Our Solutions",
      title: "We provide end-to-end third party solar power purchase in India tailored for your business needs",
      description:
        "Our team handles power sourcing, agreements, and compliance smoothly, making the entire process hassle-free for your business. We ensure a cost-effective and uninterrupted power supply to support your daily operations without any disruption. With our service, you can also move towards smarter and greener energy usage, helping your business become more efficient and environmentally responsible.",
      points: [
        "Power sourcing from trusted third-party generators",
        "Regulatory compliance and documentation support",
        "Long-term cost optimisation and energy planning"
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image: thirdparty,
      imageAlt: "Third Party Solar Power Purchase Services",
      statLabel: "Sustainability",
      statValue: "100%",
      statDescription: "Commitment to environmentally responsible energy solutions",
      path: "/third-party-power-purchase",
    }

  };

  const data = serviceContent[slug];

  if (!data) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-white px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Page Not Found</h2>
          <p className="mt-3 text-slate-600">
            The service page you are looking for does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            {data.tag}
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            {data.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            {data.description}
          </p>

          <div className="mt-8 space-y-4">
            {data.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={data.buttonLink}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              {data.buttonText}
              <ArrowRight size={18} />
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
          <div className="overflow-hidden rounded-[28px] shadow-2xl">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl md:block">
            <p className="text-sm font-medium text-slate-500">
              {data.statLabel}
            </p>
            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              {data.statValue}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {data.statDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Aboutservice;