import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../';

export default {
  component: Checkbox,
} as Meta<typeof Checkbox>;

const defaultArgs = {
  children: 'Checkbox',
};

export const Default: StoryObj<typeof Checkbox> = {
  render: (args) => <Checkbox {...args} />,
  args: defaultArgs,
};
