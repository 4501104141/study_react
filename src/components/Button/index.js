import clsx from 'clsx'
import styles from './Button.module.scss'
function Button({ primary, disabled }) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled,
        'd-flex': true
        //[styles.primary]: true/false
    })
    return (
        <button className={classes}>
            Click me!
        </button>
    )
}
export default Button