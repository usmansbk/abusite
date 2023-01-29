import {gql} from '~graphql/__generated__';

export default gql(`
mutation DeleteTimetable($deleteTimetableId: ID!) {
  deleteTimetable(id: $deleteTimetableId) {
    id
  }
}
`);
