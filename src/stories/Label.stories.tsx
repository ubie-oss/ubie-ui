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

export const AsLegend: Story = {
  render: () => <Label as="legend">選択してください（複数回答可）</Label>,
};
