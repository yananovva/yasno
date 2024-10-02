import {createSlice} from "@reduxjs/toolkit";


const initialState = [];

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: course}) => {
            const isExists = state.some(c => c.id === course.id);

            if (isExists) {
                const index = state.findIndex(item => item.id === course.id)
                if (index !== -1) {
                    state.slice(index, 1)
                } else
                    state.push(course);
            }
        }
    }
});

export const {actions, reducer} = favoritesSlice;