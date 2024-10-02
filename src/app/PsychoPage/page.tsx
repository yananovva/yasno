import React from 'react';
import CourseItem from "@/components/CourseItem/CourseItem";


function Psycho() {
    return (
        <>
            <CourseItem course={{
                id: 1,
                name: 'Психология развития',
            }}
            />
            <CourseItem course={{
                id: 2,
                name: 'Семейная психология',
            }}
            />
            <CourseItem course={{
                id: 3,
                name: 'Детская психология',
            }}
            />
        </>
    );
}

export default Psycho;


