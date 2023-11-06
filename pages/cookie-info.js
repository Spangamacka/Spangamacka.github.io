import classes from './cookie-info.module.css';
import ExportedImage from "next-image-export-optimizer";
import cookieImage from "public/bibliotek/dataCookies.svg";
import Link from "next/link";

function CookieInfo() {
    return(
        <div className={classes.container}>

        <div className={classes.even_columns}>
          <div>
            <h1>Om Cookies</h1>
            <p>
            Vi använder cookies på vår hemsida för att optimera
              användarupplevelsen för dig som besökare och för att kunna ge dig
              mer relevant information.
            </p>
            <div></div>
            <p>
              Utöver vår expertis av smarta lås så bedriver vi Stockholms bästa
              låsjour.
            </p>
  
            <div className={classes.second_section}>
              <h2>Cookies från tredje part</h2>
              <p>
              Vi använder cookies från tredje part för att se hur du använder
              vår hemsida, det kan t.ex. handla om att se vilka sidor du besöker
              och hur länge du är på varje sida så att vi kan skapa en så bra
              upplevelse som möjligt för dig som besökare.
              </p>
              <p>
              Du kan välja att inte placera onödiga cookies i dina
              webbläsarinställningar. Detta kan dock påverka upplevelsen hos
              sidorna du besöker. Cookies på vår sida är inte nödvändiga, men
              kan förbättra din upplevelse.
            </p>
            <p>
              Om du vill radera cookies i din webbläsare hänvisar vi till denna
              guide:
            </p>
            <Link href="https://help.one.com/hc/sv/articles/115005592605">
              <span className={classes.span_font_style_link}>
                Hur raderar jag cookies?
              </span>
            </Link>
            </div>
  
            <div className={classes.second_section}>
              <h3>Vi på Nylås önskar dig en trevlig dag!</h3>
            </div>
  
            <div className={classes.temp_filler}></div>
          </div>
          <div className={classes.image_container}>
            <div className={classes.image_holder}>
              <ExportedImage
                priority
                placeholder="empty"
                unoptimized={true}
                src={cookieImage}
                fill
                alt="Cookie-visual"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default CookieInfo;