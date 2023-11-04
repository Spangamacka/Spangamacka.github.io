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
      'analytics_storage': newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

  }, [cookieConsent]);



  return (
    <div className={`${cookieConsent != null ?  `${classes["hide_content"]}`  : `${classes["show_content"]}`}`}>
    <div className={classes.over_background}>
      <div className={classes.overlay_cookies}>
        <div className={classes.logo_holder}>
          <ExportedImage
            placeholder="empty"
            unoptimized={true}
            src={nylasLogo}
            width={90}
            height={35}
            quality={100}
            alt="NylåsLogo"
          />
        </div>
        <div className={classes.container}>
          <div className={classes.text_center}>
            <Link href="/info/cookies">
              <span className={classes.span_font_style}>
                Vi använder Cookies på våran sida.
              </span>
            </Link>
            <p>
              Vi använder cookies på vår hemsida för att optimera
              användarupplevelsen för dig som besökare och för att kunna ge dig
              mer relevant information.
            </p>
            <span className={classes.span_font_style}>
              Cookies från tredje part
            </span>{" "}
            <p>
              Vi använder cookies från tredje part för att se hur du använder
              vår hemsida, det kan t.ex. handla om att se vilka sidor du besöker
              och hur länge du är på varje sida så att vi kan skapa en så bra
              upplevelse som möjligt för dig som besökare.
            </p>
            <p>
              Du kan välja att inte placera onödiga cookies i dina
              webbläsarinställningar. Detta kan dock påverka upplevelsen hos
              sidorna du besöker. Cookies på vår sida är inte nödvändiga, men
              kan förbättra din upplevelse.
            </p>
            <p>
              Om du vill radera cookies i din webbläsare hänvisar vi till denna
              guide:
            </p>
            <Link href="https://help.one.com/hc/sv/articles/115005592605">
              <span className={classes.span_font_style_link}>
                Hur raderar jag cookies?
              </span>
            </Link>
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
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CookieBanner;
