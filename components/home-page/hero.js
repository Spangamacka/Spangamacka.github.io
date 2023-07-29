import classes from './hero.module.css';
import ActionButton from '../buttons/button-solid.js';
import ActionButtonHollow from '../buttons/button-hollow.js';
import LasjourInfobox from '../lasjourInfobox.js';
import Image from 'next/image';

function Hero() {
    return (
        <main>
            <div className={classes.heroBackground}>
                    {/* Make background image here */}
                    </div>
            <section className={classes.padding_block_700}>
                <div className={classes.container}>
                   
                    <div className={classes.even_columns}>
                    
                        <div className={classes.flow}>
                            <h1>Låsservice i hela Stockholm</h1>
                            <h2>Vi skapar effektiva lösningar inom lås för privatpersoner, företag och bostadsrättsföreningar</h2>
                            
                            <div className={classes.button_holder}>
                                <div><ActionButton text="Hur kan vi hjälpa till?"/></div>
                                <div className={classes.desktop_button}><ActionButtonHollow text="Våra Tjänster" /></div>
                            </div>
                            <div className={classes.lasjourInfo}>
                                <h3>Akut utelåst? Ring oss så hjälper vi dig</h3>
                                <div>
                                    <LasjourInfobox />
                                </div>
                            </div>
                        </div>
                        <div className={classes.heroImage}>
                        <Image
                    src="/placeholder_tekniker.png"
                    width={600}
                    height={600}
                    quality={100}
                    alt="Låstekniker"
                    />
                        </div>
                    </div>
                    <div>
                </div>
                </div>
            </section>

            <section>
                
            </section>
        </main>
    )
}

export default Hero;