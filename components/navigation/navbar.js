import classes from "./navbar.module.css";
import Image from "next/image";
import ActionButtonSolidSmall from "../buttons/button-solid-small.js";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import ExportedImage from "next-image-export-optimizer";
import nylasLogo from "public/logo/spangamacka_logo.png";
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
                    Pizzeria Spånga Macka{" "}
                  </div>
                </li>

                <li>
                  <div className={classes.nav_mobile_linkhold}>
                    <Link href="/brf/">Se vår Meny </Link>
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
            <div>
              {" "}
              <Link href="/">
                <ExportedImage
                  placeholder="empty"
                  unoptimized={true}
                  src={nylasLogo}
                  width={60}
                  height={60}
                  quality={100}
                  alt="Pizzeria-Spånga-Macka-Logo"
                />
              </Link>
            </div>

           
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
