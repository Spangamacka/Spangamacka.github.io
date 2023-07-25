import classes from './hero.module.css';
import ActionButton from '../buttons/button-solid.js';
import ActionButtonHollow from '../buttons/button-hollow.js';
import LasjourInfobox from '../lasjourInfobox.js';


function Hero() {
    return (
        <div className={classes.heroContainer}>
            <div className={classes.hero}>
                <div className={classes.mainTitle}>
                <h1>Låsservice i hela Stockholm</h1>
                </div>
                
                <div>
                    <h3>Vi skapar effektiva lösningar inom lås för privatpersoner,
                    företag och bostadsrättsföreningar
                </h3>
                </div>
                <div className={classes.btn_holder}>
                    <ActionButton text="Hur kan vi hjälpa till?"/>
                    <div></div>
                    <ActionButtonHollow text="Våra tjänster"/>
                </div>

                <div>
                    <h2>Akut utelåst? Ring oss så hjälper vi dig</h2>
                </div>
                <div className={classes.boxHolder}>
                    <LasjourInfobox />
                </div>
            </div>
        </div>
    )
}

export default Hero;