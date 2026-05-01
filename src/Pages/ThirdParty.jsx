import React from 'react'
import Banner from '../Component/Hero/Banner'
import Aboutservice from '../Component/AboutServices/AboutServices'
import ProcessSection from '../Component/Process/process'
import WhyChooseSection from '../Component/WhyChoose/whychoose'
import Benefits from '../Component/Benefits/benefits'
import FAQ from '../Component/Questions/questions'
import CTASection from '../Component/CallToAction/calltoaction'
import IndustriesWeServe from '../Component/Industry/industries'
import Summary from '../Component/summary/summary'
import PartySection from '../Component/PartySection/partysection'
import SEO from '../Component/SEO/seo'

function ThirdParty() {
  return (
    <div className="bg-slate-950 text-white">
      <SEO
      title="Affordable Third Party Solar Power Purchase Services in India | Madhura Energy"
      description="Madhura Energy delivers third party solar power purchase services in India with competitive pricing and tailored solutions to ensure stable and sustainable power supply."
      keywords="Third Party Solar Power Purchase"
      />

      <Banner />
      <Aboutservice />
      <PartySection/>
      <ProcessSection serviceKey="thirdParty" />
      <WhyChooseSection serviceKey="thirdParty" />
      <IndustriesWeServe/>
      <Benefits pageKey="thirdParty" />
      <Summary />
      <FAQ page="thirdParty" />
      <CTASection page="thirdParty" />
    </div>
  )
}

export default ThirdParty