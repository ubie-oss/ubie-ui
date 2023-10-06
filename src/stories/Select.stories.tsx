import { Meta, StoryObj } from '@storybook/react';
import { ChangeEventHandler, useState, useCallback } from 'react';
import { Select, Stack } from '../';

export default {
  title: 'Form/Select',
  component: Select,
} as Meta<typeof Select>;

const defaultArgs = {
  isInvalid: false,
  disabled: false,
};

export const Default: StoryObj<typeof Select> = {
  render: (args) => {
    const options = ['option1', 'option2', 'option3'];

    const [selectedItem, setSelectedItem] = useState(options[0]);

    const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <Stack spacing="md" alignItems="normal">
        <Select {...args} value={selectedItem} onChange={onChange}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </Select>

        <dl>
          <dt>Value</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>
    );
  },
  args: defaultArgs,
};

export const Disabled: StoryObj<typeof Select> = {
  render: (args) => {
    const options = ['option1', 'option2', 'option3'];

    return (
      <Select {...args} value={options[0]}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </Select>
    );
  },
  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const IsInvalid: StoryObj<typeof Select> = {
  render: (args) => {
    const options = ['option1', 'option2', 'option3'];

    return (
      <Select {...args} value={options[0]}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </Select>
    );
  },
  args: {
    ...defaultArgs,
    isInvalid: true,
  },
};
