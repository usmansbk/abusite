import React from 'react';
import {Appbar, ProgressBar} from 'react-native-paper';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';
import useGetTimetableById from '~hooks/api/useGetTimetableById';
import {RootStackScreenProps} from '~types';

export default function Timetable({
  navigation,
  route,
}: RootStackScreenProps<'Timetable'>) {
  const {id} = route.params;
  const {loading, error, timetable} = useGetTimetableById(id);

  if (loading) {
    return <ProgressBar />;
  }

  if (error) {
    return <EmptyState title="Something went wrong..." />;
  }

  const {title} = timetable!;

  return (
    <Container>
      <Appbar>
        <Appbar.Action icon="arrow-left" onPress={navigation.goBack} />
        <Appbar.Content title={title} />
        <Appbar.Action icon="more-vertical" onPress={() => null} />
      </Appbar>
    </Container>
  );
}
