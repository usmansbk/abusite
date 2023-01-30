import React, {useEffect} from 'react';
import Container from '~components/Container';
import TimetableForm from '~components/TimetableForm';
import useCreateTimetable from '~hooks/api/useCreateTimetable';
import useGetTimetableById from '~hooks/api/useGetTimetableById';
import {RootStackScreenProps} from '~types';

export default function DuplicateTimetable({
  route,
  navigation,
}: RootStackScreenProps<'DuplicateTimetable'>) {
  const {id} = route.params;
  const {timetable} = useGetTimetableById(id);
  const {
    handleCreateTimetable,
    loading,
    timetable: newTimetable,
  } = useCreateTimetable();

  useEffect(() => {
    if (newTimetable) {
      navigation.navigate('Home', {
        screen: 'HomeTabs',
        params: {
          screen: 'Calendar',
        },
      });
    }
  }, [navigation, newTimetable]);

  return (
    <Container>
      <TimetableForm
        loading={loading}
        defaultValues={timetable}
        onSubmit={handleCreateTimetable}
        disableClean={false}
      />
    </Container>
  );
}
