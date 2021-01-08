//User
import { useGetUser } from "../models/user";
//Components
import Layout from "../components/layout/Layout";
import Top from "../components/accueil/SectionTop";
import Livres from "../components/accueil/Livres";

export default function Accueil() {
    const data = useGetUser();
    return (
        <Layout title='Accueil | Les Griffonnages de Lise'>
            <Top />
            <Livres />
        </Layout>
    );
}
