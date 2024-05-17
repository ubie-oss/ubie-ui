import { Meta, StoryObj } from '@storybook/react';
import { ChangeEventHandler, useState, useCallback } from 'react';
import { RadioButton, Stack, RadioGroup } from '../';

export default {
  title: 'Form/RadioButton',
  component: RadioButton,
} satisfies Meta<typeof RadioButton>;

const defaultArgs = {
  disabled: false,
};

type Story = StoryObj<typeof RadioButton>;

const options = ['option1', 'option2', 'option3'];

export const Default: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState(options[0]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <Stack spacing="lg">
        <RadioGroup label="RadioButton">
          {options.map((option) => (
            <RadioButton
              key={option}
              {...args}
              value={option}
              id={option}
              onChange={onChange}
              checked={selectedItem === option}
              name="default"
            >
              {option}
            </RadioButton>
          ))}
        </RadioGroup>

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>
    );
  },
  args: {
    ...defaultArgs,
    name: 'default',
  },
};

export const Horizontally: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState(options[0]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <RadioGroup label="RadioButton" direction="row">
        {options.map((option) => (
          <RadioButton
            key={option}
            {...args}
            value={option}
            id={option}
            onChange={onChange}
            checked={selectedItem === option}
            name="horizontally"
          >
            {option}
          </RadioButton>
        ))}
      </RadioGroup>
    );
  },
  args: {
    ...defaultArgs,
    name: 'default',
  },
};

export const Size: Story = {
  render: (args) => (
    <Stack spacing="xs">
      <RadioButton {...args} value="medium" id="medium" name="size">
        Medium
      </RadioButton>
      <RadioButton {...args} value="small" id="small" size="small" name="size">
        Small
      </RadioButton>
    </Stack>
  ),
  args: {
    ...defaultArgs,
    name: 'size',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Stack spacing="xs">
      <RadioButton {...args} value="checked" id="checked" checked disabled name="disabled">
        Checked
      </RadioButton>

      <RadioButton {...args} value="unchecked" id="unchecked" disabled name="disabled">
        Unchecked
      </RadioButton>
    </Stack>
  ),
  args: {
    ...defaultArgs,
    name: 'disabled',
  },
};

export const ShowRequiredLabel: Story = {
  render: (args) => {
    const [selectedItem, setSelectedItem] = useState(options[0]);

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
      setSelectedItem(event.target.value);
    }, []);

    return (
      <RadioGroup label="RadioButton" showRequiredLabel>
        {options.map((option) => (
          <RadioButton
            key={option}
            {...args}
            value={option}
            id={option}
            onChange={onChange}
            checked={selectedItem === option}
            name="default"
          >
            {option}
          </RadioButton>
        ))}
      </RadioGroup>
    );
  },
  args: {
    ...defaultArgs,
    name: 'default',
  },
};

export const CustomDataAttribute: Story = {
  render: (args) => (
    <Stack spacing="xs">
      <RadioButton {...args} value="data1" id="data1" name="customData" data-test-id="1">
        Data 1
      </RadioButton>
      <RadioButton {...args} value="data2" id="data2" name="customData" data-test-id="2">
        Data 2
      </RadioButton>
    </Stack>
  ),
  args: defaultArgs,
};
