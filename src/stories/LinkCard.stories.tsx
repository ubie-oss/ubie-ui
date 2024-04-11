import { Meta, StoryObj } from '@storybook/react';
import { HospitalIcon } from '@ubie/ubie-icons';
import { LinkCard, Stack } from '..';

export default {
  component: LinkCard,
} satisfies Meta<typeof LinkCard>;

const defaultArgs = {
  title: '見出しテキスト',
};

export const Default: StoryObj<typeof LinkCard> = {
  render: (args) => (
    <Stack spacing="md" alignItems="normal">
      <LinkCard {...args} href="/" />
      <LinkCard {...args} href="/" />
    </Stack>
  ),
  args: defaultArgs,
};

export const WithIcon: StoryObj<typeof LinkCard> = {
  render: (args) => <LinkCard {...args} href="/" icon={HospitalIcon} />,
  args: defaultArgs,
};

export const WithDescription: StoryObj<typeof LinkCard> = {
  render: (args) => <LinkCard {...args} href="/" icon={HospitalIcon} />,
  args: {
    ...defaultArgs,
    description:
      'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。',
  },
};
