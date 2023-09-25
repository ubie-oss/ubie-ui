import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '..';
import { Spacing } from '../types/style';

export default {
  component: Stack,
} as Meta<typeof Stack>;

const defaultArgs = {
  spacing: 'md' as Spacing,
};

export const Default: StoryObj<typeof Stack> = {
  render: (args) => (
    <div>
      <Stack {...args}>
        <p>テスト</p>
        <p>テスト</p>
        <p>テスト</p>
        <p>テスト</p>
      </Stack>
    </div>
  ),
  args: defaultArgs,
};
