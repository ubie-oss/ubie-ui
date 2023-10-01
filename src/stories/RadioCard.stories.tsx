import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioCard, Stack } from '..';

export default {
  component: RadioCard,
} as Meta<typeof RadioCard>;

const defaultArgs = {};

export const Default: StoryObj<typeof RadioCard> = {
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
    name: 'deafult',
  },
};

export const Block: StoryObj<typeof RadioCard> = {
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
