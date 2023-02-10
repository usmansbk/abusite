import {gql} from '~graphql/__generated__';

export default gql(`
mutation CancelEvent($id: ID!, $date: Date) {
  cancelEvent(id: $id, date: $date) {
    id
    isAllCancelled
    cancelledDates
  }
}
`);
