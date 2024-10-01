'use client';

import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Flex} from 'antd';
import Head from "next/head";
import styles from '@/app/AuthPage/AuthPage.module.css';
import {useForm} from 'react-hook-form';
import {AuthPageProps} from "@/app/AuthPage/AuthPage.props";


const Auth: React.FC = () => {
    const onFinish = (values: never) => {
        console.log('Received values of form: ', values);
    }

    const {register, handleSubmit} = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data: never) => {
        console.log(data);
    }


    return (
        <>
            <Head>
                <title>Авторизация</title>
            </Head>

            <Form
                name="login"
                initialValues={{remember: true}}
                style={{maxWidth: 360}}
                onFinish={onFinish}
                className={styles['auth']}
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1>Авторизуйтесь</h1>
                <Form.Item
                    name="email"
                    rules={[{required: true, message: 'Please input your Email!'}]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="Email"
                           {...register('email', {
                           required: 'This field is required',
                           })}
                           />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input prefix={<LockOutlined/>} type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                        <a href="">Забыли пароль?</a>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Войти
                    </Button>
                    или <a href="">Зарегистрироваться</a>
                </Form.Item>
            </Form>
        </>
    );
}


export default Auth;