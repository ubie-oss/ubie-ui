import { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '..';
import type { ComponentProps } from 'react';

export default {
  component: Box,
} satisfies Meta<typeof Box>;

const defaultArgs = {
  children: 'Box',
  pt: 'md',
  pr: 'md',
  pb: 'md',
  pl: 'md',
  radius: 'md',
  backgroundColor: 'primary',
} satisfies Partial<ComponentProps<typeof Box>>;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: defaultArgs,
};

export const BackgroundColor: Story = {
  render: (args) => (
    <div>
      <Box {...args} backgroundColor="primary">
        Primary
      </Box>
      <Box {...args} mt="md" backgroundColor="primaryDarken">
        Primary Darken
      </Box>
      <Box {...args} mt="md" backgroundColor="accent">
        Accent
      </Box>
      <Box {...args} mt="md" backgroundColor="accentDarken">
        Accent Darken
      </Box>
      <Box {...args} mt="md" backgroundColor="alert">
        Alert
      </Box>
      <Box {...args} mt="md" backgroundColor="gray">
        Gray
      </Box>
      <Box {...args} mt="md" backgroundColor="white">
        White
      </Box>
    </div>
  ),
  args: defaultArgs,
};

export const Padding: Story = {
  render: (args) => (
    <div>
      <Box {...args} pt="xxs" pr="xxs" pb="xxs" pl="xxs">
        xxs
      </Box>
      <Box {...args} mt="md" pt="xs" pr="xs" pb="xs" pl="xs">
        xs
      </Box>
      <Box {...args} mt="md" pt="sm" pr="sm" pb="sm" pl="sm">
        sm
      </Box>
      <Box {...args} mt="md" pt="md" pr="md" pb="md" pl="md">
        md
      </Box>
      <Box {...args} mt="md" pt="lg" pr="lg" pb="lg" pl="lg">
        lg
      </Box>
      <Box {...args} mt="md" pt="xl" pr="xl" pb="xl" pl="xl">
        xl
      </Box>
      <Box {...args} mt="md" pt="xxl" pr="xxl" pb="xxl" pl="xxl">
        xxl
      </Box>
    </div>
  ),
  args: defaultArgs,
};

export const Margin: Story = {
  render: (args) => (
    <div>
      <Box {...args} mt="xxs" mr="xxs" mb="xxs" ml="xxs">
        xxs
      </Box>
      <hr />
      <Box {...args} mt="xs" mr="xs" mb="xs" ml="xs">
        xs
      </Box>
      <hr />
      <Box {...args} mt="sm" mr="sm" mb="sm" ml="sm">
        sm
      </Box>
      <hr />
      <Box {...args} mt="md" mr="md" mb="md" ml="md">
        md
      </Box>
      <hr />
      <Box {...args} mt="lg" mr="lg" mb="lg" ml="lg">
        lg
      </Box>
      <hr />
      <Box {...args} mt="xl" mr="xl" mb="xl" ml="xl">
        xl
      </Box>
      <hr />
      <Box {...args} mt="xxl" mr="xxl" mb="xxl" ml="xxl">
        xxl
      </Box>
    </div>
  ),
  args: defaultArgs,
};

export const Radius: Story = {
  render: (args) => (
    <div>
      <Box {...args} pt="md" pr="md" pb="md" pl="md" radius="xs">
        xs
      </Box>
      <Box {...args} mt="md" pt="md" pr="md" pb="md" pl="md" radius="sm">
        sm
      </Box>
      <Box {...args} mt="md" pt="md" pr="md" pb="md" pl="md" radius="md">
        md
      </Box>
      <Box {...args} mt="md" pt="md" pr="md" pb="md" pl="md" radius="lg">
        lg
      </Box>
    </div>
  ),
  args: defaultArgs,
};

export const Border: Story = {
  render: (args) => (
    <div>
      <Box {...args} backgroundColor="white" border="gray">
        Border Gray
      </Box>

      <Box {...args} backgroundColor="white" border="gray">
        Border Gray
      </Box>
      <Box mt="md" {...args} backgroundColor="white" border="grayThick">
        Border Gray Thick
      </Box>
      <Box {...args} mt="md" backgroundColor="white" border="primary">
        Primary Border
      </Box>
      <Box {...args} mt="md" backgroundColor="white" border="primaryThick">
        Primary Border Thick
      </Box>
    </div>
  ),
  args: defaultArgs,
};

export const Width: Story = {
  render: () => (
    <Stack spacing="md">
      <p>
        Flexコンテナの子要素では、デフォルトでは横幅がintrinsic（コンテンツに応じた幅）となります。widthをfullとすることで100%を維持できます。
      </p>
      <Box {...defaultArgs} width="full">
        Width Full
      </Box>

      <Box {...defaultArgs}>Not Width Full</Box>
    </Stack>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Box as="section" pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="primary">
      <h2>Heading</h2>

      <p>body</p>
    </Box>
  ),
};

