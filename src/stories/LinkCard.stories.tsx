import { Meta, StoryObj } from '@storybook/react';
import { MedicalFormIcon } from '@ubie/ubie-icons';
import { LinkCard, Stack } from '..';

export default {
  component: LinkCard,
} satisfies Meta<typeof LinkCard>;

const defaultArgs = {
  title: 'タイトル',
  description:
    'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。',
};

export const Default: StoryObj<typeof LinkCard> = {
  render: (args) => (
    <Stack spacing="md">
      <LinkCard {...args} href="/" />
      <LinkCard {...args} href="/" />
    </Stack>
  ),
  args: defaultArgs,
};

export const WithIcon: StoryObj<typeof LinkCard> = {
  render: (args) => <LinkCard {...args} href="/" icon={MedicalFormIcon} />,
  args: defaultArgs,
};
