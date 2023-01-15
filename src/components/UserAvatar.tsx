import React from 'react';
import {Avatar} from 'react-native-paper';

export interface UserAvatarProps {
  size?: number;
  name?: string;
  uri?: string;
}

export default function UserAvatar({size, name, uri}: UserAvatarProps) {
  if (uri) {
    return <Avatar.Image size={size} source={{uri}} />;
  }

  if (name) {
    return <Avatar.Text size={size} label={name[0].toLocaleUpperCase()} />;
  }

  return <Avatar.Icon size={size} icon="smile" />;
}
