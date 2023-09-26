import { StoryObj, Meta } from '@storybook/react';
import { useState, ComponentProps } from 'react';
import { MessageModal } from '../';

export default {
  component: MessageModal,
} as Meta<typeof MessageModal>;

const defaultArgs: Partial<ComponentProps<typeof MessageModal>> = {
  overlayOpacity: 'normal',
  isStatic: false,
  fixedHeight: false,
};

export const Default: StoryObj<typeof MessageModal> = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)}>
          <p>Default</p>
        </MessageModal>
      </>
    );
  },
  args: defaultArgs,
};
