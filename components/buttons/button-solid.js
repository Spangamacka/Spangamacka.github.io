import classes from './button-solid.module.css';

function ActionButton(props) {
    return (
        <button className={classes.btn_primary}>
            {props.text}
        </button>
    )
}

export default ActionButton;