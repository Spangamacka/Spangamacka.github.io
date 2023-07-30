import FeatureCard from "./feature-card.js";
import classes from "./featured-services.module.css";
import ActionButton from "../buttons/button-solid.js";
import ActionButtonCard from '../buttons/button-card.js';
import Image from 'next/image';

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
          <div>
            <div className={classes.key_image_holder}>
            <Image
              src="/icons/key_icon_m.svg"
              fill
              alt="key_icon"
            />
            </div>
            
            <div className={classes.feature_title}>
              <h2>Låsbyte</h2>
            </div>
          </div>

          <div className={classes.quickInfo}>
            <p>
              Vi installerar och byter lås. Nylås hjälper dig med dina lås genom
              skräddarsydda lösningar just för dig eller ditt företag.
            </p>
            <div className={classes.cardButton}>
              <ActionButtonCard text="Läs mer" />
            </div>
          </div>
        </div>
        <div className={classes.cardContainer}>
          <div>
            <div className={classes.image_holder}>
            <Image
              src="/icons/openlock_icon.svg"
              fill
              alt="låsöppning_icon"
            />
            </div>
            <div className={classes.feature_title}>
              <h2>Låsöppning</h2>
            </div>
          </div>

          <div className={classes.quickInfo}>
            <p>
            Nylås hjälper tryggt och enkelt till med låsöppningar. Dessutom hjälper vår låsjour i stockholm snabbt till vid akuta ärenden. 
            </p>
            <div className={classes.cardButton}>
              <ActionButtonCard text="Läs mer" />
            </div>
          </div>
        </div>
        <div className={classes.cardContainer}>
          <div>
            <div className={classes.image_holder_smartlock}>
            <Image
              src="/icons/smartlock_icon.svg"
             fill
              alt="key_icon"
            />
            </div>
           
            <div className={classes.feature_title}>
              <h2>Smartlås</h2>
            </div>
          </div>

          <div className={classes.quickInfo}>
            <p>
            Vi monterar och installerar smartlås. Gör som många andra och upplev smidigheten med smartlås. Enkelt och säkert. 
            </p>
            <div className={classes.cardButton}>
              <ActionButtonCard text="Läs mer" />
            </div>
          </div>
        </div>
        
        <div className={classes.cardContainer_mobile}>
          <div>
            
            <div className={classes.feature_title}>
              <h2>Se allt vi gör</h2>
            </div>
          </div>

          <div className={classes.quickInfo_mobile}>
          <Image
              src="/icons/arrow-right.svg"
              width={100}
              height={100}
              alt="arrow-icon"
            />
          </div>
        </div>
      </div>
      </div>

      <div className={classes.btn_holder_desktop}>
        <ActionButton text="Se allt vi gör" />
      </div>
    </div>
  );
}

export default FeaturedServices;
