import classes from "./lasoppning.module.css";
import Image from "next/image";
import LasjourInfobox from "../../components/lasjourInfobox.js";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import opendoor from "public/lasoppning/opendoorM.jpg";
import Head from "next/head";
import bulletpointDark from "public/icons/bullet_point_dark.svg";

function LasoppningPage() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Låsöppning I hela Stockholm - Låsservice</title>
      </Head>
      <div className={classes.even_columns}>
        <div>
          <h1>Utelåst i Stockholm?</h1>
          <p className={classes.intro}>
            Vi hjälper dig att få upp din dörr, vår låsjour i Stockholm finns
            även tillgänglig vid akuta ärenden.
          </p>

          <h2>Det här är det vi behöver för att kunna hjälpa dig med den låsta dörren.</h2>

          <ul>
              <li>
                <span className={classes.bullet_point}>
                  <ExportedImage
                    placeholder="empty"
                    unoptimized={true}
                    src={bulletpointDark}
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    ID-kort
                  </p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <ExportedImage
                    placeholder="empty"
                    unoptimized={true}
                    src={bulletpointDark}
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Bild på låset
                  </p>
                </span>
              </li>
              <li>
                <span className={classes.bullet_point}>
                  <ExportedImage
                    unoptimized={true}
                    placeholder="empty"
                    src={bulletpointDark}
                    width={25}
                    height={25}
                    alt="bullet-point"
                  />
                  <p>
                    Adress
                  </p>
                </span>
              </li>
            </ul>
            <h4>Vi kan endast hjälpa er som äger eller hyr i första hand.</h4>

            <div className={classes.contact}>
            <h2>Vid frågor eller tidsbokning under kontorstid</h2>
            <Link href="tel:+468306667">
              <p>08-30 66 67</p>
            </Link>
            <Link href="mailto:info@nylas.se">
              <p>info@nylas.se</p>
            </Link>
            <h2>Vid akuta ärenden kontakta oss via Stockholm låsjour</h2>
            <Link href="tel:+46812154188">
              <p>08-121 541 88</p>
            </Link>
          </div>
          <h4>Betalning sker via kort, swish och klarna, företag har möjlighet till att betala med 30 dagars faktura.</h4>
        </div>
        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <ExportedImage
              placeholder="empty"
              unoptimized={true}
              src={opendoor}
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
