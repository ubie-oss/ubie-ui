import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Stack } from '../';

export default {
  component: Checkbox,
} as Meta<typeof Checkbox>;

const defaultArgs = {
  disabled: false,
};

export const Default: StoryObj<typeof Checkbox> = {
  render: (args) => {
    return (
      <Stack spacing="xs">
        <Checkbox {...args} value="medium">
          Medium
        </Checkbox>
        <Checkbox {...args} value="small" size="small">
          Small
        </Checkbox>
      </Stack>
    );
  },
  args: defaultArgs,
};
