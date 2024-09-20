import styles from './Button.module.css';
import {ButtonProps} from "./Button.props";

function Button({children, size = 'small'}): ButtonProps {
    const buttonSizeClass = size === 'big' ? styles['big_button'] : styles['small_button'];

    return (
        <>
            <button className={`${styles['button']} ${buttonSizeClass}`}>
                {children}
            </button>
        </>
    );
}

export default Button;

