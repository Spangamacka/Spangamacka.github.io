import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import Navbar from "../components/navigation/navbar";
import FeaturedServices from "../components/home-page/featured-services.js";
import CompanyFace from "../components/home-page/company-face.js";
import SmartLockSection from "../components/home-page/smartlock-section.js";
import Footer from "../components/footer/footer.js";
import Head from "next/head";

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
      <Hero />
      <FeaturedServices />
      <CompanyFace />
      <SmartLockSection />
    </Fragment>
  );
}

// 1) Hero Section - Företagspresentation
//2) Våra tjänster
