import { StoryObj, Meta } from '@storybook/react';
import { useState, ComponentProps } from 'react';
import { MessageModal } from './MessageModal';

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
  header: 'メッセージ',
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
  args: {
    ...defaultArgs,
    header: 'メッセージ',
  },
};

export const FixedHeight: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

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

export const OverlayDarker: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

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

export const CustomDataAttribute: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

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
    'data-test-id': 'message-modal-custom',
  },
};

export const WithId: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

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
    id: 'dialog-id',
  },
};

export const CustomHeader: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const headerId = 'header-id';

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal ariaLabelledby={headerId} {...args} open={open} onClose={() => setOpen(false)}>
          <h2 id={headerId}>Heading</h2>
          <p>Body</p>
        </MessageModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    header: undefined,
  },
};
