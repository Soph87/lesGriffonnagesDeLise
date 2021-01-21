import React, { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//CSS
import styles from "./Header.module.css";
//Components
import { ThemeContext } from "../ThemeContext";
import Switch from "./SwitchMode";

const Header = forwardRef((props, ref) => {
    const { colorMode } = React.useContext(ThemeContext);
    const router = useRouter();

    return (
        <header ref={ref} className={`${styles.header} ${colorMode === "dark" ? styles.darkHeader : ""}`}>
            <div className='container'>
                <Link href='/'>
                    <a className={styles.titre}>
                        <h1>LesGriffonnagesDeLise</h1>
                    </a>
                </Link>

                <div className={styles.headerDroit}>
                    <nav className={styles.nav}>
                        <Link href='/'>
                            <a className={router.pathname === "/" ? styles.actif : undefined}>Accueil</a>
                        </Link>
                        <Link href='/a-propos'>
                            <a className={router.pathname === "/a-propos" ? styles.actif : undefined}>À propos</a>
                        </Link>
                    </nav>
                    <Switch />
                </div>
            </div>
        </header>
    );
});

export default Header;
