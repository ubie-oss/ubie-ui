import { Meta, StoryObj } from '@storybook/react';
import { ComponentPropsWithoutRef } from 'react';
import { Divider } from './Divider';
import { Stack } from '../Stack/Stack';

export default {
  component: Divider,
} satisfies Meta<typeof Divider>;

type Props = ComponentPropsWithoutRef<typeof Divider>;

const defaultArgs: Props = {
  border: 'black',
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
        <Divider border="blue" />
        <Divider border="blueThick" />
        <Divider border="blueDarken" />
        <Divider border="blueDarkenThick" />
        <Divider border="pink" />
        <Divider border="pinkThick" />
        <Divider border="pinkDarken" />
        <Divider border="pinkDarkenThick" />
        <Divider border="orange" />
        <Divider border="orangeThick" />
        <Divider border="orangeDarken" />
        <Divider border="orangeDarkenThick" />
        <Divider border="purple" />
        <Divider border="purpleThick" />
        <Divider border="purpleDarken" />
        <Divider border="purpleDarkenThick" />
        <Divider border="green" />
        <Divider border="greenThick" />
        <Divider border="greenDarken" />
        <Divider border="greenDarkenThick" />
        <Divider border="red" />
        <Divider border="redThick" />
        <Divider border="redDarken" />
        <Divider border="redDarkenThick" />
        <Divider border="black" />
        <Divider border="blackThick" />
        <Divider border="blackDarken" />
        <Divider border="blackDarkenThick" />
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
