import classes from "./hero.module.css";
import ActionButton from "../buttons/button-solid.js";
import ActionButtonHollow from "../buttons/button-hollow.js";
import LasjourInfobox from "../lasjourInfobox.js";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <Image
      alt="bakgrund-hus"
      src="/background/background_desktop_s.webp"
      quality={100}
      fill
      sizes="100vh"
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
              <h1>Från digitala lås till låsbyte - Din låssmed i Stockholm</h1>
              
                <p>
                  Välkommen till Nylås, din låssmed i Stockholm med koll på allt
                  från låscylinder till smarta lås. Vi skapar säkra och
                  skräddarsydda lösningar för privatpersoner, bolag och
                  bostadsrättsföreningar. Vare sig du ska montera traditionella
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
                <span className={classes.contact_prompt_item}>Några funderingar? Hör av er</span>
                <div className={classes.phone_number}>
                <span><Link href="tel:+46700126667">070-012 66 67</Link></span>
                </div>
              </div>
             
                <h3>Akut utelåst? Kontakta vår låsjour så hjälper vi dig.</h3>
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
