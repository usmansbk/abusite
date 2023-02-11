import React, {
  createContext,
  memo,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {Platform, ToastAndroid} from 'react-native';
import {Snackbar} from 'react-native-paper';
import Icon from '~components/Icon';

interface ToastContextI {
  show: (msg: string) => void;
  hide: () => void;
}

export const ToastContext = createContext<ToastContextI>({
  show: () => null,
  hide: () => null,
});

export function useToast() {
  return useContext(ToastContext);
}

function ToastProvider({children}: PropsWithChildren) {
  const [message, setMessage] = useState('');

  const hide = useCallback(() => setMessage(''), []);
  const show = useCallback((msg: string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      setMessage(msg);
    }
  }, []);

  const ctx = useMemo(
    () => ({
      show,
      hide,
    }),
    [show, hide],
  );

  return (
    <ToastContext.Provider value={ctx}>
      {children}

      <Snackbar
        visible={!!message}
        onDismiss={hide}
        duration={Snackbar.DURATION_SHORT}
        onIconPress={hide}
        icon={({size, color}) => <Icon size={size} color={color} name="x" />}>
        {message}
      </Snackbar>
    </ToastContext.Provider>
  );
}

export default memo(ToastProvider);
