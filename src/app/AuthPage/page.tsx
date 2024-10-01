'use client';

import React from 'react';
import styles from '@/app/AuthPage/AuthPage.module.css';
import {SubmitHandler, useForm} from 'react-hook-form';
import {AuthPageProps} from "@/app/AuthPage/AuthPage.props";
import Head from "next/head";


function Auth(){

    const {register, handleSubmit, formState} =
        useForm<AuthPageProps>({
        mode: 'onChange',
    });

    const emailError = formState.errors['email']?.message;
    const passwordError = formState.errors['password']?.message;
    const onSubmit: SubmitHandler<AuthPageProps> = data => {
        console.log(data);
    }

    return (
        <>
            <Head>
                <title>Авторизация</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <form
                className={styles['auth']}
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1>Авторизуйтесь</h1>
                <input
                    type='text'
                    placeholder="Email"
                    className={styles['input']}
                    {...register('email', {
                        required: 'This field is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address!',
                        }
                    })}
                />
                {emailError && <p className={styles['email_error']}>{emailError}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    className={styles['input']}
                    {...register('password', {
                        required: 'This field is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid password!',
                        }
                    })}
                />
                {passwordError && <p className={styles['email_error']}>{passwordError}</p>}
                <div className={styles['remember']}>
                    <input
                        type='checkbox'
                        id='rememberMe'
                        className={styles['remember_check']}
                        {...register('rememberMe')}
                    />
                    <label htmlFor='rememberMe' className={styles['remember_label']}>Запомнить меня</label>
                </div>
                <button
                    type='submit'
                    className={styles['button']}>
                    Войти
                </button>
            </form>
        </>
    );
}


export default Auth;