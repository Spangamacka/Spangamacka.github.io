import classes from "./navbar.module.css";
import Image from "next/image";
import ActionButtonSolidSmall from "../buttons/button-solid-small.js";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
                    <Link href="/kunskapsbank/bibliotek">Kunskapsbank</Link>
                    <span className={classes.internal_link}>
                      <Link href="/kunskapsbank/bibliotek">Bibliotek</Link>
                    </span>
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
              <Image
                src="/logo/NylåsLogo.svg"
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
              <img
                className={classes.icon_hamburger}
                src="/icons/icon-hamburger.svg"
                alt="icon-hamburger"
              />
              <img
                className={classes.icon_close}
                src="/icons/icon-close.svg"
                alt="icon-close"
              />
            </button>

            <nav className={classes.primary_navigation} id="primary-navigation">
              <ul aria_label="Primary" role="list" className={classes.nav_list}>
                <li>
                  <Link href="/tjanster">Tjänster</Link>
                </li>
                <li>
                  <Link href="/kunskapsbank/bibliotek">Kunskapsbank</Link>
                </li>
                <li>
                  <Link href="/om-oss">Om oss</Link>
                </li>
                <li>
                  <Link href="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </nav>
            <div
              className={
                (classes.display_md_inline_flex, classes.display_sm_none)
              }
            >
              <Link href="/tjanster">
                <ActionButtonSolidSmall text="Rådfråga oss" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
