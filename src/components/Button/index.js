import clsx from 'clsx'
import styles from './Button.module.css'
function Button() {
    return (
        <>
            <button className={styles.btn}>
                Click me!
            </button>
            <button className={clsx(styles.btn, {
                [styles.active]: true
            })}>
                Click me!
            </button>
        </>
    )
}
export default Button