import FeatureCard from "./feature-card.js";
import classes from "./featured-services.module.css";
import ActionButton from "../buttons/button-solid.js";
import ActionButtonCard from "../buttons/button-card.js";
import Image from "next/image";
import Link from "next/link";

function FeaturedServices() {
  return (
    <div className={classes.container}>
      <div className={classes.service_info}>
        <h2>Våra Tjänster</h2>
        <div className={classes.text}>
          <p>
            Vi utför det mesta inom lås. Tveka inte att kontakta oss för mer
            information
          </p>
        </div>
      </div>

      <div className={classes.card_grid_holder}>
        <div className={classes.cards_holder}>
          <div className={classes.cardContainer}>
            <div className={classes.relativePos}>
              <div className={classes.key_image_holder}>
                <Link href="/tjanster/lasbyte">
                  <div
                    style={{
                      width: "130px",
                      height: "130px",
                      position: "relative",
                    }}
                  >
                    <Image src="/icons/key_icon_m.svg" fill alt="key_icon" />
                  </div>
                </Link>
              </div>

              <div className={classes.feature_title}>
                <Link href="/tjanster/lasbyte">
                  <h2>Låsbyte</h2>
                </Link>
              </div>
            </div>

            <div className={classes.quickInfo}>
              <p>
                Vi installerar och byter lås. Nylås hjälper dig med dina lås
                genom skräddarsydda lösningar just för dig eller ditt företag.
              </p>
              <div className={classes.cardButton}>
                <Link href="/tjanster/lasbyte">
                  <ActionButtonCard text="Läs mer" />
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.cardContainer}>
            <div>
              <div className={classes.image_holder}>
                <Link href="/tjanster/lasoppning">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src="/icons/openlock_icon.svg"
                      fill
                      alt="låsöppning_icon"
                    />
                  </div>
                </Link>
              </div>
              <div className={classes.feature_title}>
                <Link href="/tjanster/lasoppning">
                  <h2>Låsöppning</h2>
                </Link>
              </div>
            </div>

            <div className={classes.quickInfo}>
              <p>
                Nylås hjälper tryggt och enkelt till med låsöppningar. Dessutom
                hjälper vår låsjour i stockholm snabbt till vid akuta ärenden.
              </p>
              <div className={classes.cardButton}>
                <Link href="/tjanster/lasoppning">
                  <ActionButtonCard text="Läs mer" />
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.cardContainer}>
            <div>
              <div className={classes.image_holder_smartlock}>
                <Link href="/tjanster/smartlas">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src="/icons/smartlock_icon.svg"
                      fill
                      alt="key_icon"
                    />
                  </div>
                </Link>
              </div>

              <div className={classes.feature_title}>
                <Link href="/tjanster/smartlas">
                  <h2>Smartlås</h2>
                </Link>
              </div>
            </div>

            <div className={classes.quickInfo}>
              <p>
                Vi monterar och installerar smartlås. Gör som många andra och
                upplev smidigheten med smartlås. Enkelt och säkert.
              </p>
              <div className={classes.cardButton}>
                <Link href="/tjanster/smartlas">
                  <ActionButtonCard text="Läs mer" />
                </Link>
              </div>
            </div>
          </div>

          <div className={classes.cardContainer_mobile}>
            <Link href="/tjanster">
              <div className={classes.image}>
                <Image
                  src="/icons/arrow-right.svg"
                  width={75}
                  height={75}
                  alt="arrow-icon"
                />
              </div>
              <div className={classes.feature_title}>
                <h2>Se allt vi gör</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.btn_holder_desktop}>
        <Link href="/tjanster">
          <ActionButton text="Se allt vi gör" />
        </Link>
      </div>

      <div className={classes.separator}></div>
    </div>
  );
}

export default FeaturedServices;
