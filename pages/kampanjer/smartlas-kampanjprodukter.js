import classes from "./smartlas-kampanjprodukter.module.css";
import ExportedImage from "next-image-export-optimizer";
import fingerIcon from "public/campaign/touch_icon.svg";
import rfidIcon from "public/campaign/rfid_icon.svg";
import mobileIcon from "public/campaign/mobile_icon.svg";
import keyTagIcon from "public/campaign/keytag_icon.svg";
import keyPadIcon from "public/campaign/keypads_icon.svg";
import bluetoothIcon from "public/campaign/bluetooth_icon.svg";
import alarmIcon from "public/campaign/alarm_icon.svg";
import autolockIcon from "public/campaign/autolock_icon.svg";
import bg3000 from "public/campaign/products/nordic_bg3000_product.png";
import bg4000 from "public/campaign/products/nordic_bg4000_product.png";
import yaleL3S from "public/campaign/products/Yale_L3S_product.png";
import yaleClassic from "public/campaign/products/Yale_Classic_product.png";
import test from "public/campaign/test.svg";
import Link from "next/link";
import CampaignButton from "../../components/buttons/campaign-button.js";

function Smartlaskampanjprodukter() {
  return (
    <div className={classes.container_large}>
      <div className={classes.campaign_holder}>
        <span className={classes.header}>Kampanjpris på smarta lås</span>
        <p>
          Nu erbjuder vi installation av smarta lås för endast{" "}
          <span className={classes.attention}>1750:-</span> efter rotavdrag samt
          extra bra pris på smarta lås, Erbjudandet gäller året ut.
        </p>
        <Link href="/tjanster/smartlas">
          <CampaignButton text="Läs mer om smarta lås här" />
        </Link>
      </div>
      <div className={classes.grid_layout}>
        <div className={classes.card}>
          <div>
            <div className={classes.img_holder}>
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={bg3000}
                width={225}
                height={225}
                alt="Touch-funktion"
              />
              <span>(*Låshus och cylinder medföljer ej)</span>
            </div>
            <p className={classes.infoCard}>
              Smartlås Nordic BG3000 med installation*
            </p>
            <span className={classes.price}>Kampanjpris 5995:-</span> (efter
            rotavdrag.)
            <p className={classes.infoCard_second}>(Ordinarie pris 8445:-)</p>
            <p>
              BG3000 är avsett för kompletterande montering på befintligt låshus
              med befintlig ovalcylinder. Din befintliga ovalcylinder används
              för att komplettera med mekanisk låsning utöver det digitala.
            </p>
          </div>
          <div className={classes.product_function_grid}>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={fingerIcon}
                width={35}
                height={35}
                alt="Touch-funktion"
              />
              <span>Fingeravtryck</span>
            </div>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={keyPadIcon}
                width={35}
                height={35}
                alt="kod-funktion"
              />
              <span>Kod</span>
            </div>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={bluetoothIcon}
                width={30}
                height={30}
                alt="Bluetooth-funktion"
              />
              <span>Bluetooth</span>
            </div>

            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={rfidIcon}
                width={40}
                height={40}
                alt="Rfid-funktion"
              />
              <span>RFID-Bricka (13,56 MHZ)</span>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div>
            <div className={classes.img_holder}>
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={bg4000}
                width={225}
                height={245}
                alt="Nordic-BG4000-smartlås"
              />
              <span>(*cylinder och cylinderringar medföljer ej)</span>
            </div>
            <p className={classes.infoCard}>
              Smartlås Nordic BG4000 med installation*
            </p>
            <span className={classes.price}>Kampanjpris 6495:-</span> (efter
            rotavdrag.)
            <p className={classes.infoCard_second}>(Ordinarie pris 8945:-)</p>
            <p>
              Få ut det mesta av ditt Nordic+ genom att montera smartlåset
              tillsammans med ASSA 2500. Du får här en enligt försäkringsbolagen
              godkänd låsning i låsklass 3 (SSF 3522)
            </p>
          </div>
          <div className={classes.product_function_grid}>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={fingerIcon}
                width={35}
                height={35}
                alt="Touch-funktion"
              />
              <span>Fingeravtryck</span>
            </div>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={keyPadIcon}
                width={35}
                height={35}
                alt="Kod-funktion"
              />
              <span>Kod</span>
            </div>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={bluetoothIcon}
                width={30}
                height={30}
                alt="Bluetooth-funktion"
              />
              <span>Bluetooth</span>
            </div>

            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={rfidIcon}
                width={40}
                height={40}
                alt="Rfid-funktion"
              />
              <span>RFID-Bricka (13,56 MHZ)</span>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div>
            <div className={classes.img_holder}>
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={yaleL3S}
                width={225}
                height={300}
                alt="Touch-funktion"
              />
            </div>
            <p className={classes.infoCard}>
              Smartlås Yale L3S med installation.
            </p>
            <span className={classes.price}>Kampanjpris 8245:-</span> (efter
            rotavdrag.)
            <p className={classes.infoCard_second}>(Ordinarie pris 9495:-)</p>
            <p>
              Yale Doorman L3S är ett säkert smartlås med godkänd låsning i både
              låsklass 3(SSF 3522) samt klass S3 för digitala låsenheter (SSF
              3523)
            </p>
          </div>
          <div className={classes.product_function_grid}>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={mobileIcon}
                width={40}
                height={45}
                alt="Mobil-funktion"
              />
              <span>Styr med mobilen</span>
            </div>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={alarmIcon}
                width={45}
                height={45}
                alt="alarm-funktion"
              />
              <span>Inbyggd dörrklocka</span>
            </div>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={keyTagIcon}
                width={45}
                height={45}
                alt="kodbricka-funktion"
              />
              <span>Nyckelbricka eller kod</span>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div>
            <div className={classes.img_holder}>
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={yaleClassic}
                width={185}
                height={255}
                alt="Touch-funktion"
              />
            </div>
            <p className={classes.infoCard}>
              Smartlås Yale Classic med installation.
            </p>
            <span className={classes.price}>Kampanjpris 5899:-</span> (efter
            rotavdrag.)
            <p className={classes.infoCard_second}>(Ordinarie pris 7149:-)</p>
            <p>
              Yale Classic fungerar efter dina önskemål. I bas utförande är
              låset offline och öppnas med kod eller nyckelbricka. Låset går att
              komplettera med radiomodul för kontroll via en app som t.ex.
              Verisure och möjliggör kontroll via mobiltelefon eller dator.
            </p>
          </div>
          <div className={classes.product_function_grid}>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={mobileIcon}
                width={40}
                height={45}
                alt="mobil-funktion"
              />
              <span>Styr med mobilen</span>
            </div>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={keyPadIcon}
                width={35}
                height={35}
                alt="Kod-funktion"
              />
              <span>Kod</span>
            </div>
            <div className={classes.product_function_items}>
              {" "}
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={autolockIcon}
                width={35}
                height={35}
                alt="Autolås-funktion"
              />
              <span>Autolås</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.campaign_holder_end}>
        <span className={classes.ender}>
          Gör som många andra och upplev smidigheten med smarta lås redan idag!
        </span>
        <p className={classes.contact}>Kontakta oss för mer information</p>
        <Link
          href="mailto:info@nylas.se"
          style={{ display: "contents" }}
        >
          <span className={classes.contact_info}>info@nylas.se</span>
        </Link>
        <Link href="tel:+468306667" style={{ display: "contents" }}>
          <span className={classes.contact_info}>08-30 66 67</span>
        </Link>
      </div>
    </div>
  );
}

export default Smartlaskampanjprodukter;
