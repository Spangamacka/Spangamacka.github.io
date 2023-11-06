import classes from "./lasbyte.module.css";
import ActionButton from "../../components/buttons/button-solid.js";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import bulletpointDark from "public/icons/bullet_point_dark.svg";
import lasbytemid from "public/lasbyte/opendoormid.jpg";
import lasbytefull from "public/lasbyte/opendoorchange.jpg";
import Head from "next/head";

function LasbytePage() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Låsbyte I Stockholm - Mekaniska lås och smartlås</title>
      </Head>
      <div className={classes.even_columns}>
        <div>
          <h1>Dags att byta lås på ytterdörren?</h1>
          <p>
            Behöver ni byta lås på er ytterdörr eller annan dörr i hemmet så
            finns våra låssmeder här för dig, vi vet vikten av ett bra lås.
            Tillsammans med dig så skräddarsyr vi en bra lösning, vi anpassar
            oss efter dina behov. Vi installerar både mekaniska och smarta lås.
          </p>
          <h2>Kontakta oss för mer information!</h2>
          <h3>
            Ni når oss på: <Link href="tel:+468306667">08-30 66 67</Link>
          </h3>
          <div className={classes.second_section}>
            <h2>När ska du byta lås?</h2>
            <p>
              Ibland är det självklart när man behöver byta lås, i andra fall är
              det inte lika självklart. Vi rekommenderar dig att ta kontakt med
              oss innan ni blir utelåsta.
            </p>
            <h4>Här är de fyra vanligaste anledningarna till låsbyte:</h4>
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
                    Låset börjar ta emot när du öppnar, stänger eller låser
                    dörren. Låset kanske bara kräver lite omvårdnad, men det är
                    ofta ett tecken på ett gammalt lås.
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
                    En nyckel har försvunnit, av säkerhetsskäl är det bra att
                    byta lås.
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
                    Har tjuven varit framme och lämnat skador på låsmekanismen?
                    Då är det bra att uppgradera till ett nytt lås och även se
                    över din säkerhetslösning.
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
                    Ni har köpt en ny bostad och vill vara säkra på att ingen
                    obehörig har en nyckel.
                  </p>
                </span>
              </li>
            </ul>
            <p>
            Har du frågor om att byta lås finns vi här för dig.
            </p>
          </div>

          <Link href="/kontakt">
            <ActionButton text="Kontakta oss" />
          </Link>
        </div>
        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <ExportedImage
              placeholder="empty"
              unoptimized={true}
              src={lasbytefull}
              fill
              alt="låsöppning-i-arbete"
            />
          </div>
          <div className={classes.image_holder}>
            <ExportedImage
              placeholder="empty"
              unoptimized={true}
              src={lasbytemid}
              fill
              alt="låsöppning-i-arbete"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LasbytePage;
