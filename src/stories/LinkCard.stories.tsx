import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { MedicalFormIcon } from '@ubie/ubie-icons';
import { LinkCard } from '..';

export default {
  component: LinkCard,
} as ComponentMeta<typeof LinkCard>;

const defaultArgs = {
  title: 'タイトル',
  description:
    'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。',
};

export const Default: ComponentStoryObj<typeof LinkCard> = {
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
