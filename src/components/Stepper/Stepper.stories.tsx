import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Stepper } from './Stepper';
import { StepperItem } from './StepperItem';

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
    <Stepper {...args}>
      <StepperItem label="ステップ1" />
      <StepperItem label="ステップ2" />
      <StepperItem label="ステップ3" />
    </Stepper>
  ),
  args: defaultArgs,
};

export const ThreeSteps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h2>Current Step: 0</h2>
        <Stepper currentStep={0}>
          <StepperItem label="ステップ1" />
          <StepperItem label="ステップ2" />
          <StepperItem label="ステップ3" />
        </Stepper>
      </div>

      <div>
        <h2>Current Step: 1</h2>
        <Stepper currentStep={1}>
          <StepperItem label="ステップ1" />
          <StepperItem label="ステップ2" />
          <StepperItem label="ステップ3" />
        </Stepper>
      </div>

      <div>
        <h2>Current Step: 2</h2>
        <Stepper currentStep={2}>
          <StepperItem label="ステップ1" />
          <StepperItem label="ステップ2" />
          <StepperItem label="ステップ3" />
        </Stepper>
      </div>
    </div>
  ),
};

export const FourSteps: Story = {
  render: () => (
    <Stepper currentStep={1}>
      <StepperItem label="知りたいこと" />
      <StepperItem label="受診について" />
      <StepperItem label="他に知りたいこと" />
      <StepperItem label="確認と入力" />
    </Stepper>
  ),
};

export const FiveSteps: Story = {
  render: () => (
    <Stepper currentStep={2}>
      <StepperItem label="ステップ1" />
      <StepperItem label="ステップ2" />
      <StepperItem label="ステップ3" />
      <StepperItem label="ステップ4" />
      <StepperItem label="ステップ5" />
    </Stepper>
  ),
};

export const LongLabels: Story = {
  render: () => (
    <Stepper currentStep={1}>
      <StepperItem label="ステップステップステップステップステップステップ" />
      <StepperItem label="改行\nも\nできます" />
      <StepperItem label="ステップステップステップステップステップステップステップステップステップステップ" />
    </Stepper>
  ),
};

export const CustomIcons: Story = {
  render: () => (
    <Stepper currentStep={1}>
      <StepperItem label="ホーム" icon="HomeOutlineIcon" />
      <StepperItem label="設定" icon="SetupIcon" />
      <StepperItem label="完了" icon="CheckAIcon" doneIcon="CheckAIcon" />
    </Stepper>
  ),
};

export const WithMargins: Story = {
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: '16px' }}>
      <Stepper m="lg" currentStep={1}>
        <StepperItem label="ステップ1" />
        <StepperItem label="ステップ2" />
        <StepperItem label="ステップ3" />
      </Stepper>
    </div>
  ),
};

export const DifferentWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ width: '280px', border: '1px solid #eee', padding: '16px' }}>
        <h4>幅280px</h4>
        <Stepper currentStep={1}>
          <StepperItem label="ステップ" />
          <StepperItem label="ステップ" />
          <StepperItem label="ステップ" />
        </Stepper>
      </div>

      <div style={{ width: '440px', border: '1px solid #eee', padding: '16px' }}>
        <h4>幅440px</h4>
        <Stepper currentStep={1}>
          <StepperItem label="知りたいこと" />
          <StepperItem label="受診について" />
          <StepperItem label="他に知りたいこと" />
          <StepperItem label="確認と入力" />
        </Stepper>
      </div>

      <div style={{ width: '640px', border: '1px solid #eee', padding: '16px' }}>
        <h4>幅640px</h4>
        <Stepper currentStep={1}>
          <StepperItem label="ステップステップステップステップステップステップ" />
          <StepperItem label="改行\nも\nできます" />
          <StepperItem label="ステップステップステップステップステップステップステップステップステップステップ" />
        </Stepper>
      </div>
    </div>
  ),
};
