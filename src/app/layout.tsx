import {Roboto} from "next/font/google";
import "@/app/styles/globals.css";
import React, {ReactNode} from "react";
import Header from "@/components/Header/Header";

const font = Roboto({subsets: ['latin'], weight: ['300', '400', '700', '900']});

export const metadata = {
    title: 'Ясно. Психологи',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({children}: {children: ReactNode}) {
    return (
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
    );
};

