import { ENV } from "./../core/env.config";

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'c3nLbx2fJMPLXdOU9KyrgNYxVgQTdwK2',
    CLIENT_DOMAIN: 'toastedflaco.us.auth0.com',
    AUDIENCE: 'http://localhost:8083/api/',
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile'

};