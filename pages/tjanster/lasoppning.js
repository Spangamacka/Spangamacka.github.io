import classes from "./lasoppning.module.css";
import Image from "next/image";
import LasjourInfobox from "../../components/lasjourInfobox.js";
import Link from 'next/link';

function LasoppningPage() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>Utelåst i Stockholm? Vi hjälper dig snabbt & tryggt.</h1>
          <p>
            Har du blivit utelåst från lägenheten eller villan? Dörren gick i
            baklås eller nyckeln försvann på den där festen.  Oavsett vilket så
            vill du in till hemmets värme och din sköna säng. Och helst utan att
            hela dörren ska gå till dom sälla jaktmarkerna för att det ska
            hända. 
          </p>
          <div className={classes.second_section}>
            <h2>
              Våra kunniga låssmeder fixar låsöppning enkelt och tryggt.
              <div></div>
              <span className={classes.font_color}>
                {" "}
                Ring oss på: <Link href="tel:+46700126667">070-012 66 67</Link>
              </span>
            </h2>
            <p>
              Med vår expertis ser vi till att det hela sker snyggt och säkert
              så att du kan stänga dörren om dig med ett belåtet klick efteråt. 
            </p>
            <p>
              Och skulle en nyckel vara försvunnen kan vi även hjälpa till med
              att byta låset för din säkerhet.
            </p>
          </div>
          <p>
            Oavsett om du är privatperson, företag eller en bostadsrättsförening
            så hjälper vi på Nylås dig.
          </p>

          
                <div className={classes.lasjourbox}>
                <h3>Akut utelåst? Kontakta vår låsjour så hjälper vi dig.</h3>
                  <Link href="https://www.xn--stockholmlsjour-qlb.se/">
                    <LasjourInfobox />
                  </Link>
                </div>
        </div>
        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <Image
              src="/lasoppning/lasoppning_img.webp"
              fill
              alt="låsöppning-i-arbete"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LasoppningPage;
