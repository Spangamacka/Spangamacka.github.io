
import classes from "./yale-smartlas.module.css";
import SmartLockSection from "../../components/home-page/smartlock-section.js";

function YaleSmartlasPage() {
    return(
        <div className={classes.container}>
            <SmartLockSection />
        </div>
    )
}

export default YaleSmartlasPage;