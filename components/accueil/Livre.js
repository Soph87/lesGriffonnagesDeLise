import React from "react";
import Link from "next/link";
//CSS
import styles from "./livres.module.css";

export default function Livre({ data }) {
    return (
        <section className={styles.sections}>
            <div className={`${styles.livre} container`}>
                <img src={data.couverture} alt={data.couvAlt} className={styles.livreImg} />
                <div className={styles.aside}>
                    <h2>{data.titre}</h2>
                    <div>
                        <span className={styles.elSousTitre}>{data.chapitres.length} Chapitres</span>
                        <span className={styles.elSousTitre}>{data.statut ? "Terminé" : "En cours"}</span>
                    </div>
                    <p className={styles.resume}>{data.presentation}</p>
                    <Link href={`/[fiction]`} as={`/${data.slug}`}>
                        <a className='btn'>Commencer la lecture</a>
                    </Link>
                </div>
            </div>
        </section>
    );
}
