import {InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        token: {
          read(token) {
            return token;
          },
        },
      },
    },
  },
});

export default cache;
