import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { ActionHalfModal } from './ActionHalfModal';

export default {
  title: 'Modal/ActionHalfModal',
  component: ActionHalfModal,
} satisfies Meta<typeof ActionHalfModal>;

type Story = StoryObj<typeof ActionHalfModal>;

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
        <ActionHalfModal
          primaryActionLabel="アクション"
          onPrimaryAction={onClose}
          {...args}
          open={open}
          onClose={onClose}
        />
      </>
    );
  },
  args: defaultArgs,
};

export const Secondary: Story = {
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
        <ActionHalfModal
          primaryActionLabel="アクション1"
          onPrimaryAction={onClose}
          secondaryActionLabel="アクション2"
          onSecondaryAction={onClose}
          {...args}
          open={open}
          onClose={onClose}
        />
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
        <ActionHalfModal {...args} open={open} onClose={onClose} fullscreen />
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
        <ActionHalfModal
          onPrimaryAction={onClose}
          primaryActionLabel="確認"
          showClose={false}
          {...args}
          open={open}
          onClose={onClose}
        />
      </>
    );
  },
  args: {
    ...defaultArgs,
    [`data-test-id`]: 'some-id',
  },
};

export const Customized: Story = {
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
        <ActionHalfModal
          header="削除します"
          primaryActionColor="alert"
          primaryActionLabel="削除"
          onPrimaryAction={onClose}
          overlayOpacity="darker"
          closeLabel="キャンセル"
          {...args}
          open={open}
          onClose={onClose}
        />
      </>
    );
  },
  args: defaultArgs,
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
        <ActionHalfModal
          {...args}
          data-test-id="some-id"
          primaryActionLabel="アクション"
          onPrimaryAction={onClose}
          open={open}
          onClose={onClose}
        />
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
        <ActionHalfModal
          ariaLabelledby={headerId}
          primaryActionLabel="Action"
          onPrimaryAction={onClose}
          {...args}
          open={open}
          onClose={onClose}
        >
          <h2 id={headerId}>Header</h2>
          <LongBody />
        </ActionHalfModal>
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

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal
          hero={
            <img
              src="/images/placeholder.svg"
              alt="Illustration: Modal"
              style={{ width: '100%', height: 'auto', verticalAlign: 'bottom' }}
            />
          }
          primaryActionLabel="Action"
          onPrimaryAction={onClose}
          {...args}
          open={open}
          onClose={onClose}
        >
          <p>Content</p>
        </ActionHalfModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
  },
};

export const WithHeroAndFullScreen: Story = {
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
        <ActionHalfModal primaryActionLabel="Action" onPrimaryAction={onClose} {...args} open={open} onClose={onClose}>
          <p>Content</p>
        </ActionHalfModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    fullscreen: true,
    hero: (
      <img
        src="/images/placeholder.svg"
        alt="Illustration: Modal"
        style={{ width: '100%', height: 'auto', verticalAlign: 'bottom' }}
      />
    ),
  },
};
