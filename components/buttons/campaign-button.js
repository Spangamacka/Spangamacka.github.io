import classes from './campaign-button.module.css';

function CampaignButton(props) {
    return (
        <button className={classes.btn_primary}>
            {props.text}
        </button>
    )
}

export default CampaignButton;