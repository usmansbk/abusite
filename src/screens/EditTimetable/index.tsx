import React from 'react';
import Container from '~components/Container';
import TimetableForm from '~components/TimetableForm';

export default function EditTimetable() {
  return (
    <Container>
      <TimetableForm onSubmit={console.log} />
    </Container>
  );
}
