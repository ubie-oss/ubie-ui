import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../';

export default {
  component: TextArea,
} as Meta<typeof TextArea>;

const defaultArgs = {
  isInvalid: false,
};

export const Default: StoryObj<typeof TextArea> = {
  render: (args) => <TextArea {...args} />,
  args: defaultArgs,
};
