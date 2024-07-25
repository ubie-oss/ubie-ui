import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Icon, Flex, Box, Stack } from '../../index';

export default {
  component: Icon,
} satisfies Meta<typeof Icon>;

const defaultArgs: Partial<ComponentProps<typeof Icon>> = {
  icon: 'UbieIcon',
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

export const CaseOnlyIcon: Story = {
  render: () => (
    <Stack spacing="sm">
      <p>
        ラベルや付随する文章を伴わずにアイコン単独で使う場合、アイコンが保つ意味を<code>label</code> propで付与します
        <br />
        例: アイコンボタンなど
      </p>
      <div>
        <Icon icon="SetupIcon" label="設定" />
      </div>
    </Stack>
  ),
};

export const WithCustomDataAttribute: Story = {
  render: (args) => <Icon data-testid="testid" {...args} />,
  args: {
    ...defaultArgs,
  },
};

export const WithId: Story = {
  render: (args) => <Icon data-testid="testid" {...args} />,
  args: {
    ...defaultArgs,
    id: 'icon-id',
  },
};
