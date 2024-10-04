'use client';

import React from 'react';
import CourseItem from "@/components/CourseItem/CourseItem";
import {useGetCoursesQuery} from "@/lib/api/api";
import CreateCourse from "@/components/CreateCourse/CreateCourse";

function Psycho() {
    const {isLoading, data} = useGetCoursesQuery();

    return (
        <section>
            <CreateCourse/>
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : data ? (
                    data.map(course =>
                        <CourseItem key={course.id} course={course}/>)
                ) : (
                    <div>Not found</div>
                )}
            </div>
        </section>
    );
}

export default Psycho;


