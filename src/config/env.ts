const UNIVERSAL_URL = 'https://abusite.netlify.app';
const HELP_URL = 'https://help.abusite.netlify.app';

export default {
  googleWebClientId:
    '482568716820-nu0o4lej1c4htj1q3e3pl6nnosv6rj53.apps.googleusercontent.com',
  graphqlEndpoint: 'http://localhost:4000/graphql',
  restEndpoint: 'http://localhost:4000/v1',
  termsUrl: `${HELP_URL}/terms`,
  privacyUrl: `${HELP_URL}/privacy`,
  contactEmail: 'usmansbk.dev@gmail.com',
  deepLink: 'abusite://',
  universalLink: UNIVERSAL_URL,
};
