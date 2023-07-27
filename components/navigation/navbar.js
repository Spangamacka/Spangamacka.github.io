import classes from './navbar.module.css';
import Image from 'next/image';
import ActionButtonSolidSmall from '../buttons/button-solid-small.js';


function Navbar() {
    return (
        <div className={classes.navbar_container}>
            <div className={classes.logo_container}>
            <Image
                    src="/NylåsLogo.svg"
                    width={112}
                    height={112}
                    quality={100}
                    alt="NylåsLogo"
                    />
            </div>
            <div className={classes.navigation_items_holder}>
               <div className={classes.navigation_items}>
                <div className={classes.navigation_item}>
                    Tjänster 
                    <div className={classes.icon_holder}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="none">
                        <path d="M17.4303 7.83105L11.7253 13.5361C11.0516 14.2098 9.94906 14.2098 9.27531 13.5361L3.57031 7.83105" stroke="#003594" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className={classes.navigation_item}>
                    Kunskapsbank
                    <div className={classes.icon_holder}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="none">
                        <path d="M17.4303 7.83105L11.7253 13.5361C11.0516 14.2098 9.94906 14.2098 9.27531 13.5361L3.57031 7.83105" stroke="#003594" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    </div>
                <div className={classes.navigation_item}>Om oss</div>
                <div className={classes.navigation_item}>Kontakt</div>
               </div>
            </div>
            <div className={classes.navigation_attention}>
                <div>
                    <ActionButtonSolidSmall text="Rådfråga Oss" />
                </div>
            </div>
        </div>

        
    )
}

export default Navbar;