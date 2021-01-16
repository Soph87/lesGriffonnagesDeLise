import React from "react";
import Head from "next/head";
//Components
import Header from "../header/Header";
//import HeaderLogin from "../header/HeaderLogin";
import Footer from "../footer/Footer";

function Layout(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
}

export default Layout;
