import styles from "@/components/Header/Header.module.css";
import Button from "@/components/Button/Button";


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
                    <a className="header__link" href="/">
                        <img className={styles['header__icon']}
                             src='/header_icon.svg' alt={'Иконка замка'}
                        />
                        Вход
                    </a>
                    <Button size='small'>Выбрать психолога</Button>
                </div>
            </div>
        </>
    );
}

export default Header;

