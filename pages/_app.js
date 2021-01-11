import "../styles/normalize.css";
import "../styles/globals.css";
//Gestion du mode
import { ThemeProvider } from "../components/ThemeContext";

function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
