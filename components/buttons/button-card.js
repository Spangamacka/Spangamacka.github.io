import classes from './button-card.module.css';

function ActionButtonCard(props) {
    return (
        <button className={classes.btn_card}>
            {props.text}
        </button>
    )
}

export default ActionButtonCard;