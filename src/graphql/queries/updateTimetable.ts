import {gql} from '~graphql/__generated__';

export default gql(`
mutation UpdateTimetable($input: EditTimetableInput!) {
  updateTimetable(input: $input) {
    id
    title
    updatedAt
    events {
      id
      title
      description
      code
      startAt
      endAt
      updatedAt
      createdAt
      isOwner
      owner {
        id
        fullName
        picture
      }
      timetable {
        id
        title
      }
    }
  }
}
`);
