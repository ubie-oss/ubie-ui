import { Meta, StoryObj } from '@storybook/react';
import { BlankLinkIcon, TrashIcon } from '@ubie/ubie-icons';
import { ComponentProps } from 'react';
import { Button, Icon, Stack } from '../';

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
      <Button {...defaultArgs} variant="alert" />
      <Button {...defaultArgs} variant="success" />
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
        <dt style={{ fontWeight: 'bold' }}>Position Prefix</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <Button prefixIcon={<Icon icon="UbieIcon" />} {...defaultArgs} />
            <Button prefixIcon={<Icon icon="UbieIcon" />} {...defaultArgs} variant="secondary" />
            <Button prefixIcon={<Icon icon="UbieIcon" />} {...defaultArgs} variant="alert" />
            <Button prefixIcon={<Icon icon="UbieIcon" />} {...defaultArgs} variant="success" />
            <Button prefixIcon={<Icon icon="UbieIcon" />} {...defaultArgs} variant="text" />
            <Button prefixIcon={<Icon icon="TrashIcon" />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Position Suffix</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="secondary" />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="success" />
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
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="success" />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="text" />
            <Button fixedIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Name specification</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <Button icon="BlankLinkIcon" {...defaultArgs}>
              Icon
            </Button>
            <Button suffixIcon="BlankLinkIcon" {...defaultArgs}>
              Suffix Icon
            </Button>
            <Button fixedIcon="BlankLinkIcon" {...defaultArgs}>
              Fixed Icon
            </Button>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>Auth Icon</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <Button variant="authGoogle" icon="default" {...defaultArgs}>
              Icon
            </Button>
            <Button variant="authGoogle" suffixIcon="default" {...defaultArgs}>
              Suffix Icon
            </Button>
            <Button variant="authGoogle" fixedIcon="default" {...defaultArgs}>
              Fixed Icon
            </Button>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{ fontWeight: 'bold' }}>icon prop(deprecated)</dt>
        <dd style={{ margin: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
            <Button icon={<Icon icon="UbieIcon" />} {...defaultArgs} />
            <Button icon={<Icon icon="UbieIcon" />} {...defaultArgs} variant="secondary" />
            <Button icon={<Icon icon="UbieIcon" />} {...defaultArgs} variant="alert" />
            <Button icon={<Icon icon="UbieIcon" />} {...defaultArgs} variant="success" />
            <Button icon={<Icon icon="UbieIcon" />} {...defaultArgs} variant="text" />
            <Button icon={<Icon icon="TrashIcon" />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>
    </Stack>
  ),
  args: defaultArgs,
};

export const Block: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Button {...args} size="small" variant="secondary" />
      </div>
      <div>
        <Button {...args} size="medium" variant="secondary" />
      </div>
      <div>
        <Button {...args} size="large" variant="secondary" />
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
      <Button {...defaultArgs} prefixIcon="UbieIcon" disabled />
      <Button {...defaultArgs} variant="secondary" disabled />
      <Button {...defaultArgs} variant="alert" disabled />
      <Button {...defaultArgs} variant="success" disabled />
      <Button {...defaultArgs} variant="text" disabled />
      <Button {...defaultArgs} variant="textAlert" disabled />
    </div>
  ),
  args: defaultArgs,
};

export const Loading: Story = {
  args: {
    ...defaultArgs,
    children: 'OK',
    loading: true,
  },
  render: (args) => (
    <Stack spacing="md">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button {...args} />
        <Button {...args} variant="secondary" />
        <Button {...args} variant="alert" />
        <Button {...args} variant="success" />
        <Button {...args} variant="text" />
        <Button {...args} variant="textAlert" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button {...args} size="medium" />
        <Button {...args} variant="secondary" size="medium" />
        <Button {...args} variant="alert" size="medium" />
        <Button {...args} variant="success" size="medium" />
        <Button {...args} variant="text" size="medium" />
        <Button {...args} variant="textAlert" size="medium" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button {...args} size="small" />
        <Button {...args} variant="secondary" size="small" />
        <Button {...args} variant="alert" size="small" />
        <Button {...args} variant="success" size="small" />
        <Button {...args} variant="text" size="small" />
        <Button {...args} variant="textAlert" size="small" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button icon={<Icon icon="UbieIcon" />} size="medium" loading loadingLabel="ラベル変更">
          次のページへ
        </Button>
        <Button {...args} variant="secondary" size="medium" disabled />
      </div>
    </Stack>
  ),
};

export const Margin: Story = {
  render: () => (
    <div style={{ backgroundColor: 'var(--color-background-black-darken)', width: 'fit-content', overflow: 'hidden' }}>
      <Button {...defaultArgs} mt="lg" mr="lg" mb="lg" ml="lg" />
    </div>
  ),
};

export const CustomDataAttribute: Story = {
  render: (args) => <Button {...args} />,
  args: {
    ['data-test-id']: 'some-test',
    ...defaultArgs,
  },
};

export const TextWrap: Story = {
  render: (args) => {
    return <Button {...args} />;
  },
  args: {
    ...defaultArgs,
    children: '[抽選で謝礼あり]\nアンケートにご協力ください',
    whiteSpace: 'pre-wrap',
    block: true,
  },
};
