import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';
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

export default meta;

type Story = StoryObj<typeof MessageModal>;

const defaultArgs: Partial<ComponentProps<typeof MessageModal>> = {
  header: 'メッセージ',
  overlayOpacity: 'normal',
  isStatic: false,
  fixedHeight: false,
  children: <LongBody />,
  stickyHeader: false,
  stickyFooter: false,
} as const satisfies Partial<ComponentProps<typeof MessageModal>>;

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
  args: { ...defaultArgs, fixedHeight: true },
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
          <LongBody />
        </MessageModal>
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
    hero: (
      <img
        src="/images/placeholder.svg"
        alt="Illustration: Modal"
        style={{ width: '100%', height: 'auto', verticalAlign: 'bottom' }}
        width={560}
        height={315}
      />
    ),
  },
};

export const StickyHeaderAndFooter: Story = {
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
    stickyHeader: true,
    stickyFooter: true,
  },
};
