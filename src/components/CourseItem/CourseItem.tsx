'use client';

import React from 'react';
import styles from '@/components/CourseItem/CourseItem.module.css';
import {useActions} from "@/hooks/useActions";
import {useFavorites} from "@/hooks/useFavorites";


function CourseItem({course}) {

    const {favorites} = useFavorites();

    const {toggleFavorites} = useActions();

    const isExists = favorites.some(c => c.id === course.id);

    return (

        <>
            <div className={styles['courses']}>
                    <h3>{course.name}</h3>
                <button
                    className={styles['psycho_btn']}
                    onClick={() => toggleFavorites(course)}>

                    {isExists ? 'Удалить из избранного' : 'Добавить в избранное'}
                </button>
            </div>
        </>
    );
}

export default CourseItem;