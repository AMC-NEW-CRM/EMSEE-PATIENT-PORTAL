
import keycloak from "./keycloak.config";

const initKeycloak = () => {
keycloak.init({
    onLoad: "check-sso"
  })
    .then((authenticated: boolean) => {
      if (!authenticated) {
        console.log("aaaa");
        doLogin();
      }
    })
    .catch((e) => {
      return console.error;
    });
};

const getKeyCloak = () => keycloak;

const doLogin = keycloak.login;

const doLogout = keycloak.logout;

const getToken = () => keycloak.token;

const isLoggedIn = () => keycloak && keycloak.authenticated;

const getUsername = () => keycloak.tokenParsed?.realm_access;

const hasRole = (roles: string[]) => roles.some((role: string) => keycloak.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getUsername,
  hasRole,
  getKeyCloak
};

export default UserService;