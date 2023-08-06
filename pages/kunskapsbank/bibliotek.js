import classes from "./bibliotek.module.css";
import Link from "next/link";
import Image from "next/image";

function Bibliotek() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>Nyttig information</h1>
          <p>
            Här samlar vi bra saker att veta om lås och säkerhet. Vi följer även
            med en av våra låssmeder på jobbet så passa på att kika in med jämna
            mellanrum för den senaste informationen om lås och säkerhet.
          </p>

          <div className={classes.second_section}>
            <h2>Låsöppning</h2>
            <p>
              Vad gör man när man står utelåst? Har nyckeln gått sönder i låset? Oavsett vad som har hänt så kan vi på nylås hjälpa dig.
              Det finns såklart många frågor som kan uppstå när man inte kommer in där man ska in. 
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
            <h2>Byta lås?</h2>
            <p>
            Hur går det egentligen till när man byter lås? Vad ska man tänka
              på? behöver jag byta lås? - det finns många frågor angående lås
              och säkerhet och vi gör vårt bästa för att kunna ge så bra svar
              som möjligt.
            </p>
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
            <h2>Vad är ett smart lås?</h2>
            <p>
              Kan det verkligen vara säkert med ett digitalt lås? Är det så smidigt som reklamen säger? Ja och ja säger vi iallfall. 
              Ett smartlås kan verkligen underlätta vardagen och höja säkerheten både hemma och på företaget. 
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
            <Link href="tel:+46700126667"><p>070-012-66-67</p></Link>
            <p>info@nylas.se</p>
          </div>
        </div>

        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <Image src="/bibliotek/learning.webp" fill alt="lära-sig-om-lås" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bibliotek;
