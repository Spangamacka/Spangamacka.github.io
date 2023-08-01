import classes from "./smartlock-section.module.css";
import ActionButton from "../buttons/button-solid.js";
import Image from "next/image";
import Link from "next/link";

function SmartLockSection() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>Upplev smidigheten med Yale doorman</h1>
          <h2>
            Nyfiken på smarta lås? Låt oss installera er nästa allt-i-ett
            säkerhetslösning för ditt företag eller hem
          </h2>
          <p className={classes.smartlock_text}>
            Yale Doorman smarta lås erbjuder enastående bekvämligheter och
            säkerhet för ditt hem. Med dess intuitiva touch-skärm och
            fjärråtkomst via appen kan du enkelt kontrollera och övervaka din
            dörr. Delade digitala nycklar möjliggör enkel åtkomst för familj och
            vänner, medan den robusta designen ger pålitligt skydd mot inbrott
            och obehörig åtkomst.
          </p>
          <div className={classes.actionPrompt}>
            <Link href="/tjanster/smartlas">
              <span className={classes.read_more}>
                Läs mer om smartlås
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M16.835 6.91846L23.9166 14.0001L16.835 21.0818" stroke="#0047C7" stroke-width="1.85" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.08301 14H23.718" stroke="#0047C7" stroke-width="1.85" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                </span>
            </Link>
            <Link href="/kontakta-oss">
            <ActionButton text="Kontakta oss" />
            </Link>
            <div className={classes.mobile_feature_text}>
              <h1>Yale doorman L3S</h1>
              <p>Låsklass 3 med smarta funktioner</p>
            </div>
          </div>
        </div>

        <div className={classes.features_container}>
        <div className={classes.features}>
          <div className={classes.feature_item}>
            <div className={classes.iconHolder}>
              <Image
                src="/icons/keytag_icon.svg"
                width={65}
                height={65}
                alt="key_icon"
              />
            </div>
            <div className={classes.featureInfoHolder}>
              <p>Lås upp med nyckelbricka eller kod.</p>
            </div>
          </div>
          <div className={classes.feature_item}>
            <div className={classes.iconHolder}>
              <Image
                src="/icons/mobile_icon.svg"
                width={65}
                height={65}
                alt="key_icon"
              />
            </div>
            <div className={classes.featureInfoHolder}>
              <p>
                Lås och lås upp på distans eller se när någon öppnar dörren.
              </p>
            </div>
          </div>
          <div className={classes.feature_item}>
            <div className={classes.iconHolder}>
              <Image
                src="/icons/delivery_icon.svg"
                width={65}
                height={65}
                alt="key_icon"
              />
            </div>
            <div className={classes.featureInfoHolder}>
              <p>Få leveransen innanför din dörr när du inte är hemma. </p>
            </div>
          </div>
          <div className={classes.feature_item}>
            <div className={classes.iconHolder}>
              <Image
                src="/icons/alarm_light_icon.svg"
                width={65}
                height={65}
                alt="key_icon"
              />
            </div>
            <div className={classes.featureInfoHolder}>
              <p>Inbyggd dörrklocka direkt i låsets funktioner</p>
            </div>
          </div>
        
        </div>
        </div>
      </div>
    </div>
  );
}

export default SmartLockSection;
