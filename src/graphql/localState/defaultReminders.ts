import {gql} from '@apollo/client';

export default gql`
  query GetDefaultReminders @client {
    defaultReminders
  }
`;
