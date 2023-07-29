import classes from "./navbar.module.css";
import Image from "next/image";
import ActionButtonSolidSmall from "../buttons/button-solid-small.js";
import Link from "next/link";
import { useState } from "react";

function Navbar() {

 const [navActive, setNavActive] = useState(false);

 function handleClick() {
    console.log("Hamburger pressed");
    setNavActive(!navActive);
    console.log(navActive);
 }

  return (
    <header className={classes.primary_header}>
      <div className={classes.container}>
        <div className={classes.nav_wrapper}>
          <Link href="/">
            <Image
              src="/NylåsLogo.svg"
              width={90}
              height={35}
              quality={100}
              alt="NylåsLogo"
            />
          </Link>
          {/* Add Aria-control to this for accessability */}
          <button className={classes.mobile_nav_toggle}
            onClick={handleClick}
            aria-controls="primary-navigation"
          >
            <img
              className={classes.icon_hamburger}
              src="/icon-hamburger.svg"
              alt="icon-hamburger"
            />
            <img
              className={classes.icon_close}
              src="/icon-close.svg"
              alt="icon-close"
            />
       
            <span className={classes.visually_hidden}>Menu</span>
          </button>

         

          <nav className={classes.primary_navigation} id="primary-navigation">
            <ul aria_label="Primary" role="list" className={classes.nav_list}>
              <li>
                <Link href="#">Tjänster</Link>
              </li>
              <li>
                <Link href="#">Kunskapsbank</Link>
              </li>
              <li>
                <Link href="#">Om oss</Link>
              </li>
              <li>
                <Link href="#">Kontakt</Link>
              </li>
            </ul>
          </nav>
          <div className={classes.display_md_inline_flex, classes.display_sm_none}>
            <ActionButtonSolidSmall text="Rådfråga oss" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
