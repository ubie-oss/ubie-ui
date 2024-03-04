import { StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { Stack, Label, Input, HelperMessage, ErrorMessage, RadioButton } from '..';
import type { ChangeEventHandler } from 'react';

export default {
  title: 'Form/Form',
};

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
      setValue(e.target.value);
    }, []);

    return (
      <Stack spacing="xs">
        <Label htmlFor="field">項目</Label>
        <Input id="field" value={value} onChange={onChange} />
        <HelperMessage>説明文です</HelperMessage>
        <HelperMessage>説明文です</HelperMessage>
      </Stack>
    );
  },
};

export const Error: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
      setValue(e.target.value);
    }, []);

    return (
      <Stack spacing="xs">
        <Label htmlFor="error-field">項目</Label>
        <Input value={value} id="error-field" onChange={onChange} isInvalid />
        <ErrorMessage>全角カタカナでご入力ください</ErrorMessage>
        <ErrorMessage>全角カタカナでご入力ください</ErrorMessage>
        <HelperMessage>説明文です</HelperMessage>
      </Stack>
    );
  },
};

export const InputGroup: StoryObj = {
  render: () => {
    const options = ['項目1', '項目2', '項目3'];
    const [selectedItem, setSelectedItem] = useState<string>(options[0]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <fieldset style={{ border: 'none', padding: 0 }}>
        <Stack spacing="xs" alignItems="normal">
          <Label as="legend">通院状況</Label>
          {options.map((option) => (
            <RadioButton
              name="commuting"
              value={option}
              onChange={onChange}
              checked={selectedItem.includes(option)}
              key={option}
            >
              {option}
            </RadioButton>
          ))}
          <ErrorMessage>何かしらのエラーメッセージ</ErrorMessage>
          <ErrorMessage>何かしらのエラーメッセージ</ErrorMessage>
          <HelperMessage>説明文です</HelperMessage>
          <HelperMessage>説明文です</HelperMessage>
        </Stack>
      </fieldset>
    );
  },
};
