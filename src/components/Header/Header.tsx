import styles from "@/components/Header/Header.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";


function Header() {
    return (
        <>
            <div className={styles['header__layout']}>
                <div className={styles['header__logo']}>Ясно</div>
                <div className={styles['header__nav']}>
                    <ul className={styles['header__menu']}>
                        <li>Для психологов</li>
                        <li>Для бизнеса</li>
                        <li>Подарочные сертификаты</li>
                        <li>Тесты</li>
                    </ul>
                </div>
                <div className={styles['header__login']}>
                    <Link className="header__link" href='/AuthPage'>
                        Вход
                    </Link>
                    <Button size='small'>Выбрать психолога</Button>
                </div>
            </div>
        </>
    );
}

export default Header;

