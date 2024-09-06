import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';
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

const LongBody = () => (
  <>
    <p style={{ margin: 0 }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
    </p>
    <p style={{ margin: '12px 0 0' }}>
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

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <LongBody />
        </ActionModal>
      </>
    );
  },
  args: defaultArgs,
};

export const Secondary: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

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
          <LongBody />
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
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
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
          <p>Customized</p>
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

export const WithId: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <LongBody />
        </ActionModal>
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
        <ActionModal
          {...args}
          open={open}
          onPrimaryAction={() => setOpen(false)}
          onClose={() => setOpen(false)}
          ariaLabelledby={headerId}
        >
          <h2 id={headerId} style={{ margin: '0 0 12px' }}>
            Custom Heading
          </h2>
          <LongBody />
        </ActionModal>
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
        <ActionModal
          hero={
            <img
              src="/images/placeholder.svg"
              alt="Illustration: Modal"
              style={{ width: '100%', height: 'auto', verticalAlign: 'bottom' }}
              width={560}
              height={315}
            />
          }
          {...args}
          open={open}
          onPrimaryAction={() => setOpen(false)}
          onClose={() => setOpen(false)}
        >
          <p style={{ margin: 0 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </ActionModal>
      </>
    );
  },
  args: {
    ...defaultArgs,
  },
};
