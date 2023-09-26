import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { ActionHalfModal } from '..';

export default {
  component: ActionHalfModal,
} as Meta<typeof ActionHalfModal>;

const defaultArgs: ComponentProps<typeof ActionHalfModal> = {
  open: false,
  header: 'モーダル',
  onClose: () => {
    /* noop */
  },
  children: 'body',
};

export const Default: StoryObj<typeof ActionHalfModal> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => <ActionHalfModal {...args} />,
  args: defaultArgs,
};
