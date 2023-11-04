import { Fragment } from "react";
import Navbar from "../navigation/navbar";
import Footer from "../footer/footer";
import classes from "./layout.module.css";
import Head from "next/head";
import GoogleAnalytics from "../googleanalytics";
import CookieBanner from "../cookie-banner";

import { Red_Hat_Display } from "next/font/google";
const redhatdisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

function Layout(props) {
  return (
    <div className={redhatdisplay.className}>
      <div className={classes.container_wrapp_all}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-Q4P5GLL6EC" />
        <CookieBanner />
        <Navbar />
        <main className={redhatdisplay.className}>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
