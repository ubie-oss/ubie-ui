import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '..';

export default {
  title: 'Form/Toggle',
  component: Toggle,
} satisfies Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomDataAttribute: Story = {
  args: {
    'data-test-id': 'toggle-custom-attribute',
  },
  render: (args) => <Toggle {...args} />,
};
