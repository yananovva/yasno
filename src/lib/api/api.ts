import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICourse} from "@/types/course.types";


const API_URL = 'http://localhost:5002/courses';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Course'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({
        getCourses: builder.query<ICourse[], string>({
            query: (searchTerm) => `/?_sort=id&_order=desc&q=${searchTerm}`,
            providesTags: (result, error, searchTerm) => [{
                type: 'Course',
                id: searchTerm,
            }],
        }),
    }),
});

export const {useGetCoursesQuery} = api;





