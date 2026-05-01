import React from "react";
import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  BadgeCheck,
  Wrench,
  LineChart,
  ShieldCheck,
  BatteryCharging,
  Settings,
  Factory,
  Building2,
  Omega,
  Speech,
  Info,
  ShieldMinus,
  Gpu,
  Construction,
  ShieldEllipsis,
  TabletSmartphone,
  Shield,
  ShieldCheckIcon,
  Settings2,
  AlignVerticalJustifyCenter,
  WashingMachine,
  Metronome,
  LayoutDashboard,
  Ticket,
  ShieldAlert,
  Scroll,
  TvMinimal,
  FactoryIcon,
  Save,
  Inspect,
  AppWindow,
} from "lucide-react";
// SolarEPC
import ProjectPlanning from "../../assets/services/Service- solarEPC/ProjectPlanning.jpg"
import SeamlessExecution from "../../assets/services/Service- solarEPC/SeamlessExecution.jpg"
import Customsystemdesign from "../../assets/services/Service- solarEPC/Customsystemdesign.jpg"
import Solarpanelprocurement from "../../assets/services/Service- solarEPC/Solarpanelprocurement.jpg"
import EfficientEngineering from "../../assets/services/Service- solarEPC/EfficientEngineering.jpg"
import ExpertInstallation from "../../assets/services/Service- solarEPC/ExpertInstallation.jpg"
import ComplianceSupport from "../../assets/services/Service- solarEPC/ComplianceSupport.jpg"
import ConcepttoCommissioning from "../../assets/services/Service- solarEPC/ConcepttoCommissioning.jpg"
import TrustedTechnicalSupport from "../../assets/services/Service- solarEPC/TrustedTechnicalSupport.jpg"
// SolarPlantManagement
import ElectricalTesting from "../../assets/services/Service-solarPlant/ElectricalTesting.jpg"
import ACandDCEquipmentTesting from "../../assets/services/Service-solarPlant/ACandDCEquipmentTesting.jpg"
import BreakerMaintenance from "../../assets/services/Service-solarPlant/BreakerMaintenance.jpg"
import PowerTransformersTesting from "../../assets/services/Service-solarPlant/PowerTransformersTesting.jpg"
import InsulatingTesting from "../../assets/services/Service-solarPlant/InsulatingTesting.jpg"
import InsulatingResistanceTesting from "../../assets/services/Service-solarPlant/InsulatingResistanceTesting.jpg"
// OperationMaintenance
import MonitoringPerformance from "../../assets/services/Service-O&M/MonitoringPerformance.jpg"
import PreventiveMedicalCare from "../../assets/services/Service-O&M/PreventiveMedicalCare.jpg"
import AssistancewithRepairs from "../../assets/services/Service-O&M/AssistancewithRepairs.jpg"
import AnalyzingtheSystem from "../../assets/services/Service-O&M/AnalyzingtheSystem.jpg"
import WashingPanels from "../../assets/services/Service-O&M/WashingPanels.jpg"
import Observingfromadistance from "../../assets/services/Service-O&M/Observingfromadistance.jpg"
// SolarPlantCleaningRobots
import IncreasesProduction from "../../assets/services/Service-cleaningrobot/IncreasesProduction.jpg"
import automatedcleaning from "../../assets/services/Service-cleaningrobot/automatedcleaning.jpg"
import IntelligentCleaningMethod from "../../assets/services/Service-cleaningrobot/IntelligentCleaningMethod.jpg"
import ReducesManualLabor from "../../assets/services/Service-cleaningrobot/ReducesManualLabor.jpg"
import PerformanceReliability from "../../assets/services/Service-cleaningrobot/PerformanceReliability.jpg"
import NoDamage from "../../assets/services/Service-cleaningrobot/NoDamage.jpg"
import LongTermReliability from "../../assets/services/Service-cleaningrobot/LongTermReliability.jpg"
import MinimalMaintenance from "../../assets/services/Service-cleaningrobot/MinimalMaintenance.jpg"
// import { path } from "framer-motion/client";

// SolarPump
import ReliableWaterSupply from "../../assets/services/Service-solarpump/ReliableWaterSupply.jpg"
import UpgradetoEco from "../../assets/services/Service-solarpump/UpgradetoEco.jpg"
import EffectiveforIndustrial from "../../assets/services/Service-solarpump/EffectiveforIndustrial.jpg"
import EnergySavingOperation from "../../assets/services/Service-solarpump/EnergySavingOperations.jpg"
import InstallationSupport from "../../assets/services/Service-solarpump/InstallationSupport.jpg"
import SuitableApplication from "../../assets/services/Service-solarpump/SuitableApplication.jpg"




