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
      startDate
      startTime
      endTime
      updatedAt
      createdAt
      isOwner
      repeat
			isAllCancelled
      cancelledDates
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
