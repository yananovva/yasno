import {MetaInterface} from "@/components/seo/Meta.interface";
import Meta from "@/components/seo/Meta";
import Head from "next/head";
import Header from "@/components/Header/Header";
import MainPage from "@/components/MainPage/MainPage";
import React from "react";

export default function Layout({children, title, description}:MetaInterface) {
    return (
        <Meta title={title} description={description}>
            <Header/>
            <MainPage>{children}</MainPage>
        </Meta>
    );
}