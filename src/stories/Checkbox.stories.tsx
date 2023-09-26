import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Stack } from '../';

export default {
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <Stack spacing="xs">
        <Checkbox>Medium</Checkbox>
        <Checkbox size="small">Small</Checkbox>
      </Stack>
    );
  },
};
