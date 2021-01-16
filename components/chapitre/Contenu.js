import React from "react";
import Link from "next/link";
//CSS
import styles from "./contenu.module.css";
//Components
import { ThemeContext } from "../ThemeContext";
import Fleche from "../SVG/FlecheRetour";

export default function Contenu({ chapitre, index, fiction }) {
    const { colorMode } = React.useContext(ThemeContext);

    return (
        <div className='containerTop'>
            <section
                className={[styles.sectionLivre, "container950", colorMode === "dark" ? styles.darkLivre : " "].join(
                    " "
                )}>
                <Link href={`/${fiction}`}>
                    <a className={styles.lienSommaire}>
                        <Fleche className={styles.fleche} />
                        Sommaire
                    </a>
                </Link>
                <div className={styles.chapitreContainer}>
                    <h2>{chapitre.titre}</h2>
                </div>
            </section>
        </div>
    );
}
