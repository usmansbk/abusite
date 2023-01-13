import {gql} from '@apollo/client';

export default gql`
  query AuthState @client {
    token
  }
`;
