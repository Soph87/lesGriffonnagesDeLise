import Image from "next/image";
//User
import { useGetUser } from "../models/user";
//Components
import Layout from "../components/layout/Layout";
import Logo from "../components/SVG/Logo";
//CSS
import styles from "../styles/accueil.module.css";

export default function Accueil() {
    const data = useGetUser();
    return (
        <>
            <Layout title='Accueil | Les Griffonnages de Lise'>
                <section className={[styles.sections, styles.sectionTop].join(" ")}>
                    <div className='container'>
                        <div>
                            <Logo className={styles.logo} />
                            <div>
                                <h2>Les récits d'une fan</h2>
                                <p className={styles.pAccueil}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis dapibus,
                                    ornare urna eu, convallis nibh. Praesent nisl arcu, congue dictum leo ut, egestas
                                    ultricies purus. Integer accumsan metus eu.
                                </p>
                                <button className='btn'>Je choisis une lecture</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={[styles.sections, styles.sectionsLivres].join(" ")}>
                    <div className='container'>
                        <Image
                            src='/images/deliquescence-espoir.png'
                            alt='Couverture du livre'
                            width={400}
                            height={624}
                        />
                    </div>
                </section>
                <section className={[styles.sections, styles.sectionsLivres].join(" ")}>
                    <div className='container'>
                        <Image src='/images/myrddin.png' alt='Couverture du livre' width={400} height={624} />
                    </div>
                </section>
            </Layout>
        </>
    );
}
