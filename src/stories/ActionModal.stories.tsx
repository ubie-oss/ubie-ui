import { StoryObj, Meta } from '@storybook/react';
import { useState, ComponentProps } from 'react';
import { ActionModal } from '../';

export default {
  component: ActionModal,
} as Meta<typeof ActionModal>;

const defaultArgs: Partial<ComponentProps<typeof ActionModal>> = {
  header: 'モーダル',
  overlayOpacity: 'normal',
  primaryActionLabel: '回答結果を見る',
  fixedHeight: false,
  isStatic: false,
};

export const Default: StoryObj<typeof ActionModal> = {
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

export const Secondary: StoryObj<typeof ActionModal> = {
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
