import classes from "./smartlas.module.css";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "../../components/buttons/button-solid.js";
import ExportedImage from "next-image-export-optimizer";
import bulletPoint from "public/icons/bullet_point_dark.svg";
import yalesmartlas from "public/smartlas/smartlas-yale-byte.webp";
import yaledoorhandle from "public/smartlas/yale_doorhandle.jpg";
import smartlasmulti from "public/smartlas/smartlas_multi.jpg";

function SmartlasPage() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>
            Vi på Nylås installerar enkelt och bekvämt ditt nästa yale
            doormanlås.
          </h1>
          <p>
            Yale Doorman smarta lås erbjuder enastående bekvämligheter och
            säkerhet för ditt hem. Med dess intuitiva touch-skärm och
            fjärråtkomst via appen kan du enkelt kontrollera och övervaka din
            dörr. Delade digitala nycklar möjliggör enkel åtkomst för familj och
            vänner, medan den robusta designen ger pålitligt skydd mot inbrott
            och obehörig åtkomst.
          </p>
          <h2>
            Ring oss så berättar vi mer:{" "}
            <Link href="tel:+468306667">08-30 66 67</Link>
          </h2>
          <div className={classes.second_section}>
            <h2>Yale doorman: Upplev Smidigheten med kodlås</h2>

            <ul>
              <li>
                <span className={classes.bullet_point}>
                  <ExportedImage
                    placeholder="empty"
                    src={bulletPoint}
                    unoptimized={true}
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>Öppna med kod, nyckelbricka eller app.</p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <ExportedImage
                    placeholder="empty"
                    src={bulletPoint}
                    unoptimized={true}
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
                  <ExportedImage
                    placeholder="empty"
                    src={bulletPoint}
                    unoptimized={true}
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
                  <ExportedImage
                    placeholder="empty"
                    src={bulletPoint}
                    unoptimized={true}
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>Var lugn med Yales mekaniska nödöppning från insidan.</p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <ExportedImage
                    placeholder="empty"
                    src={bulletPoint}
                    unoptimized={true}
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
                  <ExportedImage
                    placeholder="empty"
                    src={bulletPoint}
                    unoptimized={true}
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>Använd upp till 30 nyckelbrickor på samma lås.</p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <ExportedImage
                    placeholder="empty"
                    src={bulletPoint}
                    unoptimized={true}
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Nyckelbricka L3 kan du registrera på ett obegränsat antal
                    Yale Doorman L3S lås.
                  </p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <ExportedImage
                    placeholder="empty"
                    src={bulletPoint}
                    unoptimized={true}
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>Upp till 30 unika användarkoder till ett och samma lås.</p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <ExportedImage
                    placeholder="empty"
                    src={bulletPoint}
                    unoptimized={true}
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Registrera upp till 254 st användare och tilldela dessa som
                    antingen gäst eller ägare.
                  </p>
                </span>

                <div className={classes.second_section}>
                  <span className={classes.color_heading}>Vanliga frågor gällande smartalås</span>
                </div>
                
                <div className={classes.second_section}>
                  <h2>
                    Måste jag ha ett godkänt lås för att försäkringen ska gälla?
                  </h2>
                  <p>
                    Med ”godkänt lås” avses ett lås som är certifierat enligt
                    SSF 3522 klass 3. Huruvida ett sådant krävs för att
                    försäkringen ska gälla varierar mellan olika
                    försäkringsbolag. Men generellt sett behövs det inte. Hos
                    exempelvis Trygg-Hansa gäller kravet bara om lösöresvärdet
                    överstiger 1 500 000 kr, exempelvis. Även Folksam och
                    Moderna försäkringar följer motsvarande linje. Men
                    kontrollera vad som gäller hos ditt försäkringsbolag.
                  </p>
                </div>

                <div className={classes.second_section}>
                  <h2>Går ett elektroniskt lås att hacka?</h2>
                  <p>
                    Ja, teoretiskt. Bland annat därför innebär den nya SFF 3522
                    klass 3 att kommunikationen mellan låsets styrenhet och
                    själva låsblecket ska vara krypterad.
                  </p>
                </div>

                <div className={classes.second_section}>
                  <h2>
                    Hur mycket osäkrare är ett SSF 3522 klass 2-lås jämfört med
                    ett klass 3-lås?
                  </h2>
                  <p>
                    I princip är det bara två delar som skiljer. Ett klass 2-lås
                    får ha ett vred på insidan som låser upp dörren, till
                    skillnad från klass 3-lås. Den andra skillnaden är att
                    signalen mellan styrenhet och låsbleck är krypterad hos
                    klass 3-lås. Kraven på inbrottsskydd från dörrens utsida är
                    desamma för de båda klasserna.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Link href="/kontakt">
            <ActionButton text="Kontakta oss" />
          </Link>
        </div>
        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <ExportedImage
              src={yalesmartlas}
              fill
              alt="låsbyte-smartlås-yale-doorman"
              unoptimized={true}
              placeholder="empty"
            />
          </div>
          <div className={classes.image_holder}>
            <ExportedImage
              src={yaledoorhandle}
              fill
              alt="låsbyte-smartlås-yale-doorman"
              unoptimized={true}
              placeholder="empty"
            />
          </div>
          <div className={classes.image_holder_large}>
            <ExportedImage
              src={smartlasmulti}
              fill
              alt="låsbyte-smartlås-yale-doorman-före-efter"
              unoptimized={true}
              placeholder="empty"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartlasPage;
