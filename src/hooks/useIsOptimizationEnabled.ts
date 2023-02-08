import notifee from '@notifee/react-native';
import {useCallback, useEffect, useState} from 'react';

export default function useIsOptimizationEnabled() {
  const [isBatteryOptimizationEnabled, setEnabled] = useState(false);

  useEffect(() => {
    const check = async () => {
      const isEnabled = await notifee.isBatteryOptimizationEnabled();
      setEnabled(isEnabled);
    };

    check();
  }, []);

  const openBatterySettings = useCallback(
    () => notifee.openBatteryOptimizationSettings(),
    [],
  );

  return {isBatteryOptimizationEnabled, openBatterySettings};
}
