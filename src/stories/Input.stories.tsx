import { Meta, StoryObj } from '@storybook/react';
import { Input } from '..';

export default {
  component: Input,
} as Meta<typeof Input>;

const defaultArgs = {
  isInvalid: false,
  disabled: false,
};

export const Default: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
  args: defaultArgs,
};
