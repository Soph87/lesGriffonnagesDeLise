import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='fr'>
                <Head />
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function() {
                                function getInitialColorMode() {
                                    const persistedColorPreference = window.localStorage.getItem('color-mode');
                                    const hasPersistedPreference = typeof persistedColorPreference === 'string';
                                    if (hasPersistedPreference) {
                                      return persistedColorPreference;
                                    }
                                    return 'light';
                                }

                                const colorMode = getInitialColorMode();
                                document.body.classList.add(colorMode === 'dark' ? 'dark' : 'light');
                                const root = document.documentElement;
                                root.style.setProperty('--initial-color-mode', colorMode);
                              })()`,
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
