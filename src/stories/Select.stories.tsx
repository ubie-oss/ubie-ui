import { Meta, StoryObj } from '@storybook/react';
import { ChangeEventHandler, useState, useCallback } from 'react';
import { Select } from '../';

export default {
  component: Select,
} as Meta<typeof Select>;

const options = ['option1', 'option2', 'option3'];

const defaultArgs = {
  isInvalid: false,
  disabled: false,
};

export const Default: StoryObj<typeof Select> = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState(options[0]);

    const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <Select {...args} value={selectedItem} onChange={onChange}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </Select>
    );
  },
  args: defaultArgs,
};
