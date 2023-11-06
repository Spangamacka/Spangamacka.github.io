import classes from "./om-oss.module.css";
import ExportedImage from "next-image-export-optimizer";
import placeholderPersonalNarrow from "public/placeholder_personal_narrow.svg";
import Head from "next/head";

function OmOssPage() {
  return (
    <div className={classes.container}>
      <Head>
        <title>
          Om Nylås - Låsservice i Stockholm för företag och privatperson
        </title>
      </Head>
      <div className={classes.even_columns}>
        <div>
          <h1>Välkommen till oss på Nylås</h1>
          <p>
            Vi är en etablerad låssmed som utför låsbyten, låsöppningar och
            installationer i hela Stockholm. Vi specialiserar oss på smarta lås,
            nytt för 2023 är att vi även erbjuder våra installationer i hela
            Sverige.
          </p>
          <div></div>
          <p>
            Utöver vår expertis av smarta lås så bedriver vi Stockholms bästa
            låsjour.
          </p>

          <div className={classes.second_section}>
            <h2>Vem kan vi hjälpa?</h2>
            <p>
              Oavsett om du är privatperson, företag eller en
              bostadsrättsförening så hjälper vi på Nylås dig.
            </p>
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
              src={placeholderPersonalNarrow}
              fill
              alt="vi-som-jobbar-på-nylås"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OmOssPage;
