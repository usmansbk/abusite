import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Button, Dialog, Portal, RadioButton} from 'react-native-paper';
import PickerInput from './PickerInput';

export interface SelectOption {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  placeholder?: string;
  value: string | null;
  onChange: (value: string | null) => void;
  options: SelectOption[];
  required?: boolean;
}

export default function SelectInput({
  label,
  placeholder,
  value,
  required,
  onChange,
  options,
}: Props) {
  const [visible, setVisible] = useState(false);

  const showOptions = useCallback(() => setVisible(true), []);
  const hideOptions = useCallback(() => setVisible(false), []);

  const onClear = useCallback(() => onChange(null), []);

  const selectedOption = useMemo(
    () => options.find(item => item.value === value),
    [value, options],
  );

  return (
    <>
      <PickerInput
        label={label}
        placeholder={placeholder}
        value={selectedOption?.value || null}
        onClear={required ? undefined : onClear}
        onPress={showOptions}
      />
      <Portal>
        <Dialog
          theme={{
            roundness: 0,
          }}
          visible={visible}
          onDismiss={hideOptions}>
          <Dialog.Title>{label}</Dialog.Title>
          <Dialog.ScrollArea>
            <FlatList
              data={options}
              keyExtractor={item => item.value}
              renderItem={({item}) => (
                <RadioButton.Item
                  label={item.label}
                  value={item.value}
                  status={item.value === value ? 'checked' : 'unchecked'}
                />
              )}
            />
          </Dialog.ScrollArea>
          <Dialog.Actions>
            <View>
              <Button mode="outlined" onPress={hideOptions}>
                Done
              </Button>
            </View>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
}
