import {gql} from '~graphql/__generated__';

export default gql(`
mutation CreateTimetable($input: EditTimetableInput!) {
  createTimetable(input: $input) {
    id
    title
    description
    code
    createdAt
    updatedAt
    isOwner
    owner {
      id
      picture
      fullName
    }
    events {
      id
      title
      description
      startDate
      startTime
      endTime
      createdAt
      updatedAt
      isOwner
      repeat
      cancelledDates
      owner {
        id
        picture
        fullName
      }
      timetable {
        id
        title
      }
    }
  }
}
`);
