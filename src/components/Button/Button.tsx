'use client';

import styles from '@/components/Button/Button.module.css';
import {ButtonProps} from "@/components/Button/Button.props";
import {useRouter} from "next/navigation";
import React from "react";

// function Button({children, size = 'small'}): ButtonProps {
const Button: React.FC<ButtonProps> = ({ children, size }) => {

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

