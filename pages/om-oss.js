import classes from './om-oss.module.css';
import Image from 'next/image';

function OmOssPage() {
    return (
        <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>Vi är Nylås</h1>
          <p>
            Vi är en låssmed med låsjour baserad i Stockholm som ständigt strävar efter
            att uföra säkra och effektiva jobb.
          </p>

          <div className={classes.second_section}>
            <h2>Yale doorman</h2>
            <p>Vi är speciellt stolta över vår expertis inom installation av Yales smarta dörrlås.</p>
          </div>
          <div className={classes.second_section}>
            <h2>Vem kan vi hjälpa?</h2>
          <p>
            Oavsett om du är privatperson, företag eller en bostadsrättsförening
            så hjälper vi på Nylås dig.
          </p>
          </div>

          <div className={classes.temp_filler}></div>
        </div>
        <div className={classes.image_container}>
        <div className={classes.image_holder}>
                <Image
                  src="/placeholder_personal_narrow.svg"
                  fill
                  alt="vi-som-jobbar-på-nylås"
                />
              </div>
        </div>
      </div>
    </div>
    )
}

export default OmOssPage;