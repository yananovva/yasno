import React from 'react';
import CourseItem from "@/components/CourseItem/CourseItem";
import {useGetCoursesQuery} from "@/lib/api/api";


function Psycho() {
    const {isLoading, data} = useGetCoursesQuery;

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : data ? (
                data.map(course =>
                    <CourseItem key={course.id} course={course}/>)
            ) : (
                <div>Not found</div>
            )}
        </>
    );
}

export default Psycho;


