import React from "react";
import Link from "next/link";
//CSS
import styles from "./footer.module.css";
//Components
import { ThemeContext } from "../ThemeContext";

export default function Footer() {
    const { colorMode } = React.useContext(ThemeContext);

    let annee = new Date().getFullYear();

    return (
        <footer className={`${styles.footer} ${colorMode === "dark" ? styles.darkFooter : ""}`}>
            <div className='container'>
                <p>
                    Lise Furnion - {annee} - Tout droit réservé -{" "}
                    <Link href='/mentions-legales'>
                        <a>Mentions légales</a>
                    </Link>
                </p>
            </div>
        </footer>
    );
}
