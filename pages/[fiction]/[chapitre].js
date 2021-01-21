import client from "../../lib/sanity";
//Components
import Layout from "../../components/layout/Layout";
import ContenuChapitre from "../../components/chapitre/Contenu";

export default function Chapitre({ chapitre, index }) {
    const titlePage = `${chapitre.titre} | Les Griffonnages de Lise`;

    return (
        <Layout title={titlePage}>
            <ContenuChapitre chapitre={chapitre.chapitres} index={index} fiction={chapitre.slug} max={chapitre.max} />
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const slug = params.fiction;
    const chapitreNbr = params.chapitre - 1;
    const livreFields = `
    titre,
    'chapitres': chapitres[${chapitreNbr}],
    'max': count(chapitres),
    'slug': slug.current,
    `;
    const data = await client.fetch(`*[_type == "livres" && slug.current == $slug]{${livreFields}}`, { slug });

    const chapitre = data[0];

    return {
        props: {
            chapitre,
            index: chapitreNbr + 1,
        },
    };
}
