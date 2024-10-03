import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


const API_URL = 'http://localhost:4300/courses';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Course'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({
        getCourses: builder.query({
            query: () => '/courses',
        }),
        createCourse: builder.mutation({
            query: (course) => ({
                body: course,
                url: '/',
                method: 'POST',
            }),
        })
    })
});

export const {useGetCoursesQuery} = api;