import React from 'react';
import styles from '@/components/CourseItem/CourseItem.module.css';


function CourseItem({course}) {


    return (
        <>
            <div className={styles['courses']}>
                    <h3>{course.name}</h3>
                <button className={styles['psycho_btn']}>Добавить в избранное</button>
            </div>
        </>
    );
}

export default CourseItem;