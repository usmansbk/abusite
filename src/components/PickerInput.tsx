import React from 'react';
import {TextInput} from 'react-native-paper';

interface Props {
  value: string | null;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  onPress?: () => void;
  onClear?: () => void;
}

export default function PickerInput({
  value,
  label,
  placeholder,
  onPress,
  disabled,
  error,
  onClear,
}: Props) {
  return (
    <TextInput
      caretHidden
      contextMenuHidden
      error={error}
      editable={!disabled}
      value={value || ''}
      mode="outlined"
      label={label}
      placeholder={placeholder}
      onFocus={onPress}
      showSoftInputOnFocus={false}
      right={
        value && onClear ? (
          <TextInput.Icon
            forceTextInputFocus={false}
            icon="x"
            onPress={onClear}
          />
        ) : null
      }
    />
  );
}
