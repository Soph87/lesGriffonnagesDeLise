import React, { forwardRef } from "react";
//CSS
import styles from "./livres.module.css";
//Components
import { ThemeContext } from "../ThemeContext";
import Livre from "./Livre";

const Livres = forwardRef(({ livres }, ref) => {
    const { colorMode } = React.useContext(ThemeContext);
    const livresListe = livres.map((livre) => {
        return <Livre data={livre} key={livre.titre} />;
    });
    return (
        <div className={colorMode === "dark" ? styles.darkLivres : " "} ref={ref}>
            {livresListe}
        </div>
    );
});

export default Livres;
