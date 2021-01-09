import React from "react";
import Link from "next/link";
//CSS
import styles from "./livres.module.css";

export default function Livres() {
    return (
        <>
            <section className={styles.sections}>
                <div className={[styles.livre, "container"].join(" ")}>
                    <img src='/images/deliquescence.png' alt='Couverture du livre' className={styles.livreImg} />
                    <div className={styles.aside}>
                        <h2>La Déliquescence de l'Espoir</h2>
                        <div>
                            <span className={styles.elSousTitre}>20 Chapitres</span>
                            <span className={styles.elSousTitre}>Terminé</span>
                        </div>
                        <p className={styles.resume}>
                            Nunc in nulla bibendum, venenatis nibh quis, commodo metus. Proin sit amet tempus nibh.
                            Donec ac velit dignissim, pellentesque mi sit amet, vulputate nibh. Quisque libero mauris,
                            sagittis eu lobortis in, scelerisque ornare eros. Phasellus a pharetra augue. Nam nec odio
                            sed erat gravida faucibus. Cras tellus risus, venenatis sit amet.
                        </p>
                        <Link href='#'>
                            <a className='btn'>Commencer la lecture</a>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.sections}>
                <div className={[styles.livre, "container"].join(" ")}>
                    <img src='/images/myrddin.png' alt='Couverture du livre' className={styles.livreImg} />
                    <div className={styles.aside}>
                        <h2>Myrddin Wyllt</h2>
                        <div>
                            <span className={styles.elSousTitre}>14 Chapitres</span>
                            <span className={styles.elSousTitre}>En cours</span>
                        </div>
                        <p className={styles.resume}>
                            Nunc in nulla bibendum, venenatis nibh quis, commodo metus. Proin sit amet tempus nibh.
                            Donec ac velit dignissim, pellentesque mi sit amet, vulputate nibh. Quisque libero mauris,
                            sagittis eu lobortis in, scelerisque ornare eros. Phasellus a pharetra augue. Nam nec odio
                            sed erat gravida faucibus. Cras tellus risus, venenatis sit amet.
                        </p>
                        <Link href='#'>
                            <a className='btn'>Commencer la lecture</a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
