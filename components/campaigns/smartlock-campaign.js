import classes from "./smartlock-campaign.module.css";
import Link from "next/link";
import CampaignButton from ".././buttons/campaign-button.js";


function SmartlockCampaign() {
  return (
    <div className={classes.container_large}>
      <div className={classes.content_hero_first}>
        <h2>KAMPANJPRIS PÅ SMARTA LÅS</h2>
        <p>
          Nu erbjuder vi installation av smarta lås för endast{" "}
          <span className={classes.price}>1750:-</span> efter rotavdrag,
          Erbjudandet gäller året ut.
        </p>
        <span className={classes.price_att}>(Ordinarie pris 3000:-)</span>
        

        <div className={classes.attention_sec}>
          <p>
            Ta del av erbjudandet genom att uppge{" "}
            <span className={classes.price}>"NYLÅS"</span> vid bokning!
          </p>
        </div>

        <div>
        <Link href="/kampanjer/smartlas-kampanjprodukter" style={{ display: "contents" }}>
          <CampaignButton text="Till Kampanjen" />
        </Link>
        </div>
      </div>
   
      <div className={classes.divider}></div>
    </div>
  );
}

export default SmartlockCampaign;
