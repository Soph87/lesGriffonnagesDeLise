import React from "react";
import { ThemeContext } from "../ThemeContext";
//CSS
import styles from "./SwitchMode.module.css";

export default function SwitchMode() {
    const { colorMode, setColorMode } = React.useContext(ThemeContext);

    if (!colorMode) {
        return null;
    }

    return (
        <div className={styles.wrap}>
            <label htmlFor='btnMode' className='sr-only'>
                Mode sombre ou clair
            </label>
            <input
                type='checkbox'
                checked={colorMode === "dark"}
                onChange={(ev) => {
                    setColorMode(ev.target.checked ? "dark" : "light");
                }}
                id='btnMode'
                className={styles.inputSwitch}
            />
            <img src='images/sun.svg' alt='icone soleil' className={styles.sun} />
            <img src='images/moon.svg' alt='icone lune' className={styles.moon} />
        </div>
    );
}
