import {gql} from '~graphql/__generated__';

export default gql(`
mutation LoginWithSocialProvider($input: SocialLoginInput!) {
  loginWithSocialProvider(input: $input) {
    token
  }
}`);
