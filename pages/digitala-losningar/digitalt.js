import classes from "./digitalt.module.css";
import Link from "next/link";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";

function Digitalt() {
  return (
    <div className={classes.container}>
      <Head>
        <title>
          Digitala, elektroniska lösningar för företag, bostadsrättsföreningar
          och privatpersoner
        </title>
      </Head>
      <div className={classes.even_columns}>
        <div>
          <h1>Digitala och smarta lösningar</h1>

          <div className={classes.second_section}>
            <h2>Vad är ett smart lås?</h2>
            <p>
              Kan det verkligen vara säkert med ett digitalt lås? Är det så
              smidigt som reklamen säger? Ja och ja säger vi iallfall. Ett
              smartlås kan verkligen underlätta vardagen och höja säkerheten
              både hemma och på företaget.
            </p>
            <Link href="/tjanster/smartlas">
              <span className={classes.read_more}>
                Se varför smartlås är så smarta
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

          <div className={classes.contact}>
            <h2>Tveka inte att kontakta oss med era frågor</h2>
            <Link href="tel:+468306667">
              <p>08-30 66 67</p>
            </Link>
            <Link href="mailto:info@nylas.se">
              <p>info@nylas.se</p>
            </Link>
          </div>
        </div>

        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <ExportedImage
              src="/bibliotek/question.webp"
              fill
              alt="lära-sig-om-lås"
              placeholder="empty"
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digitalt;
