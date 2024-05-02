import { StoryObj } from '@storybook/react';
import { Label } from '..';

export default {
  title: 'Form/Label',
  component: Label,
};

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => <Label htmlFor="id">全角カタカナでご入力ください</Label>,
};

export const CustomDataAttribute: Story = {
  args: {
    'data-test-id': 'label-test-id',
  },
  render: (args) => (
    <Label {...args} htmlFor="id">
      Please enter in English
    </Label>
  ),
};
