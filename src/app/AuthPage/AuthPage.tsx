'use client'

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button/Button";
import PhoneInput from "@/components/PhoneInput/PhoneInput";

import styles from '@/app/AuthPage/AuthPage.module.css';
import {useRouter} from "next/navigation";


function AuthPage() {

    const {push} = useRouter();
    push('/AuthPage');

    return (
        <>
            <section className={styles['header']}>
                <div className={styles['auth_header']}>
                    <div className={styles['header__logo']}>Ясно</div>
                    <div className={styles['auth_header_log']}>
                        <Link className='nav-link header__link' href='/src/app/AuthPage/AuthPage'>
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
                        <Image className={styles['icon_mail']}
                            src={}
                             alt={'Иконка письма'}
                        />
                        <div className={styles['mail_flex']}>
                            <Link className={styles['log_mail']}
                               href='/Mail'>
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
    );
}

export default AuthPage;