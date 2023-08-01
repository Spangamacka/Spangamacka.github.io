import classes from "./tjanster.module.css";
import Link from "next/link";
import Image from 'next/image';

function TjansterPage() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>Det här gör vi på Nylås</h1>
          <p>
            Vi skapar säkra och skräddarsydda lösningar för privatpersoner,
            bolag och bostadsrättsföreningar. Vare sig du har blivit utelåst
            eller vill få det senaste kodlåset monterat.
          </p>

          <div className={classes.second_section}>
            <h2>Låsöppning</h2>
            <p>
              Nylås hjälper tryggt och enkelt till med låsöppningar. Är du
              utelåst eller har tappat en nyckel kan vår låsjour i Stockholm
              hjälpa dig säkert på plats inom 30 minuter.{" "}
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
                    stroke-width="1.85"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.08301 14H23.718"
                    stroke="#0047C7"
                    stroke-width="1.85"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div className={classes.second_section}>
            <h2>Låsbyte</h2>
            <p>
              Vi byter och installerar låscylinder, och kan också installera
              smartalås till din dörr. Lösningen kommer att skräddarsys efter
              dina behov för att göra det både tryggt & prisvärt. Din säkerhet
              är prioriteten, så därför använder vi bara certifierade lås.
            </p>
            <Link href="tjanster/lasbyte">
              <span className={classes.read_more}>
                Läs mer om låsbyten
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M16.835 6.91846L23.9166 14.0001L16.835 21.0818" stroke="#0047C7" stroke-width="1.85" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.08301 14H23.718" stroke="#0047C7" stroke-width="1.85" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                </span>
            </Link>
          </div>

          <div className={classes.second_section}>
            <h2>Smartalås</h2>
            <p>
              Vi monterar och installerar smartalås. Gör som många andra och
              upplev smidigheten med smartlås. Enkelt och säkert.
            </p>
            <Link href="/tjanster/smartlas">
              <span className={classes.read_more}>
                Se varför smartlås är så smarta
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M16.835 6.91846L23.9166 14.0001L16.835 21.0818" stroke="#0047C7" stroke-width="1.85" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.08301 14H23.718" stroke="#0047C7" stroke-width="1.85" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                </span>
            </Link>
          </div>

          <div className={classes.contact}>
            <h2>Tveka inte att kontakta oss med era frågor</h2>
            <p>08-121 541 88</p>
            <p>info@nylas.se</p>
          </div>
        </div>

        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <Image src="/placerholder_keyman.svg" fill alt="låssmed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TjansterPage;
