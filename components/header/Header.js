import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
    return (
        <header id={styles.header}>
            <div className='container'>
                <Link href='/'>
                    <a id={styles.titre}>
                        <h1>LesGriffonnagesDeLise</h1>
                    </a>
                </Link>

                <div>
                    <nav id={styles.nav}>
                        <Link href='/'>
                            <a className={styles.liens}>Accueil</a>
                        </Link>
                        <Link href='/a-propos'>
                            <a>À propos</a>
                        </Link>
                        {/* <Link href='/api/logout'>
                            <a>Déconnexion</a>
                        </Link> */}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
