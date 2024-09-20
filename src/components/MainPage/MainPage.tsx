import styles from '@/components/MainPage/MainPage.module.css';
import Button from "@/components/Button/Button";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";


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
                            <Button size='big'>Подобрать психолога</Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles['main__banner']}>
                        <div className={styles['banner__note']}>
                            <img
                                src='https://assets.yasno.live/assets/main-page/banner-note-c2c88ef29eb46e153744419daed0294b8732d0018f340a6b6b2fb88b51d298b2.png'
                                alt='Онлайн консультация пациента с психологом'
                                className={styles['client-photo']}
                            />
                        </div>
                        <div className={styles['banner__phone']}>
                            <img
                                src='https://assets.yasno.live/assets/main-page/banner-phone-d2a2225bb0a9c084e5f6d32f9795797708123fc50b6163ee7bc664fe3f31cc0b.png'
                                alt='Онлайн консультация пациента с психологом'
                                className={styles['psychologist-photo']}
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
                                    <p className={styles['statistics__text']}>человек нашли своего <br/> психолога онлайн</p>
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
                                    <p className={styles['statistics__text']}>клиентов чувствуют <br/> результат после 5-й
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