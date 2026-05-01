import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// import solarEPC from "../../assets/Banner/SolarEPC.png"
import solarEPC from "../../assets/Videos/solarEPC.mp4"
import solarPlant from "../../assets/Videos/solarPlant.mp4"
import OM from "../../assets/Videos/OM.mp4"
import batteryStorage from "../../assets/Videos/batteyStorage.mp4"
import solarPump from "../../assets/Videos/solarPump.mp4"
import solarClean from "../../assets/Videos/solarClean.mp4"
import thirdParty from "../../assets/Videos/thirdParty.mp4"



function Banner() {
  const { slug } = useParams();

  const services = {
    "solar-epc-services": {
      tag: "Service Details",
      title: "Solar EPC Services",
      highlight: "Solutions",
      description:
        "Empowering your future with smart solar solutions, we do it all from idea to installation, providing simple, reliable, and cost-effective solutions as your trusted partner in solar growth.",
      video: solarEPC,
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/Pages/solar-epc-solutions",
    },

    "solar-plant-management": {
      tag: "Service Details",
      title: "Solar Plant Management",
      description:
        "Our intelligent solar energy management solutions maximize efficiency and minimize downtime for the seamless production of electricity from solar energy while also ensuring that the modern renewable energy grid continues to evolve with the increasing demands for clean energy.",
      video: solarPlant,
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/solar-plant-management",
    },

    "solar-operation-and-maintenance-services": {
      tag: "Service Details",
      title: "Solar Operation and Maintenance Services",
      description:
        "Utilize professional solar operation and maintenance services in India to optimize solar performance. Through proactive monitoring, prompt service, and data driven optimization, we guarantee system efficiency, minimize downtime, and prolong asset life.",
      video: OM,
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/operation-maintenance",
    },

    "solar-battery-storage-services": {
      tag: "Service Details",
      title: "Solar Battery Storage Services",
      description:
        "Store energy smarter, cut costs more efficiently, and stay powered anytime with our advanced and dependable energy solutions that are thoughtfully crafted to deliver on the escalating and evolving needs of contemporary power requirements.",
      video: batteryStorage,
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/battery-storage",
    },

    "solar-pump-services": {
      tag: "Service Details",
      title: "Solar Pump Services",
      description: "Our solar-powered pumping solutions allow us to give you access to clean water supplies powered by renewable energy sources. This service will not only reduce your power expenses but also guarantee efficient performance of your system.",
      video: solarPump,
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/solar-pump",

    },
    "solar-panel-cleaning-robot-services": {
      tag: "Service Details",
      title: "Robotic Solar Cleaners for Dependable and Efficient Panel Operation",
      description:
        "Dust accumulation on solar panels is eliminated by automatic cleaning machines that don't need human help. Regular cleaning can help maintain system efficiency, minimize performance loss, and encourage dependable energy output.",
      video: solarClean,
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/solar-plant-cleaning-robots",
    },

    "third-party-solar-power-purchase-services": {
      tag: "Service Details",
      title: "Third Party Solar Power Purchase",
      description:
      "We help your business get affordable electricity through third party power purchase solutions. Our team takes care of sourcing power, handling the process smoothly, and managing all approvals. We make sure you get continuous power supply at better rates with long-term cost savings.",
      video: thirdParty,
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/third-party-power-purchase",
    }
  };

  const service = services[slug];

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <h2 className="text-2xl font-semibold">Service not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
          /> */}

          <video
            key={slug}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={service.video} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />

          {/* <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" /> */}
        </div>

        {/* Content */}
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center justify-center px-4 py-14 sm:px-6 md:min-h-[60vh] md:py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-center"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
              {service.tag}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              {service.title}
              <span className="block text-slate-200">{service.highlight}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={service.primaryButtonLink}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                {service.primaryButtonText}
                <ArrowRight size={18} />
              </a>

              <a
                href={service.secondaryButtonLink}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {service.secondaryButtonText}
              </a>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}

export default Banner;