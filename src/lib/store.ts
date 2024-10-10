import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "@/lib/favorites/favorites.slice";
import {api} from "@/lib/api/api";
import {userSlice} from "@/lib/user/user.slice";
import {createLogger} from 'redux-logger';

const logger = createLogger({
    collapsed: true,
});

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;