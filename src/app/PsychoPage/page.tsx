'use client';

import Head from "next/head";
import React from 'react';
import {Carousel} from 'antd';


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const Psycho: React.FC = () => {
const onChange = (currentSlide: number) => {
    console.log(currentSlide);
}
return (
<>
        <Head>
            <title>Для психологов</title>
        </Head>
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>Курс 1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Курс 2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Курс 3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>Курс 4</h3>
            </div>
        </Carousel>
    </>
);
}

export default Psycho;


