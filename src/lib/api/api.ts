import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const API_URL = 'http://localhost:5002/api/courses';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Course'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({
        getCourses: builder.query({
            query: () => '/?_sort=id&_order=desc',
            providesTags: () => [{
                type: 'Course',
            }],
        }),
    }),
});

export const {useGetCoursesQuery} = api;





