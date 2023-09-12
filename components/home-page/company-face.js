import classes from "./company-face.module.css";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import stockholmOverview from 'public/background/background-stockholm.webp';

function CompanyFace() {
  return (
    <div>
      {/* <div className={classes.face_bg}></div> */}
      <div className={classes.face_text}>
        <div className={classes.bg_graphic}>
          <h3>Byte lås eller utelåst? Vi har låsjour i hela stockholm.</h3>
          <p>
            Vi byter lås, monterar och sköter låsöppning för både privatpersoner
            och företag. Vi värdesätter en tydlig kommunikation om tid,
            utförande och kostnad. Ett tydligt upplägg och skickligt utförande
            är hur vi bedriver vår verksamhet. Tveka inte att kontakta oss för
            ett snabbt och kvalitativt utförande!
          </p>
        </div>
      </div>

      <div className={classes.background_holder}>
        <ExportedImage
        placeholder="empty"
          unoptimized={true}
          src={stockholmOverview}
          alt="villa-husdörr"
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
