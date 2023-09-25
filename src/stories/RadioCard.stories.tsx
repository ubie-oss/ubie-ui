import { Meta, StoryObj } from '@storybook/react';
import { RadioCard } from '..';

export default {
  component: RadioCard,
} as Meta<typeof RadioCard>;

const defaultArgs = {
  children: 'ラジオボタン',
  name: 'radio',
};

export const Default: StoryObj<typeof RadioCard> = {
  render: (args) => (
    <div>
      <RadioCard {...args} id="foo" />
      <RadioCard {...args} id="bar" />
      <RadioCard {...args} hasMarginBottom={false} id="baz" />
    </div>
  ),
  args: defaultArgs,
};
