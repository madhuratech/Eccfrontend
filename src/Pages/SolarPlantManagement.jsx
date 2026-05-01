import React from "react";

import Banner from "../Component/Hero/Banner";
import Aboutservice from "../Component/AboutServices/AboutServices";
import Servicecards from "../Component/Servicecards/servicecards";
import ProcessSection from "../Component/Process/process";
import WhyChooseSection from "../Component/WhyChoose/whychoose";
import Benefits from "../Component/Benefits/benefits";
import FAQ from "../Component/Questions/questions";
import IndustriesSection from "../Component/Industry/industries";
import Summary from "../Component/summary/summary";
import CTASection from "../Component/CallToAction/calltoaction";
import SEO from "../Component/SEO/seo";



function SolarPlantManagement() {
  return (
    <div className="bg-slate-950 text-white">
      <SEO
      title="Solar Plant Management in India | Madhura Energy Smart Monitoring"
      description="Madhura Energy provides advanced solar plant management in India, ensuring real-time monitoring, optimized performance, and maximum energy output for your solar assets."
      keywords="Solar Plant Management"
      />

      <Banner />
      <Aboutservice />
      <Servicecards serviceKey="solarplantmanagement" />
      <ProcessSection serviceKey="solarplant"/>
      <WhyChooseSection serviceKey="solarplant"/>
      <IndustriesSection/>
      <Benefits pageKey="solarplantmanagement" />
      <Summary/>
      <FAQ page="solarPlant" />
      <CTASection page="solarPlant" />
    </div>
  );
}

export default SolarPlantManagement;