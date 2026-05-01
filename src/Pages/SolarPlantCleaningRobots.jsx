import React from 'react'
import Banner from '../Component/Hero/Banner'
import Aboutservice from '../Component/AboutServices/AboutServices'
import Servicecards from '../Component/Servicecards/servicecards'
import ProcessSection from '../Component/Process/process'

import WhyChooseSection from '../Component/WhyChoose/whychoose'
import Benefits from '../Component/Benefits/benefits'
import FAQ from '../Component/Questions/questions'
import CTASection from '../Component/CallToAction/calltoaction'
import IndustriesWeServe from '../Component/Industry/industries'
import Summary from '../Component/summary/summary'
import SEO from '../Component/SEO/seo'

function SolarPlantCleaningRobots() {
  return (
    <div className="bg-slate-950 text-white">
      <SEO
      title="Smart Solar Panel Cleaning Robot Services in India | Madhura Energy"
      description="Madhura Energy provides smart solar panel cleaning robot services in India that keep panels dust-free, boost productivity, and support reliable solar power generation."
      keywords="Solar Panel Cleaning Robot"
    
      />

      <Banner />
      <Aboutservice />
      <Servicecards serviceKey="solarPlantCleaningRobots" />
      <ProcessSection serviceKey="solarPlantCleaningRobots" />
      <WhyChooseSection serviceKey="solarPlantCleaningRobots" />
      <IndustriesWeServe/>
      <Benefits pageKey="solarPlantCleaningRobots" />
      <Summary />
      <FAQ page="solarPlantCleaningRobots" />
      <CTASection page="solarCleaningRobot" />
    </div>
  )
}

export default SolarPlantCleaningRobots