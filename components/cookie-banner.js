"use client";

import Link from "next/link";
import classes from "./cookie-banner.module.css";
import ExportedImage from "next-image-export-optimizer";
import nylasLogo from "public/logo/NylåsLogo.svg";
import { getLocalStorage, setLocalStorage } from "../helpers/storageHelper";
import { useState, useEffect } from "react";

function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`${
        cookieConsent != null
          ? `${classes["hide_content"]}`
          : `${classes["show_content"]}`
      }`}
    >
      <div className={classes.over_background}>
        <div className={classes.overlay_cookies}>
          <div className={classes.container}>
            <div className={classes.text_center}>
                <span className={classes.span_font_style}>
                  Vi använder Cookies på våran sida.
                </span>
              <p>
                Vi använder cookies på vår hemsida för att optimera
                användarupplevelsen för dig som besökare och för att kunna ge
                dig mer relevant information.
              </p>

              <p>
                Genom att klicka ”Acceptera Cookies” ger du ditt samtycke till
                samtliga cookies.
              </p>
              <div className={classes.flex_contain}>
                <button
                  className={classes.btn_negative}
                  onClick={() => setCookieConsent(false)}
                >
                  Neka
                </button>
                <button
                  className={classes.btn_positive}
                  onClick={() => setCookieConsent(true)}
                >
                  Acceptera Cookies
                </button>
              </div>
              <div className={classes.spacer}>
              <Link href="/cookie-info">
              <span className={classes.span_font_style_link}>
                Läs mer om hur vi hanterar cookies här.
              </span>
            </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
