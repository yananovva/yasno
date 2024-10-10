import {api} from "@/lib/api/api";
import {ICourseData} from "@/types/course.types";

export const courseApi = api.injectEndpoints({
    endpoints: builder => ({
        createCourse: builder.mutation<null, ICourseData>({
            query: (course) => ({
                body: course,
                url: '/',
                method: 'POST',
            }),
            invalidatesTags: () => [{
                type: 'Course',
            }],
        }),
    }),
})

export const {useCreateCourseMutation} = courseApi;
