import client from "../lib/sanity";
import { useRef, useEffect, useState } from "react";
//Components
import Layout from "../components/layout/Layout";
import Top from "../components/accueil/SectionTop";
import Livres from "../components/accueil/Livres";

export default function Accueil({ livres }) {
    const [headerHeight, setHeaderHeight] = useState(0);

    const refScrollBtn = useRef(null);
    const headerref = useRef(null);

    useEffect(() => {
        getHeaderHeight();
    }, []);

    const getHeaderHeight = () => {
        let height = headerref.current.getBoundingClientRect().height;
        setHeaderHeight(height);
    };

    const scrollToLivres = () => {
        let duree = 1000;
        let topEl = refScrollBtn.current.getBoundingClientRect().top - headerHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            let tempsEcoule = currentTime - startTime;
            let lancement = easeInOut(tempsEcoule, startPosition, topEl, duree);
            window.scrollTo(0, lancement);
            if (tempsEcoule < duree) requestAnimationFrame(animation);
        };

        const easeInOut = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    typeof window !== "undefined" && window.addEventListener("resize", getHeaderHeight);

    return (
        <Layout title='Accueil | Les Griffonnages de Lise' ref={headerref}>
            <Top scroll={scrollToLivres} />
            <Livres livres={livres} ref={refScrollBtn} />
        </Layout>
    );
}

export async function getServerSideProps() {
    const livresFields = `
    titre,
    'couverture': couverture.asset->url,
    'couvAlt': couverture.alt,
    statut,
    presentation,
    'slug': slug.current,
    chapitres
    `;
    const livres = await client.fetch(`*[_type == "livres"]{${livresFields}}`);
    if (!livres) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            livres,
        },
    };
}
