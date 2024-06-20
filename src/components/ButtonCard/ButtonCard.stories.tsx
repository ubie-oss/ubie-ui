import { Meta, StoryObj } from '@storybook/react';
import { ButtonCard } from './ButtonCard';

export default {
  title: 'Form/ButtonCard',
  component: ButtonCard,
  args: {
    children: '自分',
  },
} satisfies Meta<typeof ButtonCard>;

const defaultArgs = {};

export const Default: StoryObj<typeof ButtonCard> = {
  render: (args) => <ButtonCard {...args} />,
  args: defaultArgs,
};

export const Disabled: StoryObj<typeof ButtonCard> = {
  render: (args) => <ButtonCard {...args} />,
  args: {
    ...defaultArgs,
    disabled: true,
  },
};
