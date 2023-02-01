import {gql} from '~graphql/__generated__';

export default gql(`
mutation UnsaveTimetable($id: ID!) {
  unsaveTimetable(id: $id) {
    id
  }
}
`);
