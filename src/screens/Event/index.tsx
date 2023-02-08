import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {Appbar, Divider, List, ProgressBar, Text} from 'react-native-paper';
import Container from '~components/Container';
import useGetEventById from '~hooks/api/useGetEventById';
import {RootStackScreenProps} from '~types';
import {formatFullDate} from '~utils/dateTime';
import {formatEventTime} from '~utils/event';
import styles from './styles';

export default function Event({
  route,
  navigation,
}: RootStackScreenProps<'Event'>) {
  const {id} = route.params;

  const {loading, error, event} = useGetEventById(id);

  useEffect(() => {
    if (error) {
      navigation.popToTop();
    }
  }, [error]);

  if (loading) {
    return <ProgressBar indeterminate />;
  }

  if (error) {
    return null;
  }

  const {
    title,
    startTime,
    endTime,
    startDate,
    repeat,
    timetable,
    owner,
    description,
  } = event!;
  const time = formatEventTime(startTime, endTime);

  return (
    <Container>
      <Appbar>
        <Appbar.Action icon="arrow-left" onPress={navigation.goBack} />
        <Appbar.Content title="" />
        <Appbar.Action icon="bell" onPress={() => null} />
        <Appbar.Action icon="more-vertical" onPress={() => null} />
      </Appbar>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text variant="displayLarge">{title}</Text>
          <Text variant="titleLarge">{formatFullDate(startDate)}</Text>
          {!!time && <Text variant="labelLarge">{time}</Text>}
          {!!repeat && <Text variant="labelSmall">{repeat}</Text>}
        </View>
        <Divider />
        {!!timetable && (
          <>
            <List.Item
              titleStyle={styles.title}
              title="Timetable"
              description={timetable.title}
              onPress={() =>
                navigation.navigate('Timetable', {
                  id: timetable.id,
                })
              }
            />
            <Divider />
          </>
        )}
        <List.Item
          titleStyle={styles.title}
          title="Organizer"
          description={owner.fullName}
        />
        <Divider />
        <View style={styles.header}>
          {!!description && <Text>{description}</Text>}
        </View>
      </ScrollView>
    </Container>
  );
}
