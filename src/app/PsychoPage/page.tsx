'use client';

import React, {useState} from 'react';
import CourseItem from "@/components/CourseItem/CourseItem";
import {useGetCoursesQuery} from "@/lib/api/api";
import CreateCourse from "@/components/CreateCourse/CreateCourse";
import styles from "@/components/CourseItem/CourseItem.module.css";


function Psycho() {

    const [searchTerm, setSearchTerm] = useState('');
    const [queryTerm, setQueryTerm] = useState('');
    const {isLoading, data} = useGetCoursesQuery(queryTerm);
    const handleSearch = () => {
        setQueryTerm(searchTerm);
    }

    return (
        <section>
            <CreateCourse/>
            <div style={{padding: 10}}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '10px'
                }}>
                    <input type='search'
                           value={searchTerm}
                           onChange={e => setSearchTerm(e.target.value)}
                           placeholder='Поиск..'
                           style={{
                               outline: 'none',
                               border: '1px solid var(--light-gray)',
                               borderRadius: '10px',
                               color: 'var(--dark)',
                               padding: '4px 5px',
                               transition: 'border-color 0.4s ease-in-out',
                               marginRight: '10px',
                               width: '190px'
                           }}
                    />
                    <button
                        className={styles['psycho_btn']}
                        onClick={handleSearch}
                    >Найти
                    </button>
                </div>
            </div>
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


