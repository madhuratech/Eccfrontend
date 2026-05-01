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



function SolarPump() {
  return (
    <div className="bg-slate-950 text-white">
      <SEO
      title="Professional Solar Pump Services in India | Madhura Energy"
      description="Choose Madhura Energy for trusted solar pump services in India, delivering high-quality support, timely maintenance, and energy-efficient solutions for sustainable water management."
      keywords="Solar Pump Services"
      />

      <Banner />
      <Aboutservice />
      <Servicecards serviceKey="solarPump" />
      <ProcessSection serviceKey="solarPump"/>
      <WhyChooseSection serviceKey="solarPump"/>
      <IndustriesSection/>
      <Benefits pageKey="solarPump" />
      <Summary/>
      <FAQ page="solarPump" />
      <CTASection page="solarPump" />
    </div>
  );
}

export default SolarPump;