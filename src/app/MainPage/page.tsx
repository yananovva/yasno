import Button from "@/components/Button/Button";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import Image from "next/image";

import styles from '@/app/MainPage/MainPage.module.css';
import Link from "next/link";

function MainPage() {

    return (
        <>
            <section className={styles['main']}>
                <div className={styles['main__position']}>
                    <div className={styles['main__container']}>
                        <div className={styles['main__content']}>
                            <h1 className={styles['main__title-h1']}> Консультации <br/> с психологом онлайн:</h1>
                            <h2 className={styles['banner__title-h2']}>обрести спокойствие</h2>
                        </div>
                        <div className={styles['main__actions']}>
                            <ToggleSwitch/>
                            <div className={styles['main__button']}>
                                <Button size='big'>
                                    <Link href={'/AuthPage'}></Link>
                                    Подобрать психолога
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles['main__banner']}>
                        <div className={styles['banner__note']}>
                            <Image
                                src='http://localhost:3000/client-foto.png'
                                alt='Онлайн консультация пациента с психологом'
                                className={styles['client-photo']}
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles['statistics']}>
                <div className={styles['statistics__container']}>
                    <div className={styles['statistics__slider']}>
                        <div className={styles['statistics__list']}>
                            <div className={styles['statistics__item item-1']}>
                                <div className={styles['statistics__wrap']}>
                                    <p className={styles['statistics__value']}>320 000 +</p>
                                    <p className={styles['statistics__text']}>человек нашли своего <br/> психолога
                                        онлайн</p>
                                </div>
                            </div>
                            <div className={styles['statistics__item item-2']}>
                                <div className={styles['statistics__wrap']}>
                                    <p className={styles['statistics__value']}>4 100</p>
                                    <p className={styles['statistics__text']}>проверенных <br/> специалистов</p>
                                </div>
                            </div>
                            <div className={styles['statistics__item item-3']}>
                                <div className={styles['statistics__wrap']}>
                                    <p className={styles['statistics__value']}>7 лет</p>
                                    <p className={styles['statistics__text']}>средний опыт <br/> практики</p>
                                </div>
                            </div>
                            <div className={styles['statistics__item item-4']}>
                                <div className={styles['statistics__wrap']}>
                                    <p className={styles['statistics__value']}>81 %</p>
                                    <p className={styles['statistics__text']}>клиентов чувствуют <br/> результат после
                                        5-й
                                        сессии</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default MainPage;