'use client';

import MainPage from "@/app/MainPage/page";
import {Provider} from "react-redux";
import store from "@/lib/store";


export default function Home() {

    return (
        <Provider store={store}>
            <div>
                <MainPage/>
            </div>
        </Provider>

    );
}
