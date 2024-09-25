import {Roboto} from "next/font/google";
import "@/app/styles/globals.css";
import React from "react";
import Header from "@/components/Header/Header";
import MainPage from "@/components/MainPage/page";


const font = Roboto({subsets: ['latin'], weight: ['300', '400', '700', '900']});

export const metadata = {
    title: 'Ясно. Психологи',
    description: 'Домашняя страница',
};

export default function RootLayout() {
    return (
        <html lang="ru">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <link rel="icon" href="/favicon.png" />
        </head>
        <body className={font.className}>
        <header>
            <Header/>
        </header>
        <main>
            <MainPage/>
        </main>
        </body>
        </html>
    );
};

