import React from "react";
import Link from "next/link";
//CSS
import styles from "./Header.module.css";
//Components
import { ThemeContext } from "../ThemeContext";
import Switch from "./SwitchMode";

function Header() {
    const { colorMode } = React.useContext(ThemeContext);
    return (
        <header className={[styles.header, colorMode === "dark" ? styles.darkHeader : " "].join(" ")}>
            <div className='container'>
                <Link href='/'>
                    <a className={styles.titre}>
                        <h1>LesGriffonnagesDeLise</h1>
                    </a>
                </Link>

                <div className={styles.headerDroit}>
                    <nav className={styles.nav}>
                        <Link href='/'>
                            <a className={styles.liens}>Accueil</a>
                        </Link>
                        <Link href='/a-propos'>
                            <a>À propos</a>
                        </Link>
                    </nav>
                    <Switch />
                </div>
            </div>
        </header>
    );
}

export default Header;
