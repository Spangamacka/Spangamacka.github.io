import FeatureCard from './feature-card.js';
import classes from './featured-services.module.css';
import ActionButton from '../buttons/button-solid.js';


function FeaturedServices() {
    return (

        <div className={classes.container}>
            <div className={classes.service_info}>
                <h2>Våra Tjänster</h2>
                <div className={classes.text}><p>Vi utför det mesta inom lås. Tveka inte att kontakta oss för mer information</p></div>
            </div>

            <div className={classes.cards_holder}>
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>

            <div className={classes.btn_holder}>
                <ActionButton text="Se allt vi gör"/>
            </div>
        </div>

        
    )
}

export default FeaturedServices;