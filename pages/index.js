
import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Navbar from '../components/navigation/navbar';
import FeaturedServices from '../components/home-page/featured-services.js';

import CompanyFace from '../components/home-page/company-face.js';



export default function HomePage() {
  return (
    
    <Fragment>
      <Navbar />
       <Hero />
       <FeaturedServices />
       <CompanyFace />
    </Fragment>
      
  )
}

// 1) Hero Section - Företagspresentation
//2) Våra tjänster
