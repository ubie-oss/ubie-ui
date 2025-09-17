import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonCard } from './ButtonCard';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';

export default {
  title: 'Form/ButtonCard',
  component: ButtonCard,
  args: {
    onClick: action('on click'),
    children: '自分',
  },
} satisfies Meta<typeof ButtonCard>;

const defaultArgs = {};

type Story = StoryObj<typeof ButtonCard>;

export const Default: Story = {
  render: (args) => <ButtonCard {...args} />,
  args: defaultArgs,
};

export const WrapText: Story = {
  render: (args) => (
    <Box width="200px">
      <ButtonCard {...args} />
    </Box>
  ),
  args: {
    ...defaultArgs,
    children: '自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分',
  },
};

export const Disabled: Story = {
  render: (args) => <ButtonCard {...args} />,
  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <Flex spacing="xs">
      <ButtonCard {...args} />
      <ButtonCard {...args} />
    </Flex>
  ),
  args: {
    ...defaultArgs,
  },
};
