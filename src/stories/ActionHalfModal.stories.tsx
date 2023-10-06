import { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';
import { ActionHalfModal } from '..';

export default {
  title: 'Modal/ActionHalfModal',
  component: ActionHalfModal,
} as Meta<typeof ActionHalfModal>;

type Story = StoryObj<typeof ActionHalfModal>;

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
  args: defaultArgs,
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
