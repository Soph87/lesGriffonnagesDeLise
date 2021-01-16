import client from "../lib/sanity";
//Components
import Layout from "../components/layout/Layout";
import Top from "../components/accueil/SectionTop";
import Livres from "../components/accueil/Livres";

export default function Accueil({ livres }) {
    return (
        <Layout title='Accueil | Les Griffonnages de Lise'>
            <Top />
            <Livres livres={livres} />
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
