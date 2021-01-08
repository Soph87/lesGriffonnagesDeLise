import auth0 from "../../utils/auth0";

export default async function logout(req, res) {
    try {
        await auth0.handleLogout(req, res, { redirectTo: "/" });
    } catch (error) {
        console.log(error);
        res.status(error.status || 400).end(error.message);
    }
}