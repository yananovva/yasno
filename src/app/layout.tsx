import {Roboto} from "next/font/google";
import "@/app/styles/globals.css";
import React from "react";
import Header from "@/components/Header/Header";
import Head from "next/head";


const font = Roboto({subsets: ['latin'], weight: ['300', '400', '700', '900']});


export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <Head>
            <title>Ясно. Психологи</title>
            <link rel="icon" href="/favicon.png"/>
        </Head>
        <body className={font.className}>
        <header>
            <Header/>
        </header>
        <main>
            {children}
        </main>
        </body>
        </html>
    );
};

