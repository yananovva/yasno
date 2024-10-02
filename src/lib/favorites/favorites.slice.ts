import {createSlice} from "@reduxjs/toolkit";


const initialState = [];

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: course}) => {
            const isExist = state.some(c => c.id === course.id);

            if (isExist)
                state = state.filter(c => c.id !== course.id)
            else
                state.push(course);
        }
    }
});

export const {actions, reducer} = favoritesSlice;