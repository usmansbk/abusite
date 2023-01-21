import {gql} from '~graphql/__generated__';

export default gql(`
mutation CreateEvent($input: EditEventInput!) {
  createEvent(input: $input) {
    id
    title
    description
    startDate
    startTime
    endTime
    cancelledDates
    repeat
    isOwner
    createdAt
    updatedAt
    timetable {
      id
      title
    }
  }
}
`);
