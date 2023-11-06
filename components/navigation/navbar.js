import classes from "./navbar.module.css";
import Image from "next/image";
import ActionButtonSolidSmall from "../buttons/button-solid-small.js";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import ExportedImage from "next-image-export-optimizer";
import nylasLogo from "public/logo/NylåsLogo.svg";
import nylasLogoWhite from "public/logo/logo_white.svg";
import hamburgerIcon from "public/icons/icon-hamburger.svg";

import { Red_Hat_Display } from "next/font/google";
const redhatdisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const router = useRouter();

  function handleClick() {
    console.log("Hamburger pressed");
    setNavActive(!navActive);
    console.log(navActive);
  }

  useEffect(() => {
    const closeMenu = () => navActive && setNavActive(false);
    router.events.on("routeChangeStart", closeMenu);
    return () => {
      router.events.off("routeChangeStart", closeMenu);
    };
  }, [navActive, router]);

  return (
    <div className={redhatdisplay.className}>
      {navActive && (
        <div className={classes.layover_menu}>
          <div className={classes.layover_main}>
            <div className={classes.heading_mobile}></div>
            <nav className={classes.mobile_nav}>
              <ul>
                <li>
                  <div className={classes.nav_mobile_linkhold}>
                    <Link href="/tjanster">Alla Tjänster </Link>
                    <span className={classes.internal_link}>
                      <Link href="/tjanster/lasbyte">Låsbyte</Link>
                    </span>
                    <span className={classes.internal_link}>
                      <Link href="/tjanster/lasoppning">Låsöppning</Link>
                    </span>
                    <span className={classes.internal_link}>
                      <Link href="/tjanster/smartlas">Smartlås</Link>
                    </span>
                  </div>
                </li>
              
                <li>
                <div className={classes.nav_mobile_linkhold}>
                  <Link href="/digitala-losningar/digitalt">Digitala lösningar </Link>
                    <span className={classes.internal_link}>
                      <Link href="/digitala-losningar/digitalt">Digitalt</Link>
                    </span>
                  </div>
                </li>

                <li>
                  <div className={classes.nav_mobile_linkhold}>
                    <Link href="/kunskap/laskunskap">Låskunskap</Link>
                  </div>
                </li>
                <li>
                  <div className={classes.nav_mobile_linkhold}>
                    <Link href="/om-oss">Om oss</Link>
                  </div>
                </li>
                <li>
                  <div className={classes.nav_mobile_linkhold}>
                    <Link href="/kontakt">Kontakt</Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      <header className={classes.primary_header}>
        <div className={classes.container}>
          <div className={classes.nav_wrapper}>
            <Link href="/">
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={nylasLogo}
                width={90}
                height={35}
                quality={100}
                alt="NylåsLogo"
              />
            </Link>
            {/* Add Aria-control to this for accessability */}
            <button
              className={classes.mobile_nav_toggle}
              onClick={handleClick}
              aria-controls="primary-navigation"
            >
              <ExportedImage
                placeholder="empty"
                unoptimized={true}
                src={hamburgerIcon}
                width={32}
                height={32}
                quality={100}
                alt="hamburger-icon"
              />
            </button>

            <nav className={classes.primary_navigation} id="primary-navigation">
              <ul aria_label="Primary" role="list" className={classes.nav_list}>
                <li>
                  <Link href="/tjanster">Tjänster</Link>
                </li>
                <li>
                  <Link href="/digitala-losningar/digitalt">
                    Digitala lösningar
                  </Link>
                </li>
                <li>
                  <Link href="/om-oss">Om oss</Link>
                </li>
                <li>
                  <Link href="/kontakt">Kontakt</Link>
                </li>
                <li>
                  <Link href="/kunskap/laskunskap">Kunskap</Link>
                </li>
              
              </ul>
            </nav>
            <div
              className={
                (classes.display_md_inline_flex, classes.display_sm_none)
              }
            >
              {/* <Link href="/tjanster">
                <ActionButtonSolidSmall text="Rådfråga oss" />
              </Link> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
