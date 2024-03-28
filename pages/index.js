import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import Navbar from "../components/navigation/navbar";
import Footer from "../components/footer/footer.js";
import Head from "next/head";
import classes from "./index.module.css";
import Link from "next/link";


export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>
          Pizzeria Spånga Macka
        </title>
        
        <meta
          name="description"
          content="Pizzeria i spånga"
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
    </Fragment>
  );
}
