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
		}
	}
`);
