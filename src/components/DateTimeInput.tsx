import React, {useCallback, useState} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PickerInput, {PickerInputProps} from './PickerInput';

interface Props extends PickerInputProps {
  onChange: (date: Date | null) => void;
  value: string | null;
  mode?: 'date' | 'time' | 'datetime';
  placeholder?: string;
  label?: string;
}

export default function DateTimeInput({
  value,
  onChange,
  mode,
  placeholder,
  label,
}: Props) {
  const [visible, setVisible] = useState(false);

  const showPicker = useCallback(() => setVisible(true), []);
  const hidePicker = useCallback(() => setVisible(false), []);

  const onConfirm = useCallback((date: Date) => {
    if (date) {
      onChange(date);
    }
    hidePicker();
  }, []);

  return (
    <>
      <PickerInput
        value={value}
        onPress={showPicker}
        placeholder={placeholder}
        label={label}
      />
      <DateTimePicker
        date={new Date()}
        isVisible={visible}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={hidePicker}
      />
    </>
  );
}
