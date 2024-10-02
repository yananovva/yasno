'use client';

import Button from "@/components/Button/Button";
import Link from "next/link";
import {GoHeart} from "react-icons/go";
import styles from "@/components/Header/Header.module.css";
import {useRouter} from "next/navigation";
import {useFavorites} from "@/hooks/useFavorites";


function Header() {
    const {favorites} = useFavorites();

    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/AuthPage');
    }


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
                <div className={styles['favorites']}>
                    <GoHeart/>
                    <span className={styles['favorites_span']}>{favorites.length}</span>
                </div>
                <div className={styles['header__login']}>
                    <Button size='small' onClick={handleLoginClick}>
                        Вход
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Header;

