import styles from './AuthLayout.module.css';
import PhoneInput from "@/components/PhoneInput/PhoneInput";
import Link from "next/link";
import Button from "@/components/Button/Button";

function AuthPage() {
    return (
        <>
            <section className={styles['header']}>
                <div className={styles['auth_header']}>
                    <div className={styles['header__logo']}>Ясно</div>
                    <div className={styles['auth_header_log']}>
                        <Link className='nav-link header__link' href='/pages/AuthPage'>
                            Вход для психолога
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles['form']}>
                <div className={styles['auth_form']}>
                    <h2>Введите номер</h2>
                    <p className={styles['form__span']}>Пришлем код для входа, никаких звонков</p>
                    <PhoneInput/>
                    <Button size='big'>Получить код по SMS</Button>
                    <p className={styles['button_span']}>Нажимая «Получить код» вы принимаете пользовательское
                        соглашение,
                        даете согласие на обработку персональных данных. Подробнее в Политике.
                    </p>
                    <div className={styles['mail_login']}>
                        <img className={styles['icon_mail']}
                            src={}
                             alt={'Иконка письма'}
                        />
                        <div className={styles['mail_flex']}>
                            <Link className={styles['log_mail']}
                               href='/mail'>
                                Войти по почте
                            </Link>
                            <p>Для тех, у кого есть аккаунт</p>
                        </div>

                    </div>
                </div>
                <div className={styles['form_footer']}>
                    Служба поддержки</div>
            </section>
        </>
    )
}

export default AuthPage;