import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { MessageHalfModal } from './MessageHalfModal';

export default {
  title: 'Modal/MessageHalfModal',
  component: MessageHalfModal,
} satisfies Meta<typeof MessageHalfModal>;

type Story = StoryObj<typeof MessageHalfModal>;

const LongBody = () => (
  <>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
    </p>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
      literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
      from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by
      Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
      The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
    </p>
  </>
);

const defaultArgs = {
  header: 'モーダル',
  children: <LongBody />,
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
          <LongBody />
        </MessageHalfModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    header: undefined,
  },
};

export const WithHero: Story = {
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
        <MessageHalfModal
          hero={
            <img
              src="/images/placeholder.svg"
              alt="Illustration: Modal"
              style={{ width: '100%', height: 'auto', verticalAlign: 'bottom' }}
            />
          }
          ariaLabelledby={headerId}
          {...args}
          open={open}
          onClose={onClose}
        >
          <h2 id={headerId}>Heading</h2>
          <LongBody />
        </MessageHalfModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    header: undefined,
  },
};
