'use client';

import {FormEvent, useState} from "react";
import styles from '@/components/CreateCourse/CreateCourse.module.css';
import {useCreateCourseMutation} from "@/lib/api/course.api";
import {ICourseData} from '@/types/course.types';


const defaultValue = {
    name: '',
    image: '',
}

export default function CreateCourse() {
    const [course, setCourse] = useState<ICourseData>(defaultValue);

    const [createCourse] = useCreateCourseMutation();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createCourse(course).then(() => {
            setCourse(defaultValue);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}
                  className={styles['form']}>
                <h2>Создать курс</h2>
                <label>
                    <input
                        type='text'
                        className={styles['input']}
                        placeholder='Название'
                        value={course.name}
                        onChange={e => setCourse(
                            {...course, name: e.target.value})}
                    />
                </label>
                <label>
                    <input
                        type='text'
                        className={styles['input']}
                        placeholder='Фото'
                        value={course.image}
                        onChange={e => setCourse(
                            {...course, image: e.target.value})}
                    />
                </label>
                <button type='submit' className={styles['btn']}>Создать</button>
            </form>
        </div>
    );
}