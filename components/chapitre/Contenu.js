import React from "react";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
//CSS
import styles from "./contenu.module.css";
//Components
import { ThemeContext } from "../ThemeContext";
import Fleche from "../SVG/FlecheRetour";

export default function Contenu({ chapitre, index, fiction, max }) {
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
                    <div className={styles.titreChapitre}>
                        <img src='/images/deco-titre.svg' alt='decoration de texte' />
                        <h2>{chapitre.titre}</h2>
                        <img src='/images/deco-titre.svg' alt='decoration de texte' />
                    </div>
                    <div className={styles.contenu}>
                        <BlockContent blocks={chapitre.contenu} />
                        <img
                            src='/images/separateur.svg'
                            alt='séparateur de contenu décoratif'
                            className={styles.separateur}
                        />
                        {chapitre.note && (
                            <div className={styles.note}>
                                <h3>Notes de l'auteur</h3>
                                <BlockContent blocks={chapitre.note} />
                            </div>
                        )}
                        <div className={styles.navigation}>
                            {index > 1 ? (
                                <Link href={`/${fiction}/${index - 1}`}>
                                    <a className='btn'>Précédent</a>
                                </Link>
                            ) : (
                                <div></div>
                            )}
                            {index < max && (
                                <Link href={`/${fiction}/${index + 1}`}>
                                    <a className='btn'>Suivant</a>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
