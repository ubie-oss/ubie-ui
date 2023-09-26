import { Meta, StoryObj } from '@storybook/react';
import { BlankLinkIcon, UbieIcon } from '@ubie/ubie-icons';
import { LinkButton } from '../';

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

const defaultArgs = {
  children: 'ボタン',
  href: 'https://example.com',
};

export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton icon={<UbieIcon />} {...args} />
        <LinkButton icon={<UbieIcon />} {...args} variant="secondary" />
        <LinkButton icon={<UbieIcon />} {...args} variant="accent" />
        <LinkButton icon={<UbieIcon />} {...args} variant="alert" />
        <LinkButton icon={<UbieIcon />} {...args} variant="text" />
        <LinkButton icon={<UbieIcon />} {...args} variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton icon={<UbieIcon />} {...args} size="medium" />
        <LinkButton icon={<UbieIcon />} {...args} size="medium" variant="secondary" />
        <LinkButton icon={<UbieIcon />} {...args} size="medium" variant="accent" />
        <LinkButton icon={<UbieIcon />} {...args} size="medium" variant="alert" />
        <LinkButton icon={<UbieIcon />} {...args} size="medium" variant="text" />
        <LinkButton icon={<UbieIcon />} {...args} size="medium" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton icon={<UbieIcon />} {...args} size="small" />
        <LinkButton icon={<UbieIcon />} {...args} size="small" variant="secondary" />
        <LinkButton icon={<UbieIcon />} {...args} size="small" variant="accent" />
        <LinkButton icon={<UbieIcon />} {...args} size="small" variant="alert" />
        <LinkButton icon={<UbieIcon />} {...args} size="small" variant="text" />
        <LinkButton icon={<UbieIcon />} {...args} size="small" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton suffixIcon={<BlankLinkIcon />} {...args} />
        <LinkButton suffixIcon={<BlankLinkIcon />} {...args} variant="secondary" />
        <LinkButton suffixIcon={<BlankLinkIcon />} {...args} variant="accent" />
        <LinkButton suffixIcon={<BlankLinkIcon />} {...args} variant="alert" />
        <LinkButton suffixIcon={<BlankLinkIcon />} {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton suffixIcon={<BlankLinkIcon />} size="medium" {...args} />
        <LinkButton suffixIcon={<BlankLinkIcon />} size="medium" {...args} variant="secondary" />
        <LinkButton suffixIcon={<BlankLinkIcon />} size="medium" {...args} variant="accent" />
        <LinkButton suffixIcon={<BlankLinkIcon />} size="medium" {...args} variant="alert" />
        <LinkButton suffixIcon={<BlankLinkIcon />} size="medium" {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton suffixIcon={<BlankLinkIcon />} size="small" {...args} />
        <LinkButton suffixIcon={<BlankLinkIcon />} size="small" {...args} variant="secondary" />
        <LinkButton suffixIcon={<BlankLinkIcon />} size="small" {...args} variant="accent" />
        <LinkButton suffixIcon={<BlankLinkIcon />} size="small" {...args} variant="alert" />
        <LinkButton suffixIcon={<BlankLinkIcon />} size="small" {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton fixedIcon={<BlankLinkIcon />} {...args} />
        <LinkButton fixedIcon={<BlankLinkIcon />} {...args} variant="secondary" />
        <LinkButton fixedIcon={<BlankLinkIcon />} {...args} variant="accent" />
        <LinkButton fixedIcon={<BlankLinkIcon />} {...args} variant="alert" />
        <LinkButton fixedIcon={<BlankLinkIcon />} {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton fixedIcon={<BlankLinkIcon />} size="medium" {...args} />
        <LinkButton fixedIcon={<BlankLinkIcon />} size="medium" {...args} variant="secondary" />
        <LinkButton fixedIcon={<BlankLinkIcon />} size="medium" {...args} variant="accent" />
        <LinkButton fixedIcon={<BlankLinkIcon />} size="medium" {...args} variant="alert" />
        <LinkButton fixedIcon={<BlankLinkIcon />} size="medium" {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton fixedIcon={<BlankLinkIcon />} size="small" {...args} />
        <LinkButton fixedIcon={<BlankLinkIcon />} size="small" {...args} variant="secondary" />
        <LinkButton fixedIcon={<BlankLinkIcon />} size="small" {...args} variant="accent" />
        <LinkButton fixedIcon={<BlankLinkIcon />} size="small" {...args} variant="alert" />
        <LinkButton fixedIcon={<BlankLinkIcon />} size="small" {...args} variant="text" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton {...args} />
        <LinkButton {...args} variant="secondary" />
        <LinkButton {...args} variant="accent" />
        <LinkButton {...args} variant="alert" />
        <LinkButton {...args} variant="text" />
        <LinkButton {...args} variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton {...args} size="medium" />
        <LinkButton {...args} size="medium" variant="secondary" />
        <LinkButton {...args} size="medium" variant="accent" />
        <LinkButton {...args} size="medium" variant="alert" />
        <LinkButton {...args} size="medium" variant="text" />
        <LinkButton {...args} size="medium" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton {...args} size="small" />
        <LinkButton {...args} size="small" variant="secondary" />
        <LinkButton {...args} size="small" variant="accent" />
        <LinkButton {...args} size="small" variant="alert" />
        <LinkButton {...args} size="small" variant="text" />
        <LinkButton {...args} size="small" variant="textAlert" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton {...args} size="small" block variant="secondary" />
        <LinkButton {...args} size="medium" block variant="secondary" />
        <LinkButton {...args} size="large" block variant="secondary" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>
        <LinkButton href="https://vitals.ubie.life/" {...args} disabled />
        <LinkButton href="https://vitals.ubie.life/" {...args} variant="secondary" disabled />
        <LinkButton href="https://vitals.ubie.life/" {...args} variant="accent" disabled />
        <LinkButton href="https://vitals.ubie.life/" {...args} variant="alert" disabled />
        <LinkButton href="https://vitals.ubie.life/" {...args} variant="text" disabled />
        <LinkButton href="https://vitals.ubie.life/" {...args} variant="textAlert" disabled />
      </div>
    </div>
  ),
  args: defaultArgs,
};
