import styles from './Header.module.css';
// import Button from '@/components/Button/Button.module.css'


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
                    <a className="nav-link header__link" href="/">
                        <img className={styles['header__icon']}
                             src='/' alt={'Иконка замка'}
                        />
                        Вход
                    </a>
                    {/*<Button>Выбрать психолога</Button>*/}
                </div>
            </div>
        </>
    );
}

export default Header;

