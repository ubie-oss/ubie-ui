import { Meta, StoryObj } from '@storybook/react';
import { ChangeEventHandler, useState, useCallback } from 'react';
import { RadioButton, Stack } from '../';

export default {
  component: RadioButton,
} as Meta<typeof RadioButton>;

const defaultArgs = {
  disabled: false,
  name: 'sample',
};

export const Default: StoryObj<typeof RadioButton> = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState('medium');

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <Stack spacing="xs">
        <RadioButton {...args} value="medium" id="medium" onChange={onChange} checked={selectedItem === 'medium'}>
          Medium
        </RadioButton>
        <RadioButton
          {...args}
          value="small"
          id="small"
          onChange={onChange}
          checked={selectedItem === 'small'}
          size="small"
        >
          Small
        </RadioButton>
      </Stack>
    );
  },
  args: defaultArgs,
};
