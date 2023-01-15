import React from 'react';
import {TextInput} from 'react-native-paper';

interface Props {
  value: string | null;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  onPress?: () => void;
  onClearInput?: () => void;
}

export default function PickerInput({
  value,
  label,
  placeholder,
  onPress,
  disabled,
  error,
  onClearInput,
  required = true,
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
        !required && !!value ? (
          <TextInput.Icon
            forceTextInputFocus={false}
            icon="x"
            onPress={onClearInput}
          />
        ) : null
      }
    />
  );
}
