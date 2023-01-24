import {gql} from '~graphql/__generated__';

export default gql(`
	query GetTimetableById($getTimetableByIdId: ID!) {
  getTimetableById(id: $getTimetableByIdId) {
    id
    title
    description
    createdAt
    updatedAt
    isOwner
    owner {
      id
      fullName
      picture
    }
    code
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
