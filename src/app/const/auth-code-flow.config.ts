import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {

    // Url of the Identity Provider
    issuer: 'https://sso.dev.valvoline.com/auth/oauth2',

    // URL of the SPA to redirect the user to after login
    redirectUri: 'http://localhost:4200/',

    // The SPA's id. The SPA is registered with this id at the auth-server
    clientId: 'VIOC',
    dummyClientSecret: 'Vioc@123',
    //silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    responseType: 'code',

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'profile email',

    showDebugInformation: true,
}
