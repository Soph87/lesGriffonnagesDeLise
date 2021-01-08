import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
    domain: process.env.AUTH_DOMAIN,
    clientId: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    scope: "openid profile",
    redirectUri: process.env.AUTH_REDIRECT_URI,
    postLogoutRedirectUri: process.env.AUTH_POST_LOGOUT,
    session: {
        cookieSecret: process.env.AUTH_COOKIE_SECRET,
    },
});
