import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import type { ComponentProps } from 'react';

export default {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

const defaultArgs = {
  header: '夏目漱石「私の個人主義」',
  children:
    '何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。',
  description: '出版日：1978年8月8日',
} satisfies Partial<ComponentProps<typeof Accordion>>;

export const Default: Story = {
  render: (args) => <Accordion {...args}></Accordion>,
  args: defaultArgs,
};

export const Small: Story = {
  render: (args) => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    size: 'small',
  },
};

export const CustomDataAttribute: Story = {
  render: (args) => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    ['data-test-id']: 'some-id',
  },
};

export const Id: Story = {
  render: () => (
    <Accordion header="夏目漱石「私の個人主義」" id="wrapper-id" buttonId="button-id">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
  ),
};

export const InitialOpen: Story = {
  render: (args) => <Accordion {...args} />,
  args: {
    ...defaultArgs,
    initialOpen: true,
  },
};
