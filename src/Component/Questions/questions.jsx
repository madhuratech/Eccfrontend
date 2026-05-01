import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqPagesData = {
  solarEpc: {
    sectionData: {
      badge: "FAQs",
      title: "Frequently Asked",
      highlight: "Questions",
      description:
        "Find answers to the most common questions about our solar EPC solutions, project execution, timelines, and technical capabilities.",
      contactTag: "Need more help?",
      contactTitle: "Let’s discuss your solar EPC project requirements.",
      contactDescription:
        "Our team can guide you through project scope, design, procurement, installation, and commissioning for commercial and industrial solar projects.",
      buttonText: "Contact Us",
      path: "/solar-epc-solutions",
    },
    faqData: [
      {
        question: "What are Solar EPC Services in India?",
        answer:
          "They include engineering, procurement, and construction services required to design, source, build, and complete efficient solar energy systems for various applications.",
      },
      {
        question: "How long does installation take?",
        answer:
          "It depends on the project size, but most solar systems are completed quickly within a short time frame by experts",
      },
      {
        question: " Is solar energy cost-effective?",
        answer:
          "Yes, it also helps in reducing your electricity bills over time by generating your own power and reducing dependence on costly energy usage of the grid.",
      },
      {
        question: "Do I need maintenance?",
        answer:
          "Solar systems require minimal maintenance, making them easy to manage, cost-effective, and long-lasting while ensuring consistent energy production over many years.",
      },
      {
        question: "Can it be used for businesses?",
        answer:
          "Yes, solar EPC services are ideal for homes, offices, and industries. The services provide efficient and cost-effective energy solutions for various needs.",
      },
      {
        question: "Do you provide support after installation?",
        answer:
          "Yes, we offer reliable technical support for your solar system to ensure smooth running and timely assistance whenever needed.",
      },
    ],
  },
  solarPlant: {
    sectionData: {
      badge: "FAQs",
      title: "Frequently Asked",
      highlight: "Questions",
      description:
        "Get answers to common questions about our solar plant management in India, monitoring capabilities, maintenance support, and performance optimization.",
      contactTag: "Need more help?",
      contactTitle: "Let’s discuss your solar plant management in India needs.",
      contactDescription:
        "Our experts can help you with monitoring, maintenance, performance optimization, and long-term reliability for your commercial or industrial solar plant.",
      buttonText: "Contact Us",
    },
    faqData: [
      {
        question: " In what ways can smart testing enhance overall system performance?",
        answer:
          "With the use of sophisticated tools and data analysis to identify issues early in the process, you'll improve efficiency and guarantee your electrical systems operate at peak performance.",
      },
      {
        question: " Is it possible to avoid an unexpected failure with the use of testing?",
        answer:
          "Regular testing will allow you to discover hidden problems and weak points within your system, which will help prevent sudden failures and expensive downtime.",
      },
      {
        question: "How is your testing method different from others?",
        answer:
          "We utilize a combination of cutting-edge technology, expert analysis, and a proactive maintenance approach to provide reliable and accurate results now and into the future.",
      },
      {
        question: " Is testing only required on larger systems?",
        answer:
          "Testing on any and all sizes of systems is crucial for ensuring a safe and efficient system, regardless of the overall size of the system.",
      },
      {
        question: "How will I determine whether or not I need to have my equipment tested?",
        answer:
          "In general, if you notice a decrease in performance, an increase in the number of faults occurring, or notice the age of the equipment, you should have your equipment professionally tested and inspected.",
      },
      {
        question: "Will your services help ensure long-term performance of my system? ",
        answer:
          "Yes, all of our services are designed not just to provide a quick turnaround time, but to improve the durability, efficiency, and longevity of your system, as well",
      },
    ],
  },

  operationsMaintenance: {
    sectionData: {
      badge: "FAQs",
      title: "Operations &",
      highlight: "Maintenance",
      description:
        "Discover comprehensive information about our solar operations and maintenance services, which include performance optimization, preventative care, and monitoring. ",
      contactTag: "Need more help?",
      contactTitle: "Require More Assistance",
      contactDescription:
        "To guarantee optimal operation, we provide professional monitoring, maintenance, inspections, and prompt problem solving for your solar system.",
      buttonText: "Contact Us",
      path: "/operation-maintenance",
    },
    faqData: [
      {
        question: "Do you offer more assistance when required? ",
        answer:
          "In order to guarantee continued system performance, we do provide continuing assistance, which includes monitoring, maintenance, and prompt issue resolution.",
      },
      {
        question: "What is included in your O&M service?",
        answer:
          "For the best possible system functioning, we offer monitoring, preventive maintenance, inspections, cleaning, diagnostics, and repair assistance.",
      },
      {
        question: "How frequently is maintenance carried out? ",
        answer:
          "Maintenance is planned according to the requirements of the system and usually consists of routine cleaning, inspections, and efficiency-boosting preventive servicing",
      },
      {
        question: " Do you offer assistance when there are system problems?",
        answer:
          "Yes, we provide prompt troubleshooting and repair assistance to reduce downtime in your solar operations",
      },
      {
        question: "Will performance reports be sent to me?",
        answer:
          "Yes, in order to help with decision-making, we regularly provide reports that include information on system health, performance trends, and maintenance actions. ",
      },
      {
        question: "Are you able to oversee large-scale solar systems? ",
        answer:
          "Yes, we manage systems of all sizes with organized procedures, sophisticated monitoring, and knowledgeable maintenance assistance.",
      },

    ],
    path: "/Operation-maintenance",
  },

  batteryStorage: {
    sectionData: {
      badge: "FAQs",
      title: "Battery Storage",
      highlight: "Questions",
      description:
        "Get answers to common questions about our battery energy storage solutions, backup support, load shifting, and energy optimization.",
      contactTag: "Need more help?",
      contactTitle: "Let’s discuss your energy storage needs.",
      contactDescription:
        "Our experts can help you choose the right battery storage solution for backup power, demand control, energy optimization, and better renewable integration.",
      buttonText: "Contact Us",
    },
    faqData: [
      {
        question: "What is a battery energy storage system?",
        answer:
          "Battery energy storage is a system that stores electricity safely for later use whenever needed, ensuring reliable and continuous power supply.",
      },
      {
        question: "Why is battery energy storage important?",
        answer:
          "It helps provide reliable backup power, saves energy efficiently, and reduces overall electricity costs for homes and businesses every day consistently.",
      },
      {
        question: "Where can battery energy storage be used?",
        answer:
          "It can be used in homes, offices, industries, commercial buildings, and solar power systems to ensure reliable energy storage.",
      },
      {
        question: "Is battery energy storage safe to use?",
        answer:
          "Yes, modern battery energy storage systems are designed with advanced safety features to ensure secure, reliable, and efficient usage in various environments every day.",
      },
      {
        question: "Can battery energy storage reduce electricity bills?",
        answer:
          "Yes, it helps store electricity when costs are lower and use it later during high demand, reducing overall expenses and saving money over time efficiently",
      },
      {
        question: "How long does a battery system last?",
        answer:
          "Most battery energy storage systems last several years with proper maintenance, care, and regular performance monitoring for efficiency.",
      },
    ],
    path: "/battery-storage",
  },

  solarPlantCleaningRobots: {
    sectionData: {
      badge: "FAQs",
      title: "Solar Panel Cleaning Robots",
      highlight: "Questions",
      description:
        "Discover the answers to commonly asked concerns concerning our solar panel cleaning robot solutions, such as operation, maintenance requirements, and system compatibility.",
      contactTag: "Do You require more assistance?",
      contactTitle: "Let’s plan your energy strategy.",
      contactDescription:
        "Let's talk about your needs for solar cleaning. Based on your system size, site conditions, and performance objectives, our experts can assist you in choosing the optimum choice.",
      buttonText: "Contact Us",
    },
    faqData: [
      {
        question: "How do robots that clean solar panels operate?",
        answer:
          "Robots that clean solar panels follow predetermined paths and effectively use brushes or other controlled equipment to remove dust.",
      },
      {
        question: "Is water necessary for cleaning?",
        answer:
          "Certain systems use very little water, while others use dry cleaning methods, depending on requirements and site conditions.",
      },
      {
        question: "Can they be used with any kind of solar installation?",
        answer:
          "Depending on architecture and design, they can be modified for a variety of configurations, including ground-mounted and rooftop solar systems.",
      },
      {
        question: "How frequently are the panels cleaned by the robots? ",
        answer:
          "To guarantee constant efficacy, cleaning frequency can be planned based on dust levels, ambient conditions, and performance standards.",
      },
      {
        question: "Do solar cleaning robots require routine maintenance? ",
        answer:
          "They are made to require little maintenance, and regular checks guarantee dependable cleaning outcomes and effective operation.",
      },
      {
        question: "Will the panels be impacted or harmed by the robots?",
        answer:
          "No, they move in a controlled and safe way, guaranteeing that there is no chance of injury when cleaning panels.",
      },
    ],
  },
  solarPump:{
    sectionData: {
      badge: "FAQs",
      title: "Solar Pump",
      highlight: "Questions",
      description:
        "Find answers to common questions about our solar pump solutions, including applications, installation, maintenance, and performance benefits.",
      contactTag: "Need more help?",
      contactTitle: "Let’s discuss your solar pump needs.",
      contactDescription:
        "Our experts can help you choose the right solar pump solution for agriculture, residential, or industrial water pumping applications, ensuring reliable performance and sustainability.",
      buttonText: "Contact Us",
    },
    faqData: [
      {
        question: "What is a solar pump system used for?",
        answer:
          "A solar pump system is used to draw water using solar energy, mainly for irrigation, domestic supply, and industrial applications, reducing electricity and fuel dependency."
      },
      {
        question: "Does a solar pump work during cloudy weather?",
        answer:
          "Yes, solar pumps can work during cloudy conditions but with reduced efficiency. Performance depends on sunlight availability, though systems are designed to handle moderate fluctuations effectively.",
      },
      {
        question: "Is a solar pump suitable for agricultural irrigation needs?",
        answer:
          "Yes, solar pumps are ideal for agricultural irrigation as they provide reliable water supply, reduce operational costs, and support sustainable farming practices.",
      },
      {
        question: "How much maintenance does a solar pump require?",
        answer:
          "Solar pumps require minimal maintenance since they have fewer moving parts. Regular cleaning of panels and periodic checks ensure long-lasting and efficient performance.",
      },
      {
        question: "Can a solar pump reduce electricity bills significantly?",
        answer:
          "Yes, solar pumps use sunlight instead of electricity, helping reduce or eliminate electricity bills, making them a cost-effective solution over time.",
      },
      {
        question: "Is installation support available for solar pump systems?",
        answer:
          "Yes, we provide complete installation support along with guidance and maintenance services to ensure smooth operation and long-term system efficiency. ",
      },
    ],

  },
  thirdParty:{
    sectionData: {
      badge: "FAQs",
      title: "Third Party Power Purchase",
      highlight: "Questions",
      description:
        "Get answers to common questions about our third party solar power purchase in India, including cost savings, reliability, and contract flexibility.",
      contactTag: "Need more help?",
      contactTitle: "Let’s discuss your power procurement needs.",    
      contactDescription:
        "Our experts can help you understand the benefits of third party power purchase agreements, including cost savings, reliable supply, and flexible contract options for your business.",
      buttonText: "Contact Us",
    },
    faqData: [
      {
        question: "What is third party solar power purchase?",
        answer:
          "It is a method where businesses buy electricity directly from independent power producers instead of relying on traditional electricity providers."
      },
      {
        question: "Who can use this service?",
        answer:
          "Industries, factories, and commercial establishments with high electricity consumption can benefit from third party power purchase solutions."
      },
      {
        question: "Is it cost effective?",
        answer:
          "Yes, it reduces electricity costs by offering competitive pricing compared to traditional utility supply."
      },
      {
        question: "Is regulatory approval required?",
        answer:
          "Yes, approvals are needed, and our team handles all compliance and documentation processes."
      },
      {
        question: "Does it ensure continuous supply?",
        answer:
          "Yes, reliable producers and proper transmission setup ensure uninterrupted electricity supply."
      },
      {
        question: "How long is the agreement period?",
        answer:
          "Agreement duration depends on business needs, usually ranging from short-term to long-term contracts."
      },
    ],
    path:"/third-party-power-purchase"
  },
};

