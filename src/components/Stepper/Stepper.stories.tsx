import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Stepper } from './Stepper';

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: 'ステップ形式のナビゲーションコンポーネント。進行状況を視覚的に表示します。',
      },
    },
  },
} satisfies Meta<typeof Stepper>;

type Story = StoryObj<typeof Stepper>;

const defaultArgs = {
  currentStep: 1,
} satisfies Partial<ComponentProps<typeof Stepper>>;

export const Default: Story = {
  render: (args) => (
    <Stepper {...args} steps={[{ label: 'ステップ1' }, { label: 'ステップ2' }, { label: 'ステップ3' }]} />
  ),
  args: defaultArgs,
};

export const ThreeSteps: Story = {
  render: () => {
    const steps = [{ label: 'ステップ1' }, { label: 'ステップ2' }, { label: 'ステップ3' }];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h2>Current Step: 0</h2>
          <Stepper currentStep={0} steps={steps} />
        </div>

        <div>
          <h2>Current Step: 1</h2>
          <Stepper currentStep={1} steps={steps} />
        </div>

        <div>
          <h2>Current Step: 2</h2>
          <Stepper currentStep={2} steps={steps} />
        </div>
      </div>
    );
  },
};

export const FourSteps: Story = {
  render: () => (
    <Stepper
      currentStep={1}
      steps={[
        { label: '知りたいこと' },
        { label: '受診について' },
        { label: '他に知りたいこと' },
        { label: '確認と入力' },
      ]}
    />
  ),
};

export const FiveSteps: Story = {
  render: () => (
    <Stepper
      currentStep={2}
      steps={[
        { label: 'ステップ1' },
        { label: 'ステップ2' },
        { label: 'ステップ3' },
        { label: 'ステップ4' },
        { label: 'ステップ5' },
      ]}
    />
  ),
};

export const LongLabels: Story = {
  render: () => (
    <Stepper
      currentStep={1}
      steps={[
        { label: 'ステップステップステップステップステップステップ' },
        { label: '改行\nも\nできます' },
        { label: 'ステップステップステップステップステップステップステップステップステップステップ' },
      ]}
    />
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <Stepper
      currentStep={1}
      steps={[
        { label: 'ホーム', icon: 'HomeOutlineIcon' },
        { label: '設定', icon: 'SetupIcon' },
        { label: '完了', icon: 'CheckAIcon', doneIcon: 'CheckAIcon' },
      ]}
    />
  ),
};

export const ProgressStates: Story = {
  render: () => {
    const steps = [{ label: 'ステップ1' }, { label: 'ステップ2' }, { label: 'ステップ3' }];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3>Step 0 (開始)</h3>
          <Stepper currentStep={0} steps={steps} />
        </div>

        <div>
          <h3>Step 1 (進行中)</h3>
          <Stepper currentStep={1} steps={steps} />
        </div>

        <div>
          <h3>Step 2 (完了間近)</h3>
          <Stepper currentStep={2} steps={steps} />
        </div>
      </div>
    );
  },
};

export const WithMargins: Story = {
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: '16px' }}>
      <Stepper
        m="lg"
        currentStep={1}
        steps={[{ label: 'ステップ1' }, { label: 'ステップ2' }, { label: 'ステップ3' }]}
      />
    </div>
  ),
};

export const DifferentWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ width: '280px', border: '1px solid #eee', padding: '16px' }}>
        <h4>幅280px</h4>
        <Stepper currentStep={1} steps={[{ label: 'ステップ' }, { label: 'ステップ' }, { label: 'ステップ' }]} />
      </div>

      <div style={{ width: '440px', border: '1px solid #eee', padding: '16px' }}>
        <h4>幅440px</h4>
        <Stepper
          currentStep={1}
          steps={[
            { label: '知りたいこと' },
            { label: '受診について' },
            { label: '他に知りたいこと' },
            { label: '確認と入力' },
          ]}
        />
      </div>

      <div style={{ width: '640px', border: '1px solid #eee', padding: '16px' }}>
        <h4>幅640px</h4>
        <Stepper
          currentStep={1}
          steps={[
            { label: 'ステップステップステップステップステップステップ' },
            { label: '改行\nも\nできます' },
            { label: 'ステップステップステップステップステップステップステップステップステップステップ' },
          ]}
        />
      </div>
    </div>
  ),
};
