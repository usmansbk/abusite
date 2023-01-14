import {gql} from '@apollo/client';

export default gql`
  query ThemeMode @client {
    themeMode
  }
`;
