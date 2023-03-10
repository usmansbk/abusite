import React, {useCallback, useMemo, useState} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RNLocalize from 'react-native-localize';
import {
  formatCalendarDate,
  formatDateToTime,
  formatTime,
  getCurrentDate,
  parseDate,
  parseTime,
} from '~utils/dateTime';
import PickerInput, {PickerInputProps} from './PickerInput';

interface Props extends PickerInputProps {
  onChange: (date: string | null) => void;
  value: string | null;
  mode: 'date' | 'time';
  placeholder?: string;
  label?: string;
  required?: boolean;
}

export default function DateTimeInput({
  value,
  onChange,
  placeholder,
  label,
  required,
  mode = 'date',
}: Props) {
  const [visible, setVisible] = useState(false);

  const showPicker = useCallback(() => setVisible(true), []);
  const hidePicker = useCallback(() => setVisible(false), []);

  const onConfirm = useCallback(
    (date: Date) => {
      hidePicker();
      if (date) {
        if (mode === 'date') {
          onChange(date.toISOString());
        } else {
          onChange(formatDateToTime(date));
        }
      }
    },
    [mode],
  );

  const formattedValue = useMemo(() => {
    if (!value) {
      return null;
    }

    if (mode === 'date') {
      return formatCalendarDate(value);
    }
    return formatTime(value);
  }, [mode, value]);

  const date = useMemo(() => {
    if (!value) {
      return getCurrentDate();
    }

    if (mode === 'date') {
      return parseDate(value);
    }

    return parseTime(value);
  }, [mode, value]);

  const onClear = useCallback(() => onChange(null), []);

  return (
    <>
      <PickerInput
        value={formattedValue}
        onPress={showPicker}
        placeholder={placeholder}
        label={label}
        onClear={required ? undefined : onClear}
      />
      <DateTimePicker
        is24Hour={RNLocalize.uses24HourClock()}
        date={date}
        isVisible={visible}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={hidePicker}
      />
    </>
  );
}
