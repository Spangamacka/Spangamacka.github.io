import classes from "./kontakt.module.css";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import kontaktLokal from "public/kontakt/kontakt_lokal.webp";
import robinpotrait from "public/kontakt/Robin_Kontakt.webp";
import sebastianpotrait from "public/kontakt/Seb_Kontakt.webp";
import alexpotrait2 from "public/kontakt/Alex_kontakt_1.webp";
import Head from "next/head";

function KontaktPage() {
  return (
    <div className={classes.container}>
      <Head>
        <title>
          Kontakta Nylås - Låsöppning, låsbyte och smartlås i Stockholm för
          privatpersoner och företag
        </title>
      </Head>
      <div className={classes.even_columns}>
        <div>
          <h1>Kontakta oss</h1>

          <div className={classes.contact}>
            <p className={classes.innerTextInfo}>
              Vid frågor eller tidsbokning under kontorstid
            </p>
            <Link href="tel:+468306667">
              <p>08-30 66 67</p>
            </Link>
            <Link href="mailto:info@nylas.se">
              <p>info@nylas.se</p>
            </Link>
            <p className={classes.innerTextInfo}>
              Vid akuta ärenden kontakta oss via Stockholm låsjour
            </p>
            <Link href="tel:+46812154188">
              <p>08-121 541 88</p>
            </Link>
          </div>

          <div className={classes.temp_filler}></div>
        </div>

        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <ExportedImage
              src={kontaktLokal}
              fill
              alt="kontakta-oss"
              unoptimized={true}
              placeholder="empty"
            />
          </div>
        </div>
      </div>

      <div className={classes.personal_contact}>
        <span className={classes.personal_heading}>Vi som jobbar på Nylås</span>
        <div className={classes.personal_info_contact}>
          <div className={classes.listHold}>
            <div className={classes.image_holder_personal_alex}>
              <ExportedImage
                src={alexpotrait2}
                fill
                alt="alexander-falk-låssmed"
                unoptimized={true}
                placeholder="empty"
              />
            </div>
            <div className={classes.contact_person}>
              <h4>Alexander Falk</h4>
              <h5>Projektör -Smarta lås</h5>
              <Link href="mailto:alexander.falk@nylas.se">
                <h4>alexander.falk@nylas.se</h4>
              </Link>
              <Link href="tel:+46700126667">
                <h4>070-012 66 67</h4>
              </Link>
            </div>
          </div>

          <div>
            <div className={classes.image_holder_personal_seb}>
              <ExportedImage
                src={sebastianpotrait}
                fill
                alt="sebastian-sundin-vd"
                unoptimized={true}
                placeholder="empty"
              />
            </div>
            <div className={classes.contact_person}>
              <h4>Sebastian Sundin</h4>
              <h5>Ansvarig låstekniker</h5>
              <Link href="mailto:sebastian.sundin@nylas.se">
                <h4>sebastian.sundin@nylas.se</h4>
              </Link>
              <Link href="tel:+46738965523">
                <h4>073-896 55 23</h4>
              </Link>
            </div>
          </div>

          <div>
            <div className={classes.image_holder_personal}>
              <ExportedImage
                src={robinpotrait}
                fill
                alt="robin-sundholm-låssmed"
                unoptimized={true}
                placeholder="empty"
              />
            </div>
            <div className={classes.contact_person}>
              <h4>Robin Sundholm</h4>
              <h5>Låstekniker</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KontaktPage;