const serviceScopeData = {
  "solar-epc-solutions": {
    tag: "What We Deliver",
    title: "Complete EPC Scope in 5 Key Service Areas",
    items: [
      {
        title: "Project Planning",
        description:
          "We carefully plan every solar project by understanding your energy needs, budget, & site conditions. Our approach ensures the system is designed for maximum efficiency, better performance, and long-term savings, giving you a reliable and cost-effective solar solution.",
        icon: PanelsTopLeft,
        image: ProjectPlanning,
        imageAlt:"Solar EPC Solutions"
      },
      {
        title: "Seamless Execution",
        description:
          "We execute every solar project with precision and careful planning, ensuring smooth and hassle-free execution at every stage. Our team focuses on quality, timely delivery, and efficient coordination to deliver reliable and long-lasting solar solutions.",
        icon: BadgeCheck,
        image:
          SeamlessExecution,
        imageAlt:"Solar EPC Installation"
      },
      {
        title: "Custom System Design",
        description:
          "We design our solar systems in such a way that they perfectly meet your energy needs and future requirements. Our solar solutions are engineered to deliver maximum efficiency, optimal performance, & long-term reliability while remaining highly effective & cost-efficient.",
        icon: Wrench,
        image: Customsystemdesign,
        imageAlt:"Solar EPC Projects"
      },
      {
        title: "Solar Panel Procurement",
        description:
          "At our company, we procure the highest quality solar panel components that meet your specific energy needs. Our main focus is the quality and reliability of the solar panel components, ensuring superior performance and long-term durability.",
        icon: ShieldCheck,
        image: Solarpanelprocurement,
        imageAlt:"Solar EPC Execution"
      },
      {
        title: "Efficient Engineering",
        description:
          "Our engineering process is designed in such a way that it ensures safety, efficiency, and maximum energy production. We follow tried and tested standards and smart planning to deliver efficient solar solutions that are reliable and consistent in nature.",
        icon: Omega,
        image: EfficientEngineering,
        imageAlt:"Solar EPC Contractor"
      },
      {
        title: "Expert Installation",
        description:
          "Your solar system is installed with precision and accuracy by our experts to ensure maximum efficiency and durability in the long run. We also ensure that your solar system is installed safely and according to the best practices in the industry.",
        icon: Speech,
        image: ExpertInstallation,
        imageAlt:"Solar EPC Setup"
      },
      {
        title: "Compliance Support",
        description:
          "We take utmost care in ensuring that all the approvals, documentation, and regulations are taken care of. Our team ensures that all the processes are in accordance with the guidelines, saving your precious time and effort by making the process smooth, simple, and hassle-free.",
        icon: Info,
        image: ComplianceSupport,
        imageAlt:"Solar EPC Services 1"
      },
      {
        title: "Concept to Commissioning",
        description:
          "We ensure that your solar experience is taken care of the   precision, right from the concept to the commissioning of the project. Our team of experts will be able to provide you with the most efficient, reliable, and high-performance solar solution with ease and no hassle at all.",
        icon: ShieldMinus,
        image: ConcepttoCommissioning,
        imageAlt:"Solar EPC Services 2"
      },
      {
        title: "Trusted Technical Support",
        description:
          "We are here to provide the best and most reliable support to your solar system. Our team is at your service and is willing to assist you in the maintenance and proper functioning of your solar system with the utmost efficiency and no interruptions.",
        icon: Gpu,
        image: TrustedTechnicalSupport,
        imageAlt:"Solar EPC Services 3"
      },
    ],
    path: "/solar-epc-solutions"
  },

  solarplantmanagement: {
    tag: "Storage Solutions",
    title: "Advanced Energy Management Solutions for Efficient Use of Electricity",
    items: [
      {
        title: "Electrical Testing",
        description:
          "We offer complete electrical testing services that meet regulatory compliance requirements for electrical equipment to ensure it is functioning correctly and is safe and properly maintained, reliable, efficient, and fully compliant with standards.",
        icon: BatteryCharging,
        image: ElectricalTesting,
        imageAlt:"Solar Plant Operations"
      },
      {
        title: "AC and DC Equipment Testing ",
        description:
          "Our AC and DC testing services allow us to verify the proper functioning of AC and DC circuit breakers by performing thorough inspection, calibration and testing to ensure proper operating conditions, safety, and reliability.",
        icon: Settings,
        image: ACandDCEquipmentTesting,
        imageAlt:"Solar Plant Monitoring"
      },
      {
        title: "Breaker Maintenance",
        description:
          "Our breaker maintenance solutions ensure that the operation of circuit breakers is safe and compliant with applicable standards so they do not fail and place electrical equipment at risk of damage due to overloads or short circuits and unexpected faults",
        icon: Construction,
        image: BreakerMaintenance,
        imageAlt:"Solar Plant Maintenance"  
      },
      {
        title: "Power Transformers Testing",
        description:
          "Transformer testing is used to examine many aspects of a transformer's performance. Our transformer testing services help to detect issues through the assessment of performance and safety. We also help ensure reliable and uninterrupted power delivery to your facility.",
        icon: ShieldEllipsis,
        image: PowerTransformersTesting,
        imageAlt:"Solar Facility Management"
      },
      {
        title: "Insulating Testing ",
        description:
          "Our Insulating material testing services are used to test the insulation materials of your transformers. By testing the strength and quality of your insulating materials, you can prevent unintentional electrical leakage, unsafe faults, and electrical Hazards.",
        icon: TabletSmartphone,
        image: InsulatingTesting,
        imageAlt:"Solar Plant Management 1"
      },
      {
        title: "Insulating Resistance Testing",
        description:
          "Our Insulation Resistance Testing Services will check the insulating resistance of your electrical system, which allows for a safe, long-lasting and code compliant system, ensuring optimal performance and preventing potential electrical failures.",
        icon: ShieldCheckIcon,
        image: InsulatingResistanceTesting,
        imageAlt:"Solar Plant Management 2"
      },
    ],
    path: "/solar-plant-management",
  },

  operationMaintenance: {
    tag: "WHAT WE PROVIDE: ",
    title: "Operation & Maintenance Coverage in All Important Service Domains",
    items: [
      {
        title: "Monitoring Performance ",
        description:
          "Use intelligent monitoring tools to keep an eye on your solar system in real time. Recognize performance declines early, maximize energy production, and guarantee steady power with enhanced efficiency and improved system reliability.",
        icon: Wrench,
        image: MonitoringPerformance,
        imageAlt:"Solar Operation and Maintenance Services 1"
      },
      {
        title: "Preventive Medical Care",
        description:
          "Planned maintenance and regular inspections, problems can be avoided before they arise. Minimize system wear, prevent expensive malfunctions, & maintain the effectiveness and ensure consistent long-term operational performance.",
        icon: ShieldCheck,
        image: PreventiveMedicalCare,
        imageAlt:"Solar Operation and Maintenance Services 2"
      },
      {
        title: "Assistance with Repairs",
        description:
          "For any system issues, get prompt and dependable repair assistance. To keep energy flowing, our staff promptly finds problems, fixes them, and reduces downtime with efficient solutions and expert technical support services available.",
        icon: Settings2,
        image: AssistancewithRepairs,
        imageAlt:"Solar Operation and Maintenance Services 3"
      },
      {
        title: "Analyzing the System ",
        description:
          "Extensive system checks assist identify hidden issues and ensure peak performance. Frequent evaluations can improve performance, safety, and long-term dependability while reducing risks and enhancing their overall system efficiency.",
        icon: AlignVerticalJustifyCenter,
        image: AnalyzingtheSystem,
        imageAlt:"Solar Operation and Maintenance Services 4"
      },
      {
        title: "Washing Panels",
        description:
          "Keep your solar panels clear of dust and debris to maintain their optimal performance. Regular cleaning improves energy absorption and stops performance declines over time, ensuring consistent output and maximizing long-term efficiency.",
        icon: WashingMachine,
        image: WashingPanels,
        imageAlt:"Solar Operation and Maintenance Services 5"
      },
      {
        title: "Observing from a distance ",
        description:
          "Utilize advanced diagnostics to keep an eye on your solar system from a distance. Get the alerts in real time, make decisions faster, and monitor performance all the time with enhanced accuracy and improved operational efficiency.",
        icon: Metronome,
        image: Observingfromadistance,
        imageAlt:"Solar Operation and Maintenance Services 6"
      },

    ],
    path: "/operation-maintenance",
  },

  solarPlantCleaningRobots:{
    tag: "Innovative Solutions",
    title: "Intelligent Features for Reliable and Effective Solar Panel Cleaning Robots in India",
    items: [
      {
        title: "Automated Panel Cleaning ",
        description:
          "Without the need for human interaction, robotic equipment cleans panels at set intervals to maintain them clear of dust and debris. This meticulous approach encourages continuous operation and aids in maintaining consistent system performance over time.",
        icon: Wrench,
        image: automatedcleaning,
        imageAlt: "Solar Panel Cleaning Robot",  
      },
      {
        title: "Increases Production of Solar Energy ",
        description:
          "Panel efficiency may be reduced by the buildup of dust and grime. Frequent automatic cleaning minimizes performance losses, preserves optimal surface conditions, and makes power output more dependable.",
        icon: ShieldCheck,
        image: IncreasesProduction,
        imageAlt:"Solar Cleaning Robot Services",
      },
      {
        title: "The Intelligent Cleaning Method",
        description:
          "Complete coverage and effective cleaning are guaranteed by the system's sophisticated operation across multiple layouts. More adaptability for various solar systems and operating conditions is made possible by this methodical approach.",
        icon: Settings,
        image: IntelligentCleaningMethod,
        imageAlt:"Solar Panel Cleaning System"
      },
  
      {
        title: "Reduces Manual Labor ",
        description:
          "By removing regular physical engagement, automating the cleaning process lowers dependency on labor. Time is saved, operational effectiveness is raised, and overall maintenance management is made simpler with improved efficiency & reduced operational costs.",
        icon: LayoutDashboard,
        image: ReducesManualLabor,
        imageAlt:"Robotic Solar Panel Cleaning"
      },
      {
        title: "Performance Reliability",
        description:
          "The system's scheduled and reliable cleaning cycles promote stable solar performance. It guarantees that panels function at predicted levels throughout time and helps prevent efficiency discrepancies brought on by dust collection.",
        icon: Ticket,
        image: PerformanceReliability,
        imageAlt:"Automated Solar Panel Cleaning"
      },
      {
        title: "No Damage to the Panels",
        description:
          "The cleaning mechanism is made to function safely without damaging the surface or structure of the panel. While producing efficient outcomes, controlled movement and gentle procedures safeguard system components and ensure long-term operational reliability.",
        icon: ShieldAlert,
        image: NoDamage,
        imageAlt:"Solar Panel Cleaning Robot 1"
      },
       {
        title: "Long-Term Reliability",
        description:
          "Constructed from robust materials, the system is designed to function continuously in a variety of settings. For many years, it provides dependable cleaning results with little interruption, ensuring durability and consistent long-term performance.",
        icon: Scroll,
        image: LongTermReliability,
        imageAlt:"Solar Panel Cleaning Robot 2"
      },
       {
        title: "Minimal Maintenance",
        description:
          "System Long-term smooth and reliable operation of the system is made possible by minimum maintenance requirements. By doing this, operating effort is decreased and maximum efficiency may be maintained without regular maintenance",
        icon: TvMinimal ,
        image: MinimalMaintenance,
        imageAlt:"Solar Panel Cleaning Robot 3"
      },
    ],
    

  },
   solarPump:{
    tag: "Innovative Solutions",
    title: "We deliver reliable solar pump services for efficient water use everyday",
    items: [
      {
        title: "Reliable Water Supply",
        description:
          "We ensure uninterrupted water flow with advanced solar pump services designed for consistent performance. Even in remote areas, our solutions deliver dependable and reliable water access without relying on traditional electricity sources.",
        icon: Wrench,
        image: ReliableWaterSupply,
        imageAlt:"Solar Water Pump"
      },
      {
        title: "Upgrade to Eco-Friendly",
        description:
          "Switch to environmentally friendly solar pump systems that reduce carbon footprint and promote sustainable practices. Our solutions help you move away from diesel or electric pumps for a greener and more energy-efficient future ahead.",
        icon: ShieldCheck,
        image: UpgradetoEco,
        imageAlt:"Solar Pump Installation"
      },
      {
        title: "Effective for Industrial Use",
        description:
          "Our solar pump systems are engineered to support industrial operations with high efficiency. They handle large-scale water requirements, making them ideal for factories, farms, and commercial setups with reliable performance and durability.",
        icon: FactoryIcon,
        image: EffectiveforIndustrial,
        imageAlt: "Solar Pump Systems"
      },
  
      {
        title: "Energy Saving Operations",
        description:
          "Save on electricity bills with our solar pump solutions that utilize free solar energy. These systems minimize operational costs while maintaining excellent performance throughout the year with long-term reliability and efficiency.",
        icon: Save,
        image: EnergySavingOperation,
        imageAlt:"Solar Pump Maintenance"
      },
      {
        title: "Installation & Support",
        description:"We provide complete installation & after-sales support for solar pump systems. Our team ensures smooth setup and quick assistance whenever required with dedicated service and prompt technical support, ensuring customer satisfaction and long-term system reliability.",
        icon: Inspect,
        image: InstallationSupport,
        imageAlt:"Solar Water Pumping"
      },
      {
        title: "Suitable for Every Application",
        description:
          "From agriculture to residential and industrial needs, our solar pump systems are adaptable. They are designed to meet various water requirements efficiently across different environments with advanced technology and optimized performance solutions.",
        icon: AppWindow,
        image: SuitableApplication,
        imageAlt:"Solar Pump Setup"
      },
      
    ],
    path: "/solar-pump",

  } ,
};

function Servicecards({ serviceKey }) {
  const service = serviceScopeData[serviceKey];

  if (!service) return null;

  return (
    <section id="scope" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
            {service.tag}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {service.title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {service.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base text-justify">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Servicecards;