import React, {useEffect} from 'react';
import Container from '~components/Container';
import TimetableForm from '~components/TimetableForm';
import useGetTimetableById from '~hooks/api/useGetTimetableById';
import useUpdateTimetable from '~hooks/api/useUpdateTimetable';
import {RootStackScreenProps} from '~types';

export default function EditTimetable({
  route,
  navigation,
}: RootStackScreenProps<'EditTimetable'>) {
  const {id} = route.params;

  const {timetable} = useGetTimetableById(id);
  const {
    loading,
    handleUpdateTimetable,
    timetable: updatedTimetable,
  } = useUpdateTimetable();

  useEffect(() => {
    if (updatedTimetable) {
      navigation.goBack();
    }
  }, [navigation, updatedTimetable]);

  return (
    <Container>
      <TimetableForm
        autoFocus={false}
        loading={loading}
        defaultValues={timetable}
        onSubmit={handleUpdateTimetable}
      />
    </Container>
  );
}