function FAQ({ page = "solarEpc" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentPage = faqPagesData[page] || faqPagesData.solarEpc;
  const { sectionData, faqData } = currentPage;

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
              {sectionData.badge}
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {sectionData.title}
              <span className="block text-emerald-600">
                {sectionData.highlight}
              </span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              {sectionData.description}
            </p>

            <div className="mt-8">
              <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-xl sm:p-7">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  {sectionData.contactTag}
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-snug">
                  {sectionData.contactTitle}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {sectionData.contactDescription}
                </p>

                <button className="mt-6 inline-flex items-center rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg">
                  <a href="/contact" className="text-white hover:text-emerald-400">
                    {sectionData.buttonText}
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Right FAQ */}
          <div className="lg:col-span-8">
            <div
              className="space-y-4"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {faqData.map((item, index) => {
                const isOpen = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() =>
                      setHoveredIndex(hoveredIndex === index ? null : index)
                    }
                    className={`group cursor-pointer overflow-hidden rounded-[28px] border bg-white transition-all duration-300 ${isOpen
                        ? "border-emerald-300 shadow-xl shadow-emerald-100/60"
                        : "border-slate-200 shadow-sm hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                      }`}
                  >
                    <div className="flex items-start justify-between gap-4 px-6 py-5 sm:px-7 sm:py-6">
                      <div className="flex items-start gap-4">
                        <span
                          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold transition-all duration-300 ${isOpen
                              ? "bg-emerald-950 text-white"
                              : "bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                            }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3
                          className={`text-base font-semibold leading-7 transition-colors duration-300 sm:text-lg ${isOpen
                              ? "text-slate-900"
                              : "text-slate-800 group-hover:text-emerald-700"
                            }`}
                        >
                          {item.question}
                        </h3>
                      </div>

                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                            ? "rotate-180 border-emerald-200 bg-emerald-50 text-emerald-600"
                            : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                          }`}
                      >
                        <ChevronDown size={20} />
                      </span>
                    </div>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pl-[4.9rem] pr-6 text-sm leading-7 text-slate-600 sm:px-7 sm:pb-7 sm:pl-[5.4rem] sm:text-base">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;