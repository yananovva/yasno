'use client';

import React from 'react';
import {Carousel} from 'antd';
import styles from '@/app/PsychoPage/PsychoPage.module.css';


function Psycho () {

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    }

    return (
        <>
            <Carousel
                afterChange={onChange}
                className={styles['carousel']}>
                <div>
                    <h3>Курс 1</h3>
                </div>
                <div>
                    <h3>Курс 2</h3>
                </div>
                <div>
                    <h3>Курс 3</h3>
                </div>
                <div>
                    <h3>Курс 4</h3>
                </div>
            </Carousel>
        </>
    );
}

export default Psycho;


