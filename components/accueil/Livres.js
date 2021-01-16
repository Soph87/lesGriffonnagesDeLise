import React from "react";
//CSS
import styles from "./livres.module.css";
//Components
import { ThemeContext } from "../ThemeContext";
import Livre from "./Livre";

export default function Livres({ livres }) {
    const { colorMode } = React.useContext(ThemeContext);
    const livresListe = livres.map((livre) => {
        return <Livre data={livre} key={livre.titre} />;
    });
    return <div className={colorMode === "dark" ? styles.darkLivres : " "}>{livresListe}</div>;
}
