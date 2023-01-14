import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Divider, TextInput} from 'react-native-paper';
import UserAvatar from '~components/UserAvatar';
import Container from '~components/Container';
import useMe from '~hooks/api/useMe';
import styles from './styles';

export default function Profile() {
  const {me} = useMe();
  const {firstName, lastName, picture} = me!;

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.form}>
          <View style={styles.avatar}>
            <UserAvatar size={100} name={firstName} uri={picture} />
          </View>
          <TextInput
            autoComplete="name-given"
            mode="outlined"
            label="First name"
            value={firstName}
            style={styles.gap}
          />
          <TextInput
            autoComplete="name-family"
            mode="outlined"
            label="Last name"
            value={lastName}
            style={styles.gap}
          />
          <Button style={styles.gap} mode="contained-tonal">
            Save
          </Button>
        </View>
        <Divider />
      </ScrollView>
    </Container>
  );
}
