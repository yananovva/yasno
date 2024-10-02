import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "@/lib/favorites/favorites.slice";


export const store = configureStore({
    reducer,
});



export default store;