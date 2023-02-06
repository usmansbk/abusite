import {InMemoryCache} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageWrapper, CachePersistor} from 'apollo3-cache-persist';
import {DefaultReminders} from '~types';

const defaultReminders: DefaultReminders = {
  '5': true,
  '10': true,
  '15': false,
  '30': false,
  '45': false,
  '60': true,
};

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        defaultReminders: {
          read(value: DefaultReminders = defaultReminders) {
            return value;
          },
        },
        muteNotifications: {
          read(value = false) {
            return value;
          },
        },
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
