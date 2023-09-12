import classes from "./kontakt.module.css";
import Image from 'next/image';
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";
import kontaktLokal from 'public/kontakt/kontakt_lokal.webp';

function KontaktPage() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>Kontakt</h1>
          <p>
            Välkommen till Nylås låsjour, dina låssmeder för byte och
            installation av lås i Stockholm. 
          </p>
          <div className={classes.contact}>
            <h2>Tveka inte att kontakta oss med era frågor</h2>
            <p className={classes.innerTextInfo}>För tidsbokning eller frågor dagtid</p>
            <Link href="tel:+468306667"><p>08-30 66 67</p></Link>
            <Link href="mailto:info@nylas.se"><p>info@nylas.se</p></Link>
            <p className={classes.innerTextInfo}>Vid akuta ärenden dygnet runt</p>
            <Link href="tel:+46812154188"><p>08-121 541 88</p></Link>
          </div>
          <div className={classes.second_section}>
            <h2>Vi finns i hela Stockholm</h2>
            <p>Oavsett var du befinner dig i Stockholm så kan du höra av dig till oss för hjälp.</p>
          </div>

          <div className={classes.temp_filler}></div>
        </div>
        
        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <ExportedImage src={kontaktLokal} fill alt="kontakta-oss" unoptimized={true} placeholder="empty"/>
          </div>
        </div>
      </div>
      
      

    </div>
  );
}

export default KontaktPage;
