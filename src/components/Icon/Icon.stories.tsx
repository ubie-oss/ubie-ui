import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Icon, Flex, Box, Stack } from '../../index';

export default {
  component: Icon,
} satisfies Meta<typeof Icon>;

const defaultArgs: Partial<ComponentProps<typeof Icon>> = {
  icon: 'UbieIcon',
  label: 'ユビーのロゴ',
};

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: (args) => <Icon {...args} />,
  args: defaultArgs,
};

export const Size: Story = {
  render: (args) => (
    <>
      <Flex alignItems="center" spacing="sm">
        <Icon {...args} size="xs" />
        <Icon {...args} size="sm" />
        <Icon {...args} size="md" />
        <Icon {...args} size="lg" />
        <Icon {...args} size="xl" />
        <Icon {...args} size="2xl" />
        <Icon {...args} size="3xl" />
        <Icon {...args} size="4xl" />
      </Flex>
    </>
  ),
  args: defaultArgs,
};

export const Color: Story = {
  render: (args) => (
    <Flex alignItems="center" spacing="sm">
      <Icon {...args} color="primary" />
      <Icon {...args} color="accent" />
      <Icon {...args} color="main" />
      <Icon {...args} color="sub" />
      <Icon {...args} color="alert" />
      <Icon {...args} color="link" />
      <Icon {...args} color="linkSub" />
      <Icon {...args} color="disabled" />
      <Box pt="xxs" pr="xxs" pb="xxs" pl="xxs" backgroundColor="primaryDarken">
        <Icon {...args} color="white" />
      </Box>
    </Flex>
  ),
  args: defaultArgs,
};

export const Decorative: Story = {
  render: () => (
    <Stack spacing="sm">
      <p>
        装飾的なアイコンの場合は、<code>ariaHidden</code> propをtrueとし、<code>label</code>には何も指定しません。
      </p>
      <div>
        <Icon icon="AlertIcon" color="alert" ariaHidden /> 注意
      </div>
    </Stack>
  ),
};

export const WithCustomDataAttribute: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    ...defaultArgs,
    'data-test-id': 'icon-custom-attribute',
  },
};

export const WithId: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    ...defaultArgs,
    id: 'icon-id',
  },
};
