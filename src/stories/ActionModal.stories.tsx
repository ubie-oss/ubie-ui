import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState, ComponentProps } from 'react';
import { ActionModal } from '../';

export default {
  title: 'Component/Feedback/ActionModal',
  component: ActionModal,
  argTypes: {
    overlayOpacity: {
      control: { type: 'select' },
      options: ['normal', 'darker'],
    },
  },
} as ComponentMeta<typeof ActionModal>;

const defaultArgs: Partial<ComponentProps<typeof ActionModal>> = {
  header: 'モーダル',
  overlayOpacity: 'normal',
  primaryActionLabel: '回答結果を見る',
  fixedHeight: false,
  isStatic: false,
};

const Template: ComponentStory<typeof ActionModal> = (args) => {
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
};

export const Default = Template.bind({});
Default.args = defaultArgs;
Default.storyName = '';

const TemplateSecondary: ComponentStory<typeof ActionModal> = (args) => {
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
};

export const ShowSecondary = TemplateSecondary.bind({});
ShowSecondary.args = defaultArgs;
ShowSecondary.storyName = 'Show secondary button';
