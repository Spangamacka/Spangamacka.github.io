import classes from "./call-card.module.css";
import Link from "next/link";

function CallCard() {
    return (
        <div className={classes.content_hero_second}>
        <div className={classes.content_hero_second_container}>
          <h2>Vi är experter på smarta lås och hjälper till i hela Sverige</h2>
          <p>
            Kontakta oss för kostnadsfri konsultation, inget uppdrag är för
            stort eller för litet.
          </p>
          <Link
            href="mailto:alexander.falk@nylas.se"
            style={{ display: "contents" }}
          >
            <span>alexander.falk@nylas.se</span>
          </Link>
          <Link href="tel:+46700126667" style={{ display: "contents" }}>
            <span>070-012 66 67</span>
          </Link>
        </div>
      </div>
    );
}

export default CallCard;