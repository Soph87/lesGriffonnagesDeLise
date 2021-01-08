import React from "react";
import Image from "next/image";
//SVG
import Logo from "../SVG/Logo";
//CSS
import styles from "./sectiontop.module.css";

export default function SectionTop() {
    return (
        <section className={styles.section}>
            <div className={[styles.refImg, "container"].join(" ")}>
                <div className={styles.hero}>
                    <Logo className={styles.logo} />
                    <div className={styles.aside}>
                        <h2>Les récits d'une fan</h2>
                        <p className={styles.pAccueil}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis dapibus, ornare
                            urna eu, convallis nibh. Praesent nisl arcu, congue dictum leo ut, egestas ultricies purus.
                            Integer accumsan metus eu.
                        </p>
                        <button className='btn'>Je choisis une lecture</button>
                    </div>
                </div>
                <img
                    src='/images/Griffon.png'
                    alt="Dessin au trait d'un griffon tenant un stylo à plume"
                    className={styles.griffon}
                />
            </div>
        </section>
    );
}
