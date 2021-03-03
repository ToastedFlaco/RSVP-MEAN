import { ENV } from "./../core/env.config";

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'XjTs9KgbwWDxXs9FqCwXBEN49u1SxbKc',
    CLIENT_DOMAIN: 'dev-d33l9-30.us.auth0.com',
    AUDIENCE: 'http://localhost:8083/api/',
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile'

};