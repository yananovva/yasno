import {api} from "@/lib/api/api";

export const courseApi = api.injectEndpoints({
    endpoints: builder => ({
        createCourse: builder.mutation({
            query: (course) => ({
                body: course,
                url: '/api/add-course',
                method: 'POST',
            }),
            invalidatesTags: () => [{
                type: 'Course',
            }],
        }),
    }),
})

export const {useCreateCourseMutation} = courseApi;
