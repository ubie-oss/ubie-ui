import { Meta, StoryObj } from '@storybook/react';
import { Pre } from './Pre';
import { Box } from '../Box/Box';

export default {
  title: 'typography/Pre',
  component: Pre,
} satisfies Meta<typeof Pre>;

type Story = StoryObj<typeof Pre>;

const defaultArgs = {
  children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
};

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 500 }}>
      <Box border="gray" p="md">
        <Pre {...args} />
      </Box>
    </div>
  ),
  args: defaultArgs,
};

export const WhiteSpacePre: Story = {
  render: (args) => (
    <div style={{ width: 500 }}>
      <Box border="gray" p="md">
        <Pre {...args} />
      </Box>
    </div>
  ),
  args: {
    ...defaultArgs,
    whiteSpace: 'pre',
  },
};

export const PreWrap: Story = {
  render: (args) => (
    <div style={{ width: 500 }}>
      <Box border="gray" p="md">
        <Pre {...args} />
      </Box>
    </div>
  ),
  args: {
    ...defaultArgs,
    whiteSpace: 'pre-wrap',
  },
};

export const Inline: Story = {
  render: (args) => (
    <p>
      Text
      <Pre {...args} />
      Text
    </p>
  ),
  args: {
    ...defaultArgs,
    children: `Lorem Ipsum
is simply
dummy text
of the
printing and
typesetting industry.`,
    inline: true,
  },
};
