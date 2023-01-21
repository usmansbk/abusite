import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {Button, Dialog, Portal, RadioButton} from 'react-native-paper';
import PickerInput from './PickerInput';

export interface SelectOption {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  placeholder?: string;
  value?: string | null;
  onChange: (value: string | null) => void;
  options: SelectOption[];
  required?: boolean;
  hideOnSelect?: boolean;
}

export default function SelectInput({
  label,
  placeholder,
  value,
  required,
  onChange,
  options,
  hideOnSelect = true,
}: Props) {
  const [visible, setVisible] = useState(false);

  const showOptions = useCallback(() => setVisible(true), []);
  const hideOptions = useCallback(() => setVisible(false), []);

  const onClear = useCallback(() => onChange(null), []);

  const selectedOption = useMemo(
    () => options.find(item => item.value === value),
    [value, options],
  );

  const renderItem: ListRenderItem<SelectOption> = useCallback(
    ({item}) => (
      <RadioButton.Item
        label={item.label}
        value={item.value}
        status={item.value === value ? 'checked' : 'unchecked'}
        onPress={() => {
          onChange(item.value);
          if (hideOnSelect) {
            hideOptions();
          }
        }}
      />
    ),
    [value, onChange, hideOnSelect],
  );

  return (
    <>
      <PickerInput
        label={label}
        placeholder={placeholder}
        value={selectedOption?.label || null}
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
              renderItem={renderItem}
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
