import { Meta, StoryObj } from '@storybook/react';
import { BlankLinkIcon, UbieIcon } from '@ubie/ubie-icons';
import { DummyButton } from '..';

export default {
  component: DummyButton,
} as Meta<typeof DummyButton>;

const defaultArgs = {
  children: 'ボタン',
};

export const Default: StoryObj<typeof DummyButton> = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <DummyButton icon={<UbieIcon />} {...args} />
        <DummyButton icon={<UbieIcon />} {...args} variant="secondary" />
        <DummyButton icon={<UbieIcon />} {...args} variant="accent" />
        <DummyButton icon={<UbieIcon />} {...args} variant="alert" />
        <DummyButton icon={<UbieIcon />} {...args} variant="text" />
        <DummyButton icon={<UbieIcon />} {...args} variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <DummyButton icon={<UbieIcon />} {...args} size="medium" />
        <DummyButton icon={<UbieIcon />} {...args} size="medium" variant="secondary" />
        <DummyButton icon={<UbieIcon />} {...args} size="medium" variant="accent" />
        <DummyButton icon={<UbieIcon />} {...args} size="medium" variant="alert" />
        <DummyButton icon={<UbieIcon />} {...args} size="medium" variant="text" />
        <DummyButton icon={<UbieIcon />} {...args} size="medium" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <DummyButton icon={<UbieIcon />} {...args} size="small" />
        <DummyButton icon={<UbieIcon />} {...args} size="small" variant="secondary" />
        <DummyButton icon={<UbieIcon />} {...args} size="small" variant="accent" />
        <DummyButton icon={<UbieIcon />} {...args} size="small" variant="alert" />
        <DummyButton icon={<UbieIcon />} {...args} size="small" variant="text" />
        <DummyButton icon={<UbieIcon />} {...args} size="small" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <DummyButton suffixIcon={<BlankLinkIcon />} {...args} />
        <DummyButton suffixIcon={<BlankLinkIcon />} {...args} variant="secondary" />
        <DummyButton suffixIcon={<BlankLinkIcon />} {...args} variant="accent" />
        <DummyButton suffixIcon={<BlankLinkIcon />} {...args} variant="alert" />
        <DummyButton suffixIcon={<BlankLinkIcon />} {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <DummyButton {...args} />
        <DummyButton {...args} variant="secondary" />
        <DummyButton {...args} variant="accent" />
        <DummyButton {...args} variant="alert" />
        <DummyButton {...args} variant="text" />
        <DummyButton {...args} variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <DummyButton {...args} size="medium" />
        <DummyButton {...args} size="medium" variant="secondary" />
        <DummyButton {...args} size="medium" variant="accent" />
        <DummyButton {...args} size="medium" variant="alert" />
        <DummyButton {...args} size="medium" variant="text" />
        <DummyButton {...args} size="medium" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <DummyButton {...args} size="small" />
        <DummyButton {...args} size="small" variant="secondary" />
        <DummyButton {...args} size="small" variant="accent" />
        <DummyButton {...args} size="small" variant="alert" />
        <DummyButton {...args} size="small" variant="text" />
        <DummyButton {...args} size="small" variant="textAlert" />
      </div>
    </div>
  ),
  args: defaultArgs,
};