export const TextVariations: Story = {
  render: (args) => (
    <div>
      <Box
        {...args}
        backgroundColor="gray"
        textColor="primary"
        textBold
        textType="body"
        textSize="lg"
        textLeading="narrow"
      >
        <p>Text Bold</p>

        <Box {...args} backgroundColor="gray">
          <p>nested</p>
        </Box>

        <Box
          {...args}
          mt="md"
          backgroundColor="gray"
          textType="note"
          textSize="lg"
          textLeading="tight"
          textBold={false}
        >
          <p>nested. reset styles</p>
        </Box>
      </Box>

      <Box {...args} backgroundColor="gray" mt="xl" textColor="main">
        <p>Color Main</p>
      </Box>
      <Box {...args} backgroundColor="gray" mt="md" textColor="sub">
        <p>Color Sub</p>
      </Box>
      <Box {...args} backgroundColor="gray" mt="md" textColor="link">
        <p>Color Main</p>
      </Box>
      <Box {...args} backgroundColor="gray" mt="md" textColor="linkSub">
        <p>Color Link Sub</p>
      </Box>
      <Box {...args} backgroundColor="gray" mt="md" textColor="disabled">
        <p>Color Disabled</p>
      </Box>
      <Box {...args} backgroundColor="gray" mt="md" textColor="primary">
        <p>Color Primary</p>
      </Box>
      <Box {...args} backgroundColor="gray" mt="md" textColor="accent">
        <p>Color Accent</p>
      </Box>
      <Box {...args} backgroundColor="gray" mt="md" textColor="alert">
        <p>Color Alert</p>
      </Box>
      <Box {...args} mt="xl" textType="body">
        <p>Body size & leading default value</p>
      </Box>

      <Box {...args} mt="xl" textType="body" textSize="sm" textLeading="default">
        <p>Body Small Default</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="sm" textLeading="narrow">
        <p>Body Small Narrow</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="sm" textLeading="tight">
        <p>Body Small Tight</p>
      </Box>

      <Box {...args} mt="xl" textType="body" textSize="md" textLeading="default">
        <p>Body Medium Default</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="md" textLeading="narrow">
        <p>Body Medium Narrow</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="md" textLeading="tight">
        <p>Body Medium Tight</p>
      </Box>

      <Box {...args} mt="xl" textType="body" textSize="lg" textLeading="default">
        <p>Body Large Default</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="lg" textLeading="narrow">
        <p>Body Large Narrow</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="lg" textLeading="tight">
        <p>Body Large Tight</p>
      </Box>

      <Box {...args} mt="xl" textType="note">
        <p>Note size & leading default value</p>
      </Box>

      <Box {...args} mt="xl" textType="note" textSize="sm" textLeading="default">
        <p>Note Small Default</p>
      </Box>
      <Box {...args} mt="md" textType="note" textSize="sm" textLeading="narrow">
        <p>Note Small Narrow</p>
      </Box>
      <Box {...args} mt="md" textType="note" textSize="sm" textLeading="tight">
        <p>Note Small Tight</p>
      </Box>

      <Box {...args} mt="xl" textType="note" textSize="md" textLeading="default">
        <p>Note Medium Default</p>
      </Box>
      <Box {...args} mt="md" textType="note" textSize="md" textLeading="narrow">
        <p>Note Medium Narrow</p>
      </Box>
      <Box {...args} mt="md" textType="note" textSize="md" textLeading="tight">
        <p>Note Medium Tight</p>
      </Box>

      <Box {...args} mt="xl" textType="note" textSize="lg" textLeading="default">
        <p>Note Large Default</p>
      </Box>
      <Box {...args} mt="md" textType="note" textSize="lg" textLeading="narrow">
        <p>Note Large Narrow</p>
      </Box>
      <Box {...args} mt="md" textType="note" textSize="lg" textLeading="tight">
        <p>Note Large Tight</p>
      </Box>

      <Box {...defaultArgs} mt="xl" textAlign="left">
        <p>Text Left</p>
      </Box>
      <Box {...defaultArgs} mt="md" textAlign="center">
        <p>Text Center</p>
      </Box>
      <Box {...defaultArgs} mt="md" textAlign="right">
        <p>Text Right</p>
      </Box>
      <div style={{ textAlign: 'center' }}>
        <Box {...defaultArgs} mt="md">
          <p>Inherit(undefined)</p>
        </Box>
      </div>
    </div>
  ),
  args: defaultArgs,
};

export const CustomDataAttribute: Story = {
  render: (args) => <Box {...args} />,
  args: {
    ['data-test-id']: 'some-test',
    ...defaultArgs,
  },
};

export const TextWrap: Story = {
  render: (args) => (
    <div style={{ width: 400 }}>
      <Stack spacing="md">
        <Box {...args}>
          <p>
            私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111
          </p>
          <p>
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen
            booooooooooooooooooooooooooooooooooooooooooooook.
          </p>
        </Box>

        <Box {...args} textNoWrap>
          <p>noWrap</p>
          <p>
            私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111
          </p>
          <p>
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen
            booooooooooooooooooooooooooooooooooooooooooooook.
          </p>
        </Box>
      </Stack>
    </div>
  ),
  args: {
    ...defaultArgs,
  },
};

export const Inline: Story = {
  render: (args) => (
    <p>
      文章文章文章
      <Box {...args} inline>
        インライン
      </Box>
      文章文章文章
    </p>
  ),
  args: {
    ...defaultArgs,
    as: 'span',
    backgroundColor: 'primary',
    inline: true,
    p: 'xs',
    m: 'sm',
  },
};
