import { StoryObj, Meta } from '@storybook/react';
import { Bold } from './Bold';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

export default {
  title: 'Typography/font/Bold',
  component: Bold,
} satisfies Meta<typeof Bold>;

type Story = StoryObj<typeof Bold>;

export const AsVarations: Story = {
  render: () => {
    return (
      <Stack spacing="md">
        <Bold>default(span)</Bold>
        <Bold as="span">span</Bold>
        <Bold as="b">b</Bold>
        <Bold as="strong">strong</Bold>
        <Bold as="em">em</Bold>
        <Bold as="i">i</Bold>
      </Stack>
    );
  },
};

export const WithText: Story = {
  render: () => {
    return (
      <Text type="body" size="lg" color="main">
        一部だけ<Bold>太字</Bold>にしたい
      </Text>
    );
  },
};
