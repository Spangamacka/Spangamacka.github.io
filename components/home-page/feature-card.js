import classes from "./feature-card.module.css";
import Image from "next/image";
import ActionButtonCard from '../buttons/button-card.js';

function FeatureCard() {
  return (
    <div className={classes.building}>
      <div className={classes.cardContainer}>
        <div>
        <Image
          src="/icons/key_icon.svg"
          width={100}
          height={100}
          alt="key_icon"
        />
        <div>
            <h2>Låsbyte</h2>
          </div>
        </div>
        
        <div className={classes.quickInfo}>         
          <p>
            Vi installerar och byter lås. Nylås hjälper dig med dina lås genom
            skräddarsydda lösningar just för dig eller ditt företag.
          </p>
          <div className={classes.cardButton}><ActionButtonCard text="Läs mer"/></div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
