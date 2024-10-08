import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "@/types/user.types";

const fetchUserById = (): Promise<IUser> =>
    new Promise(resolve =>
        setTimeout(() => resolve(
            {id: 1, name: 'Yana'}), 1000)
    )

export const getUserById = createAsyncThunk<IUser, number>(
    'users/by-id',
    async (userId, thunkApi) => {
        try {
            const response = await fetchUserById();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    })

