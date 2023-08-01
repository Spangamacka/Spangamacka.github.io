import classes from "./lasoppning.module.css";

function LasoppningPage() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>Utelåst i Stockholm? Vår låsjour hjälper dig snabbt & tryggt.</h1>
          <p>
            Har du blivit utelåst från lägenheten eller villan? Dörren gick i
            baklås eller nyckeln försvann på den där festen.  Oavsett vilket så
            vill du in till hemmets värme och din sköna säng. Och helst utan att
            hela dörren ska gå till dom sälla jaktmarkerna för att det ska
            hända. 
          </p>
          <div className={classes.second_section}>
          <h2>
            Våra kunniga låssmeder fixar låsöppning enkelt och tryggt. Uterlåst
            nu?<span className={classes.font_color}> Ring oss på: 08-121 541 88</span>
          </h2>
          <p>
            En låssmed är på plats inom 30 minuter för att öppna ditt lås. Med
            vår expertis ser vi till att det hela sker snyggt och säkert så att
            du kan stänga dörren om dig med ett belåtet klick efteråt. 
          </p>
          <p>
            Och skulle en nyckel vara försvunnen kan vi även hjälpa till med att
            byta låset för din säkerhet.
          </p>
          </div>
          <p>
            Oavsett om du är privatperson, företag eller en bostadsrättsförening
            så hjälper vi på Nylås dig.
          </p>
        </div>
        <div className={classes.image_holder}>
          <div>Large Image</div>
        </div>
      </div>
    </div>
  );
}

export default LasoppningPage;
