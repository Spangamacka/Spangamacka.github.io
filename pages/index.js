import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import Navbar from "../components/navigation/navbar";
import FeaturedServices from "../components/home-page/featured-services.js";
import SmartLockSection from "../components/home-page/smartlock-section.js";
import Footer from "../components/footer/footer.js";
import Head from "next/head";
import Kontakt from "./kontakt";
import classes from "./index.module.css";
import CarouselHero from "../components/carousel/carousel-hero.js";
import Link from "next/link";
import CallCard from "../components/home-page/call-card.js";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>
          Nylås: Låssmed i Stockholm med expertis inom smarta lås, låsbyten och
          låsöppning
        </title>
        <meta
          name="description"
          content="Låssmed med expertis inom alla typer av lås. Nylås hjälper dig med expertis inom låsöppning, låsbyten och smartalås. Vi har även en låssjour vid akuta fall."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
       
      </Head>
      {/* <Hero /> */}
      <CarouselHero />
      <CallCard />
      <FeaturedServices />
      <div className={classes.contact_holder}>
      <Kontakt />
      </div>
    
    </Fragment>
  );
}

