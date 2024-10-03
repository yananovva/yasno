import {createAsyncThunk} from "@reduxjs/toolkit";

const fetchUserById = userId => {
    new Promise((resolve) =>
        setTimeout(() => resolve(
            {id: 1, name: 'Yana'}), 1000)
    )
}

export const getUserById = createAsyncThunk(
    'users/by-id',
    async (userId, thunkApi) => {
        try {
            return await fetchUserById(userId);
        } catch (error) {
            thunkApi.rejectWithValue({});
        }
    })

