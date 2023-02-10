import {gql} from '~graphql/__generated__';

export default gql(`
query GetEventById($getEventByIdId: ID!) {
  getEventById(id: $getEventByIdId) {
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
		isCancelled
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
`);
