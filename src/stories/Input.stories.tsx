import { Meta, StoryObj } from '@storybook/react';
import { Input, Stack } from '..';

export default {
  component: Input,
} as Meta<typeof Input>;

const defaultArgs = {
  isInvalid: false,
  disabled: false,
};

export const Default: StoryObj<typeof Input> = {
  render: (args) => (
    <Stack spacing="xs">
      <Input {...args} />
      <Input {...args} isInvalid />
    </Stack>
  ),
  args: defaultArgs,
};
