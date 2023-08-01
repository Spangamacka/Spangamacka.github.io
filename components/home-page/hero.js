import classes from "./hero.module.css";
import ActionButton from "../buttons/button-solid.js";
import ActionButtonHollow from "../buttons/button-hollow.js";
import LasjourInfobox from "../lasjourInfobox.js";
import Image from "next/image";
import Link from 'next/link';

function Hero() {
  return (
    <div>
      <div className={classes.heroBackground}>
        {/* Make background image here */}
      </div>
      <section className={classes.padding_block_700}>
        <div className={classes.container}>
          <div className={classes.even_columns}>
            <div className={classes.flow}>
              <h1>Din låssmed med jour i Stockholm</h1>
              <h2>
                Vi skapar säkra och
                skräddarsydda lösningar för privatpersoner, bolag och
                bostadsrättsföreningar. Vare sig du har blivit utelåst eller
                vill få det senaste kodlåset monterat.
              </h2>

              <div className={classes.button_holder}>
                <div>
                  <Link href="/kontakta-oss">
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
                <h3>Akut utelåst? Ring oss så hjälper vi dig</h3>
                <div>
                  <LasjourInfobox />
                </div>
              </div>
            </div>
            <div className={classes.heroImage}>
              <Image
                src="/placeholder_tekniker.png"
                width={600}
                height={600}
                quality={100}
                alt="Låstekniker"
              />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
