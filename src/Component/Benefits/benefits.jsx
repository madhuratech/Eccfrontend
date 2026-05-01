import React from "react";
import { CheckCircle2 } from "lucide-react";
import ThirdParty from "../../Pages/ThirdParty";

const benefitsContent = {
  solarEpc: {
    tag: "Benefits",
    title: "Why Businesses Choose Our EPC Services",
    benefits: [
      "Make your own energy, save money in the long run.",
      "Reliable solar power during utility outages.",
      "Green living with renewable solar energy.",
      "Low maintenance, high efficiency solar systems.",
      "Increase your home’s value with solar systems.",
      "Live with sustainable, renewable energy."
    ],
    path: "/services/solar-epc-solutions",
  },

  solarplantmanagement: {
    tag: "Benefits",
    title: "Why Businesses Choose Our Solar Plant Management in India",
    benefits: [
      "Increases energy production and overall performance of the system.",
      "Lowers operation costs by improving efficiency in the management system.",
      "Lessens downtime through proactive monitoring and maintenance.",
      "Increases the efficiency of the system and extends equipment longevity.",
      "Provides consistent and reliable power production.",
      "Offers real time data to assist with decision-making.",
      "Reduces energy loss and improves productivity.",
      "Easy to monitor, manage, and maintain."
    ],
    path: "/services/solar-plant-management",
  },

  operationMaintenance: {
    tag: "Benefits",
    title: "Benefits of solar Operation and Maintenance Services in India",
    benefits: [
      "Consistent and dependable solar energy performance is guaranteed.",
      "Early problem identification lowers failure rates and maintains.",
      "Inspections and cleaning contribute to energy loss reduction.",
      "Well-maintained systems perform better and endure longer.",
      "Preventive care enhances overall operation and reduces repair costs.",
      "Transparent reporting makes data more effective."
    ],
    path: "/services/operation-maintenance",
  },

  batteryEnergy: {
    tag: "Benefits",
    title: "Why Businesses Choose Our Electrical Infrastructure Services",
    benefits: [
      "Reduces electricity bills with efficient energy management.",
      "Stores excess energy safely and efficiently for reliable use when needed.",
      "Enhances overall efficiency and reduces power consumption.",
      "Ensures continuous and stable power supply for operations",
      "Reduces energy waste with smarter and more efficient usage",
      "Simple and easy to use, with efficient management and operations.",
    ],
    path: "/services/battery-energy-storage",
  },

  solarPlantCleaningRobots: {
    tag: "Benefits",
    title: "Cutting Maintenance Costs and Boosting Output",
    benefits: [
      "Prevents dust buildup for consistent energy output.",
      "Reduces manual effort through automation.",
      "Improves efficiency and system performance.",
      "Ensures regular maintenance and reliability.",
      "Minimizes efficiency loss from dust accumulation issues.",
      "Extends system lifespan and durability over time."
    ],
  },
solarPump: {
  tag: "Benefits",
    title: "Power your water needs with solar efficiency",
      benefits: [
        "Reduces electricity costs with renewable solar energy powered pump systems",
        "Ensures continuous water supply even in remote locations without electricity",
        "Eco-friendly solution reducing carbon emissions and environmental impact significantly",
        "Low maintenance system with long-lasting performance and durable components",
        "Ideal for agriculture, residential, and industrial water pumping applications",
        "Easy installation with reliable performance and minimal operational challenges",
      ],
        path: "/services/solar-pump"
},
thirdParty: {
  tag: "Benefits",
    title: "Smart energy solution for cost saving and efficiency",
      benefits: [
        "Reduce electricity costs with flexible power purchase options.",
        "Ensure uninterrupted power for smooth operations.",
        "Choose energy sources based on your needs.",
        "Save long-term with stable and predictable pricing.",
        "Support renewable energy and sustainable practices.",
        "Simplify energy management with expert support."
      ],
        path: "/services/third-party-power-purchase"
}
};

function Benefits({ pageKey }) {
  const data = benefitsContent[pageKey];

  if (!data) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(15,23,42,1),rgba(59,130,246,0.12))] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                {data.tag}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                {data.title}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {data.benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-[22px] border border-white/10 bg-white/5 p-5"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-400"
                    size={20}
                  />
                  <p className="text-sm leading-7 text-slate-200 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;