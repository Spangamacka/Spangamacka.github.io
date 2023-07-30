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
            Låt oss installera er nästa allt-i-ett säkerhetslösning för ditt
            företag eller hem
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam
            enim feugiat mollis rutrum. Sed tempus libero justo, eget bibendum
            justo bibendum sit amet. Pellentesque volutpat placerat lacus, ac
            pellentesque lectus consequat non. Aenean tincidunt arcu augue,
            fermentum congue sapien egestas nec. Phasellus egestas ipsum libero,
            eget maximus ipsum
          </p>
          <div className={classes.actionPrompt}>
          <Link href="#"><h3>Mer om smartlås</h3></Link>
          <ActionButton text="Kontakta oss" />
          </div>
          
        </div>

        <div className={classes.features}>
          <div className={classes.feature_item}>
            <div className={classes.iconHolder}>
              <Image
                src="/icons/tag_icon.svg"
                width={100}
                height={100}
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
                width={100}
                height={100}
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
                width={100}
                height={100}
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
                src="/icons/test.svg"
                width={100}
                height={100}
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
  );
}

export default SmartLockSection;
