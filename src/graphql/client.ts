import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  ServerParseError,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import env from '~config/env';
import cache from './cache';
import authState from './localState/authState';

const httpLink = new HttpLink({uri: env.graphqlEndpoint});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({headers = {}}) => {
    const data = cache.readQuery<{token: string | null}>({query: authState});

    return {
      headers: {
        ...headers,
        authorization: data?.token ? `Bearer ${data.token}` : '',
      },
    };
  });

  return forward(operation);
});

const logoutLink = onError(({networkError}) => {
  const error = networkError as ServerParseError;
  if (error?.statusCode === 401) {
    cache.writeQuery<{token: null}>({
      query: authState,
      data: {
        token: null,
      },
    });
  }
});

const client = new ApolloClient({
  cache,
  link: from([authLink, logoutLink, httpLink]),
});

export default client;
