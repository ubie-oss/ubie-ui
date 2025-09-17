import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '..';

export default {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion header="夏目漱石「私の個人主義」">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
  ),
};

export const Small: Story = {
  render: () => (
    <Accordion header="夏目漱石「私の個人主義」" size="small">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
  ),
};

export const WithOnClick: Story = {
  render: () => (
    <Accordion header="クリック時のイベントハンドラ付き" onClick={() => alert('アコーディオンが開閉されました！')}>
      このアコーディオンを開閉するとアラートが表示されます。
    </Accordion>
  ),
};
