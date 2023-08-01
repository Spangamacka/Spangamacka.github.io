import classes from "./smartlas.module.css";
import Image from "next/image";

function SmartlasPage() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>
            Vi på Nylås installerar enkelt och bekvämt ditt nästa yale
            doormanlås
          </h1>
          <p>
            Yale Doorman smarta lås erbjuder enastående bekvämligheter och
            säkerhet för ditt hem. Med dess intuitiva touch-skärm och
            fjärråtkomst via appen kan du enkelt kontrollera och övervaka din
            dörr. Delade digitala nycklar möjliggör enkel åtkomst för familj och
            vänner, medan den robusta designen ger pålitligt skydd mot inbrott
            och obehörig åtkomst.
          </p>
          <div className={classes.second_section}>
            <h2>Yale doorman: Upplev Smidigheten med kodlås</h2>

            <ul>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>Öppna med kod, nyckelbricka eller app.</p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Du bestämmer enkelt behörighet direkt via Yale Home appen.
                  </p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Styr själv hur du tar emot hemleveranser direkt i Yale Home
                    appen.
                  </p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>Var lugn med Yales mekaniska nödöppning från insidan.</p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Yale Doorman L3S är ett säkert smartlås certifierad av SSF
                    för både mekanisk och digital säkerhet (SSF 3522 och SSF
                    3523).
                  </p>
                </span>
              </li>
            </ul>
          </div>

          <div className={classes.second_section}>
            <h2>Vad kan man göra med Yale doorman?</h2>

            <ul>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>Använd upp till 30 nyckelbrickor på samma lås.</p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Den nya nyckelbrickan L3 kan du registrera på ett obegränsat
                    antal Yale Doorman L3S lås.
                  </p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>Upp till 30 unika användarkoder till ett och samma lås.</p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Registrera upp till 254 st användare och tilldela dessa som
                    antingen gäst eller ägare.
                  </p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <Image
                    src="/icons/bullet_point_dark.svg"
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Var lugn oavsett väder, Yale doorman L3S är byggt för att
                    klara svenskt väder.
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <Image src="/smartlas/placeholder_smartlas.webp" fill alt="smartlås" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartlasPage;
