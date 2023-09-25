import { Meta, StoryObj } from '@storybook/react';
import { MedicalFormIcon } from '@ubie/ubie-icons';
import { LinkCard } from '..';

export default {
  component: LinkCard,
} as Meta<typeof LinkCard>;

const defaultArgs = {
  title: 'タイトル',
  description:
    'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。',
};

export const Default: StoryObj<typeof LinkCard> = {
  render: (args) => (
    <>
      <div>
        <LinkCard {...args} href="/" icon={MedicalFormIcon} />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <LinkCard {...args} href="/" />
      </div>
    </>
  ),
  args: defaultArgs,
};
