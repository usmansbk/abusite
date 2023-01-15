import {gql} from '~graphql/__generated__';

export default gql(`
mutation UpdateProfile($input: UpdateUserProfileInput!) {
  updateProfile(input: $input) {
    id
    fullName
    firstName
    lastName
    updatedAt
  }
}
`);
