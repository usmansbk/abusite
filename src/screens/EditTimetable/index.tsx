import React from 'react';
import Container from '~components/Container';
import TimetableForm from '~components/TimetableForm';
import useGetTimetableById from '~hooks/api/useGetTimetableById';
import {RootStackScreenProps} from '~types';

export default function EditTimetable({
  route,
}: RootStackScreenProps<'EditTimetable'>) {
  const {id} = route.params;

  const {timetable} = useGetTimetableById(id);

  return (
    <Container>
      <TimetableForm defaultValues={timetable} onSubmit={console.log} />
    </Container>
  );
}
