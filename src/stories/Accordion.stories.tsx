import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '..';

export default {
  component: Accordion,
} as Meta<typeof Accordion>;

export const Default: StoryObj<typeof Accordion> = {
  render: () => (
    <Accordion header="夏目漱石「私の個人主義」">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
  ),
};
