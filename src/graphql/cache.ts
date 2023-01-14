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
      },
    },
  },
});

export const persistor = new CachePersistor({
  storage: new AsyncStorageWrapper(AsyncStorage),
  cache,
});

export default cache;
