import React from "react";
import Link from "next/link";
//CSS
import styles from "./fiction.module.css";
//Components
import { ThemeContext } from "../ThemeContext";

export default function Fiction({ livre }) {
    const { colorMode } = React.useContext(ThemeContext);

    const chapitres = livre.chapitres.map((chapitre, index) => {
        const url = `/${livre.slug}/${index + 1}`;
        return (
            <li key={chapitre.titre}>
                <Link href={url}>
                    <a>{chapitre.titre}</a>
                </Link>
            </li>
        );
    });
    return (
        <div className='containerTop'>
            <section
                className={[styles.sectionLivre, "container", colorMode === "dark" ? styles.darkLivre : " "].join(" ")}>
                <img src={livre.couverture} alt={livre.couvAlt} className={styles.livreImg} />
                <div className={styles.chapitres}>
                    <h2>{livre.titre}</h2>
                    <ul>{chapitres}</ul>
                </div>
            </section>
        </div>
    );
}
