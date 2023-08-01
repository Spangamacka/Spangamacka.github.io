import classes from "./kontakt.module.css";
import Image from 'next/image';

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
            <p>08-121 541 88</p>
            <p>info@nylas.se</p>
          </div>
          <div className={classes.second_section}>
            <h2>Vi finns i hela Stockholm</h2>
            <p>Oavsett var du befinner dig i Stockholm så kan du höra av dig till oss för hjälp.</p>
          </div>

          <div className={classes.temp_filler}></div>
        </div>
        
        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <Image src="/kontakt/placeholder_kontakt.webp" fill alt="kontakta-oss" />
          </div>
        </div>
      </div>
      
      

    </div>
  );
}

export default KontaktPage;
