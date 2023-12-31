import { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback } from 'react';
import { Checkbox, Stack } from '../';
import type { ChangeEventHandler } from 'react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

const options = ['option1', 'option2', 'option3'];

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
      <Stack spacing="md">
        {options.map((option) => (
          <Checkbox
            name="options"
            value={option}
            onChange={onChange}
            checked={selectedItem.includes(option)}
            key={option}
          >
            {option}
          </Checkbox>
        ))}

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem.join(',')}</dd>
        </dl>
      </Stack>
    );
  },
};

export const SingleUse: Story = {
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => setChecked(event.target.checked), []);

    return (
      <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>
    );
  },
};

export const Size: Story = {
  render: () => (
    <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
  ),
};
