import { Meta, StoryObj } from '@storybook/react';
import { Stack, Box } from '..';
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

export const MarginAndPadding: Story = {
  render: (args) => (
    <Stack {...args} mt="lg" mr="lg" mb="lg" ml="lg" pt="xxl" pr="xxl" pb="xxl" pl="xxl">
      <p style={{ margin: 0 }}>Text</p>
      <p style={{ margin: 0 }}>Text</p>
      <p style={{ margin: 0 }}>Text</p>
      <p style={{ margin: 0 }}>Text</p>
    </Stack>
  ),
  args: defaultArgs,
};

export const AsBox: Story = {
  render: (args) => (
    <Stack {...args} as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <p style={{ margin: 0 }}>Text</p>
      <p style={{ margin: 0 }}>Text</p>
      <p style={{ margin: 0 }}>Text</p>
      <p style={{ margin: 0 }}>Text</p>
    </Stack>
  ),
  args: defaultArgs,
};

export const CustomDataAttribute: Story = {
  render: (args) => (
    <Stack {...args}>
      <p>This is a paragraph.</p>
      <p>This is a paragraph.</p>
    </Stack>
  ),
  args: { ...defaultArgs, 'data-test-id': 'custom-attribute' },
};
