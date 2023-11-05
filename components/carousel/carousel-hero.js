import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import heroCard from "public/background/mobile_bg.webp";
import classes from "./carousel-hero.module.css";
import Link from "next/link";
import heroDesktop from "public/background/n_hero_main.png";
import ExportedImage from "next-image-export-optimizer";
import Hero from ".././home-page/hero.js";
import SmartlockCampaign from ".././campaigns/smartlock-campaign.js";

function CarouselHero() {
  return (
    <div className={classes.holder}>
      <Carousel 
      showThumbs={false}
      swipeable={false}>
        <div className={classes.heroHolder}>
          <SmartlockCampaign />
        </div>
        <div className={classes.heroHolder}>
          <Hero />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHero;
