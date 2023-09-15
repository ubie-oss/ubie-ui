import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Input } from '..';

export default {
  component: Input,
} as ComponentMeta<typeof Input>;

const defaultArgs = {
  isInvalid: false,
  disabled: false,
};

export const Default: ComponentStoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
  args: defaultArgs,
};
