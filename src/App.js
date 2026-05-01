import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

import Navbar from './Component/layout/Navbar'
import Footer from './Component/layout/Footer'

import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

import Services from './Component/Home/Services'
import Projects from './Component/Home/Projects'
import About from './Component/Home/AboutUs'

import SolarEpcSolutionsPage from './Pages/SolarEPCSolution'
import SolarPlantManagement from './Pages/SolarPlantManagement'
import OMservices from './Pages/OMservices'
import ScrollToSection from './Component/layout/ScrollToSection'
import Batterystorage from './Pages/Batterystorage'
import Banner from './Component/Hero/Banner'
import SolarPlantCleaningRobots from './Pages/SolarPlantCleaningRobots'
import SolarPump from './Pages/SolarPump'
import ThirdParty from './Pages/ThirdParty'

const ServiceRouter = () => {
  const { slug } = useParams();
  switch (slug) {
    case 'solar-epc-services':
      return <SolarEpcSolutionsPage />;
    case 'solar-plant-management':
      return <SolarPlantManagement />;
    case 'solar-operation-and-maintenance-services':
      return <OMservices />;
    case 'solar-battery-storage-services':
      return <Batterystorage />;
    case 'solar-panel-cleaning-robot-services':
      return <SolarPlantCleaningRobots />;
    case 'solar-pump-services':
      return <SolarPump/>;
    case 'third-party-solar-power-purchase-services':
      return <ThirdParty/>
    default:
      return <SolarEpcSolutionsPage />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/:slug" element={<ServiceRouter />} />

        <Route path="/hero/:slug" element={<Banner />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App