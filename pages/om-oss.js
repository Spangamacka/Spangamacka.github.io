import classes from "./om-oss.module.css";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import placeholderPersonalNarrow from "public/placeholder_personal_narrow.svg";
import Head from "next/head";

function OmOssPage() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Om Nylås - Låsservice i Stockholm för företag och privatperson</title>
      </Head>
      <div className={classes.even_columns}>
        <div>
          <h1>Vi är Nylås</h1>
          <p>
            Vi är en låssmed som utför låsbyten, låsöppningar och installation
            av smarta lås och vi har även låsjour dygnet runt. Vi är baserade i
            Stockholm och strävar ständigt efter att uföra säkra och effektiva
            jobb.
          </p>

          <div className={classes.second_section}>
            <h2>Yale doorman</h2>
            <p>
              Vi är speciellt stolta över vår expertis inom installation av
              Yales smarta dörrlås.
            </p>
          </div>
          <div className={classes.second_section}>
            <h2>Vem kan vi hjälpa?</h2>
            <p>
              Oavsett om du är privatperson, företag eller en
              bostadsrättsförening så hjälper vi på Nylås dig.
            </p>
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
