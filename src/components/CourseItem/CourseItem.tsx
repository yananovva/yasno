'use client';

import React from 'react';
import styles from '@/components/CourseItem/CourseItem.module.css';
import {useActions} from "@/hooks/useActions";
import {useFavorites} from "@/hooks/useFavorites";
import Image from "next/image";
import {ICourse} from "@/types/course.types";

interface ICourseItem {
    course: ICourse
}

function CourseItem({course}: ICourseItem) {

    const {favorites} = useFavorites();

    const {toggleFavorites} = useActions();

    const isExists = favorites.some(c => c.id === course.id);

    return (
        <div className={styles['course_container']}>
            <div className={styles['courses']}>
                <Image
                    src={course.image}
                    alt={course.name}
                    width={50}
                    height={50}
                    className={styles['image']}
                />
                <h3>{course.name}</h3>
                <button
                    className={styles['psycho_btn']}
                    onClick={() => toggleFavorites(course)}>

                    {isExists ? 'Удалить из избранного' : 'Добавить в избранное'}
                </button>
            </div>
        </div>
    );
}

export default CourseItem;