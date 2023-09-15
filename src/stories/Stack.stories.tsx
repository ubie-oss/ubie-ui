import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Stack } from '..';
import { Spacing } from '../types/style';

export default {
  component: Stack,
} as ComponentMeta<typeof Stack>;

const defaultArgs = {
  spacing: 'md' as Spacing,
};

export const Default: ComponentStoryObj<typeof Stack> = {
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
