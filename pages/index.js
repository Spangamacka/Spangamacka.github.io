
import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Navbar from '../components/navigation/navbar';
import FeaturedServices from '../components/home-page/featured-services.js';
import CompanyFace from '../components/home-page/company-face.js';
import SmartLockSection from '../components/home-page/smartlock-section.js';
import Footer from '../components/footer/footer.js';




export default function HomePage() {
  return (
    
    <Fragment>
       <Hero />
       <FeaturedServices />
       <CompanyFace />
       <SmartLockSection />
    </Fragment>
      
  )
}

// 1) Hero Section - Företagspresentation
//2) Våra tjänster
