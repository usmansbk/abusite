import {gql} from '@apollo/client';

export default gql`
  query NotificationSettings @client {
    muteNotifications
  }
`;
