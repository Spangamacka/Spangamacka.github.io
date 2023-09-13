import classes from "./hero.module.css";
import ActionButton from "../buttons/button-solid.js";
import ActionButtonHollow from "../buttons/button-hollow.js";
import LasjourInfobox from "../lasjourInfobox.js";
import Image from "next/image";
import Link from "next/link";
import ExportedImage from 'next-image-export-optimizer';
import backgroundHero from 'public/background/hero_main.png';


function Hero() {
  return (
    <div style={{position: "relative",}}>
      <ExportedImage
      placeholder="empty"
      unoptimized={true}
      alt="öppen-dörr-låsöppning-låsbyte"
      src={backgroundHero}
      quality={100}
      fill
      sizes="100vh"
      priority={true}
      style={{
        objectFit: 'cover',
        zIndex: '-20',
      }}
      />
      

      <div className={classes.heroBackground}>
        <div className={classes.image_holder}>
          
        </div>
      </div>
      <section className={classes.padding_hero}>
        <div className={classes.container}>
          <div className={classes.even_columns}>
            <div className={classes.flow}>
              <h1>Från digitala lås till låsbyte - Din låssmed i Stockholm.</h1>
              
                <p>
                  Välkommen till Nylås, din låssmed i Stockholm med koll på allt
                  från låscylinder till smarta lås. Vi skapar säkra och
                  effektiva lösningar för privatpersoner, bolag och
                  bostadsrättsföreningar. Vare sig du ska montera mekaniska
                  lås eller vill få det senaste kodlåset monterat.
                </p>
          

              <div className={classes.button_holder}>
                <div>
                  <Link href="/kunskapsbank/bibliotek">
                    <ActionButton text="Hur kan vi hjälpa till?" />
                  </Link>
                </div>
                <div className={classes.desktop_button}>
                  <Link href="/tjanster">
                    <ActionButtonHollow text="Våra Tjänster" />
                  </Link>
                </div>
              </div>
              
              
              <div className={classes.lasjourInfo}>
              <div className={classes.contact_prompt}>
                <span className={classes.contact_prompt_item}>Vid frågor eller tidsbokning dagtid</span>
                <span className={classes.contact_prompt_item}>kontakta oss på</span>
                <div className={classes.phone_number}>
                <span><Link href="tel:+468306667">08-30 66 67</Link></span>
                </div>
              </div>
             
                <h3>Vid akuta ärenden kontakta oss dygnet runt på</h3>
                <div className={classes.lasjourbox}>
                  <Link href="https://www.xn--stockholmlsjour-qlb.se/">
                    <LasjourInfobox />
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.heroImage}>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;