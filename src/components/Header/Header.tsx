'use client';

import Button from "@/components/Button/Button";
import Link from "next/link";
import {useRouter} from "next/navigation";

import styles from "@/components/Header/Header.module.css";

const navigation = [
    {id: 1, title: 'Для психологов', path: '/PsychoPage/PsychoPage'},
    {id: 2, title: 'Для бизнеса', path: '/BusinessPage/BusinessPage'},
]

function Header() {
    const {pathname} = useRouter();

    return (
        <>
            <div className={styles['header__layout']}>
                <Link className={styles['header__logo']} href='/MainPage'>
                    Ясно
                </Link>
                <nav className={styles['header__nav']}>
                    <div className={styles['header__menu']}>
                        {navigation.map(({id, title, path}) => (
                            <Link className={styles['header__menu-link']} href={path} key={id}>
                                <span className={pathname === path ? styles['active'] : null}>
                                    {title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </nav>
                <div className={styles['header__login']}>
                    <Link className="header__link" href='/AuthPage'>
                        Вход
                    </Link>
                    <Button size='small'>
                        Выбрать психолога
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Header;

