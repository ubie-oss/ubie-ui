import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { MessageHalfModal } from './MessageHalfModal';

export default {
  title: 'Modal/MessageHalfModal',
  component: MessageHalfModal,
} satisfies Meta<typeof MessageHalfModal>;

type Story = StoryObj<typeof MessageHalfModal>;

const defaultArgs = {
  header: 'モーダル',
  children: 'body',
};

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    const onClose = useCallback(() => {
      setOpen(false);
    }, []);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
      </>
    );
  },
  args: defaultArgs,
};

export const Fullscreen: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const onClose = useCallback(() => {
      setOpen(false);
    }, []);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} fullscreen />
      </>
    );
  },
  args: defaultArgs,
};

export const NoCloseButton: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const onClose = useCallback(() => {
      setOpen(false);
    }, []);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal showClose={false} {...args} open={open} onClose={onClose} />
      </>
    );
  },
  args: defaultArgs,
};

export const WithCustomDataAttribute: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const onClose = useCallback(() => {
      setOpen(false);
    }, []);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
      </>
    );
  },
  args: {
    ...defaultArgs,
    'data-test-id': 'message-half-modal-custom',
  },
};

export const WithId: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const onClose = useCallback(() => {
      setOpen(false);
    }, []);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
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

    const onClose = useCallback(() => {
      setOpen(false);
    }, []);

    const headerId = 'header-id';

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal ariaLabelledby={headerId} {...args} open={open} onClose={onClose}>
          <h2 id={headerId}>Heading</h2>
          <p>Body</p>
        </MessageHalfModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    header: undefined,
  },
};
