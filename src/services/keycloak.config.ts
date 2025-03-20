import Keycloak from 'keycloak-js';

const keycloakConfig = new Keycloak({
  url: 'https://identity.greencoast-9a34297f.australiaeast.azurecontainerapps.io/',
  realm: 'emsee-web-portal',
  clientId: 'emsee'
});

export default keycloakConfig;