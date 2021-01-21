import React, { forwardRef } from "react";
import Head from "next/head";
//Components
import Header from "../header/Header";
//import HeaderLogin from "../header/HeaderLogin";
import Footer from "../footer/Footer";

const Layout = forwardRef(({ title, ...props }, ref) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header ref={ref ? ref : null} />
            <main>{props.children}</main>
            <Footer />
        </>
    );
});

export default Layout;
