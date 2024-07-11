import { Meta, StoryObj } from '@storybook/react';
import { ComponentPropsWithoutRef } from 'react';
import { Divider } from './Divider';
import { Stack } from '../Stack/Stack';

export default {
  component: Divider,
} satisfies Meta<typeof Divider>;

type Props = ComponentPropsWithoutRef<typeof Divider>;

const defaultArgs: Props = {
  border: 'gray',
};

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: (args) => <Divider {...args} />,
  args: defaultArgs,
};

export const BorderVariants: Story = {
  render: () => {
    return (
      <Stack spacing="md">
        <Divider border="gray" />
        <Divider border="grayThick" />
        <Divider border="primary" />
        <Divider border="primaryThick" />
      </Stack>
    );
  },
};

export const Margins: Story = {
  render: (args) => <Divider {...args} />,
  args: {
    ...defaultArgs,
    mt: 'md',
    mr: 'lg',
    mb: 'xl',
    ml: 'xxl',
  },
};

export const Width: Story = {
  render: (args) => <Divider {...args} />,
  args: {
    ...defaultArgs,
    width: '50%',
  },
};
