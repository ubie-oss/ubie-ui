import { StoryObj, Meta } from '@storybook/react';
import { useState, ComponentProps } from 'react';
import { MessageModal } from '../';

const meta: Meta<typeof MessageModal> = {
  title: 'Modal/MessageModal',
  component: MessageModal,
  argTypes: {
    overlayOpacity: {
      options: ['normal', 'darker'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MessageModal>;

const defaultArgs: Partial<ComponentProps<typeof MessageModal>> = {
  header: '',
  overlayOpacity: 'normal',
  isStatic: false,
  fixedHeight: false,
  children: <p>Default</p>,
};

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: defaultArgs,
};

export const WithHeader: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    ...defaultArgs,
    header: 'メッセージ',
  },
};

export const FixedHeight: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    ...defaultArgs,
    fixedHeight: true,
  },
};

export const OverlayDarker: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} fixedHeight />
      </>
    );
  },
  args: {
    ...defaultArgs,
    overlayOpacity: 'darker',
  },
};
