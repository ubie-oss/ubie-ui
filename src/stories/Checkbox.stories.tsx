import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Checkbox } from '../';

export default {
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const defaultArgs = {
  children: 'Checkbox',
};

export const Default: ComponentStoryObj<typeof Checkbox> = {
  render: (args) => <Checkbox {...args} />,
  args: defaultArgs,
};
