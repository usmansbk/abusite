import {InMemoryCache} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageWrapper, CachePersistor} from 'apollo3-cache-persist';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        token: {
          read(token) {
            return token;
          },
        },
        themeMode: {
          read(mode = 'system') {
            return mode;
          },
        },
        getEventById: {
          read(_, {toReference, args}) {
            return toReference({
              __typename: 'Event',
              id: (args as {id: string}).id,
            });
          },
        },
        getTimetableById: {
          read(_, {toReference, args}) {
            return toReference({
              __typename: 'Timetable',
              id: (args as {id: string}).id,
            });
          },
        },
      },
    },
    Timetable: {
      fields: {
        events: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

export const persistor = new CachePersistor({
  storage: new AsyncStorageWrapper(AsyncStorage),
  cache,
});

export default cache;
