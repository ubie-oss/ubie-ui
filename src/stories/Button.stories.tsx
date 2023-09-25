import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { BlankLinkIcon, UbieIcon } from '@ubie/ubie-icons';
import { Button } from '../';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const defaultArgs = {
  children: 'ボタン',
  disabled: false,
  onClick: action('onClick'),
};

export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button icon={<UbieIcon />} {...args} />
        <Button icon={<UbieIcon />} {...args} variant="secondary" />
        <Button icon={<UbieIcon />} {...args} variant="accent" />
        <Button icon={<UbieIcon />} {...args} variant="alert" />
        <Button icon={<UbieIcon />} {...args} variant="text" />
        <Button icon={<UbieIcon />} {...args} variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button icon={<UbieIcon />} {...args} size="medium" />
        <Button icon={<UbieIcon />} {...args} size="medium" variant="secondary" />
        <Button icon={<UbieIcon />} {...args} size="medium" variant="accent" />
        <Button icon={<UbieIcon />} {...args} size="medium" variant="alert" />
        <Button icon={<UbieIcon />} {...args} size="medium" variant="text" />
        <Button icon={<UbieIcon />} {...args} size="medium" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button icon={<UbieIcon />} {...args} size="small" />
        <Button icon={<UbieIcon />} {...args} size="small" variant="secondary" />
        <Button icon={<UbieIcon />} {...args} size="small" variant="accent" />
        <Button icon={<UbieIcon />} {...args} size="small" variant="alert" />
        <Button icon={<UbieIcon />} {...args} size="small" variant="text" />
        <Button icon={<UbieIcon />} {...args} size="small" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button suffixIcon={<BlankLinkIcon />} {...args} />
        <Button suffixIcon={<BlankLinkIcon />} {...args} variant="secondary" />
        <Button suffixIcon={<BlankLinkIcon />} {...args} variant="accent" />
        <Button suffixIcon={<BlankLinkIcon />} {...args} variant="alert" />
        <Button suffixIcon={<BlankLinkIcon />} {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button suffixIcon={<BlankLinkIcon />} size="medium" {...args} />
        <Button suffixIcon={<BlankLinkIcon />} size="medium" {...args} variant="secondary" />
        <Button suffixIcon={<BlankLinkIcon />} size="medium" {...args} variant="accent" />
        <Button suffixIcon={<BlankLinkIcon />} size="medium" {...args} variant="alert" />
        <Button suffixIcon={<BlankLinkIcon />} size="medium" {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button suffixIcon={<BlankLinkIcon />} size="small" {...args} />
        <Button suffixIcon={<BlankLinkIcon />} size="small" {...args} variant="secondary" />
        <Button suffixIcon={<BlankLinkIcon />} size="small" {...args} variant="accent" />
        <Button suffixIcon={<BlankLinkIcon />} size="small" {...args} variant="alert" />
        <Button suffixIcon={<BlankLinkIcon />} size="small" {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button fixedIcon={<BlankLinkIcon />} {...args} />
        <Button fixedIcon={<BlankLinkIcon />} {...args} variant="secondary" />
        <Button fixedIcon={<BlankLinkIcon />} {...args} variant="accent" />
        <Button fixedIcon={<BlankLinkIcon />} {...args} variant="alert" />
        <Button fixedIcon={<BlankLinkIcon />} {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button fixedIcon={<BlankLinkIcon />} size="medium" {...args} />
        <Button fixedIcon={<BlankLinkIcon />} size="medium" {...args} variant="secondary" />
        <Button fixedIcon={<BlankLinkIcon />} size="medium" {...args} variant="accent" />
        <Button fixedIcon={<BlankLinkIcon />} size="medium" {...args} variant="alert" />
        <Button fixedIcon={<BlankLinkIcon />} size="medium" {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button fixedIcon={<BlankLinkIcon />} size="small" {...args} />
        <Button fixedIcon={<BlankLinkIcon />} size="small" {...args} variant="secondary" />
        <Button fixedIcon={<BlankLinkIcon />} size="small" {...args} variant="accent" />
        <Button fixedIcon={<BlankLinkIcon />} size="small" {...args} variant="alert" />
        <Button fixedIcon={<BlankLinkIcon />} size="small" {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button {...args} />
        <Button {...args} variant="secondary" />
        <Button {...args} variant="accent" />
        <Button {...args} variant="alert" />
        <Button {...args} variant="text" />
        <Button {...args} variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button {...args} size="medium" />
        <Button {...args} size="medium" variant="secondary" />
        <Button {...args} size="medium" variant="accent" />
        <Button {...args} size="medium" variant="alert" />
        <Button {...args} size="medium" variant="text" />
        <Button {...args} size="medium" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button {...args} size="small" />
        <Button {...args} size="small" variant="secondary" />
        <Button {...args} size="small" variant="accent" />
        <Button {...args} size="small" variant="alert" />
        <Button {...args} size="small" variant="text" />
        <Button {...args} size="small" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
        <Button {...args} size="small" block variant="secondary" />
        <Button {...args} size="medium" block variant="secondary" />
        <Button {...args} size="large" block variant="secondary" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <Button {...args} disabled />
        <Button {...args} variant="secondary" disabled />
        <Button {...args} variant="accent" disabled />
        <Button {...args} variant="alert" disabled />
        <Button {...args} variant="text" disabled />
        <Button {...args} variant="textAlert" disabled />
      </div>
    </div>
  ),
  args: defaultArgs,
};

export const Auth: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '300px' }}>
      <Button block fixedIcon="default" {...args} variant="authGoogle">
        Google
      </Button>
      <Button block fixedIcon="default" {...args} variant="authLINE">
        LINE
      </Button>
      <Button block fixedIcon="default" {...args} variant="authApple">
        Apple
      </Button>
    </div>
  ),
  args: defaultArgs,
};
