import classes from "./hero.module.css";
import ActionButton from "../buttons/button-solid.js";
import ActionButtonHollow from "../buttons/button-hollow.js";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import heroDesktop from "public/background/pizzaInvert.webp";
import heroMobile from "public/background/mobile_bg.webp";
import spangaMackaLogo from "public/logo/spangamacka_logo.png";


function Hero() {
  return (
    <div className={classes.container}>
      <div className={classes.mobile_bg}></div>
      <div className={classes.desktop_bg}>
        <div className={classes.img_pos}>
          <ExportedImage
            placeholder="empty"
            unoptimized={true}
            alt="Pizza-med-tomat-basilika"
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

        <div className={classes.logo_container}>
    <ExportedImage
      placeholder="empty"
      unoptimized={true}
      src={spangaMackaLogo}
      width={70}
      height={70}
      alt="Pizzeria Spånga Macka Logo"
    />
  </div>
        <h1>Pizzeria Spånga Macka - Sedan 1992.</h1>
        <p>Vi lager all vår mat med kärlek</p>

        <div>
        <Link
              href="https://spangamacka.github.io/Sp%C3%A5ngamacka_2024-03-26.pdf" target="_blank"
              style={{ display: "contents" }}
            >
          <ActionButton text="Se vår Meny"></ActionButton>
          </Link>
        </div>
        <div className={classes.spacer}></div>
        <div className={classes.spacer_wide}></div>
        <h3>Telefon</h3>
        <Link href="tel:+468360883" style={{ display: "contents" }}>
          <span className={classes.telnum}>08-36 08 83</span>
        </Link>

        <div className={classes.spacer}></div>
        <h3>Öppettider</h3>
        
        <span>Mån - Fre 10:00 - 21:00</span>
        <span>Lör - Sön 11:00 - 21:00</span>

        <div className={classes.adress_holder}>
          <span>Spånga Kyrkväg 413</span>
          <span>163 56 Spånga</span>
        </div>
      </div>
      

      <div className={classes.end_spacer}></div>

      <div className={classes.divider}></div>
    </div>
  );
}

export default Hero;
