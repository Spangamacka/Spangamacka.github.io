import classes from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.content}>
      <div className={classes.top}>
        <div className={classes.logo_details}>
          <i className={classes.fab_faslack}></i>
          <span><Link href="/">
            <Image
              src="/logo/logo_white.svg"
              width={90}
              height={35}
              quality={100}
              alt="NylåsLogo"
            />
          </Link></span>
        </div>
      </div>
      <div className={classes.link_boxes}>
        <ul className={classes.box}>
          <li className={classes.link_name}><span className={classes.heading}>Företag</span></li>
          <li><Link href="#">info@nylas.se</Link></li>
          <li><Link href="#">08-121 541 88</Link></li>
          <li><Link href="#">Om oss</Link></li>
        </ul>
        <ul className={classes.box}>
          <li className={classes.link_name}><span className={classes.heading}>Tjänster</span></li>
          <li><Link href="#">Låsjour</Link></li>
          <li><Link href="#">Låsbyte</Link></li>
          <li><Link href="#">Låsöppning</Link></li>
          <li><Link href="#">Smartlås</Link></li>
        </ul>
        <ul className={classes.box}>
          <li class="link_name"><span className={classes.heading}>Kunder</span></li>
          <li><a href="#">Bostadsrättsföreningar</a></li>
          <li><a href="#">Företag</a></li>
          <li><a href="#">Privatpersoner</a></li>
        </ul>
        <ul className={classes.box}>
          <li class="link_name"><span className={classes.heading}>Nyttigt</span></li>
          <li><a href="#">Vanliga Frågor</a></li>
          <li><a href="#">Kunskapsbank</a></li>
          <li><a href="#">Hur fungerar det</a></li>
          <li><a href="#">Försäkring</a></li>
        </ul>
      </div>
    </div>
    <div className={classes.bottom_details}>
      <div className={classes.bottom_text}>
        <span className={classes.copyright_text}>Copyright © 2021 <Link href="#">Nylås.</Link></span>
      </div>
    </div>
    </footer>

  );
}

export default Footer;
