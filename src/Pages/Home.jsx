import React from 'react'
import SEO from '../Component/SEO/seo'


// Import your sections
import Herosection from '../Component/Home/Herosection'
import Services from '../Component/Home/Services'
import Projects from '../Component/Home/Projects'
import AboutUs from '../Component/Home/AboutUs'
import ChannelPartners from '../Component/Home/TrustedBy'
import WhatWeDoProcess from '../Component/Home/OurProcess'
import BlogSection from '../Component/Home/Blog'
import WhyChooseUs from '../Component/Home/WhyUs'
import FAQSection from '../Component/Home/FAQ'
import CallToActionCard from '../Component/Home/CallTo'


const Home = () => {
  return (
    <div>
      <SEO
      title= "Trusted Solar Plant Installation & Maintenance Services in India | Madhura Energy"
      description="Madhura Energy provides advanced solar plant installation & maintenance services in India,
      ensuring cost savings, clean energy, and customized solar solutions for every need."
      keywords="Solar Plant Installation Services"
      />
      <Herosection />
      <AboutUs />
      <Services />
      <ChannelPartners/>
      <Projects />
      <WhyChooseUs/>
      <WhatWeDoProcess/>
      <CallToActionCard/>
      <BlogSection/>
      <FAQSection/>
    </div>
  )
}

export default Home