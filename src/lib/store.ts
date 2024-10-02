import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "@/lib/favorites/favorites.slice";

const reducers = combineReducers({
    favorites: favoritesReducer,
});

export const store = configureStore({
    reducer: reducers,

});


export default store;