import { Meta, StoryObj } from '@storybook/react';
import { type ChangeEventHandler, ComponentProps, useCallback, useState } from 'react';
import { CheckboxCard } from './CheckboxCard';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup';
import { Stack } from '../Stack/Stack';

export default {
  title: 'Form/CheckboxCard',
  component: CheckboxCard,
} satisfies Meta<typeof CheckboxCard>;

const defaultArgs: Partial<ComponentProps<typeof CheckboxCard>> = {};

const options = ['option1', 'option2', 'option3'];

type Story = StoryObj<typeof CheckboxCard>;

export const Default: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (event) => {
        if (event.target.checked) {
          setSelectedItem([...selectedItem, event.target.value]);
        } else {
          setSelectedItem(selectedItem.filter((item) => item !== event.target.value));
        }
      },
      [selectedItem],
    );

    return (
      <Stack spacing="lg">
        <CheckboxGroup label="Checkbox">
          {options.map((option) => (
            <CheckboxCard
              name="default"
              value={option}
              onChange={onChange}
              checked={selectedItem.includes(option)}
              key={option}
            >
              {option}
            </CheckboxCard>
          ))}
        </CheckboxGroup>

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem.join(',')}</dd>
        </dl>
      </Stack>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (event) => {
        if (event.target.checked) {
          setSelectedItem([...selectedItem, event.target.value]);
        } else {
          setSelectedItem(selectedItem.filter((item) => item !== event.target.value));
        }
      },
      [selectedItem],
    );

    return (
      <CheckboxGroup label="Checkbox">
        {options.map((option) => (
          <CheckboxCard
            disabled
            name="default"
            value={option}
            onChange={onChange}
            checked={selectedItem.includes(option)}
            key={option}
          >
            {option}
          </CheckboxCard>
        ))}
      </CheckboxGroup>
    );
  },
};

export const Horizontally: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (event) => {
        if (event.target.checked) {
          setSelectedItem([...selectedItem, event.target.value]);
        } else {
          setSelectedItem(selectedItem.filter((item) => item !== event.target.value));
        }
      },
      [selectedItem],
    );

    return (
      <CheckboxGroup label="Checkbox" direction="row">
        {options.map((option) => (
          <CheckboxCard
            name="horizontally"
            value={option}
            onChange={onChange}
            checked={selectedItem.includes(option)}
            id={option}
            key={option}
          >
            {option}
          </CheckboxCard>
        ))}
      </CheckboxGroup>
    );
  },
};

export const Block: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (event) => {
        if (event.target.checked) {
          setSelectedItem([...selectedItem, event.target.value]);
        } else {
          setSelectedItem(selectedItem.filter((item) => item !== event.target.value));
        }
      },
      [selectedItem],
    );

    return (
      <CheckboxGroup label="Checkbox">
        {options.map((option) => (
          <CheckboxCard
            block
            {...args}
            key={option}
            checked={selectedItem.includes(option)}
            value={option}
            onChange={onChange}
            name="block"
          >
            {option}
          </CheckboxCard>
        ))}
      </CheckboxGroup>
    );
  },
  args: {
    ...defaultArgs,
    name: 'block',
    block: true,
  },
};
