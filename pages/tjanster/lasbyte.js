import classes from "./lasbyte.module.css";
import Image from "next/image";
import ActionButton from "../../components/buttons/button-solid.js";
import Link from 'next/link';


function LasbytePage() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>Dags att byta lås på ytterdörren? Vi fixar låsbytet. </h1>
          <p>
            Är du Stockholmsbaserad och ska byta lås på ytterdörren eller annan
            dörr i hemmet så finns våra auktoriserade låssmeder här för dig.  Vi
            vet vikten av ett bra lås och med våra erfarna låssmeder ser vi till
            att ert nya lås ger er tryggheten som kommer med ett säkert hem.  Vi
            byter och installerar låscylinder, och kan också installera
            smartalås till din dörr.  Lösningen kommer att skräddarsys efter
            dina behov för att göra det både tryggt & prisvärt.  Din säkerhet är
            prioriteten, så därför använder vi bara certifierade lås  Kontakta
            oss för mer information! 
          </p>
          <h2>Ni når oss på: <Link href="tel:+46700126667">070-012 66 67</Link></h2>
          <div className={classes.second_section}>
          <h2>Checklista för låsbyte. När ska du byta lås?</h2>
          <p>
            Ibland är det självklart när man ska byta lås. Men ibland kräver det
            att vi tar en titt på vårt nuvarande lås. Här är några vanliga
            anledningar att byta lås: 
          </p>
          <ul>
            <li>
              <span className={classes.bullet_point}>
                <Image
                  src="/icons/bullet_point_dark.svg"
                  width={25}
                  height={25}
                  alt="bullet-point"
                />
                <p>
                  Du märker att det börjar ta emot lite när du öppnar eller
                  låser dörren. Det kanske bara kräver lite omvård, men är ofta
                  ett tecken på ett gammalt lås. 
                </p>
              </span>
            </li>
            <li>
              <span className={classes.bullet_point}>
                <Image
                  src="/icons/bullet_point_dark.svg"
                  width={25}
                  height={25}
                  alt="bullet-point"
                />
                <p>
                  Du har tappat nyckeln. Av säkerhetsskäl och för att känna sig
                  extra säker passar många på att byta lås så inte en fungerande
                  nyckel är på vift. 
                </p>
              </span>
            </li>
            <li>
              <span className={classes.bullet_point}>
                <Image
                  src="/icons/bullet_point_dark.svg"
                  width={25}
                  height={25}
                  alt="bullet-point"
                />
                <p>
                  Du har haft inbrott. Har tjuven varit framme lämnar dom ofta
                  skador på låsmekanismen. Då är det ofta bra att uppgradera
                  till ett nytt starkt lås så att du kan känna dig tryggare. 
                </p>
              </span>
            </li>
            <li>
              <span className={classes.bullet_point}>
                <Image
                  src="/icons/bullet_point_dark.svg"
                  width={25}
                  height={25}
                  alt="bullet-point"
                />
                <p>
                  Du har köpt nytt boende. Många byter låset när dom flyttar in,
                  bara för att vara helt på det säkra att dom har de enda
                  fungerande nycklarna. Och man vet inte alltid heller hur
                  gammalt låset boendet kommer med är. 
                </p>
              </span>
            </li>
          </ul>
          <p>
            Det här är bara några exempel. Har du frågor om att byta lås finns
            vi här för dig.
          </p>
          </div>
          
          <Link href="/kontakt">
            <ActionButton text="Kontakta oss" />
            </Link>
        </div>
        <div className={classes.image_container}>
          <div className={classes.image_holder}>
            <Image src="/lasbyte/lasbyte_full.webp" fill alt="låsöppning-i-arbete" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LasbytePage;
