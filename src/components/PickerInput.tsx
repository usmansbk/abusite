import React from 'react';
import {TextInput} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

interface Props {
  placeholder?: string;
  label?: string;
  onPress?: () => void;
}

export default function PickerInput({label, placeholder, onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextInput
        editable={false}
        mode="outlined"
        label={label}
        placeholder={placeholder}
      />
    </TouchableOpacity>
  );
}
