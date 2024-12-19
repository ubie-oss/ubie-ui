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
  backgroundColor: 'blue',
} satisfies Partial<ComponentProps<typeof Box>>;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: defaultArgs,
};

export const BackgroundColor: Story = {
  render: (args) => (
    <Stack gap="xs">
      <Box {...args} backgroundColor="blue">
        Blue
      </Box>
      <Box {...args} backgroundColor="blueDarken">
        Blue Darken
      </Box>
      <Box {...args} backgroundColor="blueInverse" textColor="white">
        Blue Inverse
      </Box>
      <Box {...args} backgroundColor="blueInverseDarken" textColor="white">
        Blue Inverse Darken
      </Box>
      <Box {...args} backgroundColor="pink">
        Pink
      </Box>
      <Box {...args} backgroundColor="pinkDarken">
        Pink Darken
      </Box>
      <Box {...args} backgroundColor="pinkInverse" textColor="white">
        Pink Inverse
      </Box>
      <Box {...args} backgroundColor="pinkInverseDarken" textColor="white">
        Pink Inverse Darken
      </Box>
      <Box {...args} backgroundColor="orange">
        Orange
      </Box>
      <Box {...args} backgroundColor="orangeDarken">
        Orange Darken
      </Box>
      <Box {...args} backgroundColor="orangeInverse" textColor="white">
        Orange Inverse
      </Box>
      <Box {...args} backgroundColor="orangeInverseDarken" textColor="white">
        Orange Inverse Darken
      </Box>
      <Box {...args} backgroundColor="purple">
        Purple
      </Box>
      <Box {...args} backgroundColor="purpleDarken">
        Purple Darken
      </Box>
      <Box {...args} backgroundColor="purpleInverse" textColor="white">
        Purple Inverse
      </Box>
      <Box {...args} backgroundColor="purpleInverseDarken" textColor="white">
        Purple Inverse Darken
      </Box>
      <Box {...args} backgroundColor="green">
        Green
      </Box>
      <Box {...args} backgroundColor="greenDarken">
        Green Darken
      </Box>
      <Box {...args} backgroundColor="greenInverse" textColor="white">
        Green Inverse
      </Box>
      <Box {...args} backgroundColor="greenInverseDarken" textColor="white">
        Green Inverse Darken
      </Box>
      <Box {...args} backgroundColor="red">
        Red
      </Box>
      <Box {...args} backgroundColor="redDarken">
        Red Darken
      </Box>
      <Box {...args} backgroundColor="redInverse" textColor="white">
        Red Inverse
      </Box>
      <Box {...args} backgroundColor="redInverseDarken" textColor="white">
        Red Inverse Darken
      </Box>
      <Box {...args} backgroundColor="black">
        Black
      </Box>
      <Box {...args} backgroundColor="blackDarken">
        Black Darken
      </Box>
      <Box {...args} backgroundColor="blackInverse" textColor="white">
        Black Inverse
      </Box>
      <Box {...args} backgroundColor="blackInverseDarken" textColor="white">
        Black Inverse Darken
      </Box>
      <Box {...args} backgroundColor="white" textColor="main">
        White
      </Box>
    </Stack>
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
    <Stack gap="xs">
      <Box {...args} backgroundColor="blue" border="blue">
        Blue Border
      </Box>
      <Box {...args} backgroundColor="blue" border="blueThick">
        Blue Border Thick
      </Box>
      <Box {...args} backgroundColor="pink" border="pink">
        Pink Border
      </Box>
      <Box {...args} backgroundColor="pink" border="pinkThick">
        Pink Border Thick
      </Box>
      <Box {...args} backgroundColor="orange" border="orange">
        Orange Border
      </Box>
      <Box {...args} backgroundColor="orange" border="orangeThick">
        Orange Border Thick
      </Box>
      <Box {...args} backgroundColor="purple" border="purple">
        Purple Border
      </Box>
      <Box {...args} backgroundColor="purple" border="purpleThick">
        Purple Border Thick
      </Box>
      <Box {...args} backgroundColor="green" border="green">
        Green Border
      </Box>
      <Box {...args} backgroundColor="green" border="greenThick">
        Green Border Thick
      </Box>
      <Box {...args} backgroundColor="red" border="red">
        Red Border
      </Box>
      <Box {...args} backgroundColor="red" border="redThick">
        Red Border Thick
      </Box>
      <Box {...args} backgroundColor="black" border="black">
        Border Black
      </Box>
      <Box {...args} backgroundColor="black" border="blackThick">
        Border Black Thick
      </Box>
    </Stack>
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

      <Box {...defaultArgs} width="100%">
        Width 100%
      </Box>

      <Box {...defaultArgs} maxWidth="500px">
        Max Width 500px
      </Box>

      <Box {...defaultArgs} minWidth="500px">
        Min Width 500px
      </Box>

      <Box {...defaultArgs}>Not Width Full</Box>
    </Stack>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Box as="section" pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="blue">
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
        backgroundColor="blue"
        textColor="blue"
        textBold
        textType="body"
        textSize="lg"
        textLeading="narrow"
      >
        <p>Text Bold</p>

        <Box {...args} backgroundColor="black">
          <p>nested</p>
        </Box>

        <Box
          {...args}
          mt="md"
          backgroundColor="black"
          textColor="black"
          textType="body"
          textSize="sm"
          textLeading="narrow"
          textBold={false}
        >
          <p>nested. reset styles</p>
        </Box>
      </Box>

      <Box {...args} backgroundColor="black" mt="xl" textColor="main">
        <p>Color Main</p>
      </Box>
      <Box {...args} backgroundColor="black" mt="md" textColor="sub">
        <p>Color Sub</p>
      </Box>
      <Box {...args} backgroundColor="black" mt="md" textColor="link">
        <p>Color Main</p>
      </Box>
      <Box {...args} backgroundColor="black" mt="md" textColor="linkSub">
        <p>Color Link Sub</p>
      </Box>
      <Box {...args} backgroundColor="black" mt="md" textColor="disabled">
        <p>Color Disabled</p>
      </Box>
      <Box {...args} backgroundColor="blue" mt="md" textColor="blue">
        <p>Color Blue</p>
      </Box>
      <Box {...args} backgroundColor="pink" mt="md" textColor="pink">
        <p>Color Pink</p>
      </Box>
      <Box {...args} backgroundColor="orange" mt="md" textColor="orange">
        <p>Color Orange</p>
      </Box>
      <Box {...args} backgroundColor="purple" mt="md" textColor="purple">
        <p>Color Purple</p>
      </Box>
      <Box {...args} backgroundColor="green" mt="md" textColor="green">
        <p>Color Green</p>
      </Box>
      <Box {...args} backgroundColor="red" mt="md" textColor="red">
        <p>Color Red</p>
      </Box>
      <Box {...args} backgroundColor="black" mt="md" textColor="black">
        <p>Color Black</p>
      </Box>
      <Box {...args} mt="xl" textType="body">
        <p>Body size & leading default value</p>
      </Box>

      <Box {...args} mt="xl" textType="body" textSize="xs" textLeading="default">
        <p>Body Extra Small Default</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="xs" textLeading="narrow">
        <p>Body Extra Small Narrow</p>
      </Box>

      <Box {...args} mt="xl" textType="body" textSize="sm" textLeading="default">
        <p>Body Small Default</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="sm" textLeading="narrow">
        <p>Body Small Narrow</p>
      </Box>

      <Box {...args} mt="xl" textType="body" textSize="md" textLeading="default">
        <p>Body Medium Default</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="md" textLeading="narrow">
        <p>Body Medium Narrow</p>
      </Box>

      <Box {...args} mt="xl" textType="body" textSize="lg" textLeading="default">
        <p>Body Large Default</p>
      </Box>
      <Box {...args} mt="md" textType="body" textSize="lg" textLeading="narrow">
        <p>Body Large Narrow</p>
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
    backgroundColor: 'blueInverse',
    textColor: 'white',
    inline: true,
    p: 'xs',
    m: 'sm',
  },
};
