import { StoryObj, Meta } from '@storybook/react';
import { useState, ComponentProps } from 'react';
import { ActionModal } from './ActionModal';

export default {
  title: 'Modal/ActionModal',
  component: ActionModal,
} satisfies Meta<typeof ActionModal>;

type Story = StoryObj<typeof ActionModal>;

const defaultArgs: Partial<ComponentProps<typeof ActionModal>> = {
  header: 'モーダル',
  overlayOpacity: 'normal',
  primaryActionLabel: '回答結果を見る',
  fixedHeight: false,
  isStatic: false,
};

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          Default
        </ActionModal>
      </>
    );
  },
  args: defaultArgs,
};

export const Secondary: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal
          {...args}
          open={open}
          onPrimaryAction={() => setOpen(false)}
          secondaryActionLabel={'このまま回答を続ける'}
          onSecondaryAction={() => setOpen(false)}
          onClose={() => setOpen(false)}
        >
          Default
        </ActionModal>
      </>
    );
  },
  args: defaultArgs,
};

export const FixedHeight: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Default</p>
        </ActionModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    fixedHeight: true,
  },
};

export const Customized: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Default</p>
        </ActionModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    header: '削除します',
    primaryActionColor: 'alert',
    overlayOpacity: 'darker',
    closeLabel: 'キャンセル',
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
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Default</p>
        </ActionModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    [`data-test-id`]: 'some-id',
  },
};

export const Id: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Default</p>
        </ActionModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    id: 'dialog-id',
  },
};

export const CustomHeading: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const headingId = 'heading-id';

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal
          {...args}
          open={open}
          onPrimaryAction={() => setOpen(false)}
          onClose={() => setOpen(false)}
          ariaLabelledby={headingId}
        >
          <h2 id={headingId}>Custom Heading</h2>
          <p>Default</p>
        </ActionModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
    header: undefined,
  },
};
