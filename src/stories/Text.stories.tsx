import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../';

export default {
  component: Text,
} as Meta<typeof Text>;

const defaultArgs = {};

export const Default: StoryObj<typeof Text> = {
  render: () => (
    <div>
      <Text>ダミーテキスト</Text>
      <Text as={'span'} bold leading="narrow">
        ダミーテキスト
      </Text>
      <Text leading="tight">ダミーテキスト</Text>
      <Text color="sub" type="note" size="sm">
        ダミーテキスト
      </Text>
      <Text color="sub" type="note" size="lg" leading="narrow">
        ダミーテキスト
      </Text>
      <Text color="sub" type="tag" size="sm">
        ダミーテキスト
      </Text>
      <Text as={'h1'} type="heading" size="xl">
        ダミーテキスト
      </Text>
      <Text as={'h1'} type="heading" size="sm" color="primary">
        ダミーテキスト
      </Text>
    </div>
  ),
  args: defaultArgs,
};
