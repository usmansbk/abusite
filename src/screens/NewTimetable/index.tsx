import React, {useEffect} from 'react';
import Container from '~components/Container';
import TimetableForm from '~components/TimetableForm';
import useCreateTimetable from '~hooks/api/useCreateTimetable';
import {RootStackScreenProps} from '~types';

export default function NewTimetable({
  navigation,
}: RootStackScreenProps<'NewTimetable'>) {
  const {loading, handleCreateTimetable, timetable} = useCreateTimetable();

  useEffect(() => {
    if (timetable) {
      navigation.pop();
    }
  }, [timetable]);

  return (
    <Container>
      <TimetableForm onSubmit={handleCreateTimetable} loading={loading} />
    </Container>
  );
}
