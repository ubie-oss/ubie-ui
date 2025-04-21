import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Stepper } from './Stepper';

export default {
  component: Stepper,
} satisfies Meta<typeof Stepper>;

const defaultArgs = {
  current: 1,
} as const satisfies Partial<ComponentProps<typeof Stepper>>;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: (args) => <Stepper {...args} />,
  args: {
    ...defaultArgs,
    items: [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }],
  },
};

export const SpecifyIcons: Story = {
  render: (args) => <Stepper {...args} />,
  args: {
    ...defaultArgs,
    items: [
      { icon: 'MedicalFormIcon', label: '知りたいこと' },
      { icon: 'HospitalIcon', label: '受信について' },
      { icon: 'HelpIcon', label: '他に知りたいこと' },
      { icon: 'EditIcon', label: '確認と入力' },
    ],
  },
};

export const SpecifyIconsIncludingDone: Story = {
  render: (args) => <Stepper {...args} />,
  args: {
    ...defaultArgs,
    doneIcon: 'CheckBFillIcon',
    items: [
      { icon: 'MedicalFormIcon', label: '知りたいこと' },
      { icon: 'HospitalIcon', label: '受信について' },
      {
        icon: 'HelpIcon',
        label: (
          <>
            他に
            <br />
            知りたいこと
          </>
        ),
      },
      { icon: 'EditIcon', label: '確認と入力' },
    ],
  },
};
