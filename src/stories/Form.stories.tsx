import { StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { Stack, Label, Input, HelperMessage, ErrorMessage, RadioButton, RadioGroup } from '..';
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
        <Label htmlFor="field" showRequiredLabel>
          項目
        </Label>
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

export const RadioButtons: StoryObj = {
  render: () => {
    const options = ['項目1', '項目2', '項目3'];
    const [selectedItem, setSelectedItem] = useState<string>(options[0]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <Stack spacing="md" alignItems="normal">
        <RadioGroup label="通院状況" showRequiredLabel>
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
        </RadioGroup>

        <Stack spacing="xs">
          <ErrorMessage>何かしらのエラーメッセージ</ErrorMessage>
          <ErrorMessage>何かしらのエラーメッセージ</ErrorMessage>
          <HelperMessage>説明文です</HelperMessage>
          <HelperMessage>説明文です</HelperMessage>
        </Stack>
      </Stack>
    );
  },
};
