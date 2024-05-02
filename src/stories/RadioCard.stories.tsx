import { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback } from 'react';
import { RadioCard, Stack, RadioGroup } from '..';
import type { ChangeEventHandler } from 'react';

export default {
  title: 'Form/RadioCard',
  component: RadioCard,
} satisfies Meta<typeof RadioCard>;

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
      <Stack spacing="lg" alignItems="normal">
        <RadioGroup label="RadioCard">
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
        </RadioGroup>

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>
    );
  },
};

export const Horizontally: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = useState(options[0]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <RadioGroup label="RadioCard" direction="row">
        {options.map((option) => (
          <RadioCard
            name="horizontally"
            value={option}
            onChange={onChange}
            checked={selectedItem === option}
            id={option}
            key={option}
          >
            {option}
          </RadioCard>
        ))}
      </RadioGroup>
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
          <RadioCard {...args} key={option} checked={value === option} value={option} onChange={onChange} name="block">
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

export const CustomDataAttribute: Story = {
  args: defaultArgs,
  render: (args) => {
    const options = ['option1', 'option2', 'option3'];
    const [value, setValue] = useState<string>('option1');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <Stack spacing="sm">
        {options.map((option, index) => (
          <RadioCard
            {...args}
            key={option}
            checked={value === option}
            value={option}
            onChange={onChange}
            name="customDataAttribute"
            data-test-id={index}
          >
            {option}
          </RadioCard>
        ))}
      </Stack>
    );
  },
};
