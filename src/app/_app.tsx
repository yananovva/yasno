import type {AppProps} from "next/app";


export const metadata = {
    title: 'Ясно. Психологи',
    icons: {
        icon: '/favicon.ico',
    },
};


export default function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

