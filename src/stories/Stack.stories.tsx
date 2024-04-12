import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '..';
import { Spacing } from '../types/style';

export default {
  component: Stack,
} satisfies Meta<typeof Stack>;

const defaultArgs = {
  spacing: 'md' as Spacing,
};

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <p style={{ margin: 0 }}>テスト</p>
      <p style={{ margin: 0 }}>テスト</p>
      <p style={{ margin: 0 }}>テスト</p>
      <p style={{ margin: 0 }}>テスト</p>
    </Stack>
  ),
  args: defaultArgs,
};

export const Nested: Story = {
  render: () => (
    <Stack spacing="xl">
      <Stack spacing="lg">
        <p style={{ margin: 0, background: '#DDD' }}>テスト</p>
        <p style={{ margin: 0, background: '#DDD' }}>テスト</p>
        <p style={{ margin: 0, background: '#DDD' }}>テスト</p>
      </Stack>

      <Stack spacing="lg">
        <p style={{ margin: 0, background: '#DDD' }}>テスト</p>
        <p style={{ margin: 0, background: '#DDD' }}>テスト</p>
        <Stack spacing="xs">
          <p style={{ margin: 0, background: '#DDD' }}>テスト</p>
          <p style={{ margin: 0, background: '#DDD' }}>テスト</p>
          <p style={{ margin: 0, background: '#DDD' }}>テスト</p>
        </Stack>
      </Stack>
    </Stack>
  ),
};

export const MarkupAsList: Story = {
  render: (args) => (
    <Stack {...args} as="ul">
      <li>テスト</li>
      <li>テスト</li>
      <li>テスト</li>
      <li>テスト</li>
    </Stack>
  ),
  args: defaultArgs,
};

export const PutOnTheEnd: Story = {
  render: (args) => (
    <Stack {...args} alignItems="flex-end">
      <p style={{ margin: 0 }}>テスト</p>
      <p style={{ margin: 0 }}>テスト</p>
      <p style={{ margin: 0 }}>テスト</p>
      <p style={{ margin: 0 }}>テスト</p>
    </Stack>
  ),
  args: defaultArgs,
};

export const BlockLevelElementsToFullWidth: Story = {
  render: (args) => (
    <Stack spacing="lg" alignItems="normal">
      <Stack {...args} alignItems="normal">
        <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
        <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
        <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
        <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
      </Stack>

      <Stack spacing="xs">
        <p style={{ margin: 0 }}>
          If you do not use <code>alignItems=&quot;normal&quot;</code>:
        </p>
        <Stack {...args}>
          <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
          <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
          <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
          <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
        </Stack>
      </Stack>
    </Stack>
  ),
  args: defaultArgs,
};
