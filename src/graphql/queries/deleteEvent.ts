import {gql} from '~graphql/__generated__';

export default gql(`
mutation DeleteEvent($deleteEventId: ID!) {
  deleteEvent(id: $deleteEventId) {
    id
  }
}
`);
