import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "vinoth-k.us.auth0.com",
        clientID : "dE69X97X7iHCwaqjJid6zV5KCEDZpwRm",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://vinoth-k.us.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    })
    constructor(){
        this.login = this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }
}