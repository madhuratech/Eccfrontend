import React from "react";
import IndustriesSection from "../Component/Industry/industries";
import HowWeWorkForYou from "../Component/wework/wework";
import Banner from "../Component/Hero/Banner";
import Aboutservice from "../Component/AboutServices/AboutServices";
import Servicecards from "../Component/Servicecards/servicecards";
import ProcessSection from "../Component/Process/process";
import WhyChooseSection from "../Component/WhyChoose/whychoose";
import Benefits from "../Component/Benefits/benefits";
import Summary from "../Component/summary/summary";
import FAQ from "../Component/Questions/questions";
import CTASection from "../Component/CallToAction/calltoaction";
import SEO from "../Component/SEO/seo";



function SolarEpcSolutionsPage() {
  return (
    <div className="bg-slate-950 text-white">
      <SEO
      title="Best Solar EPC Services in India | Madhura Energy"
      description="Madhura Energy offers expert solar EPC services in India with complete project execution, ensuring efficient design, installation, and long-term solar performance."
      keywords="Solar EPC Services"
      
      />

      <Banner />
      <Aboutservice />
      <Servicecards serviceKey="solar-epc-solutions" />
      <ProcessSection />
      <WhyChooseSection />
      <IndustriesSection />
      <Benefits pageKey="solarEpc" />
      <HowWeWorkForYou />
      <Summary/>
      <FAQ/>
      <CTASection page="solarEpc" />
    </div>
  );
}

export default SolarEpcSolutionsPage; 