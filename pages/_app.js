import "../styles/normalize.css";
import "../styles/globals.css";
//Contexts
import { ThemeProvider } from "../components/ThemeContext";

function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
