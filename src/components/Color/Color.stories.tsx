import { StoryObj, Meta } from '@storybook/react';
import { Color } from './Color';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

export default {
  title: 'Typography/Font/Color',
  component: Color,
} satisfies Meta<typeof Color>;

type Story = StoryObj<typeof Color>;

export const Colors: Story = {
  render: () => {
    return (
      <Stack spacing="md">
        <Color>default(main)</Color>
        <Color color="main">main</Color>
        <Color color="sub">sub</Color>
        <Color color="primary">primary</Color>
        <Color color="accent">accent</Color>
        <Color color="alert">alert</Color>
        <Color color="disabled">disabled</Color>
        <Color color="link">link</Color>
        <Color color="linkSub">linkSub</Color>
        <Box pt="sm" pr="sm" pb="sm" pl="sm" backgroundColor="primaryDarken">
          <Color color="white">white</Color>
        </Box>
      </Stack>
    );
  },
};

export const WithText: Story = {
  render: () => {
    return (
      <Text type="body" size="lg" color="main">
        一部だけ<Color color="accent">色</Color>を変えたい
      </Text>
    );
  },
};

export const WithId: Story = {
  render: (args) => {
    return <Color {...args}>色</Color>;
  },
  args: {
    id: 'some-id',
    },
};

export const WithCustomDataAttribute: Story = {
    render: (args) => {
        return <Color {...args}>色</Color>;
    },
    args: {
        'data-test-id': 'some-id',
    },
};