import client from "../../lib/sanity";
//Components
import Layout from "../../components/layout/Layout";
import Fiction from "../../components/fiction/Fiction";

export default function Sommaire({ livre }) {
    const titlePage = `${livre.titre} | Les Griffonnages de Lise`;

    return (
        <Layout title={titlePage}>
            <Fiction livre={livre} />
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const slug = params.fiction;
    const livreFields = `
    titre,
    'couverture': couverture.asset->url,
    'couvAlt': couverture.alt,
    chapitres,
    'slug': slug.current,
    `;
    const data = await client.fetch(`*[_type == "livres" && slug.current == $slug]{${livreFields}}`, { slug });

    const livre = data[0];
    return {
        props: {
            livre,
        },
    };
}
