import FeatureCard from "./feature-card.js";
import classes from "./featured-services.module.css";
import ActionButton from "../buttons/button-solid.js";
import ActionButtonCard from "../buttons/button-card.js";
import Image from "next/image";
import Link from "next/link";

import ExportedImage from "next-image-export-optimizer";
import keyIcon from "public/icons/key_icon_m.svg";
import openLock from "public/icons/openlock_icon.svg";
import smartLock from "public/icons/smartlock_icon.svg";
import arrowRight from "public/icons/arrow-right.svg";

function FeaturedServices() {
  return (
    <div className={classes.container}>
      <div className={classes.service_info}>
        <h2>Våra Tjänster</h2>
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
                    <ExportedImage
                      src={keyIcon}
                      fill
                      alt="key_icon"
                      unoptimized={true}
                      placeholder="empty"
                    />
                  </div>
                </Link>
              </div>

              <div className={classes.feature_title_B}>
                <Link href="/tjanster/lasbyte">
                  <h2>Låsbyte</h2>
                </Link>
              </div>
            </div>

            <div className={classes.quickInfo}>
              <p>Vi hjälper dig att installera och montera ditt nya lås.</p>
            </div>
            <div className={classes.cardButton}>
              <Link href="/tjanster/lasbyte">
                <ActionButtonCard text="Mer om låsbyte" />
              </Link>
            </div>
          </div>
          <div className={classes.cardContainer}>
            <div>
              <div className={classes.padlock_image_holder}>
                <Link href="/tjanster/lasoppning">
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      position: "relative",
                    }}
                  >
                    <ExportedImage
                      placeholder="empty"
                      unoptimized={true}
                      src={openLock}
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
                Vi hjälper dig att få upp din dörr, vår låsjour i Stockholm
                finns även tillgänglig vid akuta ärenden.
              </p>
            </div>
            <div className={classes.cardButton}>
              <Link href="/tjanster/lasoppning">
                <ActionButtonCard text="Mer om låsöppning" />
              </Link>
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
                    <ExportedImage
                      placeholder="empty"
                      unoptimized={true}
                      src={smartLock}
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
                Vi monterar och installerar smarta lås till hus och lägenheter,
                gör som många andra och upplev smidigheten med smarta lås.
              </p>
            </div>
            <div className={classes.cardButton}>
              <Link href="/tjanster/smartlas">
                <ActionButtonCard text="Mer om smartlås" />
              </Link>
            </div>
          </div>

          <div className={classes.cardContainer_mobile}>
            <Link href="/tjanster">
              <div className={classes.image}>
                <ExportedImage
                  placeholder="empty"
                  unoptimized={true}
                  src={arrowRight}
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
