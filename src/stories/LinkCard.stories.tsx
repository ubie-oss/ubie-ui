import { Meta, StoryObj } from '@storybook/react';
import { HospitalIcon } from '@ubie/ubie-icons';
import { LinkCard, Stack } from '..';

export default {
  component: LinkCard,
} satisfies Meta<typeof LinkCard>;

const defaultArgs = {
  title: '見出しテキスト',
};

type Story = StoryObj<typeof LinkCard>;

export const Default: Story = {
  render: (args) => (
    <Stack spacing="md" alignItems="normal">
      <LinkCard {...args} href="https://vitals.ubie.life/" />
      <LinkCard {...args} href="https://vitals.ubie.life/" />
    </Stack>
  ),
  args: defaultArgs,
};

export const WithIcon: Story = {
  render: (args) => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: defaultArgs,
};

export const WithDescription: Story = {
  render: (args) => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: {
    ...defaultArgs,
    description:
      'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。',
  },
};

export const SizeSmall: Story = {
  render: (args) => {
    return (
      <Stack spacing="md" alignItems="normal">
        <LinkCard {...args} href="https://vitals.ubie.life/" size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} size="small" />
        <LinkCard
          {...args}
          href="https://vitals.ubie.life/"
          icon={HospitalIcon}
          description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"
          size="small"
        />
      </Stack>
    );
  },
  args: defaultArgs,
};

export const CustomDataAttribute: Story = {
  render: (args) => <LinkCard {...args} href="https://vitals.ubie.life/" />,
  args: {
    ...defaultArgs,
    'data-test-id': 'link-card-custom-attribute',
  },
};
