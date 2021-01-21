import React from "react";
import Link from "next/link";
//CSS
import styles from "./Header.module.css";
//Components
import { ThemeContext } from "../ThemeContext";
import Switch from "./SwitchMode";

export default function HeaderLogin() {
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
                    <nav className={`${styles.nav} ${styles.navLogin}`}>
                        <Link href='/'>
                            <a className={styles.liens}>Accueil</a>
                        </Link>
                        <Link href='/back'>
                            <a className={styles.liens}>Dashboard</a>
                        </Link>
                        <Link href='/api/logout'>
                            <a>Déconnexion</a>
                        </Link>
                    </nav>
                    <Switch />
                </div>
            </div>
        </header>
    );
}
