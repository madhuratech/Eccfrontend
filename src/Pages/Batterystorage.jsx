import React from 'react'
import Banner from '../Component/Hero/Banner'
import Aboutservice from '../Component/AboutServices/AboutServices'
import ProcessSection from '../Component/Process/process'
import WhyChooseSection from '../Component/WhyChoose/whychoose'
import Benefits from '../Component/Benefits/benefits'
import Summary from '../Component/summary/summary'
import FAQ from '../Component/Questions/questions'
import Batterysection from '../Component/Batterysection/batterysection'
import CTASection from '../Component/CallToAction/calltoaction'
import IndustriesWeServe from '../Component/Industry/industries'
import SEO from '../Component/SEO/seo'

function Batterystorage() {
    return (
        <div className="bg-slate-950 text-white">
            <SEO
            title="Reliable Solar Battery Storage Services in India | Madhura Energy"
            description="Choose Madhura Energy for reliable solar battery storage services in India, designed to improve power efficiency, reduce costs, and support sustainable energy solutions."
            keywords="Solar Battery Storage Services"
            
            />
            <Banner />
            <Aboutservice />
            <Batterysection />
            <ProcessSection  serviceKey="batteryStorage" />
            <WhyChooseSection serviceKey="batterystorage" />
            <IndustriesWeServe/>
            <Summary />
            <FAQ  page="batteryStorage" />
            <Benefits pageKey="batteryEnergy" />
            <CTASection page="batteryStorage" />
        </div>
    )
}

export default Batterystorage