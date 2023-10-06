import { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback } from 'react';
import { RadioCard, Stack } from '..';
import type { ChangeEventHandler } from 'react';

export default {
  title: 'Form/RadioCard',
  component: RadioCard,
} as Meta<typeof RadioCard>;

type Story = StoryObj<typeof RadioCard>;

const defaultArgs = {};

const options = ['option1', 'option2', 'option3'];

export const Default: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = useState(options[0]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <Stack spacing="md">
        {options.map((option) => (
          <RadioCard
            name="options"
            value={option}
            onChange={onChange}
            checked={selectedItem === option}
            id={option}
            key={option}
          >
            {option}
          </RadioCard>
        ))}

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>
    );
  },
};

export const Block: Story = {
  render: (args) => {
    const options = ['option1', 'option2', 'option3'];

    const [value, setValue] = useState<string>('option1');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <Stack spacing="sm">
        {options.map((option) => (
          <RadioCard {...args} key={option} checked={value === option} value={option} onChange={onChange}>
            {option}
          </RadioCard>
        ))}
      </Stack>
    );
  },
  args: {
    ...defaultArgs,
    name: 'block',
    block: true,
  },
};
