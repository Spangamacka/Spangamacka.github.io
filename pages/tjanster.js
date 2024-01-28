import classes from "./tjanster.module.css";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import placeHolderMan from "public/placerholder_keyman.svg";
import Head from "next/head";

function TjansterPage() {
  return (
    <div className={classes.container}>
      <Head>
        <title>
          Låssmed som utför låsöppning, låsbyte och installation av smartlås
        </title>

        <link
          rel="canonical"
          href="https://nylas.se/tjanster/"
          key="canonical"
        />
      </Head>

      <div className={classes.even_columns}>
        <div>
          <h1>Ta hjälp av Nylås</h1>
          <p>
            Vi hjälper dig med digitala lås, låsöppning, låsmontering och
            säkerhetslösning för privatpersoner, företag och
            bostadsrättsföreningar.
          </p>

          <div className={classes.second_section}>
            <h2>Låsbyte</h2>
            <p>Vi hjälper dig att installera och montera ditt nya lås.</p>
            <Link href="tjanster/lasbyte">
              <span className={classes.read_more}>
                Läs mer om låsbyten
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

          <div className={classes.second_section}>
            <h2>Låsöppning</h2>
            <p>
              Vi hjälper dig att få upp din dörr, vår låsjour i Stockholm finns
              även tillgänglig vid akuta ärenden.
            </p>
            <Link href="/tjanster/lasoppning">
              <span className={classes.read_more}>
                Läs mer om hur vi öppnar lås
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

          <div className={classes.second_section}>
            <h2>Smarta lås</h2>
            <p>
              Vi monterar och installerar smarta lås till hus och lägenheter,
              gör som många andra och upplev smidigheten med smarta lås.
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
        </div>

        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <ExportedImage
              src={placeHolderMan}
              fill
              alt="låssmed"
              priority={false}
              placeholder="empty"
              unoptimized={true}
              placeholder="empty"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TjansterPage;
