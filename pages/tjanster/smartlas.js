import classes from "./smartlas.module.css";
import Link from "next/link";
import ActionButton from "../../components/buttons/button-solid.js";
import ExportedImage from "next-image-export-optimizer";
import bulletPoint from "public/icons/bullet_point_dark.svg";
import yalesmartlas from "public/smartlas/smartlas-yale-byte.webp";
import yaledoorhandle from "public/smartlas/yale_doorhandle.jpg";
import smartlasmulti from "public/smartlas/smartlas_multi.jpg";
import Head from "next/head";
import CampaignButton from '../../components/buttons/campaign-button.js';

function SmartlasPage() {
  return (
    <div className={classes.container}>
      <Head>
        <title>
          Smartlås, elektroniska lås i Stockholm - Smarta lösningar och låsbyten
        </title>
      </Head>
      <div className={classes.even_columns}>
        <div>
          <h1>Vi installerar ditt smarta lås</h1>
          <p>
            Ett smart lås erbjuder enastående bekvämligheter och säkerhet för
            ditt hem. Det är enkelt att dela digitala nycklar med både familj
            och vänner, utöver detta kan ni även skapa tillfällig access till
            hantverkare, fastighetsskötare eller övriga besökare som behöver
            tillfällig tillgång till din bostad.
          </p>
          <div></div>
          <p>
            Om du tappar en nyckel till ett mekaniskt lås så behöver du byta ut
            låset för att vara säker på att ingen kan ta sig in, men med ett
            smart lås så sparar du både tid och pengar då du enkelt kan spärra
            en borttappad bricka och samtidigt aktivera en ny.
          </p>
          <div className={classes.second_section}>
            <h2>Varför ska man skaffa ett smart lås?</h2>

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
                  <p>Automatisk låsning</p>
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
                  <p>Inga nycklar på vift</p>
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
                  <p>Öppna dörren på distans</p>
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
                  <p>Öppna dörren med mobilen</p>
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
                  <p>Högre säkerhet</p>
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
                  <p>Barnen behöver inte bära med sig en egen nyckel</p>
                </span>
              </li>
            </ul>
          </div>

          <div className={classes.second_section}>
            <div className={classes.contact_prompt}>
              <h4>Vilket lås och modell är bäst för dig?</h4>
              <h5>
                Ring oss så berättar vi mer:{" "}
                <Link href="tel:+468306667">
                  <p>08-30 66 67</p>
                </Link>
              </h5>
            </div>

            <div className={classes.smartlas_info}>
              <div className={classes.smartlas_header}>
                <h5>Yale Doorman</h5>
                <Link href="/tjanster/yale-smartlas">
                  <span className={classes.link_text}>
                    Se mer om Yale smarta lås{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M16.835 6.91846L23.9166 14.0001L16.835 21.0818"
                        stroke="#0047C7"
                        strokeWidth="1.85"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.08301 14H23.718"
                        stroke="#0047C7"
                        strokeWidth="1.85"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
              <ul>
                <li>Yale Doorman Classic</li>
                <li>Yale Doorman L3</li>
                <li>Yale Doorman Flex</li>
                <li>Yale Doorman Linus</li>
              </ul>
            </div>
            <div className={classes.spacer}>
            <div className={classes.smartlas_info}>
              <div className={classes.smartlas_header}>
                <h5>Nordic</h5>
                {/* <Link href="/bg-nordic-smartlas">
                  <span className={classes.link_text}>
                    Läs mer om Nordic BG lås
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M16.835 6.91846L23.9166 14.0001L16.835 21.0818"
                        stroke="#0047C7"
                        strokeWidth="1.85"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.08301 14H23.718"
                        stroke="#0047C7"
                        strokeWidth="1.85"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link> */}
              </div>
              <ul>
                <li>BG2000</li>
                <li>BG3000</li>
                <li>BG4000</li>
              </ul>
            </div>
            </div>
          </div>
          <div className={classes.divider}>
            <h5>Mer information om andra smarta lås kommer inom kort.</h5>
          </div>
          <Link href="/kontakt">
            <ActionButton text="Kontakta oss" />
          </Link>

          <div className={classes.campaign}>
            <p>Missa inte vår kampanj på smarta lås, som gäller året ut!</p>
          <Link href="/kampanjer/smartlas-kampanjprodukter">
            <CampaignButton text="Till smartlås kampanjen" />
          </Link>
          </div>
      

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
