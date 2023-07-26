import classes from './button-solid-small.module.css';

function ActionButtonSolidSmall(props) {
    return (
        <button className={classes.btn_small}>
            {props.text}
        </button>
    )
}

export default ActionButtonSolidSmall;