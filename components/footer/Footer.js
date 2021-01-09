import React from "react";
import Link from "next/link";
//CSS
import styles from "./footer.module.css";

export default function Footer() {
    let annee = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
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
