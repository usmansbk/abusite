import {gql} from '~graphql/__generated__';

export default gql(`
	query Me {
		me {
			id
			firstName
			lastName
			fullName
			email
			emailVerified
			isMe
			language
			picture
			createdAt
			updatedAt
			timetables {
				id
				title
				description
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
	}
`);
