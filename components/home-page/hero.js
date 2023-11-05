import classes from "./hero.module.css";
import ActionButton from "../buttons/button-solid.js";
import ActionButtonHollow from "../buttons/button-hollow.js";
import LasjourInfobox from "../lasjourInfobox.js";
import Image from "next/image";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroDesktop from "public/background/n_hero_main.png";
import heroMobile from "public/background/mobile_bg.webp";

import CookieBanner from "../cookie-banner";
import CarouselHero from "../../components/carousel/carousel-hero.js";

function Hero() {
  return (
    <div className={classes.container}>
      <div className={classes.mobile_bg}>
        <div className={classes.img_pos}>
        <ExportedImage
          placeholder="empty"
          unoptimized={true}
          alt="öppen-dörr-låsöppning-låsbyte"
          src={heroMobile}
          quality={100}
          fill
          sizes="100vh"
          priority={true}
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        </div>
      </div>
      <div className={classes.desktop_bg}>
        <div className={classes.img_pos}>
        <ExportedImage
          placeholder="empty"
          unoptimized={true}
          alt="öppen-dörr-låsöppning-låsbyte"
          src={heroDesktop}
          quality={100}
          fill
          sizes="100vh"
          priority={true}
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        </div>
      </div>

  
      <div className={classes.content_hero_first}>
        <h1>Nylås - Ditt självklara val av låssmed</h1>
        <p>
          Vi hjälper till med digitala lås, låsöppningar, låsmonteringar och
          säkerhetslösningar för både privatpersoner, företag och
          bostadsrättsföreningar.
        </p>
        <div className={classes.spacer}></div>
        <h3>Vid frågor eller tidsbokning under kontorstid</h3>
        <Link href="tel:+468306667" style={{ display: "contents" }}>
          <span>08-30 66 67</span>
        </Link>
        <div className={classes.spacer}></div>
        <h3>Vid akuta ärenden kontakta oss via Stockholm låsjour</h3>
        <Link href="tel:+46812154188" style={{ display: "contents" }}>
          <span>08-12 154 188</span>
        </Link>
      </div>
      <div className={classes.end_spacer}></div>

      <div className={classes.divider}></div>

      
    </div>
  );
}

export default Hero;
