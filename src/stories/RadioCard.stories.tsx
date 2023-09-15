import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { RadioCard } from '..';

export default {
  component: RadioCard,
} as ComponentMeta<typeof RadioCard>;

const defaultArgs = {
  children: 'ラジオボタン',
  name: 'radio',
};

export const Default: ComponentStoryObj<typeof RadioCard> = {
  render: (args) => (
    <div>
      <RadioCard {...args} id="foo" />
      <RadioCard {...args} id="bar" />
      <RadioCard {...args} hasMarginBottom={false} id="baz" />
    </div>
  ),
  args: defaultArgs,
};
