import Button from "@/components/Button/Button";
import Link from "next/link";

import styles from "@/components/Header/Header.module.css";


function Header() {

    return (
        <>
            <div className={styles['header__layout']}>
                <Link className={styles['header__logo']} href='/MainPage'>
                    Ясно
                </Link>
                <nav className={styles['header__nav']}>
                    <div className={styles['header__menu']}>
                        <Link className={styles['header__menu-link']}
                              href='/PsychoPage'
                        >Для психологов
                        </Link>
                        <Link className={styles['header__menu-link']}
                              href='/BusinessPage'
                        >Для бизнеса
                        </Link>
                    </div>
                </nav>
                <div className={styles['header__login']}>
                    <Link className="header__link" href='/AuthPage'>
                        Вход
                    </Link>
                    <Button size='small' onClick='/AuthPage'>
                        Выбрать психолога
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Header;

