import { Meta, StoryObj } from '@storybook/react';
import { RadioCard, Stack } from '..';

export default {
  component: RadioCard,
} as Meta<typeof RadioCard>;

const defaultArgs = {
  children: 'ラジオボタン',
  name: 'radio',
};

export const Default: StoryObj<typeof RadioCard> = {
  render: (args) => (
    <Stack spacing="sm">
      <RadioCard {...args} id="foo" />
      <RadioCard {...args} id="bar" />
      <RadioCard {...args} id="baz" />
    </Stack>
  ),
  args: defaultArgs,
};
