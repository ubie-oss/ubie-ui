import { Meta, StoryObj } from '@storybook/react';
import { BlankLinkIcon, UbieIcon, TrashIcon } from '@ubie/ubie-icons';
import { Button, Stack } from '../';
import type { ComponentProps } from 'react';

export default {
  title: 'Button/Button',
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

/**
 * Using Story's args, a non-existent prop is treated as having a value if its type is required.
 */
const defaultArgs = {
  children: 'ボタン',
  disabled: false,
} satisfies Partial<ComponentProps<typeof Button>>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
      <Button {...defaultArgs} />
      <Button {...defaultArgs} variant="secondary" />
      <Button {...defaultArgs} variant="accent" />
      <Button {...defaultArgs} variant="alert" />
      <Button {...defaultArgs} variant="text" />
      <Button {...defaultArgs} variant="textAlert" />
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
      <Button {...defaultArgs} size="small">
        Small
      </Button>

      <Button {...defaultArgs} size="medium">
        Medium
      </Button>

      <Button {...defaultArgs}>Large</Button>
    </div>
  ),
  args: defaultArgs,
};

export const WithIcon: Story = {
  render: () => (
    <Stack spacing="lg">
      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Default Position</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <Button icon={<UbieIcon />} {...defaultArgs} />
            <Button icon={<UbieIcon />} {...defaultArgs} variant="secondary" />
            <Button icon={<UbieIcon />} {...defaultArgs} variant="accent" />
            <Button icon={<UbieIcon />} {...defaultArgs} variant="alert" />
            <Button icon={<UbieIcon />} {...defaultArgs} variant="text" />
            <Button icon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Suffix</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="secondary" />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="accent" />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="text" />
            <Button suffixIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Fixed</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="secondary" />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="accent" />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="text" />
            <Button fixedIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>
    </Stack>
  ),
  args: defaultArgs,
};

export const Block: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Button {...defaultArgs} size="small" variant="secondary" />
      </div>
      <div>
        <Button {...defaultArgs} size="medium" variant="secondary" />
      </div>
      <div>
        <Button {...defaultArgs} size="large" variant="secondary" />
      </div>
    </div>
  ),
  args: {
    ...defaultArgs,
    block: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
      <Button {...defaultArgs} disabled />
      <Button {...defaultArgs} variant="secondary" disabled />
      <Button {...defaultArgs} variant="accent" disabled />
      <Button {...defaultArgs} variant="alert" disabled />
      <Button {...defaultArgs} variant="text" disabled />
      <Button {...defaultArgs} variant="textAlert" disabled />
    </div>
  ),
  args: defaultArgs,
};
