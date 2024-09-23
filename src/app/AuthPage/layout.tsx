import React from "react";
import AuthPage from "@/app/AuthPage/AuthPage";
import Layout from "@/components/Header/Layout";

export default function AuthLayout() {
  return (
    <Layout title='Авторизация' description=' Вход и авторизация пользователей'>
      <body><AuthPage/></body>
    </Layout>
  )
}
