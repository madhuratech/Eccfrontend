import React from "react";
import { motion } from "framer-motion";

const processSectionData = {
  solarEpc: {
    badge: "How It Works",
    title: "Simple and Efficient Solar EPC Services in India from Start to Finish",
    // highlightedLine: "To Work On Your Solar Project",
    description:
      "At solar EPC solutions, our focus is to provide quality, maintain transparency, and ensure that high performance standards are met in all projects that we handle.",
    backgroundImage:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Site Analysis & Requirement Study",
        description:
          "We analyse energy consumption patterns, location conditions, roof structure, and sunlight exposure to design the most efficient solar solution.",
      },
      {
        number: "02",
        title: "System Design & Planning",
        description:
          "A customized solar system is designed for maximum efficiency, tailored to meet specific energy requirements and site conditions.",
      },
      {
        number: "03",
        title: "Procurement of Materials",
        description:
          "We procure high-quality solar materials to ensure durability, safety, and long-term reliability across all installations.",
      },
      {
        number: "04",
        title: "Installation and Execution",
        description:
          "The solar system is installed by professionals to ensure maximum efficiency and optimal performance from day one.",
      },
      {
        number: "05",
        title: "Testing, Commissioning & Support",
        description:
          "The solar system is thoroughly tested, carefully commissioned, and continuously supported to ensure maximum performance at all times.",
      },
    ],
    path: "/solar-epc-solutions",
  },

  solarplant: {
    badge: "Our Process",
    title: "Comprehensive Solar Plant Management in India",
    highlightedLine: "From Planning To Commissioning",
    description:
      "We provide step-by-step support to our customers so they can experience the successful, long-term operation of a Solar Plant.",
    backgroundImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Site & Performance Analysis",
        description:
          "As part of our initial work, we thoroughly analyse your solar plant's current output and system condition, and identify all gaps along with any possible areas for improvement.",
      },
      {
        number: "02",
        title: "Monitoring Setup",
        description:
          "We install cutting-edge monitoring technology to provide you with real-time performance, generation and health of your system so you have complete visibility.",
      },
      {
        number: "03",
        title: "Preventative Maintenance Plan ",
        description:
          "A pre-emptive maintenance schedule is developed to prevent potential problems, decrease down time, and ensure reliable energy production.",
      },
      {
        number: "04",
        title: "Issue Detection and Resolution",
        description:
          "We analyse data and use analytical tools to detect faults quickly and rectify them to keep your plant operating smoothly.",
      },
      {
        number: "05",
        title: "Performance Optimisation",
        description:
          "We consistently optimize the performance of every system with insights gained from data analytics, to provide maximum efficiency and the highest energy yield over time.",
      },
    ],
    path: "/solar-plant-management",
  },

  operationsMaintenance: {
    badge: "Service Workflow",
    title: "O&M Services for Systematic Approach to Solar System Management ",
    description:
      "To guarantee that your solar systems are monitored, maintained, and adjusted for dependable long-term performance, we employ a methodical and well defined procedure. ",
    backgroundImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Performance Monitoring ",
        description:
          "Track solar system performance in real time. Monitor output patterns, identify issues early, and ensure consistent energy production with continuous system visibility. ",
      },

      {
        number: "02",
        title: "Handling of Repairs",
        description:
          "Determine and quickly resolve system problems with coordinated repair support. Minimize downtime, increase output, and keep generating energy.",
      },
      {
        number: "03",
        title: "Preventive Maintenance ",
        description:
          "To reduce wear and avoid unforeseen breakdowns, and ensure improved long-term system health, consistent performance, and operational reliability. ",
      },
      {
        number: "04",
        title: "Asset Cleaning ",
        description:
          "Regular cleaning removes dust particles that reduce efficiency. You can maintain optimal energy absorption and boost system output by properly maintaining your equipment.",
      },
      {
        number: "05",
        title: "Remote diagnostics",
        description:
          "Make use of remote technology to promptly monitor, detect, and fix issues. Reduce manual inspections, expedite decision-making, and efficiently oversee system performance.",
      },
    ],
    path: "/operation-maintenance",
  },

  batteryStorage: {
    badge: "Execution Process",
    title: "Complete Electrical Infrastructure",
    highlightedLine: "Delivered With Precision",
    description:
      "Energy battery storage systems capture, store, and deliver energy with maximum efficiency and power when needed",
    backgroundImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Energy Analysis",
        description:
          "We thoroughly analysed your existing energy requirements, consumption rates, and future needs to determine exactly what you need and provide the most appropriate storage system.",
      },
      {
        number: "02",
        title: "System Design",
        description:
          "Our experienced team designs a battery energy storage system that meets your available space requirements, energy needs, and operational requirements for better efficiency.",
      },
      {
        number: "03",
        title: "Planning & Setup",
        description:
          "We plan everything thoroughly and carefully, making all necessary arrangements to ensure a smooth, efficient, and trouble-free installation process from start to finish.",
      },
      {
        number: "04",
        title: "Installation",
        description:
          "Our experienced professionals install the system with proper care and attention to safety and quality standards for maximum efficiency and long-term performance.",
      },
      {
        number: "05",
        title: "Testing & Optimization",
        description:
          "We thoroughly test the system under various operating conditions and optimize its performance to ensure maximum efficiency and desired results.",
      },
    ],
    path: "/battery-storage",
  },
  solarPlantCleaningRobots: {
    badge: "Execution Process",
    title: "Our Approach to Automated Solar Panel Cleaning Robots in India",
    highlightedLine: "For Optimal Performance",
    description:
      "Our methodical and transparent approach guarantees that your solar panels are cleaned on a regular basis, preserving efficiency and reducing manual effort.",
    backgroundImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Setting Up and Installing",
        description:
          "When installing and configuring robots for optimal cleaning coverage and smooth movement, the structure and panel arrangement are completely considered.",
      },
      {
        number: "02",
        title: "Creating Cleaning Schedule",
        description:
          "Cleaning cycles that guarantee consistent results and optimal energy output throughout the year are defined based on dust levels and system performance requirements.",
      },
      {
        number: "03",
        title: "Automation Cleaning Process",
        description:
          "Robots effectively clean panels by following pre-planned paths at a controlled speed and using gentle methods to remove dust without endangering the panels.",
      },
      {
        number: "04",
        title: "Monitoring and Assessing",
        description:
          "To ensure long-term dependability, we monitor cleaning results and verify that the system operates as intended while monitoring performance data.",
      },
      {
        number: "05",
        title: "Maintenance and Performance Optimization",
        description:
          "Regular inspections and preventive maintenance are carried out to ensure the robots operate efficiently, extend their lifespan, and continuously maintain peak solar panel performance.",
      }

    ],
    path: "/solar-plant-cleaning-robots",
  },
  solarPump: {
    badge: "Execution Process",
    title: "Efficient solar pump services in India converts sunlight into water power",
    // highlightedLine: "For Optimal Performance",
    description:
      "Solar pump systems use sunlight to generate electricity, powering motors that draw water from sources like wells or tanks, ensuring a continuous, eco-friendly water supply without grid dependency.",
    backgroundImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Solar Panels Capture Sunlight",
        description:
          "Solar panels absorb sunlight and convert it into direct current electricity, which becomes the primary power source for operating the solar pump efficiently.",
      },
      {
        number: "02",
        title: "Controller Regulates Power Flow",
        description:
          "The controller manages the electricity generated, ensuring stable voltage and current supply to protect the motor and improve system performance.",
      },
      {
        number: "03",
        title: "Motor Drives the Pump",
        description:
          "The electric motor uses solar energy to drive the pump, enabling water to be lifted or transferred from the source efficiently.",
      },
      {
        number: "04",
        title: "Water is Pumped to Storage",
        description:
          "Water is pumped from borewells, rivers, or tanks and directed into storage systems or irrigation channels as required.",
      },
      {
        number: "05",
        title: "Automatic Operation System",
        description:
          "The solar pump system can operate automatically during sunlight hours, reducing manual intervention and ensuring consistent water supply",
      },
      // {
      //   number: "06",
      //   title: "Low Maintenance Functioning",
      //   description:
      //     "With minimal moving parts and no fuel dependency, solar pumps require very little maintenance, making them cost-effective and reliable.",
      // },  

    ],
    path: "/solar-plant-cleaning-robots",
  },
  thirdParty: {
    badge: "Execution Process",
    title: "Smart energy sourcing made simple with third party power purchase",
    // highlightedLine: "For Optimal Performance",
    description:
      "Third party power purchase allows businesses to buy electricity directly from power producers, helping them get better pricing and greater flexibility. It also ensures an uninterrupted power supply for smooth operations. This model supports efficient energy management and contributes to long-term business growth.",
    backgroundImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Requirement Analysis",
        description:
          "We understand your energy consumption and business needs in detail to design the right power purchase plan.",
      },
      {
        number: "02",
        title: "Supplier Identification",
        description:
          "We connect you with reliable third-party power producers offering competitive rates and stable supply.",
      },
      {
        number: "03",
        title: "Agreement Structuring",
        description:
          "We handle legal contracts and agreements ensuring transparency and compliance with regulations",
      },
      {
        number: "04",
        title: "Regulatory Approvals",
        description:
          "Our team manages all approvals and documentation required for smooth power procurement.",
      },
      {
        number: "04",
        title: "Power Transmission Setup",
        description:
          "Our team manages all approvals and documentation required for smooth power procurement.",
      },
    ],
  },
};



function ProcessSection({ serviceKey = "solarEpc" }) {
  const service = processSectionData[serviceKey];

  if (!service) return null;

  return (
    <section className="relative bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Banner */}
        <div className="relative overflow-hidden rounded-[24px] bg-slate-900">
          <img
            src={service.backgroundImage}
            alt={service.title}
            className="h-[260px] w-full object-cover opacity-20 sm:h-[300px] lg:h-[340px]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.55),rgba(2,6,23,0.88))]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
              {service.badge}
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {service.title}
              <span className="block">{service.highlightedLine}</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {service.description}
            </p>
          </div>
        </div>

        {/* Floating Step Cards */}
        <div className="relative z-10 mx-auto -mt-10 grid max-w-8xl gap-5 sm:grid-cols-2 lg:mt-2 lg:grid-cols-5">
          {service.processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[20px] bg-white px-5 pb-6 pt-10 shadow-[0_12px_30px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto -mt-16 mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-base font-bold text-white shadow-lg">
                {step.number}
              </div>

              <h3 className="text-lg font-bold leading-snug text-slate-800">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;