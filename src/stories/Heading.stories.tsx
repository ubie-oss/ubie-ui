import { Meta, StoryObj } from '@storybook/react';
import { Box, Heading, Stack } from '../';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading size="xxs">xxs: スマートフォン問診</Heading>
      <Heading size="xxs">
        xxs: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="xs">xs: スマートフォン問診</Heading>
      <Heading size="xs">
        xs: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="sm">sm: スマートフォン問診</Heading>
      <Heading size="sm">
        sm: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="md">md: スマートフォン問診</Heading>
      <Heading size="md">
        md: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="lg">lg: スマートフォン問診</Heading>
      <Heading size="lg">
        lg: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="xl">xl: スマートフォン問診</Heading>
      <Heading size="xl">
        xl: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
    </Stack>
  ),
};

export const Element: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        p
      </Heading>
      <Heading as="h1" color="main" size="md" id="test-id">
        h1 with id attribute
      </Heading>
      <Heading as="h2" color="main" size="md">
        h2
      </Heading>
      <Heading as="h3" color="main" size="md">
        h3
      </Heading>
      <Heading as="h4" color="main" size="md">
        h4
      </Heading>
      <Heading as="h5" color="main" size="md">
        h5
      </Heading>
      <Heading as="h6" color="main" size="md">
        h6
      </Heading>
      {/* markuplint-disable-next-line */}
      <Heading as="label" color="main" size="md" htmlFor="some-input-id">
        label
      </Heading>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        スマートフォン問診（main）
      </Heading>

      <div style={{ backgroundColor: 'var(--color-blue-600)', padding: 'var(--size-spacing-xs)' }}>
        <Heading as="p" color="white" size="md">
          スマートフォン問診（white）
        </Heading>
      </div>
    </Stack>
  ),
};

export const HasLink: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（main）
      </Heading>

      <div style={{ backgroundColor: 'var(--color-blue-600)', padding: 'var(--size-spacing-xs)' }}>
        <Heading as="p" color="white" size="md">
          <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（white）
        </Heading>
      </div>
    </Stack>
  ),
};

export const LeadingBorder: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="p" leadingBorder size="xxs">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="xxs">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="xs">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="xs">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="sm">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="sm">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="md">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="md">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="lg">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="lg">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="xl">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="xl">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
    </Stack>
  ),
};

export const TextAlign: Story = {
  render: () => (
    <Stack spacing="md" alignItems="normal">
      <div style={{ textAlign: 'center' }}>
        <Heading as="p" size="md">
          スマートフォン問診（inherit）
        </Heading>
      </div>

      <Heading as="p" size="md" textAlign="left">
        スマートフォン問診（left）
      </Heading>
      <Heading as="p" size="md" textAlign="center">
        スマートフォン問診（center）
      </Heading>
      <Heading as="p" size="md" textAlign="right">
        スマートフォン問診（right）
      </Heading>
    </Stack>
  ),
};

export const Bold: Story = {
  render: () => (
    <Stack spacing="md">
      <Heading as="h1" color="main" size="md">
        h1 bold
      </Heading>
      <Heading as="h1" color="main" size="md" bold={false}>
        h1 normal
      </Heading>
    </Stack>
  ),
};

export const CustomDataAttribute: Story = {
  render: (args) => <Heading {...args}>Heading with Custom Data Attribute</Heading>,
  args: {
    [`data-test-id`]: 'heading-custom-attribute',
  },
};

export const TextWrap: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Stack spacing="md">
        <Box border="black">
          <Heading>
            私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111
          </Heading>
        </Box>

        <div lang="en">
          <Box border="black">
            <Heading>
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              booooooooooooooooooooooooooooooooooooooooooooook.
            </Heading>
          </Box>
        </div>

        <div>
          <p>
            <code>noWrap</code>
          </p>

          <Box border="black">
            <Heading noWrap>
              私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111
            </Heading>
          </Box>
        </div>

        <div>
          <p>
            <code>noWrap</code>
          </p>

          <Box border="black">
            <Heading noWrap>
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Heading>
          </Box>
        </div>
      </Stack>
    </div>
  ),
};
