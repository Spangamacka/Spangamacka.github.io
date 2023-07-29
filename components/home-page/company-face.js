import classes from "./company-face.module.css";
import Image from "next/image";

function CompanyFace() {
  return (
    <div>
      {/* <div className={classes.face_bg}></div> */}
      <div className={classes.face_text_test}>
        <div className={classes.bg_graphic}>
          <h1>Vi är en låssmed med låsjour i hela stockholm. </h1>
          <p>
            Vi hjälper privatpersoner och företag med låsöppning, montering och
            installation. Vi värdesätter en tydlig kommunikation om tid,
            utförande och kostnad. Ett tydligt upplägg och skickligt utförande
            är hur vi bedriver vår verksamhet. tveka inte att kontakta oss för
            ett snabbt och kvalitativt utförande!
          </p>
        </div>
      </div>

      <div className={classes.background_holder}>
        <Image
          src="/background-stockholm.webp"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default CompanyFace;
