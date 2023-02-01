import {gql} from '~graphql/__generated__';

export default gql(`
mutation SaveTimetable($id: ID!) {
  saveTimetable(id: $id) {
    id
    title
    description
    createdAt
    updatedAt
    isOwner
    isSaved
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
