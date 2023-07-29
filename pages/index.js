
import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Navbar from '../components/navigation/navbar';
import FeaturedServices from '../components/home-page/featured-services.js';

import FeatureCard from '../components/home-page/feature-card.js';



export default function HomePage() {
  return (
    
    <Fragment>
      <Navbar />
       <Hero />
       <FeaturedServices />
    </Fragment>
      
  )
}

// 1) Hero Section - Företagspresentation
//2) Våra tjänster
