import { StoryObj } from '@storybook/react';
import { HelperMessage } from '..';

export default {
  title: 'Form/HelperMessage',
  component: HelperMessage,
};

type Story = StoryObj<typeof HelperMessage>;

export const Default: Story = {
  render: () => <HelperMessage>例: 2000年12月1日</HelperMessage>,
};

export const CustomDataAttribute: Story = {
  render: (args) => (
    <HelperMessage data-testid="helper-message-custom-attribute" {...args}>
      This is a custom data attribute example
    </HelperMessage>
  ),
};
