import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {Provider as PaperProvider, useTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import theme from '~config/theme';
import client from '~graphql/client';
import Screens from '~screens';
import Icon from '~components/Icon';
import ToastProvider from '~components/Toast';
import {persistor} from '~graphql/cache';
import '~config/i18n';

function Main() {
  const {colors, dark} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <ToastProvider>
        <Screens />
      </ToastProvider>
    </View>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      await persistor.restore();
      setLoading(false);
    };

    initialize();
  }, []);

  const onNavigatorReady = useCallback(() => {}, []);

  if (loading) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <PaperProvider
        theme={theme}
        settings={{
          icon: props => <Icon {...props} />,
        }}>
        <NavigationContainer theme={theme} onReady={onNavigatorReady}>
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}

export default App;
