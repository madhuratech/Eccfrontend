import React from "react";
import SEO from "../Component/SEO/seo";

import Banner from "../Component/Hero/Banner";
import Aboutservice from "../Component/AboutServices/AboutServices";
import Servicecards from "../Component/Servicecards/servicecards";
import ProcessSection from "../Component/Process/process";
import WhyChooseSection from "../Component/WhyChoose/whychoose";
import IndustriesWeServe from "../Component/Industry/industries";
import Benefits from "../Component/Benefits/benefits";
import Summary from "../Component/summary/summary";
import FAQ from "../Component/Questions/questions";
import CTASection from "../Component/CallToAction/calltoaction";




function OMservice() {
  return (
    <div className="bg-slate-950 text-white">
      <SEO
      title="Solar Operation and Maintenance Services in India | Madhura Energy"
      description="Get advanced solar operation and maintenance services in India with Madhura Energy to ensure smooth functioning, preventive care, and enhanced system productivity "
      keywords="Solar Operation and Maintenance Services"
      />
      {/* HERO */}
      <Banner />
      <Aboutservice />
      <Servicecards serviceKey="operationMaintenance" />
      <ProcessSection serviceKey="operationsMaintenance" />
      <WhyChooseSection serviceKey="operationMaintenance" />
      <IndustriesWeServe />
      <Benefits pageKey="operationMaintenance" />
      <Summary />
      <FAQ page="operationsMaintenance" />
      <CTASection page="operationMaintenance" />
    </div>
  );
}

export default OMservice;