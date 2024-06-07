import { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback } from 'react';
import { Checkbox, CheckboxGroup, Stack } from '../../index';
import type { ChangeEventHandler } from 'react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

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
      <Stack spacing="lg">
        <CheckboxGroup label="Checkbox">
          {options.map((option) => (
            <Checkbox
              name="default"
              value={option}
              onChange={onChange}
              checked={selectedItem.includes(option)}
              key={option}
            >
              {option}
            </Checkbox>
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
      <Stack spacing="lg">
        <CheckboxGroup label="Checkbox" direction="row">
          {options.map((option) => (
            <Checkbox
              name="horizontally"
              value={option}
              onChange={onChange}
              checked={selectedItem.includes(option)}
              key={option}
            >
              {option}
            </Checkbox>
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

export const ShowRequiredLabel: Story = {
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
      <CheckboxGroup label="Checkbox" showRequiredLabel>
        {options.map((option) => (
          <Checkbox
            name="default"
            value={option}
            onChange={onChange}
            checked={selectedItem.includes(option)}
            key={option}
          >
            {option}
          </Checkbox>
        ))}
      </CheckboxGroup>
    );
  },
};

export const CustomDataAttribute: Story = {
  render: () => (
    <Stack spacing="xs">
      <Checkbox name="custom-data" value="data1" data-test-id="checkbox-data1">
        Data 1
      </Checkbox>
      <Checkbox name="custom-data" value="data2" data-test-id="checkbox-data2">
        Data 2
      </Checkbox>
    </Stack>
  ),
};
