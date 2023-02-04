import {InMemoryCache} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageWrapper, CachePersistor} from 'apollo3-cache-persist';
import {DefaultReminders} from '~types';

const defaultReminders: DefaultReminders = {
  '5m': true,
  '10m': true,
  '15m': false,
  '30m': true,
  '45m': true,
  '60m': true,
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
        enableSound: {
          read(value = true) {
            return value;
          },
        },
        enableVibration: {
          read(value = true) {
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
