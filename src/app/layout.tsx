'use client';

import {Roboto} from "next/font/google";
import "@/app/styles/globals.css";
import React, {ReactNode} from "react";
import Header from "@/components/Header/Header";
import {store} from "@/lib/store";
import {Provider} from "react-redux";

const font = Roboto({subsets: ['latin'], weight: ['300', '400', '700', '900']});


export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <html lang="ru">
            <body className={font.className}>
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            </body>
            </html>
        </Provider>
    );
};

