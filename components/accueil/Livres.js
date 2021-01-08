import React from "react";
import Image from "next/image";
//CSS
import styles from "./livres.module.css";

export default function Livres() {
    return (
        <>
            <section className={styles.sections}>
                <div className='container'>
                    <Image src='/images/deliquescence-espoir.png' alt='Couverture du livre' width={400} height={624} />
                </div>
            </section>
            <section className={styles.sections}>
                <div className='container'>
                    <Image src='/images/myrddin.png' alt='Couverture du livre' width={400} height={624} />
                </div>
            </section>
        </>
    );
}
