import classes from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

import ExportedImage from "next-image-export-optimizer";
import whiteLogoStockholm from 'public/logo/spangamacka_logo.png';

import { Red_Hat_Display } from "next/font/google";
const redhatdisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

function Footer() {
  return (
    <div className={redhatdisplay.className}>
      <footer className={classes.footer}>
        <div className={classes.content}>
          <div className={classes.top}>
            <div className={classes.logo_details}>
              <i className={classes.fab_faslack}></i>
              <span>
                <Link href="/">
                  <ExportedImage
                  placeholder="empty"
                    unoptimized={true}
                    src={whiteLogoStockholm}
                    width={100}
                    height={100}
                    quality={100}
                    alt="Pizza Spånga Mackan logotyp"
                  />
                </Link>
              </span>
            </div>
          </div>

        </div>
        <div className={classes.bottom_details}>
          <div className={classes.bottom_text}>
            <span className={classes.copyright_text}>
              Copyright © 2024 <Link href="/">Pizzeria Spånga Macka</Link>
            </span>
            <span>Pizzeria Spånga Macka</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
