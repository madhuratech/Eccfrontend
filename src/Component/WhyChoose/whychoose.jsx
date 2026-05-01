import React from "react";
import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  BatteryCharging,
  Wrench,
  Settings,
  LineChart,
  Sun,
  Bug,
  Info,
  Blinds,
  Spotlight,
  ChessQueen,
  Coins,
  HandFist,
  Cable,
  Ratio,
  Toolbox,
} from "lucide-react";

import solarEPC from "../../assets/Choose/solarEPC.jpg"
import solarPlant from "../../assets/Choose/solarPlant.jpg"
import OM from "../../assets/Choose/OM.jpg"
import BatteryStorage from "../../assets/Choose/BatteryStorage.jpg"
import solarClean from "../../assets/Choose/solarClean.jpg"
import SolarPump from "../../assets/Choose/SolarPump.jpg"
import Thirdparty from "../../assets/Choose/Thirdparty.JPG"

const whyChooseData = {
  solarEpc: {
    badge: "Why Choose Us",
    heading: "Why choose Madhura Energy for reliable and efficient Solar EPC Services in India",
    image: solarEPC,
    imageAlt:"Solar EPC Services 4",
    description:
      "At Madhura Energy, we provide our customers with the most efficient and cost-effective solar solutions with our expertise and make your solar experience smooth and hassle-free",
    points: [
      {
        title: "End-to-End Expertise",
        description:
          "We handle everything from design and procurement to installation and commissioning, ensuring a smooth and hassle-free solar journey.",
        icon: Sun,
      },
      {
        title: "Customized Solar Solutions",
        description:
          "Every project is tailored to your energy needs, site conditions, and budget for maximum efficiency and performance..",
        icon: PanelsTopLeft,
      },
      {
        title: "High-Quality Components",
        description:
          "We use reliable and durable solar equipment to ensure long-term performance, safety, and minimal maintenance.",
        icon: BatteryCharging,
      },
       {
        title: "Experienced Technical Team",
        description:
          "Our skilled engineers and technicians bring industry expertise to deliver precise and efficient project execution.",
        icon: Wrench,
      },
       {
        title: "Cost-Effective & Transparent Pricing",
        description:
          "We provide competitive pricing with complete transparency, helping you achieve the best return on your investment.",
        icon: LineChart,
      },
      //  {
      //   title: " Reliable Support & Maintenance",
      //   description:
      //     "From installation to after-sales service, we offer continuous support to ensure your solar system performs at its best.",
      //   icon: Settings,
      // },
    ],
    path:"/solar-epc-solutions",
  },

  solarplant: {
    badge: "Why Choose Us",
    heading: "Choose Madhura Energy for intelligent and efficient solar plant management solutions you can trust.",
    image: solarPlant,
    imageAlt:"Solar Plant Management 3",
    description:
      "The technology we use to provide our customers with the management and monitoring services necessary to provide peace of mind is designed to make your solar investment as profitable and efficient as possible.",
    points: [
      {
        title: "Proven Reliability",
        description:
          "Our solar facilities offer an extremely reliable solution with proven performance (consistent) and will always be available (minimum downtime) and providing excellent performance for years to come (longer-lasting).",
        icon: BatteryCharging,
      },
      {
        title: "Skilled Experts",
        description:
          "We have skilled personnel who monitor and manage your solar plant every day to make sure it is functioning optimally (day one) and continuously improving.",
        icon: PanelsTopLeft,
      },
      {
        title: "Cost Optimization",
        description:
          "With our services, you can save on operational expenses by increasing your plants' efficiencies, decreasing energy losses, and maximizing your return on investment.",
        icon: LineChart,
      },
      {
        title: "Total Support",
        description:
          "We provide complete support from the time we monitor and maintain your solar facility to assure optimal performance and ease of operation (performance optimization) in your solar facility.",
        icon: Settings,
      },
  
    ],
    path:"/solar-plant-management"
  },

  operationMaintenance: {
    badge: "Why Choose Us",
    heading: "Why Choose Our Team For Solar Operation & Maintenance Services in India?",
    image: OM,
    imageAlt:"Solar Operation and Maintenance Services 7",
    description:
      "Our solar operation and maintenance services in India are designed to maximize solar system performance, reduce unplanned failures, and increase asset longevity. With a proactive approach, real-time monitoring, and expert support, we ensure consistent energy output and long-term dependability. ",
    points: [
      {
        title: "Dependable System Performance Assistance",
        description:
          "We guarantee the effective operation of your solar systems through competent maintenance and ongoing monitoring. Our method guarantees long-term system stability ",
        icon: Wrench,
      },
      {
        title: "The Performance-Driven Maintenance Method",
        description:
          "Through data insights and routine inspections, our maintenance plan aims to maximize system efficiency. This enhances system performance, reduces energy loss, and increases output consistency.",
        icon: Settings,
      },
      {
        title: "Flow of a Structured Maintenance Process",
        description:
          "For every maintenance task, we adhere to a clear and organized methodology. This lowers operational risks, guarantees seamless execution, and promotes steady system performance over time. ",
        icon: LineChart,
      },
      {
        title: "System for Proactive Issue Detection",
        description:
          "We use preventive measures and real-time monitoring to identify possible problems early. This strategy aids in preventing significant malfunctions, and preserving continuous solar system operations.",
        icon:Bug
      },
    ],
    path:"/operation-maintenance",
  },

  batterystorage: {
    badge: "Why Choose Us",
    heading: "Choose Madhura Energy for reliable and efficient battery energy storage solutions you can trust.",
    image: BatteryStorage,
    imageAlt:"Solar Battery Storage",
    description:
      "We are dedicated to providing you with efficient and reliable energy solutions that are easy to understand and implement. Our team of experts will ensure that you have the best energy solution that meets your needs. Our energy solutions will help you save on energy costs while providing you with reliable power to keep your business running smoothly. Our energy solutions are designed to make your life easy by providing you with uninterrupted power while saving you money in the long run.",
    points: [
      {
        title: "Trusted Quality",
        description:
          "We provide you with quality energy solutions that are reliable and efficient. Our energy solutions are designed to last for a long time while providing you with the support you need for your business.",
        icon: Settings,
      },
      {
        title: "Expert Team",
        description:
          "Our team of experts will ensure that you have the best energy solution that meets your needs. Our team will work hard to ensure that you have the best results from the beginning to the final execution of the project.",
        icon: PanelsTopLeft,
      },
      {
        title: "Cost Efficient",
        description:
          "We deliver smart energy solutions that not only help you save on your electricity costs but also prevent wastage and enhance efficiency for better savings.",
        icon: LineChart,
      },
      {
        title: "Full Support",
        description:
          "We give you complete end-to-end support to ensure your system functions smoothly at all times.",
        icon: Info,
      },
    ],
    path:"/battery-storage"
  },
  solarPlantCleaningRobots: {
    badge: "Why Choose Us",
    heading: "Why Choose Solar Panel Cleaning Robots in India for a Practical Approach to Reliable and Efficient Solar Cleaning?",
    image: solarClean,
    imageAlt:"Solar Panel Cleaning Robot 4",
    description:
      "Our solar panel cleaning robot solutions are designed to maximize the efficiency and performance of your solar panels while minimizing manual labor and maintenance costs. With our advanced technology and expertise, we provide reliable and cost-effective cleaning solutions that ensure your solar panels operate at their best, even in challenging environments.",
    points: [
      {
        title: "Solutions Focused on Performance ",
        description:
          "Our method guarantees regular cleaning that maintains panel performance while lowering energy loss from dust and environmental accumulation.",
        icon: Settings,
      },
      {
        title: "Methodical Approach to Execution",
        description:
          "we adhere to a strict and methodical procedure that guarantees the cleaning system operates efficiently across a variety of solar projects",
        icon: Blinds,
      },
      {
        title: "Reliable System Performance",
        description:
          "Our solutions provide reliable cleaning results with little disruptions or problems because they are made to run continuously throughout time.",
        icon: Spotlight,
      },
      {
        title: "Reduced Operational Effort",
        description:
          "Automation lowers manual involvement, enabling more efficient solar maintenance with less dependence on manpower.",
        icon: Settings,
      },
      
    ],
    path:"/solar-plant-cleaning-robots"
  },
  solarPump: {
    badge: "Why Choose Us",
    heading: "Trusted solar pump services in India for reliable and efficient performance",
    image: SolarPump,
    imageAlt:"Solar Pump Operation",
    description:
      "We deliver high-quality solar pump services in India tailored to your needs. Our focus is on performance, durability, and customer satisfaction. With expert support and advanced technology, we ensure reliable water solutions for every application.",
    points: [
      {
        title: "Expert Solutions",
        description:
          "We provide customized solar pump systems based on your specific water requirements, ensuring optimal performance and efficiency.",
        icon: Ratio,
      },
      {
        title: "Quality Assurance",
        description:
          "Our products are built with high-quality materials to ensure durability, long life, and reliable operation in all conditions.",
        icon: Toolbox,
      },
      {
        title: "End-to-End Service",
        description:
          "From consultation to installation and support, we handle every step of your solar pump project seamlessly.",
        icon: HandFist,
      },
      {
        title: "Cost-Effective Systems",
        description:
          "Our solutions help you save on electricity and maintenance costs while delivering excellent long-term value. ",
        icon: Cable,
      },
      
    ],
    path:"/solar-pump"
  },
  thirdParty: {
    badge: "Why Choose Us",
    heading: "Reliable third party solar power purchase solutions for your business",  
    image: Thirdparty,
    imageAlt:"Solar Power Purchase Services",
    description:
      "We deliver cost-effective third party solar power purchase in India with expert support, seamless process, and reliable power supply for your business needs.",
    points: [
      {
        title: "Expert Guidance",
        description:
          "Our experienced team ensures smooth execution from planning to implementation.",
        icon: ChessQueen,
      },
      {
        title: "Cost Efficiency",
        description:
          "We help you reduce electricity expenses with optimised power sourcing strategies.",
        icon: Coins,
      },
      {
        title: "End-to-End Support",
        description:
          "Complete assistance from supplier selection to regulatory compliance.",
        icon: HandFist,
      },
      {
        title: "Reliable Supply",
        description:
          "We ensure uninterrupted and stable power for your operations.",
        icon: Cable,
      },
      
    ],
    path:"/third-party-power-purchase"
  }

};

function WhyChooseSection({ serviceKey = "solarEpc" }) {
  const service = whyChooseData[serviceKey];

  if (!service) return null;

  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-7 lg:p-8"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left image area */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                {service.badge}
              </p>

              <h2 className="mt-4 max-w-xl p-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {service.heading}
              </h2>

              <div className="relative rounded-[24px] border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="overflow-hidden rounded-[20px]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-[320px] w-full object-cover sm:h-[420px]"
                  />
                </div>
              </div>
            </div>

            {/* Right content */}
            <div>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                {service.description}
              </p>

              <div className="mt-8 space-y-6">
                {service.points.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-white sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseSection;