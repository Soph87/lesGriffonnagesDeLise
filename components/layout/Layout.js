import React from "react";
import Head from "next/head";
//Components
import Header from "../header/Header";

function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main>{props.children}</main>
        </>
    );
}

export default Layout;
