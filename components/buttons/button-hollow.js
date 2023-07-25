import classes from './button-hollow.module.css';

function ActionButtonHollow(props) {
    return (
        <button className={classes.btn_hollow}>
            {props.text}
            <span className={classes.arrow_holder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M16.835 6.91846L23.9166 14.0001L16.835 21.0818" stroke="#0047C7" stroke-width="1.85" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.08301 14H23.718" stroke="#0047C7" stroke-width="1.85" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>
        </button>
    )
}

export default ActionButtonHollow;