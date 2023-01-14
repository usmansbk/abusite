import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import {Provider as PaperProvider, useTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import RNBootSplash from 'react-native-bootsplash';
import {AppDarkTheme, AppDefaultTheme} from '~config/theme';
import client from '~graphql/client';
import Screens from '~screens';
import Icon from '~components/Icon';
import ToastProvider from '~components/Toast';
import {persistor} from '~graphql/cache';
import useThemeMode from '~hooks/useThemeMode';
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

function ThemedApp() {
  const scheme = useColorScheme();
  const {mode} = useThemeMode();

  const theme = useMemo(() => {
    if (mode === 'system') {
      return scheme === 'dark' ? AppDarkTheme : AppDefaultTheme;
    }
    return mode === 'dark' ? AppDarkTheme : AppDefaultTheme;
  }, [mode, scheme]);

  const onNavigatorReady = useCallback(async () => {
    await RNBootSplash.hide({fade: true});
  }, []);

  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: props => <Icon {...props} />,
      }}>
      <NavigationContainer theme={theme} onReady={onNavigatorReady}>
        <Main />
      </NavigationContainer>
    </PaperProvider>
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

  if (loading) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ThemedApp />
    </ApolloProvider>
  );
}

export default App;
