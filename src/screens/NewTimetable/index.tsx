import React from 'react';
import Container from '~components/Container';
import TimetableForm from '~components/TimetableForm';
import useCreateTimetable from '~hooks/api/useCreateTimetable';

export default function NewTimetable() {
  const {loading, handleCreateTimetable} = useCreateTimetable();

  return (
    <Container>
      <TimetableForm onSubmit={handleCreateTimetable} loading={loading} />
    </Container>
  );
}
