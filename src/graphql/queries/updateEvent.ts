import {gql} from '~graphql/__generated__';

export default gql(`
mutation UpdateEvent($input: EditEventInput!) {
  updateEvent(input: $input) {
    id
    title
    description
    updatedAt
    startDate
    startTime
    endTime
    repeat
  }
}
`);
