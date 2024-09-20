'use client';

import styles from './Button.module.css';
import {ButtonProps} from "./Button.props";
import {useRouter} from "next/navigation";

function Button({children, size = 'small'}): ButtonProps {

    const router = useRouter();
    const buttonSizeClass = size === 'big' ? styles['big_button'] : styles['small_button'];
    const handleClick = () => {
        router.push('/AuthPage')
    }

    return (
        <>
            <button type='button'
                    className={`${styles['button']} ${buttonSizeClass}`}
                    onClick={handleClick}
            >
                {children}
            </button>
        </>
    );
}

export default Button;

