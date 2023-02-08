import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import Container from '~components/Container';
import {RootStackScreenProps} from '~types';

export default function Event({route}: RootStackScreenProps<'Event'>) {
  const {id} = route.params;
  return (
    <Container>
      <ScrollView>
        <Text>{id}</Text>
      </ScrollView>
    </Container>
  );
}
