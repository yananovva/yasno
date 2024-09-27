'use client';

import React from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Flex} from 'antd';
import Head from "next/head";


const Auth: React.FC = () => {
    const onFinish = (values: never) => {
        console.log('Received values of form: ', values);
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
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="Username"/>
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