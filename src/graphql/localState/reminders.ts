import {gql} from '@apollo/client';

export default gql`
  query GetReminders @client {
    reminders
  }
`;
