import {useMemo} from 'react';
import useMe from './api/useMe';

export default function useTimetables() {
  const {me} = useMe();

  const timetables = useMemo(
    () =>
      me?.timetables.map(t => ({
        label: t!.title,
        value: t!.id,
      })) || [],
    [],
  );
  return {
    timetables,
  };
}
