import React from 'react';
import {Avatar} from 'react-native-paper';

interface Props {
  size?: number;
  name?: string;
  uri?: string;
}

export default function UserAvatar({size, name, uri}: Props) {
  if (uri) {
    return <Avatar.Image size={size} source={{uri}} />;
  }

  if (name) {
    return <Avatar.Text size={size} label={name[0].toLocaleUpperCase()} />;
  }

  return <Avatar.Icon size={size} icon="smile" />;
}
